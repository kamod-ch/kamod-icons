import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { arrowRightAnimatedRecipe, type ArrowRightAnimatedVariant } from "./arrow-right.recipe";

export type { ArrowRightAnimatedVariant };

export function ArrowRightAnimatedIcon(props: AnimatedIconProps<ArrowRightAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: arrowRightAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="arrow" d="M5 12h14m-7-7 7 7-7 7" />
    </AnimatedIconSvg>
  );
}
