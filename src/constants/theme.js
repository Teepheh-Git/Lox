import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  // primary colors
  primary: '#1648CE',
  secondary: '#929CAD',
  tertiary: '#FCF9FF',
  white: '#FFFFFF',
  grey: '#C4C4C4',
  black: '#494949',
  yellow: '#FAB613',
};
export const SIZES = {
  // font sizes
  largeTitle: 36,
  font1: width * 0.08,
  font2: width * 0.076,
  font3: width * 0.068,
  font4: width * 0.062,
  font5: width * 0.056,
  font6: width * 0.048,
  font7: width * 0.042,
  font8: width * 0.038,
  font9: width * 0.035,
  font10: width * 0.03,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontSize: SIZES.largeTitle, fontWeight: 'bold'},
  h1: {fontSize: SIZES.font1, fontWeight: 'bold'},
  h2: {fontSize: SIZES.font2, fontWeight: 'bold'},
  h3: {fontSize: SIZES.font3, fontWeight: 'bold'},
  h4: {fontSize: SIZES.font4, fontWeight: 'bold'},
  h5: {fontSize: SIZES.font5, fontWeight: 'bold'},
  h6: {fontSize: SIZES.font6, fontWeight: 'bold'},
  h7: {fontSize: SIZES.font7, fontWeight: 'bold'},
  h8: {fontSize: SIZES.font8, fontWeight: 'bold'},
  h9: {fontSize: SIZES.font9, fontWeight: 'bold'},
  body1: {fontSize: SIZES.font1, fontWeight: 'normal'},
  body2: {fontSize: SIZES.font2, fontWeight: 'normal'},
  body3: {fontSize: SIZES.font3, fontWeight: 'normal'},
  body4: {fontSize: SIZES.font4, fontWeight: 'normal'},
  body5: {fontSize: SIZES.font5, fontWeight: 'normal'},
  body6: {fontSize: SIZES.font6, fontWeight: 'normal'},
  body7: {fontSize: SIZES.font7, fontWeight: 'normal'},
  body8: {fontSize: SIZES.font8, fontWeight: 'normal'},
  body9: {fontSize: SIZES.font9, fontWeight: 'normal'},
  body10: {fontSize: SIZES.font10, fontWeight: 'normal'},
};

const appTheme = {
  COLORS,
  SIZES,
};

export default appTheme;
