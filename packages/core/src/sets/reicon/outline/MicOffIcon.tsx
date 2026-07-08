import type { IconProps } from "../../../shared/types";

export function MicOffIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l5.78 5.78V12a4.75 4.75 0 0 0 7.537 3.847l1.07 1.071a6.22 6.22 0 0 1-3.851 1.332h-.012A6.25 6.25 0 0 1 5.75 12a.75.75 0 0 0-1.5 0 7.75 7.75 0 0 0 7 7.714v1.536H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-1.536a7.7 7.7 0 0 0 4.174-1.73l4.546 4.546a.75.75 0 1 0 1.06-1.06zm11.176 13.297L8.75 9.81V12a3.25 3.25 0 0 0 4.956 2.767Z" clipRule="evenodd"/><path fill="currentColor" d="M12 1.25a4.75 4.75 0 0 0-4.33 2.794.75.75 0 0 0 1.367.619A3.25 3.25 0 0 1 15.25 6v6a.75.75 0 0 0 1.5 0V6A4.75 4.75 0 0 0 12 1.25ZM19.75 12a.75.75 0 0 0-1.5 0c0 .798-.15 1.559-.42 2.258a.75.75 0 0 0 1.399.542c.337-.87.521-1.814.521-2.8Z"/>
    </svg>
  );
}
