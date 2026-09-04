import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { plusAnimatedRecipe, type PlusAnimatedVariant } from "./plus.recipe";

export type { PlusAnimatedVariant };

export function PlusAnimatedIcon(props: AnimatedIconProps<PlusAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: plusAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="bar-h" d="M5 12h14" />
      <path data-kamod-part="bar-v" d="M12 5v14" />
    </AnimatedIconSvg>
  );
}
