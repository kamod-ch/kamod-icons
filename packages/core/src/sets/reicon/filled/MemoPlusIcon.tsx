import type { IconProps } from "../../../shared/types";

export function MemoPlusIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M12.433 1.25H6.567c-.952 0-1.713 0-2.327.05-.63.052-1.172.16-1.67.413A4.25 4.25 0 0 0 .714 3.571C.46 4.068.352 4.61.3 5.24.25 5.853.25 6.614.25 7.566v8.866c0 .952 0 1.713.05 2.327.052.63.16 1.172.413 1.67a4.25 4.25 0 0 0 1.858 1.857c.497.253 1.04.361 1.67.413.613.05 1.374.05 2.326.05h5.188a.75.75 0 0 0 .585-1.22A7.25 7.25 0 0 1 18 9.75a.75.75 0 0 0 .75-.75V7.567c0-.952 0-1.713-.05-2.327-.052-.63-.16-1.172-.413-1.67a4.25 4.25 0 0 0-1.857-1.857c-.498-.253-1.04-.361-1.67-.413-.614-.05-1.375-.05-2.327-.05ZM4.75 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 4.75 8Zm.75 3.25a.75.75 0 0 0 0 1.5h5.721a8 8 0 0 1 1.217-1.5zm4.504 5.5q.025-.772.188-1.5H5.5a.75.75 0 0 0 0 1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M12.25 17a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0ZM18 19.625a.625.625 0 0 1-.625-.625v-1.375H16a.625.625 0 1 1 0-1.25h1.375V15a.625.625 0 1 1 1.25 0v1.375H20a.625.625 0 1 1 0 1.25h-1.375V19c0 .345-.28.625-.625.625Z" clipRule="evenodd"/>
    </svg>
  );
}
