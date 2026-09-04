import type { ComponentChildren, RefObject } from "preact";
import type { IconProps } from "../../shared/types";

type AnimatedSvgShellProps = IconProps & {
  svgRef: RefObject<SVGSVGElement>;
  svgProps: Record<string, unknown>;
  overflow?: "visible" | "hidden";
  children: ComponentChildren;
};

/** Shared SVG shell for animated Lucide POC icons. */
export function AnimatedIconSvg({
  size = 24,
  title,
  overflow = "hidden",
  svgRef,
  svgProps,
  children,
}: AnimatedSvgShellProps) {
  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      overflow={overflow}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...svgProps}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export type KamodRecipe<Variant extends string> = {
  source: "kamod";
  intent: string;
  defaultVariant: Variant;
  variants: Record<Variant, import("../runtime/types").AnimationTrack[]>;
  /** Whether any variant is intended to loop (loader, refresh, etc.). */
  loopCapable?: boolean;
};
