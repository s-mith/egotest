import '@/styles/globals.css'
import UserList from '@/components/userList'
import Motd from '@/components/motd'
import { useState, useEffect } from "react"
import { createContext } from 'react'
import { useRouter } from 'next/router'
import Map from '@/components/map'
import StyledButton from '@/components/styledButton'
 


export const PasswordContext = createContext();


export default function App({ Component, pageProps }) {
  
  const [password, setPassword] = useState("")
  
  

  const mymotd = "leafs website!    "


  const slug = useRouter().asPath
  const first = slug.split('/')[1]


  const [mobileMenuState, setMobileMenuState] = useState(0)

  const [mapState, setMapState] = useState(false)
  const [pplState, setPplState] = useState(false)

  const reset = () => {
    setMapState(false)
    setPplState(false)
  }

  const mapClick = () => {
    if (mobileMenuState == 1) {

      setMobileMenuState(0)
      reset()
      
    } else {

    setMobileMenuState(1)
    reset()
    setMapState(true)
    
    }
  }

  const pplClick = () => {
    if (mobileMenuState == 2) {

      setMobileMenuState(0)
      reset()
      
    }
    else {

      setMobileMenuState(2)
      reset()
      setPplState(true)
    }
  }




  return (
    // add footer to the bottom of the page that is stationary
    <PasswordContext.Provider value={[password,setPassword]}>


      <div className='grid grid-cols-7 grid-rows-6 h-screen'>

        <div className='col-span-7 row-span-1'>
          {/* header */}

          <div className='grid grid-cols-7 grid-rows-2 h-full '>

            <div className='col-span-7 row-span-1 '>

              <Motd mymotd={mymotd} />
            </div>

            <div className='col-span-7 row-span-1 '>
              <div className='grid grid-cols-2 grid-rows-1 h-full '>
                <div className='col-span-1 row-span-1 min-[943px]:hidden'>
                  <StyledButton text={"map :P"} onclick={mapClick} selected={mapState}/>
                </div>
                <div className='col-span-1 row-span-1 min-[943px]:hidden'>
                  <StyledButton text={"ppl!!!"} onclick={pplClick} selected={pplState}/>
                </div>
              </div>

            </div>

            <div className='col-span-7 row-span-1 bg-leafbrown bg-opacity-30 w-full h-full max-[943px]:hidden'>
              <Map active={first} />
            </div>

          </div>


        </div>
        <div className='col-span-1 row-span-4 max-[943px]:hidden'></div>
        <div className='block col-span-1 row-span-4 bg-leafpink-500  border-double border-4 border-leafyellow  max-[943px]:hidden'>
          <UserList />
        </div>
        <div className='col-span-3 row-span-4 border-4 border-leafbrown max-[943px]:row-span-5 max-[943px]:col-span-7'>

          <div className='w-full h-full max-[943px]:hidden'>
            <Component {...pageProps} />
          </div>

          {mobileMenuState == 0 && 
            <div className='w-full h-full min-[943px]:hidden'>
            <Component {...pageProps} />
          </div>}
          {mobileMenuState == 1 && 
          <div className='w-full h-full bg-leafbrown bg-opacity-30 min-[943px]:hidden'>
            <Map active={first} />
          </div>
          }
          {mobileMenuState == 2 && 
          <div className='min-[943px]:hidden'>
            <UserList />
          </div>
          }

  
          

        </div>
        <div className='col-span-1 row-span-4 bg-leafpink-500 border-double border-4 border-leafyellow max-[943px]:hidden'></div>
        <div className='col-span-1 row-span-4'></div>
        <div className='col-span-7 row-span-1 max-[943px]:hidden'>
          <div className='grid grid-cols-7 grid-rows-2 h-full'>
            <div className='col-span-1 row-span-1'></div>
            <div className='col-span-5 row-span-1 bg-leafyellow'></div>
            <div className='col-span-1 row-span-1'></div>
            <div className='col-span-7 row-span-1'></div>
          </div>
        </div>
      </div>



    </PasswordContext.Provider>





  )
}
