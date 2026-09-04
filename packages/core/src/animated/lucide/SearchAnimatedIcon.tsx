import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { searchAnimatedRecipe, type SearchAnimatedVariant } from "./search.recipe";

export type { SearchAnimatedVariant };

export function SearchAnimatedIcon(props: AnimatedIconProps<SearchAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: searchAnimatedRecipe,
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
      <circle data-kamod-part="lens" cx="11" cy="11" r="8" />
      <path data-kamod-part="handle" d="m21 21-4.34-4.34" />
    </AnimatedIconSvg>
  );
}
