import type { RequestHandler } from './$types';

const users = [
  {
    email: 'lukas.nyberg@gmail.com',
    telegram: 'luknyb',
    discord: 'luknyb'
  }
];

export const GET: RequestHandler = async ({ url }) => {
  const valueToVerify = url.searchParams.get('value');

  if (!valueToVerify) {
    return new Response(JSON.stringify({ error: 'Please provide a value to verify using the parameter "value".' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const normalizedValue = valueToVerify.toLowerCase();

  const verifiedTypes = users.reduce((acc: string[], user) => {
    if (user.email.toLowerCase() === normalizedValue) acc.push('Email');
    if (user.telegram.toLowerCase() === normalizedValue) acc.push('Telegram');
    if (user.discord.toLowerCase() === normalizedValue) acc.push('Discord');
    return acc;
  }, []);

  const isVerified = verifiedTypes.length > 0;

  const response = isVerified ? { message: `${verifiedTypes.join(' and ')} is verified.` } : { error: 'No valid identifier provided or identifier is not verified.' };

  return new Response(JSON.stringify(response), {
    status: isVerified ? 200 : 404,
    headers: { 'Content-Type': 'application/json' }
  });
};
