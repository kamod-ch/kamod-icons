import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { minusAnimatedRecipe, type MinusAnimatedVariant } from "./minus.recipe";

export type { MinusAnimatedVariant };

export function MinusAnimatedIcon(props: AnimatedIconProps<MinusAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: minusAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="bar" d="M5 12h14" />
    </AnimatedIconSvg>
  );
}
