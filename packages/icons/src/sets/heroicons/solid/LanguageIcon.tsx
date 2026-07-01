import type { IconProps } from "../../../shared/types";

export function LanguageIcon({
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
      <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49 49 0 0 1 5.343.371.75.75 0 1 1-.186 1.489 47 47 0 0 0-1.99-.206 18.7 18.7 0 0 1-2.97 6.323q.476.576 1 1.107a.75.75 0 0 1-1.07 1.052A19 19 0 0 1 9 13.687a18.8 18.8 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.3 17.3 0 0 0 5.396-4.353A18.7 18.7 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.2 17.2 0 0 0 9 11.224a17.2 17.2 0 0 0 2.391-5.165 48 48 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49 49 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25M15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9m-2.672 8.25h5.344l-2.672-5.726z" clipRule="evenodd"/>
    </svg>
  );
}
