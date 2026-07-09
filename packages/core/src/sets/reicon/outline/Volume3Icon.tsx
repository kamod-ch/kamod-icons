import type { IconProps } from "../../../shared/types";

export function Volume3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.72 9.69a5.25 5.25 0 0 1 0 7.44 5.25 5.25 0 0 1-7.44 0 5.25 5.25 0 0 1 0-7.44 5.25 5.25 0 0 1 7.44 0M12 13.41 10.41 15m8.66-8.66c.15.15.15.4 0 .56-.15.15-.4.15-.56 0s-.15-.4 0-.56.41-.16.56 0M5.49 19.92c.15.15.15.4 0 .56s-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0m16.39-6.79c.15.15.15.4 0 .56-.15.15-.4.15-.56 0s-.15-.4 0-.56.41-.16.56 0m-19.21 0c.15.15.15.4 0 .56s-.4.15-.56 0a.405.405 0 0 1 0-.56c.16-.16.41-.16.56 0m16.4 6.79c.15.15.15.4 0 .56-.15.15-.4.15-.56 0s-.15-.4 0-.56c.16-.16.41-.16.56 0M5.49 6.34c.15.15.15.4 0 .56s-.4.15-.56 0a.405.405 0 0 1 0-.56c.15-.16.41-.16.56 0m6.79-2.82c.15.15.15.4 0 .56s-.4.15-.56 0-.15-.4 0-.56.41-.15.56 0"/>
    </svg>
  );
}
