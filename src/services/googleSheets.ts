export const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwZl2tpJAFiSa2IJbnKHy5-999GWXz4_r-5RvXko-9CYJi1NRX2NkTaLw16oWVG2pA6NA/exec';

export interface CreatorSubmissionPayload {
  formType: 'creator';
  'Submission Date & Time': string;
  'Full Name': string;
  'Instagram Username': string;
  'Phone Number (WhatsApp)': string;
  'Email Address': string;
  'Primary City': string;
  'Primary Creator Category': string;
  'Instagram Followers': string;
  'Average Reel Views': string;
  'Instagram Profile URL': string;
  'Languages Spoken / Captions': string;
  'Preferred Collaboration Cities': string;
  // Common fallback keys for resilient backend mapping
  fullName?: string;
  instagramUsername?: string;
  phone?: string;
  email?: string;
  city?: string;
  category?: string;
  followers?: string;
  views?: string;
  profileUrl?: string;
  languages?: string;
  preferredCities?: string;
}

export interface RestaurantSubmissionPayload {
  formType: 'restaurant';
  'Submission Date & Time': string;
  'Restaurant Name': string;
  'Owner / Contact Person': string;
  'Phone Number': string;
  'Email Address': string;
  'City': string;
  'Instagram Handle': string;
  'Restaurant Website': string;
  'Number of Locations': string;
  'Monthly Marketing Budget': string;
  'Looking For': string;
  // Common fallback keys for resilient backend mapping
  restaurantName?: string;
  contactPerson?: string;
  phone?: string;
  email?: string;
  city?: string;
  instagramHandle?: string;
  website?: string;
  locationsCount?: string;
  monthlyBudget?: string;
  lookingFor?: string;
  goals?: string;
}

/**
 * Submits form data to the Google Apps Script Web App endpoint.
 * Works seamlessly across local development, AI Studio preview, and production Netlify.
 */
export async function submitToGoogleSheets(
  payload: CreatorSubmissionPayload | RestaurantSubmissionPayload
): Promise<{ success: boolean; message?: string }> {
  // Construct URLSearchParams body with serialized data parameter and individual keys
  const body = new URLSearchParams();
  body.append('data', JSON.stringify(payload));
  body.append('formType', payload.formType);
  for (const [key, value] of Object.entries(payload)) {
    if (key !== 'formType' && typeof value === 'string') {
      body.append(key, value);
    }
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      body: body
    });

    if (response.ok) {
      const text = await response.text();
      try {
        const data = JSON.parse(text);
        if (data && data.success === false) {
          throw new Error(data.error || 'Submission could not be completed. Please try again.');
        }
        return { success: true, message: data?.message };
      } catch (parseErr: any) {
        // If response is not JSON, but HTTP 200, submission completed
        if (parseErr.message && !parseErr.message.includes('JSON')) {
          throw parseErr;
        }
        return { success: true };
      }
    } else {
      throw new Error(`Server returned status ${response.status}. Please try again.`);
    }
  } catch (error: any) {
    // If browser CORS restrictions or extensions block reading the redirect response on cross-origin domains like Netlify,
    // dispatch via no-cors fallback mode so the payload reaches Google Apps Script reliably.
    if (
      error.name === 'TypeError' ||
      error.message?.includes('Failed to fetch') ||
      error.message?.includes('NetworkError')
    ) {
      try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: body
        });
        return { success: true };
      } catch (fallbackErr: any) {
        throw new Error(fallbackErr.message || 'Network error occurred. Please check your connection.');
      }
    }

    throw error;
  }
}
