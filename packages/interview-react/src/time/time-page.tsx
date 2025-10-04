import { ZCard, ZIconFontAwesome, ZParagraph } from "@zthun/fashion-boutique";
import { ZSizeFixed } from "@zthun/fashion-tailor";
import { format } from "date-fns";
import { useNow } from "./use-now.js";

export interface IZTimePage {}

export function ZTimePage() {
  const now = useNow();
  const time = format(now, "P pp");

  return (
    <ZCard
      className="ZTimePage-root"
      TitleProps={{
        avatar: <ZIconFontAwesome name="clock" width={ZSizeFixed.Medium} />,
        heading: "Date",
        subHeading: "What time is it?",
      }}
      data-time={now.toJSON()}
    >
      <ZParagraph>{time}</ZParagraph>
    </ZCard>
  );
}
