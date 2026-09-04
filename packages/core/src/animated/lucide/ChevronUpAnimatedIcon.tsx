import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { chevronUpAnimatedRecipe, type ChevronUpAnimatedVariant } from "./chevron-up.recipe";

export type { ChevronUpAnimatedVariant };

export function ChevronUpAnimatedIcon(props: AnimatedIconProps<ChevronUpAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: chevronUpAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="chevron" d="m18 15-6-6-6 6" />
    </AnimatedIconSvg>
  );
}
