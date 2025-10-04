import {
  ZBannerMain,
  ZFashionThemeContext,
  ZNavigate,
  ZNotFound,
  ZRoute,
  ZRouteMap,
} from "@zthun/fashion-boutique";
import { createDarkTheme } from "@zthun/fashion-theme";
import { ZTimePage } from "../time/time-page.js";
import { ZInterviewAvatar } from "./app-avatar.js";
import { ZInterviewNavigation } from "./app-navigation.js";
import { ZInterviewTitle } from "./app-title.js";

const FashionTheme = createDarkTheme();

export function ZInterviewApp() {
  return (
    <ZFashionThemeContext.Provider value={FashionTheme}>
      <ZBannerMain
        TitleProps={{
          avatar: <ZInterviewAvatar />,
          prefix: <ZInterviewTitle />,
          suffix: <ZInterviewNavigation />,
        }}
      >
        <ZRouteMap>
          <ZRoute path="/time" element={<ZTimePage />} />
          <ZRoute path="" element={<ZNavigate to="/time" />} />
          <ZRoute path="*" element={<ZNotFound />} />
        </ZRouteMap>
      </ZBannerMain>
    </ZFashionThemeContext.Provider>
  );
}
