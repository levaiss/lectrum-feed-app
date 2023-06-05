// Core
import { type FC, type ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../lib/StoreContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

interface WrapperProps {
  children: ReactElement
}

export const Wrapper: FC<WrapperProps> = ({ children }) => (
    <BrowserRouter>
        <StoreProvider>
            <QueryClientProvider client = { queryClient }>
                { children }
            </QueryClientProvider>
        </StoreProvider>
    </BrowserRouter>
)
