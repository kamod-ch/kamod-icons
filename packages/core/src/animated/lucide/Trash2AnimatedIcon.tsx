import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { trash2AnimatedRecipe, type Trash2AnimatedVariant } from "./trash-2.recipe";

export type { Trash2AnimatedVariant };

export function Trash2AnimatedIcon(props: AnimatedIconProps<Trash2AnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: trash2AnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <g data-kamod-part="lid">
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </g>
      <path data-kamod-part="bin" d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    </AnimatedIconSvg>
  );
}
