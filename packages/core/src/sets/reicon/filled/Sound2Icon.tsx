import type { IconProps } from "../../../shared/types";

export function Sound2Icon({
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
      <path fill="currentColor" d="M3 16.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75ZM7.5 19c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75Zm4.5 2.5c-.41 0-.75-.34-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75Zm4.5-2.5c-.41 0-.75-.34-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75Zm4.5-2.5c-.41 0-.75-.34-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75Z"/>
    </svg>
  );
}
