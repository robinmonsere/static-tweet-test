import { getTweet } from 'sveltekit-tweet/server';

export const ssr = false;

export const load = async () => {
	try {
		const tweet = await getTweet('1821627349282255020');

		return {
			tweet
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Could not load tweet'
		};
	}
};