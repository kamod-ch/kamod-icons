import type { IconProps } from "../../../shared/types";

export function TextalignLeft2Icon({
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
      <path fill="currentColor" d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Zm-8.53 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Zm8.53 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Zm-8.53 5H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z"/>
    </svg>
  );
}
