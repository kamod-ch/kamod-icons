import type { IconProps } from "../../../shared/types";

export function MapArrowLeftIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22.013 2.953a2.55 2.55 0 0 0-2.816-.473L2.687 9.843a2.338 2.338 0 0 0 0 4.315l16.51 7.362a2.54 2.54 0 0 0 2.816-.473c.69-.659 1.009-1.735.458-2.767l-3.152-5.904-.662.354.662-.354a.79.79 0 0 1 0-.752L22.47 5.72c.55-1.031.232-2.108-.458-2.767Zm-1.036 1.085c.274.262.36.62.17.976l.662.353-.662-.353-3.151 5.904a2.29 2.29 0 0 0 0 2.165l3.152 5.904c.19.356.103.714-.171.976-.28.267-.72.387-1.169.187l-16.51-7.362c-.73-.326-.73-1.25 0-1.575l16.51-7.363c.448-.2.889-.079 1.169.188Z" clipRule="evenodd"/>
    </svg>
  );
}
