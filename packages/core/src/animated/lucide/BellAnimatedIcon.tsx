import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { bellAnimatedRecipe, type BellAnimatedVariant } from "./bell.recipe";

export type { BellAnimatedVariant };

export function BellAnimatedIcon(props: AnimatedIconProps<BellAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: bellAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg
      size={props.size}
      title={props.title}
      svgRef={svgRef}
      svgProps={svgProps}
      overflow="visible"
    >
      <path
        data-kamod-part="body"
        d="M4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
      />
      <path data-kamod-part="clapper" d="M10.268 21a2 2 0 0 0 3.464 0" />
    </AnimatedIconSvg>
  );
}
