import * as preact from 'preact';
import { ComponentChildren, CSSProperties } from 'preact';
import { I as IconProps } from '../../types-DQL76FNw.js';

type ReducedMotionMode = "system" | "always" | "never";
type TriggerTarget = "self" | "parent" | `closest:${string}`;
type AnimationTrack = {
    /** Matches `data-kamod-part` on SVG descendants. */
    target: string;
    keyframes: Keyframe[] | PropertyIndexedKeyframes;
    options?: KeyframeAnimationOptions;
    /**
     * When true, `strokeDasharray` / `strokeDashoffset` keyframe values between 0
     * and 1 are scaled by the element path length after mount.
     */
    pathDrawing?: boolean;
};
type AnimationRecipe<Variant extends string = string> = {
    source: "kamod";
    /** Short Kamod-authored description of the motion intent. */
    intent?: string;
    defaultVariant?: Variant;
    variants: Record<Variant, AnimationTrack[]>;
};
type AnimatedIconProps<Variant extends string = string> = IconProps & {
    animation?: AnimationRecipe<Variant>;
    animate?: boolean | Variant;
    animateOnHover?: boolean | Variant;
    animateOnFocus?: boolean | Variant;
    animateOnPress?: boolean | Variant;
    animateOnView?: boolean | Variant;
    animateOnViewOnce?: boolean;
    animateOnViewMargin?: string;
    loop?: boolean | number;
    loopDelay?: number;
    delay?: number;
    persistOnEnd?: boolean;
    triggerTarget?: TriggerTarget;
    reducedMotion?: ReducedMotionMode;
};
type AnimateIconProps<Variant extends string = string> = {
    children: ComponentChildren;
    animation?: AnimationRecipe<Variant>;
    animate?: boolean | Variant;
    animateOnHover?: boolean | Variant;
    animateOnFocus?: boolean | Variant;
    animateOnPress?: boolean | Variant;
    animateOnView?: boolean | Variant;
    animateOnViewOnce?: boolean;
    animateOnViewMargin?: string;
    loop?: boolean | number;
    loopDelay?: number;
    delay?: number;
    persistOnEnd?: boolean;
    reducedMotion?: ReducedMotionMode;
    class?: string;
    style?: CSSProperties;
};

/**
 * Group trigger wrapper. Renders a semantic-neutral `span[data-kamod-animate-icon]`
 * so one hover/focus/press/view trigger can drive nested animated icons via context.
 */
declare function AnimateIcon<Variant extends string = string>({ children, animation, animate, animateOnHover, animateOnFocus, animateOnPress, animateOnView, animateOnViewOnce, animateOnViewMargin, persistOnEnd, reducedMotion, class: className, style, onPointerEnter, onPointerLeave, onFocusIn, onFocusOut, onPointerDown, onPointerUp, onPointerCancel, }: AnimateIconProps<Variant> & {
    onPointerEnter?: (event: Event) => void;
    onPointerLeave?: (event: Event) => void;
    onFocusIn?: (event: Event) => void;
    onFocusOut?: (event: Event) => void;
    onPointerDown?: (event: Event) => void;
    onPointerUp?: (event: Event) => void;
    onPointerCancel?: (event: Event) => void;
}): preact.JSX.Element;

type ArrowRightAnimatedVariant = "advance";

declare function ArrowRightAnimatedIcon(props: AnimatedIconProps<ArrowRightAnimatedVariant>): preact.JSX.Element;

type ArrowLeftAnimatedVariant = "retreat";

declare function ArrowLeftAnimatedIcon(props: AnimatedIconProps<ArrowLeftAnimatedVariant>): preact.JSX.Element;

type ChevronDownAnimatedVariant = "expand";

declare function ChevronDownAnimatedIcon(props: AnimatedIconProps<ChevronDownAnimatedVariant>): preact.JSX.Element;

type ChevronUpAnimatedVariant = "collapse";

declare function ChevronUpAnimatedIcon(props: AnimatedIconProps<ChevronUpAnimatedVariant>): preact.JSX.Element;

type SearchAnimatedVariant = "scan";

declare function SearchAnimatedIcon(props: AnimatedIconProps<SearchAnimatedVariant>): preact.JSX.Element;

type MenuAnimatedVariant = "spread";

declare function MenuAnimatedIcon(props: AnimatedIconProps<MenuAnimatedVariant>): preact.JSX.Element;

type XAnimatedVariant = "dismiss";

declare function XAnimatedIcon(props: AnimatedIconProps<XAnimatedVariant>): preact.JSX.Element;

type CheckAnimatedVariant = "draw";

declare function CheckAnimatedIcon(props: AnimatedIconProps<CheckAnimatedVariant>): preact.JSX.Element;

