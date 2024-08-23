/** @typedef {typeof __propDef.props}  VerifiedProps */
/** @typedef {typeof __propDef.events}  VerifiedEvents */
/** @typedef {typeof __propDef.slots}  VerifiedSlots */
export default class Verified extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type VerifiedProps = typeof __propDef.props;
export type VerifiedEvents = typeof __propDef.events;
export type VerifiedSlots = typeof __propDef.slots;
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
