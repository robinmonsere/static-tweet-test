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
export type TweetInReplyProps = typeof __propDef.props;
export type TweetInReplyEvents = typeof __propDef.events;
export type TweetInReplySlots = typeof __propDef.slots;
export default class TweetInReply extends SvelteComponent<TweetInReplyProps, TweetInReplyEvents, TweetInReplySlots> {
}
export {};
