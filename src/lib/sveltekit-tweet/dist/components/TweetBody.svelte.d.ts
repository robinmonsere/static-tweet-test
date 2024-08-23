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
export type TweetBodyProps = typeof __propDef.props;
export type TweetBodyEvents = typeof __propDef.events;
export type TweetBodySlots = typeof __propDef.slots;
export default class TweetBody extends SvelteComponent<TweetBodyProps, TweetBodyEvents, TweetBodySlots> {
}
export {};
