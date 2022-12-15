import { createStitches, PropertyValue } from '@stitches/react'
import { BreakpointsEnum } from '@otica/@types'

export const colors = {
  primary: 'rgba(248, 0, 50, 1)',
  primary_100: 'rgba(7, 59, 89, 1)',
  primary_80: 'rgba(7, 59, 89, 0.8)',
  primary_60: 'rgba(7, 59, 89, 0.6)',
  primary_40: 'rgba(7, 59, 89, 0.4)',
  primary_20: 'rgba(7, 59, 89, 0.2)',
  primary_10: 'rgba(7, 59, 89, 0.1)',
  secondary_100: 'rgba(254, 80, 0, 1)',
  secondary_80: 'rgba(254, 80, 0, 0.8)',
  secondary_60: 'rgba(254, 80, 0, 0.6)',
  secondary_40: 'rgba(254, 80, 0, 0.4)',
  secondary_20: 'rgba(254, 80, 0, 0.2)',
  secondary_10: 'rgba(254, 80, 0, 0.1)',
  tertiary_100: 'rgba(51, 76, 125, 1)',
  tertiary_80: 'rgba(51, 76, 125,0.8)',
  tertiary_60: 'rgba(51, 76, 125,0.6)',
  tertiary_40: 'rgba(51, 76, 125,0.4)',
  tertiary_20: 'rgba(51, 76, 125,0.2)',
  tertiary_10: 'rgba(51, 76, 125,0.1)',
  base_100: 'rgba(44, 49, 49, 1)',
  base_80: 'rgba(44, 49, 49,0.8)',
  base_60: 'rgba(44, 49, 49,0.6)',
  base_40: 'rgba(44, 49, 49,0.4)',
  base_20: 'rgba(44, 49, 49,0.2)',
  base_10: 'rgba(44, 49, 49,0.1)',
  gray_100: 'rgb(238, 238, 238, 1)',
  gray_80: 'rgb(238, 238, 238, 0.8)',
  gray_60: 'rgb(238, 238, 238, 0.6)',
  gray_40: 'rgb(238, 238, 238, 0.4)',
  gray_20: 'rgb(238, 238, 238, 0.2)',
  gray_10: 'rgb(238, 238, 238, 0.1)',
  white: 'rgba(255, 255, 255)',
  success_100: 'rgba(111, 200, 114, 1)',
  success_80: 'rgba(111, 200, 114,0.8)',
  success_60: 'rgba(111, 200, 114,0.6)',
  success_40: 'rgba(111, 200, 114,0.4)',
  success_20: 'rgba(111, 200, 114,0.2)',
  success_10: 'rgba(111, 200, 114,0.1)',
  warning_100: 'rgba(255, 182, 40, 1)',
  warning_80: 'rgba(255, 182, 40,0.8)',
  warning_60: 'rgba(255, 182, 40,0.6)',
  warning_40: 'rgba(255, 182, 40,0.4)',
  warning_20: 'rgba(255, 182, 40,0.2)',
  warning_10: 'rgba(255, 182, 40,0.1)',
  error_100: 'rgba(255, 92, 92,1)',
  error_80: 'rgba(255, 92, 92,0.8)',
  error_60: 'rgba(255, 92, 92,0.6)',
  error_40: 'rgba(255, 92, 92,0.4)',
  error_20: 'rgba(255, 92, 92,0.2)',
  error_10: 'rgba(255, 92, 92,0.1)',
  info_100: 'rgba(38, 133, 202,1)',
  info_80: 'rgba(38, 133, 202,0.8)',
  info_60: 'rgba(38, 133, 202,0.6)',
  info_40: 'rgba(38, 133, 202,0.4)',
  info_20: 'rgba(38, 133, 202,0.2)',
  info_10: 'rgba(38, 133, 202,0.1)',
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors,
    fontSizes: {
      h1: '5rem', // 80px
      h2: '3.5rem', // 56px
      h3: '2.75rem', // 44px
      h4: '2.25rem', // 36px
      h5: '2rem', // 32px
      h6: '1.75rem', // 28px
      p1: '1.5rem', // 24px
      p2: '1.25rem', // 20px
      p3: '1rem', // 16px
      p4: '0.875rem', // 14px
      p5: '0.75rem', // 12px
    },
    fonts: {
      nunitoLight: 'Nunito Light',
      nunitoNormal: 'Nunito Font',
      nunitoRegular: 'Nunito Regular',
      nunitoSemibold: 'Nunito SemiBold',
      nunitoBold: 'Nunito Bold',
      openSansLight: 'Open Sans Light',
      openSansNormal: 'Open Sans Font',
      openSansRegular: 'Open Sans Regular',
      openSansSemibold: 'Open Sans SemiBold',
    },
    sizes: {
      // -> height
      28: '28px',
      35: '35px',
      40: '40px',
    },
    space: {
      // -> padding / margin
      0: '4px',
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '40px',
      7: '56px',
      8: '72px',
      9: '80px',
      10: '96px',
      11: '120px',
    },
    shadows: {
      'shadow_base': '0px 0.42px 3px rgba(0, 0, 0, 0.4)',
      'shadow_info': '0px 0.42px 3px rgba(38, 133, 202, 0.6)',
    },
  },
  media: {
    xs: `(min-width: ${BreakpointsEnum.xs}px)`,
    sm: `(min-width: ${BreakpointsEnum.sm}px)`,
    md: `(min-width: ${BreakpointsEnum.md}px)`,
    lg: `(min-width: ${BreakpointsEnum.lg}px)`,
    xl: `(min-width: ${BreakpointsEnum.xl}px)`,
    xxl: `(min-width: ${BreakpointsEnum.xxl}px)`,
  },

  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
  },
})
