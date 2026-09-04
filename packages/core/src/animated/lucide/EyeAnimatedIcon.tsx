import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { eyeAnimatedRecipe, type EyeAnimatedVariant } from "./eye.recipe";

export type { EyeAnimatedVariant };

export function EyeAnimatedIcon(props: AnimatedIconProps<EyeAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: eyeAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path
        data-kamod-part="outline"
        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      />
      <circle data-kamod-part="pupil" cx="12" cy="12" r="3" />
    </AnimatedIconSvg>
  );
}
