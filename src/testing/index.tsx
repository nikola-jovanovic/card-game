import { fireEvent, render as renderRtl, screen, waitFor } from '@testing-library/react'

import Providers from '../features/core/components/Providers'

export { fireEvent, screen, waitFor }

export const render = (component: JSX.Element) => renderRtl(
  <Providers>
    {component}
  </Providers>
)