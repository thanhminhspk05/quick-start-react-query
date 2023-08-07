import { ComponentsOverrides, Theme } from '@mui/material';

import {
  fontBlackOtf,
  fontBlackWoff,
  fontBlackWoff2,
  fontBoldOtf,
  fontBoldWoff,
  fontBoldWoff2,
  fontLightOtf,
  fontLightWoff,
  fontLightWoff2,
  fontMediumOtf,
  fontMediumWoff,
  fontMediumWoff2,
  fontRegularOtf,
  fontRegularWoff,
  fontRegularWoff2,
  fontThinOtf,
  fontThinWoff,
  fontThinWoff2,
} from '@/assets/font';

export const NotoSansKR: ComponentsOverrides<Theme>['MuiCssBaseline'] = `
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 100;
  src: url(${fontThinWoff2}) format('woff2'), url(${fontThinWoff}) format('woff'),
    url(${fontThinOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 300;
  src: url(${fontLightWoff2}) format('woff2'), url(${fontLightWoff}) format('woff'),
    url(${fontLightOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 400;
  src: url(${fontRegularWoff2}) format('woff2'), url(${fontRegularWoff}) format('woff'),
    url(${fontRegularOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 500;
  src: url(${fontMediumWoff2}) format('woff2'), url(${fontMediumWoff}) format('woff'),
    url(${fontMediumOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 700;
  src: url(${fontBoldWoff2}) format('woff2'), url(${fontBoldWoff}) format('woff'),
    url(${fontBoldOtf}) format('opentype');
}
@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  font-weight: 900;
  src: url(${fontBlackWoff2}) format('woff2'), url(${fontBlackWoff}) format('woff'),
    url(${fontBlackOtf}) format('opentype');
}
`;
