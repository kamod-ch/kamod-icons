import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { arrowLeftAnimatedRecipe, type ArrowLeftAnimatedVariant } from "./arrow-left.recipe";

export type { ArrowLeftAnimatedVariant };

export function ArrowLeftAnimatedIcon(props: AnimatedIconProps<ArrowLeftAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: arrowLeftAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="arrow" d="m12 19-7-7 7-7m7 7H5" />
    </AnimatedIconSvg>
  );
}
