// Core
import { type FC } from 'react'

// Components
import { FooterStyled } from '../styled/FooterStyled'

export const Footer: FC = () => {
  return (
        <FooterStyled>
            <p>Lectrum LLC { new Date().getFullYear() } Версія: 1.0.10</p>
        </FooterStyled>
  )
}
