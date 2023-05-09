import type { RequestEvent } from "@sveltejs/kit";

export const authUser = async (event: RequestEvent): Promise<User | null> => {
	const { cookies } = event;

	const userToken = await cookies.get('session');

	if (userToken === 'd676468f-b7cd-4997-aa8d-fde13cecf55d') {
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
