export const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
} as const

export const UI_BREAKPOINTS = {
  breakpoints: {
    values: {
      xs: Breakpoints.xs,
      sm: Breakpoints.sm,
      md: Breakpoints.md,
      lg: Breakpoints.lg,
      xl: Breakpoints.xl,
      xxl: Breakpoints.xxl
    }
  }
}

export type TypeofBreakpoints = typeof Breakpoints
export type TypeofUIBreakpoints = typeof UI_BREAKPOINTS
