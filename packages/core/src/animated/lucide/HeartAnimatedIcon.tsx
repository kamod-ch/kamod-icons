import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { heartAnimatedRecipe, type HeartAnimatedVariant } from "./heart.recipe";

export type { HeartAnimatedVariant };

export function HeartAnimatedIcon(props: AnimatedIconProps<HeartAnimatedVariant>) {
  const { persistOnEnd: persistProp, ...rest } = props;
  const persistOnEnd =
    persistProp ?? (rest.animate === "selected" || rest.animateOnHover === "selected");
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: heartAnimatedRecipe,
    persistOnEnd,
    ...rest,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path
        data-kamod-part="heart"
        fill="currentColor"
        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      />
    </AnimatedIconSvg>
  );
}
