import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        href: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TweetLinkProps = typeof __propDef.props;
export type TweetLinkEvents = typeof __propDef.events;
export type TweetLinkSlots = typeof __propDef.slots;
export default class TweetLink extends SvelteComponent<TweetLinkProps, TweetLinkEvents, TweetLinkSlots> {
}
export {};
