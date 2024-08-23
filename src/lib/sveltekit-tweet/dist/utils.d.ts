import type { ITweet, IMediaDetails, IMediaAnimatedGif, IMediaVideo, TEnrichedTweet } from './types.js';
export declare const getMediaUrl: (media: IMediaDetails, size: 'small' | 'medium' | 'large') => string;
export declare const getMp4Videos: (media: IMediaAnimatedGif | IMediaVideo) => {
    bitrate?: number | undefined;
    content_type: "video/mp4" | "application/x-mpegURL";
    url: string;
}[];
export declare const getMp4Video: (media: IMediaAnimatedGif | IMediaVideo) => {
    bitrate?: number | undefined;
    content_type: "video/mp4" | "application/x-mpegURL";
    url: string;
};
export declare const formatNumber: (n: number) => string;
/**
 * Enriches a tweet with additional data used to more easily use the tweet in a UI.
 */
export declare const enrichTweet: (tweet: ITweet) => TEnrichedTweet;
