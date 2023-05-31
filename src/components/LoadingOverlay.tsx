// Core
import { type FC, type ReactElement } from 'react'

// Instruments
import {
  ERROR_MESSAGE,
  LOADING_MESSAGE
} from '../constants/statusMessages'

interface LoadingOverlayProps {
  status: string
  children: ReactElement
}

export const LoadingOverlay: FC<LoadingOverlayProps> = ({ status, children }) => {
  return (
        <>
            { status === 'loading' &&
              (<span className = 'status-message'>{ LOADING_MESSAGE }</span>)
            }
            { status === 'error' &&
              (<span className = 'status-message'>{ ERROR_MESSAGE }</span>)
            }
            { children }
        </>
  )
}
