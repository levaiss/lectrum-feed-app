// Core
import { Routes, Route } from 'react-router-dom';

// Components
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

export const App = () => {
    return (
        <>
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
};
