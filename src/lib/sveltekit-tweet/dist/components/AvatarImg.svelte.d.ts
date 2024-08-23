import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        src: string;
        alt: string;
        width: string;
        height: string;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AvatarImgProps = typeof __propDef.props;
export type AvatarImgEvents = typeof __propDef.events;
export type AvatarImgSlots = typeof __propDef.slots;
export default class AvatarImg extends SvelteComponent<AvatarImgProps, AvatarImgEvents, AvatarImgSlots> {
}
export {};
