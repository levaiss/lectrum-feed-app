import { Navigation } from '../../components/Navigation';
import { Posts } from '../../components/Posts';
import { RecentComments } from '../../components/RecentComments';
import { Composer } from '../../components/forms/Composer';

export const Feed = () => {
    return (
        <main>
            <div className = 'feed-wrapper'>
                <div className = 'container'>
                    <Navigation />
                    <div className = 'posts'>
                        <h1 className = 'title'>Стіна</h1>
                        <Composer />
                        <Posts />
                    </div>
                    <RecentComments />
                </div>
            </div>
        </main>
    );
};
