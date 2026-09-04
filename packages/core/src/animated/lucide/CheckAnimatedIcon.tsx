import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { checkAnimatedRecipe, type CheckAnimatedVariant } from "./check.recipe";

export type { CheckAnimatedVariant };

export function CheckAnimatedIcon(props: AnimatedIconProps<CheckAnimatedVariant>) {
  const { persistOnEnd = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: checkAnimatedRecipe,
    persistOnEnd,
    ...rest,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="mark" d="M20 6 9 17l-5-5" />
    </AnimatedIconSvg>
  );
}
