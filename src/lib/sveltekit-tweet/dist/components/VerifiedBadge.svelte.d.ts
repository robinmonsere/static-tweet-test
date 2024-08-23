/** @typedef {typeof __propDef.props}  VerifiedBadgeProps */
/** @typedef {typeof __propDef.events}  VerifiedBadgeEvents */
/** @typedef {typeof __propDef.slots}  VerifiedBadgeSlots */
export default class VerifiedBadge extends SvelteComponent<{
    user: any;
    className?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VerifiedBadgeProps = typeof __propDef.props;
export type VerifiedBadgeEvents = typeof __propDef.events;
export type VerifiedBadgeSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        user: any;
        className?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
