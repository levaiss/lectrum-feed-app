// Core
import { type FC, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { AppStyled } from './components/styled/AppStyled'
import { toast, ToastContainer, Slide } from 'react-toastify'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PrivateRoute } from './components/PrivateRoute'
import { PublicRoute } from './components/PublicRoute'
import { Footer } from './components/Footer'

// Pages
import { HomePage } from './pages/HomePage'
import { LoginPage } from './pages/LoginPage'
import { SignUpPage } from './pages/SignUpPage'
import { Feed } from './pages/Feed'
import { PostCommentsPage } from './pages/PostCommentsPage'
import { ProfilePage } from './pages/ProfilePage'
import { NoMatch } from './pages/NoMatch'
import { NewPasswordPage } from './pages/NewPasswordPage'

// Store
import { getErrorMessage, setErrorMessage } from './store/uiSlice'

// Instrument
import { toastOptions } from './constants/toastOptions'

export const App: FC = () => {
  const errorMessage: string | null = useSelector(getErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, toastOptions)

      dispatch(setErrorMessage(null))
    }
  }, [errorMessage])

  return (
        <AppStyled>
            <ToastContainer newestOnTop transition = { Slide } />
            <Routes>
                <Route index element = { <HomePage /> } />
                <Route element = {
                    <PublicRoute restricted redirectPath = '/feed' />
                }>
                    <Route path = '/login' element = { <LoginPage /> } />
                    <Route path = '/signup' element = { <SignUpPage /> } />
                </Route>
                <Route element = {
                    <PrivateRoute redirectPath = '/login'>
                        <DefaultLayout />
                    </PrivateRoute>
                }>
                    <Route path = '/feed' element = { <Feed /> } />
                    <Route path = '/feed/:postId' element = { <PostCommentsPage /> } />
                    <Route path = '/profile' element = { <ProfilePage /> } />
                    <Route path = '/profile/new-password' element = { <NewPasswordPage /> } />
                </Route>
                <Route path = '*' element = { <NoMatch /> } />
            </Routes>
            <Footer />
        </AppStyled>
  )
}
