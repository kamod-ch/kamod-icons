import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { chevronDownAnimatedRecipe, type ChevronDownAnimatedVariant } from "./chevron-down.recipe";

export type { ChevronDownAnimatedVariant };

export function ChevronDownAnimatedIcon(props: AnimatedIconProps<ChevronDownAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: chevronDownAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="chevron" d="m6 9 6 6 6-6" />
    </AnimatedIconSvg>
  );
}
