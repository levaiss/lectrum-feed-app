// Components
import { LoadingOverlay } from '../LoadingOverlay';
import { Post } from '../Post';

export const Posts = ({ status, posts }) => {
    return (
        <LoadingOverlay status = { status }>
            <>
                { posts?.map((post) => <Post
                    post = { post }
                    key = { post.hash } />)
                }
            </>
        </LoadingOverlay>
    );
};
