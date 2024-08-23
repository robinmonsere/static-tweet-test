import { SvelteComponent } from "svelte";
import type { ITweet, TwitterComponents } from '../types.js';
declare const __propDef: {
    props: {
        tweet: ITweet;
        components?: TwitterComponents | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type EmbeddedTweetProps = typeof __propDef.props;
export type EmbeddedTweetEvents = typeof __propDef.events;
export type EmbeddedTweetSlots = typeof __propDef.slots;
export default class EmbeddedTweet extends SvelteComponent<EmbeddedTweetProps, EmbeddedTweetEvents, EmbeddedTweetSlots> {
}
export {};
