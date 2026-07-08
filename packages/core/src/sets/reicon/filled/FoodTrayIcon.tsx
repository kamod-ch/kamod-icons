import type { IconProps } from "../../../shared/types";

export function FoodTrayIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.03 5.473a2.25 2.25 0 1 0-4.058 0C5.838 6.398 2.75 10.089 2.75 14.5c0 .414.336.75.75.75h17a.75.75 0 0 0 .75-.75c0-4.411-3.088-8.102-7.22-9.027ZM12 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm2.33 4.887a.75.75 0 0 1 1.043-.194 5.85 5.85 0 0 1 1.904 2.175.75.75 0 0 1-1.337.679 4.35 4.35 0 0 0-1.415-1.617.75.75 0 0 1-.194-1.043Z" clipRule="evenodd"/><path fill="currentColor" d="M2 16.5a.5.5 0 0 0-.5.5v.221c0 .472 0 .857.026 1.17.026.322.082.611.22.88.215.424.56.768.983.984.269.137.558.193.88.22.313.025.698.025 1.17.025H19.22c.472 0 .857 0 1.17-.026.322-.026.611-.082.88-.22.424-.215.768-.56.984-.983.137-.269.193-.558.22-.88.025-.313.025-.698.025-1.17V17a.5.5 0 0 0-.5-.5z"/>
    </svg>
  );
}
