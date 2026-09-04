import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { menuAnimatedRecipe, type MenuAnimatedVariant } from "./menu.recipe";

export type { MenuAnimatedVariant };

export function MenuAnimatedIcon(props: AnimatedIconProps<MenuAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: menuAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <path data-kamod-part="line-top" d="M4 5h16" />
      <path data-kamod-part="line-mid" d="M4 12h16" />
      <path data-kamod-part="line-bottom" d="M4 19h16" />
    </AnimatedIconSvg>
  );
}
