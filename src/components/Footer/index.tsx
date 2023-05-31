// Core
import { type FC } from 'react'

export const Footer: FC = () => {
  return (
        <footer className = 'footer'>
            <p>Lectrum LLC { new Date().getFullYear() } Версія: 1.0.10</p>
        </footer>
  )
}
