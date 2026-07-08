import type { IconProps } from "../../../shared/types";

export function Timer12Icon({
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
      <path fill="currentColor" d="M12 4.648c-4.78 0-8.67 3.89-8.67 8.67s3.89 8.68 8.67 8.68 8.67-3.89 8.67-8.67-3.89-8.68-8.67-8.68Zm.75 8.35c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75zm2.14-9.548H9.11c-.4 0-.72-.32-.72-.72S8.71 2 9.11 2h5.78c.4 0 .72.32.72.72s-.32.73-.72.73Z"/>
    </svg>
  );
}
