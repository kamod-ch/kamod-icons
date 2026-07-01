import type { IconProps } from "../../../shared/types";

export function PhoneXmarkIcon({
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
      <g fill="currentColor" fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd"><path d="M16.591 2.59a.75.75 0 0 1 1.06 0l1.592 1.592 1.59-1.591a.75.75 0 0 1 1.061 1.06l-1.59 1.591 1.59 1.591a.75.75 0 1 1-1.06 1.06l-1.591-1.59-1.591 1.59a.75.75 0 1 1-1.061-1.06l1.591-1.59-1.591-1.592a.75.75 0 0 1 0-1.06M4.063 1.25h3.751a.75.75 0 0 1 .702.486l1.456 3.87a.75.75 0 0 1 .035.401l-.73 3.912c.897 2.108 2.378 3.525 4.833 4.796l3.865-.75a.75.75 0 0 1 .41.036l3.882 1.48a.75.75 0 0 1 .483.7v3.584c0 1.626-1.432 2.945-3.108 2.58-3.053-.664-8.71-2.353-12.672-6.315-3.796-3.795-5.068-9.037-5.495-11.87-.245-1.618 1.052-2.91 2.588-2.91"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
