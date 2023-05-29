// Core
import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

// Components
import { Navigation } from '../../components/Navigation'

export const DefaultLayout: FC = () => {
  return (
        <main>
            <div className = 'feed-wrapper'>
                <div className = 'container'>
                    <Navigation />
                    <Outlet />
                </div>
            </div>
        </main>
  )
}
