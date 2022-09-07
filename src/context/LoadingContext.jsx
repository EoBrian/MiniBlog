import {
  createContext,
  useContext,
  useState
} from "react"

const LoadingContext = createContext()

const [isLoading, setIsLoading] = useState(null)
const [isError, setIsError] = useState(null)

export const LoadingProvider = ({children})=> {
  <LoadingContext.Provider value={{
    isLoading,
    setIsLoading,
    isError,
    setIsError
  }}>

    {children}
  </LoadingContext.Provider>
}


export const useLoadingContext = ()=> {
  return useContext(LoadingContext)
} 