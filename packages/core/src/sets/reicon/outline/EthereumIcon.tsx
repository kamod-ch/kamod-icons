import type { IconProps } from "../../../shared/types";

export function EthereumIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M19.24 12.38a2.25 2.25 0 0 0-.305-1.008l-5.43-9.26a1.75 1.75 0 0 0-3.02 0l-5.43 9.26a2.25 2.25 0 0 0 .063 2.378l5.416 8.208a1.75 1.75 0 0 0 2.922 0l5.416-8.208c.229-.347.352-.742.37-1.14a.8.8 0 0 0-.002-.23Zm-7.03-9.51a.25.25 0 0 0-.43 0l-5.43 9.261-.005.008 5.524 3.4c.08.05.181.05.262 0l5.517-3.395-.007-.013zm4.3 11.735-3.593 2.211a2 2 0 0 1-.167.091v3.398zm-5.26 2.302a2 2 0 0 1-.168-.09l-3.609-2.222 3.777 5.723z" clipRule="evenodd"/>
    </svg>
  );
}
