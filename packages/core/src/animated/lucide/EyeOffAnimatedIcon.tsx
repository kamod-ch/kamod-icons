import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { eyeOffAnimatedRecipe, type EyeOffAnimatedVariant } from "./eye-off.recipe";

export type { EyeOffAnimatedVariant };

export function EyeOffAnimatedIcon(props: AnimatedIconProps<EyeOffAnimatedVariant>) {
  const { persistOnEnd = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: eyeOffAnimatedRecipe,
    persistOnEnd,
    ...rest,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path
        data-kamod-part="eye"
        d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242"
      />
      <path
        data-kamod-part="strike"
        d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143M2 2l20 20"
      />
    </AnimatedIconSvg>
  );
}
