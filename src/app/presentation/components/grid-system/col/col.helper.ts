import { css } from 'styled-components'

export const emptyResult = css``

export const getColWidth = (value: string) => {
  if (!value || value === 'auto') return 'auto'

  const width = (+value / 12) * 100

  return `${width}%`
}
