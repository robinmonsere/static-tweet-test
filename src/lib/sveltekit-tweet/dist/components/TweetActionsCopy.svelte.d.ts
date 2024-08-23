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
export type TweetActionsCopyProps = typeof __propDef.props;
export type TweetActionsCopyEvents = typeof __propDef.events;
export type TweetActionsCopySlots = typeof __propDef.slots;
export default class TweetActionsCopy extends SvelteComponent<TweetActionsCopyProps, TweetActionsCopyEvents, TweetActionsCopySlots> {
}
export {};
