import { fireEvent, render as renderRtl, screen, waitFor } from '@testing-library/react'

import Providers from '../features/core/components/Providers'

export { fireEvent, screen, waitFor }

interface Screen {
  width: number
  height: number
}

export enum Screens {
  Mobile,
  Desktop
}

export const screens: {
  [screen in Screens]: Screen
} = {
  [Screens.Mobile]: { width: 768, height: 1024 },
  [Screens.Desktop]: { width: 1920, height: 1080 }
}

export const render = (component: JSX.Element, { screen = Screens.Desktop }: { screen?: Screens } = {}) => {
  window.resizeTo(screens[screen].width, screens[screen].height)

  return renderRtl(
    <Providers>
      {component}
    </Providers>
  )
}