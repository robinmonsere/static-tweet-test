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
export type TweetInfoCreatedAtProps = typeof __propDef.props;
export type TweetInfoCreatedAtEvents = typeof __propDef.events;
export type TweetInfoCreatedAtSlots = typeof __propDef.slots;
export default class TweetInfoCreatedAt extends SvelteComponent<TweetInfoCreatedAtProps, TweetInfoCreatedAtEvents, TweetInfoCreatedAtSlots> {
}
export {};
