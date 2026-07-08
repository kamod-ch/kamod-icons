import type { IconProps } from "../../../shared/types";

export function StarOffIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l5.083 5.084-3.56.464C1.317 8.297.65 10.363 1.88 11.52l3.557 3.342a.25.25 0 0 1 .075.228l-.896 4.788c-.309 1.65 1.433 2.924 2.913 2.129l4.352-2.338a.25.25 0 0 1 .236 0l4.353 2.338c1.296.697 2.794-.195 2.937-1.537l2.061 2.061a.75.75 0 0 0 1.061-1.06l-3.66-3.661-.016-.015L8.688 7.627l-.022-.022zm5.361 7.482-4.705.614a.5.5 0 0 0-.278.86l3.557 3.342a1.75 1.75 0 0 1 .522 1.597l-.895 4.787a.5.5 0 0 0 .728.533l4.352-2.339a1.75 1.75 0 0 1 1.656 0l4.353 2.339a.5.5 0 0 0 .728-.533l-.272-1.455z" clipRule="evenodd"/><path fill="currentColor" d="M13.802 2.882c-.727-1.51-2.876-1.51-3.604 0L9.006 5.356a.75.75 0 0 0 1.351.651l1.193-2.474a.5.5 0 0 1 .9 0l2.131 4.42a1.75 1.75 0 0 0 1.35.976l4.883.637a.5.5 0 0 1 .278.86l-3.42 3.213a.75.75 0 1 0 1.027 1.093l3.42-3.213c1.23-1.156.563-3.222-1.11-3.44l-4.884-.638a.25.25 0 0 1-.193-.14z"/>
    </svg>
  );
}
