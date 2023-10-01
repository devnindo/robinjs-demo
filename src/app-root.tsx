import { useState } from 'react'
import TailWind from '@/temp/tail-wind'

function AppRoot() {

  const [count, setCount] = useState(0)

  return (
     <>
       <TailWind
         name="Rashed"
         description="Studpidly amazing guy with no-nonsense work ethics currently actively looking for jobs"
         role="Lead"
         refLinks={[
             { label:"Profile", link:"https://linktree/rashed091"},
             { label: "Company", link: "https://peddlecloud.com"}
         ]}
       />
     </>
  )
}

export default AppRoot
