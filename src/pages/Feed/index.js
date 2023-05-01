// Core
import { usePosts } from '../../hooks/usePosts';
import { useRecentComments } from '../../hooks/useRecentComments';

// Components
import { Navigation } from '../../components/Navigation';
import { Posts } from '../../components/Posts';
import { RecentComments } from '../../components/RecentComments';
import { Composer } from '../../components/forms/Composer';

export const Feed = () => {
    const {
        status: postsFetchStatus,
        data: postsData,
    } = usePosts();
    const {
        status: recentCommentsFetchStatus,
        data: recentCommentsData,
    } = useRecentComments();

    return (
        <main>
            <div className = 'feed-wrapper'>
                <div className = 'container'>
                    <Navigation />
                    <div className = 'posts'>
                        <h1 className = 'title'>Стіна</h1>
                        <Composer />
                        <Posts
                            status = { postsFetchStatus }
                            posts = { postsData } />
                    </div>
                    <RecentComments
                        status = { recentCommentsFetchStatus }
                        comments = { recentCommentsData } />
                </div>
            </div>
        </main>
    );
};
