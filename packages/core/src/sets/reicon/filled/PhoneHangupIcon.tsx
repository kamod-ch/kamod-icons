import type { IconProps } from "../../../shared/types";

export function PhoneHangupIcon({
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
      <path fill="currentColor" d="M22.382 15.766a1.05 1.05 0 0 0 .816-.709c.052-.16.052-.353.052-.62v-1.328a4.93 4.93 0 0 0-2.506-4.272 15 15 0 0 0-4.411-1.644 22.1 22.1 0 0 0-8.672 0A15 15 0 0 0 3.246 8.84 4.92 4.92 0 0 0 .75 13.1v1.336c0 .268 0 .462.052.622.12.368.434.64.816.707.166.03.358.002.623-.036l5.116-.73q.173-.023.296-.05a.8.8 0 0 0 .252-.097.75.75 0 0 0 .277-.32.8.8 0 0 0 .062-.264q.008-.126.006-.299v-2.516c2.852-.805 4.822-.804 7.5-.003v2.519q-.002.174.006.3a.8.8 0 0 0 .062.263.75.75 0 0 0 .277.32c.08.051.166.079.252.098q.124.025.296.048l5.117.731c.264.038.456.066.622.037Z"/>
    </svg>
  );
}
