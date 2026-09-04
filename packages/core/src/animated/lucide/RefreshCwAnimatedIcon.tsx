import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { refreshCwAnimatedRecipe, type RefreshCwAnimatedVariant } from "./refresh-cw.recipe";

export type { RefreshCwAnimatedVariant };

export function RefreshCwAnimatedIcon(props: AnimatedIconProps<RefreshCwAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: refreshCwAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <g data-kamod-part="glyph">
        <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
        <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
        <path d="M8 16H3v5" />
      </g>
    </AnimatedIconSvg>
  );
}
