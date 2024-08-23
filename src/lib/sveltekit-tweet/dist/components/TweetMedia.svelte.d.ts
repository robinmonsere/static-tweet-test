import { SvelteComponent } from "svelte";
import type { TEnrichedTweet, TEnrichedQuotedTweet } from '../types.js';
import type { TwitterComponents } from '../types.js';
declare const __propDef: {
    props: {
        tweet: TEnrichedTweet | TEnrichedQuotedTweet;
        components: TwitterComponents | undefined;
        quoted?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TweetMediaProps = typeof __propDef.props;
export type TweetMediaEvents = typeof __propDef.events;
export type TweetMediaSlots = typeof __propDef.slots;
export default class TweetMedia extends SvelteComponent<TweetMediaProps, TweetMediaEvents, TweetMediaSlots> {
}
export {};
