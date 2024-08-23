/** @typedef {typeof __propDef.props}  VerifiedBusinessProps */
/** @typedef {typeof __propDef.events}  VerifiedBusinessEvents */
/** @typedef {typeof __propDef.slots}  VerifiedBusinessSlots */
export default class VerifiedBusiness extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VerifiedBusinessProps = typeof __propDef.props;
export type VerifiedBusinessEvents = typeof __propDef.events;
export type VerifiedBusinessSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
