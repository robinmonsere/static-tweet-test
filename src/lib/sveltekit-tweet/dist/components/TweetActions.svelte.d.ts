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
export type TweetActionsProps = typeof __propDef.props;
export type TweetActionsEvents = typeof __propDef.events;
export type TweetActionsSlots = typeof __propDef.slots;
export default class TweetActions extends SvelteComponent<TweetActionsProps, TweetActionsEvents, TweetActionsSlots> {
}
export {};
