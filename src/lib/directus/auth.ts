import type { RequestEvent } from "@sveltejs/kit";

export const authUser = async (event: RequestEvent): Promise<User | null> => {
	const { cookies } = event;

	const userToken = await cookies.get('session');

	if (userToken === '') {
    return {
      id: 123,
      email: 'Email',
      role: 'ADMIN'
    };
	}

	if (userToken) {
    return {
      id: 123,
      email: 'Email',
      role: 'USER'
    };
	}
    return null
};
