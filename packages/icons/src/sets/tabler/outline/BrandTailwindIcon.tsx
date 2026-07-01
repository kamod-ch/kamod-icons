import type { IconProps } from "../../../shared/types";

export function BrandTailwindIcon({
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
      <path d="M11.667 6Q7.933 6 7 9.667q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6m-4 6.5Q3.933 12.5 3 16.167q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968"/>
    </svg>
  );
}
