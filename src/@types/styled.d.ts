import 'styled-components'
import { Default } from '../styles/theme/default'

type themeType = typeof Default

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends themeType {}
}
