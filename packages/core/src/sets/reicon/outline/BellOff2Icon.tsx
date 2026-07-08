import type { IconProps } from "../../../shared/types";

export function BellOff2Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l3.62 3.62a7.3 7.3 0 0 0-.38 1.757l-.178 1.957a11.4 11.4 0 0 1-1.865 5.283l-.033.05a2.285 2.285 0 0 0 1.901 3.553H17.69l3.78 3.78a.75.75 0 1 0 1.061-1.06L6.51 5.448l-.025-.024zm3.775 5.896q-.07.332-.101.677L6.026 10a12.9 12.9 0 0 1-2.11 5.98l-.034.05a.785.785 0 0 0 .653 1.22H16.19z" clipRule="evenodd"/><path fill="currentColor" d="M7.151 3.086A7.32 7.32 0 0 1 19.29 7.907l.178 1.957a11.4 11.4 0 0 0 1.865 5.283l.033.05c.25.376.384.817.384 1.268v.035q-.002.34-.096.653a.75.75 0 0 1-1.436-.435.8.8 0 0 0 .032-.218v-.035a.8.8 0 0 0-.132-.436l-.033-.05a12.9 12.9 0 0 1-2.11-5.98l-.179-1.956A5.82 5.82 0 0 0 8.145 4.21a.75.75 0 0 1-.994-1.124ZM9.026 19.85a.75.75 0 0 1 1.025.274 2.249 2.249 0 0 0 3.899 0 .75.75 0 0 1 1.298.751 3.749 3.749 0 0 1-6.496 0 .75.75 0 0 1 .274-1.024Z"/>
    </svg>
  );
}
