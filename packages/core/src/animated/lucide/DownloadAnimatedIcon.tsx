import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { downloadAnimatedRecipe, type DownloadAnimatedVariant } from "./download.recipe";

export type { DownloadAnimatedVariant };

export function DownloadAnimatedIcon(props: AnimatedIconProps<DownloadAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: downloadAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <g data-kamod-part="arrow">
        <path d="M12 15V3" />
        <path d="m7 10 5 5 5-5" />
      </g>
      <path data-kamod-part="tray" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </AnimatedIconSvg>
  );
}
