import { Post } from '../Post';

export const Posts = ({ posts }) => {
    const postsList = posts.map(
        (post) => <Post
            post = { post }
            key = { post.hash } />,
    );

    return (
        <div className = 'posts-container'>
            { postsList }
        </div>
    );
};
