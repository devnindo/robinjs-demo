import { useState } from 'react'
import { Provider as StoreProvider } from 'jotai'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import R from '@components'
import { screen, localStorage, sessionStorage } from './robinjs/utils/index'
import Temp from '@/temp/Temp'

function AppRoot() {

  const [count, setCount] = useState(0)
  // const { cookie, platform, screen, storage } = useRobinUtils()
  screen.subscribe((size) => {
    console.log('app-root', size.height)
  })
  localStorage.set("jadu", "kadu")
  sessionStorage.set("jadu", "kadu", 9000)
  console.log(localStorage.get("jadu"))
  console.log(sessionStorage.get("jadu"))


  // cookie.set('jadu', 'madu')
  // console.log(cookie.getAll())
  // console.log('platform', platform.is.firefox, platform.version)
  // console.log('screen-app', screen.gt.sm, screen.width, screen.height)

  return (
    <StoreProvider>
      <Temp />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1><R.FirstSample name="Rashed" msg="You are a Ducker" /></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </StoreProvider>
  )
}

export default AppRoot
