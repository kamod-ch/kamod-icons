import type { IconProps } from "../../../shared/types";

export function GamepadButtonsIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.333 3h3.334C14.403 3 15 3.597 15 4.333v1.782c0 .353-.14.693-.39.942l-2.14 2.139a.667.667 0 0 1-.942 0L9.389 7.057c-.25-.25-.39-.589-.39-.942V4.333c0-.736.597-1.333 1.333-1.333ZM21 10.333v3.334c0 .736-.597 1.333-1.333 1.333h-1.782a1.33 1.33 0 0 1-.942-.39l-2.139-2.14a.667.667 0 0 1 0-.942l2.139-2.139c.25-.25.589-.39.942-.39h1.782c.736 0 1.333.597 1.333 1.333ZM13.667 21h-3.334A1.334 1.334 0 0 1 9 19.667v-1.782c0-.353.14-.693.39-.942l2.14-2.139c.26-.26.682-.26.942 0l2.139 2.139c.25.25.39.589.39.942v1.782c0 .736-.597 1.333-1.333 1.333ZM3 13.667v-3.334C3 9.597 3.597 9 4.333 9h1.782c.353 0 .693.14.942.39l2.139 2.14c.26.26.26.682 0 .942l-2.139 2.139c-.25.25-.589.39-.942.39H4.333A1.334 1.334 0 0 1 3 13.668Z"/>
    </svg>
  );
}
