import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const dataContext = createContext() 

function ContextProvider(props) {

    const [currentData, setCurrentData] = useState()

  return (
    <dataContext.Provider value={{currentData, setCurrentData}}>
        {
            props.children
        }
    </dataContext.Provider>
  )
}

export default ContextProvider