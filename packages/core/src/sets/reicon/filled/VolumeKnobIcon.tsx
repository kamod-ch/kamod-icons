import type { IconProps } from "../../../shared/types";

export function VolumeKnobIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm7.5 9.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-17 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3.197-7.718a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415Zm12.02 12.021a1 1 0 1 1-1.414 1.415 1 1 0 0 1 1.414-1.415Zm0-10.606a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415ZM6.697 18.718a1 1 0 1 1-1.414-1.415 1 1 0 0 1 1.414 1.415Z"/>
    </svg>
  );
}
