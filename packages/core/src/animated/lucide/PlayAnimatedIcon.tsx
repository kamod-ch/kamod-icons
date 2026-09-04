import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { playAnimatedRecipe, type PlayAnimatedVariant } from "./play.recipe";

export type { PlayAnimatedVariant };

export function PlayAnimatedIcon(props: AnimatedIconProps<PlayAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: playAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path
        data-kamod-part="triangle"
        d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
      />
    </AnimatedIconSvg>
  );
}
