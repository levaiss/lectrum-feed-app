// Core
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import { toast, ToastContainer, Slide } from 'react-toastify';
import { useEffect } from 'react';
import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import { Feed } from './pages/Feed';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { ProfilePage } from './pages/ProfilePage';
import { NoMatch } from './pages/NoMatch';
import { Footer } from './components/Footer';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';

// Hooks
import { useStore } from './hooks/useStore';

// Instrument
import { toastOptions } from './constants/toastOptions';

export const App = observer(() => {
    const { uiStore: { errorMessage, setErrorMessage } } = useStore();

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage, toastOptions);
            setErrorMessage(null);
        }
    }, [errorMessage]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <Routes>
                <Route index element = { <PublicRoute><HomePage /></PublicRoute> } />
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
                </Route>
                <Route path = '*' element = { <NoMatch /> } />
            </Routes>
            <Footer />
        </>
    );
});
