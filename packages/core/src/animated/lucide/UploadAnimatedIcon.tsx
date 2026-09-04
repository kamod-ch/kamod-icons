import { useAnimatedIcon } from "../runtime/use-animated-icon";
import type { AnimatedIconProps } from "../runtime/types";
import { AnimatedIconSvg } from "./shared";
import { uploadAnimatedRecipe, type UploadAnimatedVariant } from "./upload.recipe";

export type { UploadAnimatedVariant };

export function UploadAnimatedIcon(props: AnimatedIconProps<UploadAnimatedVariant>) {
  const { svgRef, svgProps } = useAnimatedIcon({
    animation: uploadAnimatedRecipe,
    ...props,
  });

  return (
    <AnimatedIconSvg size={props.size} title={props.title} svgRef={svgRef} svgProps={svgProps}>
      <g data-kamod-part="arrow">
        <path d="M12 3v12" />
        <path d="m5-7-5-5-5 5" />
      </g>
      <path data-kamod-part="tray" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </AnimatedIconSvg>
  );
}
