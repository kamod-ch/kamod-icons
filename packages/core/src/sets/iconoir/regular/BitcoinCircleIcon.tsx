import type { IconProps } from "../../../shared/types";

export function BitcoinCircleIcon({
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
      <path stroke="currentColor" d="M9 12v4.394c0 .332.269.6.6.602 2.966.018 5.4.076 5.4-2.496 0-2.744-3-2.5-6-2.5Zm0 0V7.606c0-.331.269-.6.6-.602C12.566 6.986 15 6.928 15 9.5c0 2.744-3 2.5-6 2.5Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 7V5.5m0 13V17m0 5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/>
    </svg>
  );
}
