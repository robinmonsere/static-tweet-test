import type { ITweet } from './types.js';
/**
 * Fetches a tweet from the Twitter syndication API.
 */
export declare const getTweet: (id: string, fetchOptions?: RequestInit) => Promise<ITweet | undefined>;
export declare const renderTweets: (content: string, fetchedTweets?: ITweet[]) => Promise<string>;
