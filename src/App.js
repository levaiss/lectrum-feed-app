// Core
import { Routes, Route } from 'react-router-dom';

// Components
import { DefaultLayout } from './layouts/DefaultLayout';
import { SignUpPage } from './pages/SignUpPage';
import { Feed } from './pages/Feed';
import { PostCommentsPage } from './pages/PostCommentsPage';
import { ProfilePage } from './pages/ProfilePage';
import { NoMatch } from './pages/NoMatch';
import { Footer } from './components/Footer';

export const App = () => {
    return (
        <>
            <Routes>
                <Route index element = { <main><h1>Home page</h1></main> } />
                <Route path = 'signup' element = { <SignUpPage /> } />
                <Route element = { <DefaultLayout /> }>
                    <Route path = 'feed' element = { <Feed /> } />
                    <Route path = 'feed/:postId' element = { <PostCommentsPage /> } />
                    <Route path = 'profile' element = { <ProfilePage /> } />
                </Route>

                <Route path = '*' element = { <NoMatch /> } />
            </Routes>

            <Footer />
        </>
    );
};
