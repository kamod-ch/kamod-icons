import type { IconProps } from "../../../shared/types";

export function BicycleIcon({
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
      <g fill="currentColor" fillRule="evenodd" strokeWidth="1.333" clipRule="evenodd"><path d="M14 15.667a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-19 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-.333-5a1 1 0 0 1 1-1h2.528c.866 0 1.661.48 2.065 1.246l.563 1.07a1 1 0 1 1-1.77.931l-.563-1.07a.33.33 0 0 0-.295-.177H5.667a1 1 0 0 1-1-1Z"/><path d="M16.563 7.385a1 1 0 0 1 .195 1.4c-2.659 3.52-6.493 6.117-11.43 7.827a1 1 0 1 1-.655-1.89c4.644-1.608 8.116-4.001 10.489-7.142a1 1 0 0 1 1.4-.195Z"/><path d="M13.296 3.108a1 1 0 0 1 .83-.441h5.04a2.833 2.833 0 0 1 0 5.666 1 1 0 0 1 0-2 .833.833 0 1 0 0-1.666h-3.555l4.315 10.623a1 1 0 0 1-1.853.753l-4.874-12a1 1 0 0 1 .097-.935Z"/></g>
    </svg>
  );
}
