import type { IconProps } from "../../../shared/types";

export function Subscription2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21.667 4.333-.72 4a9.67 9.67 0 0 0-18.61 3.399m-.004 7.935.72-4a9.67 9.67 0 0 0 18.61-3.4"/><path d="M14.333 8.333h-3.166a1.835 1.835 0 0 0-1.834 1.827c0 1.013.82 1.84 1.834 1.84h1.666c1.012 0 1.834.827 1.834 1.827a1.84 1.84 0 0 1-1.834 1.84H9.667M12 7v1.333M12 17v-1.333"/></g>
    </svg>
  );
}
