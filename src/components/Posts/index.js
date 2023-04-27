import { Post } from '../Post';

export const Posts = () => {
    const posts = [1, 2, 3];
    const postsList = posts.map(
        (number) => <Post
            key = { number.toString() } />,
    );

    return (
        <div className = 'posts-container'>
            { postsList }
        </div>
    );
};
