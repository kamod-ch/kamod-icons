import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { copyAnimatedRecipe, type CopyAnimatedVariant } from "./copy.recipe";

export type { CopyAnimatedVariant };

export function CopyAnimatedIcon(props: AnimatedIconProps<CopyAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: copyAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <rect data-kamod-part="front" x="8" y="8" width="13" height="13" rx="2" ry="2" />
      <path data-kamod-part="back" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </AnimatedIconSvg>
  );
}
