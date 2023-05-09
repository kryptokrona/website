import {Directus} from '@directus/sdk';
import {DIRECTUS_STATIC_TOKEN, VITE_DIRECTUS_URL} from "$env/static/private";

const directus = new Directus(VITE_DIRECTUS_URL);

let authed = false

export async function getDirectusClient() {
  try {
    if (DIRECTUS_STATIC_TOKEN && !authed) {
      await directus.auth.static(DIRECTUS_STATIC_TOKEN)
    } else {
      await directus.auth
        .refresh()
        .then(() => authed = true)
        .catch((e) => {
          console.log(e);
        });
    }
  } catch (err: any) {
    if (err.parent.code === 'ECONNREFUSED') {
      console.error(
        'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
      );
    }
  }
  return directus;
}