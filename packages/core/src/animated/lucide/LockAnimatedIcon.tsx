import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { lockAnimatedRecipe, type LockAnimatedVariant } from "./lock.recipe";

export type { LockAnimatedVariant };

export function LockAnimatedIcon(props: AnimatedIconProps<LockAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: lockAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <rect data-kamod-part="body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path data-kamod-part="shackle" d="M7 11V7a5 5 0 0 1 10 0v4" />
    </AnimatedIconSvg>
  );
}
