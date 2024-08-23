import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        src: string;
        alt: string;
        className?: string | undefined;
        draggable?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MediaImgProps = typeof __propDef.props;
export type MediaImgEvents = typeof __propDef.events;
export type MediaImgSlots = typeof __propDef.slots;
export default class MediaImg extends SvelteComponent<MediaImgProps, MediaImgEvents, MediaImgSlots> {
}
export {};
