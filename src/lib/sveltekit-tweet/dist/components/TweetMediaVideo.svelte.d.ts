import { SvelteComponent } from "svelte";
import type { IMediaAnimatedGif, IMediaVideo, TEnrichedQuotedTweet, TEnrichedTweet } from '../types.js';
declare const __propDef: {
    props: {
        tweet: TEnrichedTweet | TEnrichedQuotedTweet;
        media: IMediaAnimatedGif | IMediaVideo;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TweetMediaVideoProps = typeof __propDef.props;
export type TweetMediaVideoEvents = typeof __propDef.events;
export type TweetMediaVideoSlots = typeof __propDef.slots;
export default class TweetMediaVideo extends SvelteComponent<TweetMediaVideoProps, TweetMediaVideoEvents, TweetMediaVideoSlots> {
}
export {};
