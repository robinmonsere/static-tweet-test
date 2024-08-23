import { SvelteComponent } from "svelte";
import '../theme.css';
declare const __propDef: {
    props: {
        className?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TweetContainerProps = typeof __propDef.props;
export type TweetContainerEvents = typeof __propDef.events;
export type TweetContainerSlots = typeof __propDef.slots;
export default class TweetContainer extends SvelteComponent<TweetContainerProps, TweetContainerEvents, TweetContainerSlots> {
}
export {};
