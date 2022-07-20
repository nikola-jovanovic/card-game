import { render as renderRtl, screen, fireEvent, waitFor } from '@testing-library/react'
import Providers from '../features/core/components/Providers'

export { screen, fireEvent, waitFor }

export const render = (component: JSX.Element) => renderRtl(
  <Providers>
    {component}
  </Providers>
)