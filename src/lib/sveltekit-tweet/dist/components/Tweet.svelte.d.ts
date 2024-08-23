import { SvelteComponent } from "svelte";
import type { ITweet } from '../types.js';
declare const __propDef: {
    props: {
        components?: {} | undefined;
        tweet: ITweet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TweetProps = typeof __propDef.props;
export type TweetEvents = typeof __propDef.events;
export type TweetSlots = typeof __propDef.slots;
export default class Tweet extends SvelteComponent<TweetProps, TweetEvents, TweetSlots> {
}
export {};
