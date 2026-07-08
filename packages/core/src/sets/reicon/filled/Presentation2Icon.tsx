import type { IconProps } from "../../../shared/types";

export function Presentation2Icon({
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
      <path fill="currentColor" d="M.75 2a.75.75 0 0 1 .75-.75h21a.75.75 0 0 1 0 1.5h-.75v7.683c0 .952 0 1.713-.05 2.327-.052.63-.16 1.172-.413 1.67a4.25 4.25 0 0 1-1.857 1.857c-.498.253-1.04.361-1.67.413-.614.05-1.375.05-2.327.05H12.75v1.875l3.7 2.775a.75.75 0 1 1-.9 1.2L12 19.937 8.45 22.6a.75.75 0 1 1-.9-1.2l3.7-2.775V16.75H8.567c-.952 0-1.713 0-2.327-.05-.63-.052-1.172-.16-1.67-.413a4.25 4.25 0 0 1-1.857-1.857c-.253-.498-.361-1.04-.413-1.67-.05-.614-.05-1.375-.05-2.327V2.75H1.5A.75.75 0 0 1 .75 2Z"/>
    </svg>
  );
}
