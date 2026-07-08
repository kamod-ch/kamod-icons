import type { IconProps } from "../../../shared/types";

export function AwardIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12.857 16.177 1.036-.869c.24-.201.544-.312.858-.312h1.352c.646 0 1.201-.464 1.313-1.101l.235-1.332a1.33 1.33 0 0 1 .456-.79l1.036-.869a1.33 1.33 0 0 0 .297-1.688l-.676-1.172a1.33 1.33 0 0 1-.159-.899l.235-1.332a1.33 1.33 0 0 0-.857-1.484l-1.271-.462a1.33 1.33 0 0 1-.699-.587l-.676-1.172a1.334 1.334 0 0 0-1.61-.587l-1.271.463a1.34 1.34 0 0 1-.912 0l-1.27-.463a1.33 1.33 0 0 0-1.611.587L7.987 3.28a1.34 1.34 0 0 1-.699.587l-1.27.462c-.609.222-.97.847-.858 1.484l.235 1.332a1.33 1.33 0 0 1-.159.899L4.56 9.216a1.33 1.33 0 0 0 .297 1.688l1.036.87c.24.2.402.48.456.789l.235 1.332a1.33 1.33 0 0 0 1.313 1.101H9.25c.314 0 .618.11.858.312l1.036.87a1.334 1.334 0 0 0 1.714 0m3.475 2.812V23L12 19.667 7.667 23v-4.01"/><path d="M12 11.632a2.666 2.666 0 1 0 0-5.333 2.666 2.666 0 0 0 0 5.333"/></g>
    </svg>
  );
}
