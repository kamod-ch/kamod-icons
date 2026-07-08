import type { IconProps } from "../../../shared/types";

export function MonitorPhoneIcon({
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
      <path fill="currentColor" d="M14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v1q-.002.827.007 1.5h10.595c.103-.68.336-1.387.923-1.975.618-.618 1.37-.843 2.08-.938.646-.087 1.44-.087 2.305-.087h.18c.865 0 1.659 0 2.304.087.538.072 1.098.218 1.606.551V10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2ZM2.879 16.121C3.757 17 5.172 17 8 17h3.25v4H8a.75.75 0 0 0 0 1.5h5.55l-.025-.025c-.618-.618-.843-1.37-.938-2.08-.087-.646-.087-1.44-.087-2.305v-3.18c0-.498 0-.973.017-1.41H2.038c.07 1.258.271 2.052.84 2.621Z"/><path fill="currentColor" fillRule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15Zm-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
