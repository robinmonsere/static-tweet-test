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
export type TweetInfoProps = typeof __propDef.props;
export type TweetInfoEvents = typeof __propDef.events;
export type TweetInfoSlots = typeof __propDef.slots;
export default class TweetInfo extends SvelteComponent<TweetInfoProps, TweetInfoEvents, TweetInfoSlots> {
}
export {};
