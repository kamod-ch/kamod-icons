import type { IconProps } from "../../../shared/types";

export function Face3dDraftIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 7.78v7.796a.6.6 0 0 1-.27.502l-6.616 4.347a.6.6 0 0 1-.249.093l-10.184 1.39A.6.6 0 0 1 2 21.312v-12.3a.6.6 0 0 1 .298-.519l10.789-6.28a.6.6 0 0 1 .688.058l6.01 5.05A.6.6 0 0 1 20 7.78"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m2.5 9 10.227 2.922a.6.6 0 0 0 .506-.084L19.5 7.5m-6.5 13V12m3.5 2.01.01-.011M22 17.01l.01-.011"/>
    </svg>
  );
}
