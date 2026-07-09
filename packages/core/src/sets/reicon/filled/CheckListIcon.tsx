import type { IconProps } from "../../../shared/types";

export function CheckListIcon({
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
      <path fill="currentColor" d="M7.222 4.192a1 1 0 1 0-1.444-1.384L3.611 5.069l-.902-.906a1 1 0 0 0-1.418 1.41l1.625 1.632a1 1 0 0 0 1.43-.013zm0 7a1 1 0 0 0-1.444-1.384l-2.167 2.261-.902-.906a1 1 0 0 0-1.418 1.41l1.625 1.633a1 1 0 0 0 1.43-.014zm-.03 5.586a1 1 0 0 1 .03 1.414l-2.876 3a1 1 0 0 1-1.43.014L1.29 19.574a1 1 0 0 1 1.418-1.411l.902.906 2.167-2.261a1 1 0 0 1 1.414-.03ZM10.5 11.5a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2zm-1-6a1 1 0 0 1 1-1H22a1 1 0 1 1 0 2H10.5a1 1 0 0 1-1-1Zm1 13a1 1 0 1 0 0 2H22a1 1 0 1 0 0-2z"/>
    </svg>
  );
}
