import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { lockOpenAnimatedRecipe, type LockOpenAnimatedVariant } from "./lock-open.recipe";

export type { LockOpenAnimatedVariant };

export function LockOpenAnimatedIcon(props: AnimatedIconProps<LockOpenAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: lockOpenAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <rect data-kamod-part="body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path data-kamod-part="shackle" d="M7 11V7a5 5 0 0 1 9.9-1" />
    </AnimatedIconSvg>
  );
}
