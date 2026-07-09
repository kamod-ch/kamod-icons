import type { IconProps } from "../../../shared/types";

export function WandSparkleIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.762 3.9 3.892 16.777c-.52.52-.52 1.363-.002 1.884l1.447 1.452c.522.52 1.366.52 1.887 0l12.87-12.877c.52-.52.52-1.363 0-1.884l-1.444-1.45a1.333 1.333 0 0 0-1.888-.002M13.85 7.147l3 3"/><path fill="currentColor" strokeWidth="1.333" d="M9.657 4.653 8.396 4.24l-.421-1.267c-.136-.413-.812-.413-.948 0L6.605 4.24l-1.261.413a.51.51 0 0 0-.343.48c0 .214.139.4.343.467l1.261.427.422 1.266c.068.2.258.334.473.334a.5.5 0 0 0 .473-.334l.422-1.266 1.26-.427A.49.49 0 0 0 10 5.133a.51.51 0 0 0-.342-.48ZM22.21 15.987l-1.683-.56-.562-1.68c-.182-.547-1.082-.547-1.265 0l-.561 1.68-1.684.56a.67.67 0 0 0 0 1.266l1.684.56.561 1.68c.09.28.347.454.633.454a.66.66 0 0 0 .634-.454l.56-1.68 1.685-.56a.67.67 0 0 0 .456-.64.67.67 0 0 0-.457-.626ZM12.333 3.333c.552 0 1-.453 1-1s-.448-1-1-1-1 .454-1 1c0 .547.448 1 1 1Z"/>
    </svg>
  );
}
