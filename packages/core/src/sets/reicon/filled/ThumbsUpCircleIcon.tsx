import type { IconProps } from "../../../shared/types";

export function ThumbsUpCircleIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M.25 12C.25 5.51 5.51.25 12 .25S23.75 5.51 23.75 12 18.49 23.75 12 23.75.25 18.49.25 12ZM12.5 6.252a.68.68 0 0 0-.592.34l-2.205 3.809c-.15.259-.24.413-.303.579a2.3 2.3 0 0 0-.122.455c-.028.176-.028.354-.028.653v3.064c0 .308.174.59.45.728l.02.01c.61.305.94.47 1.286.587q.463.155.946.223c.362.05.73.05 1.414.051h.367c.398 0 .71 0 .963-.018.26-.02.475-.06.678-.147a2 2 0 0 0 .837-.68c.127-.18.21-.383.282-.633.07-.245.134-.55.215-.939l.341-1.636c.084-.402.15-.72.181-.978.032-.262.03-.489-.043-.702a1.5 1.5 0 0 0-.658-.81c-.193-.114-.415-.162-.678-.185a12 12 0 0 0-.995-.022h-1.301l.396-1.98a1.48 1.48 0 0 0-1.45-1.77ZM7.5 10a1 1 0 0 0-1 1v4.5a1 1 0 1 0 2 0V11a1 1 0 0 0-1-1Z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
