import type { IconProps } from "../../../shared/types";

export function GitIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M12.955.893a1.35 1.35 0 0 0-1.91 0L8.24 3.7c.219.208.43.41.54.52l2.25 2.25a2.25 2.25 0 0 1 3 3l1.25 1.25a2.25 2.25 0 1 1-1.06 1.06l-1.25-1.248a2 2 0 0 1-.22.09v3.757a2.251 2.251 0 1 1-1.5 0v-3.756A2.25 2.25 0 0 1 9.97 7.53L7.72 5.28c-.074-.073-.29-.299-.52-.541L.894 11.045a1.35 1.35 0 0 0 0 1.91l10.151 10.15a1.35 1.35 0 0 0 1.91 0l10.151-10.15a1.35 1.35 0 0 0 0-1.91zM12 15.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m.75-7.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.75 4.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
