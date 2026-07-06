import type { IconProps } from "../../../shared/types";

export function CameraOffIcon({
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
      <path d="M8.297 4.289A1 1 0 0 1 9 4h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v8m-1.187 2.828c-.249.11-.524.172-.813.172H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1c.298 0 .58-.065.834-.181"/><path d="M10.422 10.448a3 3 0 1 0 4.15 4.098M3 3l18 18"/>
    </svg>
  );
}
