import React from 'react'
import Game from './features/core/components/Game'
import GlobalCss from './global.css'
import Providers from './features/core/components/Providers'

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