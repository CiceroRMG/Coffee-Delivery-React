import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'

interface Location {
  city: string
  state: string
}

interface LocationContextType {
  location: Location | null
  error: string | null
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
)

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const response = await fetch(
              `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_GEOAPI_KEY}`,
            )
            const data = await response.json()
            console.log(data)

            const { city, state } = data.results[0].components
            setLocation({ city, state })
          } catch (error) {
            setError('Erro ao obter a localização')
          }
        },
        (error) => {
          setError(error.message)
        },
      )
    } else {
      setError('Geolocalização não é suportada por este navegador.')
    }
  }, [])

  return (
    <LocationContext.Provider value={{ location, error }}>
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => {
  const context = useContext(LocationContext)
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider')
  }
  return context
}
