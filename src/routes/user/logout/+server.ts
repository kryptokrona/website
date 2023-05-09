import type { RequestHandler } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ cookies }) => {
  console.log('LOGOUT ME PLEASE DADDY');
  cookies.delete('session', {path: '/'})

  throw redirect(303, "/")
}