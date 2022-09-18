/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
  'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
  'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
  'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
  'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
  'OpenSans-Regular': require('../../assets/fonts/OpenSans-Regular.ttf'),
  'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic.ttf'),
  'GreatVibes-Regular': require('../../assets/fonts/GreatVibes-Regular.ttf'),

  'Inter-Regular': require('../../assets/fonts/Inter-Regular.otf'),
  'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.otf'),
  'SourceSansPro-Regular': require('../../assets/fonts/SourceSansPro-Regular.ttf'),
  'SourceSansPro-SemiBold': require('../../assets/fonts/SourceSansPro-SemiBold.ttf'),
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),

};
const type = {
  primary: 'Poppins-Regular',
  secondary: 'Inter-Regular',
  black: 'Poppins-Black',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
  semi: 'Poppins-SemiBold',
};

const Fonts = { customFonts, type };

export default Fonts;
