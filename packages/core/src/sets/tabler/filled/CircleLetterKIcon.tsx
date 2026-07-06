import type { IconProps } from "../../../shared/types";

export function CircleLetterKIcon({
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.53 5.152a1 1 0 0 0-1.378.318L11 10.913V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276.374l.102-.056.095-.068a1 1 0 0 0 .223-1.31L12.678 12l2.17-3.47a1 1 0 0 0-.318-1.378"/>
    </svg>
  );
}
