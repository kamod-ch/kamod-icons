import type { IconProps } from "../../../shared/types";

export function CrosshairsOffIcon({
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
      <path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v1.282a8.7 8.7 0 0 0-2.852.742.75.75 0 0 0 .618 1.366 7.25 7.25 0 0 1 9.594 9.594.75.75 0 1 0 1.366.618 8.7 8.7 0 0 0 .742-2.852H22a.75.75 0 0 0 0-1.5h-1.282a8.75 8.75 0 0 0-7.968-7.968z"/><path fill="currentColor" fillRule="evenodd" d="M5.305 6.366 1.47 2.53a.75.75 0 0 1 1.06-1.06l20 20a.75.75 0 1 1-1.06 1.06l-3.836-3.835a8.7 8.7 0 0 1-4.884 2.023V22a.75.75 0 0 1-1.5 0v-1.282a8.75 8.75 0 0 1-7.968-7.968H2a.75.75 0 0 1 0-1.5h1.282a8.7 8.7 0 0 1 2.023-4.884ZM6.37 7.43a7.25 7.25 0 0 0 10.198 10.2l-2.5-2.5a3.75 3.75 0 0 1-5.197-5.197z" clipRule="evenodd"/><path fill="currentColor" d="M12.679 8.858a.75.75 0 0 1 .936-.243c.774.37 1.4.996 1.77 1.77a.75.75 0 0 1-1.207.854l-1.417-1.417a.75.75 0 0 1-.082-.964Z"/>
    </svg>
  );
}
