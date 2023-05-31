// Core
import { type FC, type ReactElement } from 'react'
import { Provider } from 'react-redux'

// Root store
import Store from '../store'

interface StoreProviderPropTypes {
  children: ReactElement
}

export const StoreProvider: FC<StoreProviderPropTypes> = ({ children }) => {
  return (
        <Provider store = { Store }>
            { children }
        </Provider>
  )
}
