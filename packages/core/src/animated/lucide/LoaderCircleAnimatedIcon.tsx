import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import {
  loaderCircleAnimatedRecipe,
  type LoaderCircleAnimatedVariant,
} from "./loader-circle.recipe";

export type { LoaderCircleAnimatedVariant };

export function LoaderCircleAnimatedIcon(props: AnimatedIconProps<LoaderCircleAnimatedVariant>) {
  const { loop = true, ...rest } = props;
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: loaderCircleAnimatedRecipe,
    loop,
    ...rest,
  });

  return (
    <AnimatedIconSvg
      size={props.size}
      title={props.title}
      svgRef={svgRef}
      svgProps={svgProps}
      overflow="visible"
    >
      <path data-kamod-part="arc" d="M21 12a9 9 0 1 1-6.219-8.56" />
    </AnimatedIconSvg>
  );
}
