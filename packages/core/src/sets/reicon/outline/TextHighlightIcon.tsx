import type { IconProps } from "../../../shared/types";

export function TextHighlightIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8.727 20.333H19m-5.948-4.169L6.54 12.876a1.333 1.333 0 0 1-.5-1.941l5.021-7.364a2.67 2.67 0 0 1 3.406-.879l2.076 1.048a2.666 2.666 0 0 1 1.314 3.261l-2.944 8.412a1.333 1.333 0 0 1-1.86.75Zm.312.163c-2.659.688-3.953 2.652-4.336 3.412l-1.488-.751-1.488-.75c.384-.76 1.195-2.969.17-5.515"/><path d="m9.027 19.739-.3.594H5l1.052-2.097"/></g>
    </svg>
  );
}