type PlusAnimatedVariant = "add";

declare function PlusAnimatedIcon(props: AnimatedIconProps<PlusAnimatedVariant>): preact.JSX.Element;

type MinusAnimatedVariant = "remove";

declare function MinusAnimatedIcon(props: AnimatedIconProps<MinusAnimatedVariant>): preact.JSX.Element;

type CopyAnimatedVariant = "duplicate";

declare function CopyAnimatedIcon(props: AnimatedIconProps<CopyAnimatedVariant>): preact.JSX.Element;

type DownloadAnimatedVariant = "fetch";

declare function DownloadAnimatedIcon(props: AnimatedIconProps<DownloadAnimatedVariant>): preact.JSX.Element;

type UploadAnimatedVariant = "send";

declare function UploadAnimatedIcon(props: AnimatedIconProps<UploadAnimatedVariant>): preact.JSX.Element;

type RefreshCwAnimatedVariant = "spin";

declare function RefreshCwAnimatedIcon(props: AnimatedIconProps<RefreshCwAnimatedVariant>): preact.JSX.Element;

type SettingsAnimatedVariant = "adjust" | "spin";

declare function SettingsAnimatedIcon(props: AnimatedIconProps<SettingsAnimatedVariant>): preact.JSX.Element;

type BellAnimatedVariant = "ring";

declare function BellAnimatedIcon(props: AnimatedIconProps<BellAnimatedVariant>): preact.JSX.Element;

type Trash2AnimatedVariant = "delete";

declare function Trash2AnimatedIcon(props: AnimatedIconProps<Trash2AnimatedVariant>): preact.JSX.Element;

type LockAnimatedVariant = "secure";

declare function LockAnimatedIcon(props: AnimatedIconProps<LockAnimatedVariant>): preact.JSX.Element;

type LockOpenAnimatedVariant = "unlock";

declare function LockOpenAnimatedIcon(props: AnimatedIconProps<LockOpenAnimatedVariant>): preact.JSX.Element;

type EyeAnimatedVariant = "look" | "blink";

declare function EyeAnimatedIcon(props: AnimatedIconProps<EyeAnimatedVariant>): preact.JSX.Element;

type EyeOffAnimatedVariant = "conceal";

declare function EyeOffAnimatedIcon(props: AnimatedIconProps<EyeOffAnimatedVariant>): preact.JSX.Element;

type HeartAnimatedVariant = "pulse" | "selected";

declare function HeartAnimatedIcon(props: AnimatedIconProps<HeartAnimatedVariant>): preact.JSX.Element;

type PlayAnimatedVariant = "play";

declare function PlayAnimatedIcon(props: AnimatedIconProps<PlayAnimatedVariant>): preact.JSX.Element;

type LoaderCircleAnimatedVariant = "spin";

declare function LoaderCircleAnimatedIcon(props: AnimatedIconProps<LoaderCircleAnimatedVariant>): preact.JSX.Element;

export { AnimateIcon, type AnimateIconProps, type AnimatedIconProps, ArrowLeftAnimatedIcon, type ArrowLeftAnimatedVariant, ArrowRightAnimatedIcon, type ArrowRightAnimatedVariant, BellAnimatedIcon, type BellAnimatedVariant, CheckAnimatedIcon, type CheckAnimatedVariant, ChevronDownAnimatedIcon, type ChevronDownAnimatedVariant, ChevronUpAnimatedIcon, type ChevronUpAnimatedVariant, CopyAnimatedIcon, type CopyAnimatedVariant, DownloadAnimatedIcon, type DownloadAnimatedVariant, EyeAnimatedIcon, type EyeAnimatedVariant, EyeOffAnimatedIcon, type EyeOffAnimatedVariant, HeartAnimatedIcon, type HeartAnimatedVariant, LoaderCircleAnimatedIcon, type LoaderCircleAnimatedVariant, LockAnimatedIcon, type LockAnimatedVariant, LockOpenAnimatedIcon, type LockOpenAnimatedVariant, MenuAnimatedIcon, type MenuAnimatedVariant, MinusAnimatedIcon, type MinusAnimatedVariant, PlayAnimatedIcon, type PlayAnimatedVariant, PlusAnimatedIcon, type PlusAnimatedVariant, type ReducedMotionMode, RefreshCwAnimatedIcon, type RefreshCwAnimatedVariant, SearchAnimatedIcon, type SearchAnimatedVariant, SettingsAnimatedIcon, type SettingsAnimatedVariant, Trash2AnimatedIcon, type Trash2AnimatedVariant, type TriggerTarget, UploadAnimatedIcon, type UploadAnimatedVariant, XAnimatedIcon, type XAnimatedVariant };
