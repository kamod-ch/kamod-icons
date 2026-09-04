import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { xAnimatedRecipe, type XAnimatedVariant } from "./x.recipe";

export type { XAnimatedVariant };

export function XAnimatedIcon(props: AnimatedIconProps<XAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: xAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="stroke-a" d="M18 6 6 18" />
      <path data-kamod-part="stroke-b" d="M6 6l12 12" />
    </AnimatedIconSvg>
  );
}
