import type { IconProps } from "../../../shared/types";

export function CryptographyIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 10.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path d="m5 19 1.723-2.033c.18-.234.277-.52.277-.815v-3.57c0-.371.155-.726.428-.978l2.087-1.932M8.272 21h6.904c.353 0 .692-.14.942-.39l4.492-4.492c.25-.25.39-.589.39-.942V8.272M15.728 3H8.824c-.353 0-.693.14-.943.39l-4.49 4.492c-.25.25-.391.589-.391.942v6.904"/><path d="M13 13.667a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/><path d="m19 5-1.723 2.033c-.18.234-.277.52-.277.815v3.57c0 .371-.155.726-.428.978l-2.087 1.932"/></g>
    </svg>
  );
}
