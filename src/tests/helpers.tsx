// Core
import { type ReactNode } from 'react'
import { StoreProvider } from '../lib/StoreContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

export const wrapper = ({ children }: { children: ReactNode }) => (
    <StoreProvider>
        <QueryClientProvider client = { queryClient }>
            { children }
        </QueryClientProvider>
    </StoreProvider>
)
