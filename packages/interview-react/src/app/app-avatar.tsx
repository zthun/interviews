import { ZImage } from "@zthun/fashion-boutique";
import { ZSizeFixed } from "@zthun/fashion-tailor";

export function ZInterviewAvatar() {
  return (
    <ZImage
      src="/png/react-512x512.png"
      width={ZSizeFixed.Medium}
      fit="scale-down"
    />
  );
}
