import { SvelteComponent } from "svelte";
import type { TEnrichedTweet, TwitterComponents } from '../types.js';
declare const __propDef: {
    props: {
        tweet: TEnrichedTweet;
        components: TwitterComponents;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TweetHeaderProps = typeof __propDef.props;
export type TweetHeaderEvents = typeof __propDef.events;
export type TweetHeaderSlots = typeof __propDef.slots;
export default class TweetHeader extends SvelteComponent<TweetHeaderProps, TweetHeaderEvents, TweetHeaderSlots> {
}
export {};
