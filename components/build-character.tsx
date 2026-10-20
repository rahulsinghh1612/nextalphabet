/* eslint-disable @next/next/no-img-element */
// Rahul's pixel character from the reels, full body. Each Build page gets a pose (Oct 20: "show different frames of me
// across the different pages"). No pointing pose: Rahul isn't a fan of it.
export const POSES = ["open", "offer", "thumbs", "wave", "shrug", "rest"] as const;
export type Pose = (typeof POSES)[number];

export function poseFor(n: number): Pose {
  return POSES[((n % POSES.length) + POSES.length) % POSES.length];
}

export function BuildCharacter({ pose, className = "" }: { pose: Pose; className?: string }) {
  return (
    <img
      src={`/build/rahul-${pose}.png`}
      alt=""
      width={350}
      height={635}
      className={`pointer-events-none select-none ${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
