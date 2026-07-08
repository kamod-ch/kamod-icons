import type { IconProps } from "../../../shared/types";

export function AwardCertificateIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M19.333 19.333a3.32 3.32 0 0 1-2.666-1.352v5.352a.667.667 0 0 0 1.138.472l1.528-1.528 1.528 1.528A.666.666 0 0 0 22 23.333v-5.352a3.32 3.32 0 0 1-2.667 1.352Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.667 21.667h-8A2.666 2.666 0 0 1 3 19V5a2.666 2.666 0 0 1 2.667-2.667H17A2.666 2.666 0 0 1 19.667 5v3.667M7 7.667h8.667M7 12h4m-4 4.333h4"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.333 19.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666"/>
    </svg>
  );
}
