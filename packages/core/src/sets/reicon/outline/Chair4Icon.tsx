import type { IconProps } from "../../../shared/types";

export function Chair4Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v8m0-3-4.333 2.333M12 20l4.333 2.333M12 15h5.333c.736 0 1.334-.581 1.334-1.333s-.954-2-4-2H9.333c-3.046 0-4 1.237-4 2 0 .752.598 1.333 1.334 1.333zm8.286-5.726a2.47 2.47 0 0 0 .042-1.427C18.667 1.889 18.248 1.02 12 1.02s-6.667.87-8.33 6.827a2.5 2.5 0 0 0 .043 1.428"/>
    </svg>
  );
}
