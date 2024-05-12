import type { RequestHandler } from "./$types";

const emails = [
  "lukas.nyberg@gmail.com"
].map(email => email.toLowerCase());

export const GET: RequestHandler = async ({ url }) => {
  const emailToVerify = url.searchParams.get("email");

  if (!emailToVerify) {
    return new Response(JSON.stringify({ error: "Please add email parameter to URL, e.g., https://kryptokrona.org/api/verify?email=john.smith@mail.com" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const normalizedEmail = emailToVerify.toLowerCase();

  const isVerified = emails.includes(normalizedEmail);

  if (isVerified) {
    return new Response(JSON.stringify({ message: "User is verified" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } else {
    return new Response(JSON.stringify({ error: "User is not verified" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }
};
