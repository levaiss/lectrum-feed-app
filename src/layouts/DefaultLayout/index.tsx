// Core
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import { DefaultLayoutStyled } from '../../components/styled/DefaultLayoutStyled'
import { Navigation } from '../../components/Navigation'

export const DefaultLayout: FC = () => {
  return (
        <DefaultLayoutStyled>
            <div className = 'container'>
                <Navigation />
                <Outlet />
            </div>
        </DefaultLayoutStyled>
  )
}
