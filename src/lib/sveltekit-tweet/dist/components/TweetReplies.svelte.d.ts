import { SvelteComponent } from "svelte";
import type { TEnrichedTweet } from '../types.js';
declare const __propDef: {
    props: {
        tweet: TEnrichedTweet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TweetRepliesProps = typeof __propDef.props;
export type TweetRepliesEvents = typeof __propDef.events;
export type TweetRepliesSlots = typeof __propDef.slots;
export default class TweetReplies extends SvelteComponent<TweetRepliesProps, TweetRepliesEvents, TweetRepliesSlots> {
}
export {};
