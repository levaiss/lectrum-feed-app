// Core
import { type FC } from 'react'

interface UiAvatarProps {
  src?: string
  className?: string
  alt: string
}

export const UiAvatar: FC<UiAvatarProps> = ({ src, className, alt }) => {
  return (
        <img
            src = { src ?? '/img/no-profile-picture-icon.svg' }
            className = { className }
            alt = { alt } />
  )
}
