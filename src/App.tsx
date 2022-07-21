import React from 'react'

import Game from './features/core/components/Game'
import Providers from './features/core/components/Providers'
import GlobalCss from './global.css'

const App = (): JSX.Element => {
  return (
    <Providers >
      <>
        <GlobalCss />
        <Game />
      </>
    </Providers>
  )
}

export default App