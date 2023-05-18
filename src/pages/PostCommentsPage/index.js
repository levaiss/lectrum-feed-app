// Core
import { useParams } from 'react-router-dom';

// Components
import { PostComments } from '../../components/PostComments';

// Hooks
import { usePostDetails } from '../../hooks/usePostDetails';

export const PostCommentsPage = () => {
    const { postId } = useParams();
    const {
        status: postStatus,
        data: postData,
    } = usePostDetails(postId);

    return (
        <PostComments
            status = { postStatus }
            post = { postData } />
    );
};
