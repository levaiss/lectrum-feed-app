// Core
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// Components
import { PostComments } from '../../components/PostComments';

// Hooks
import { usePostDetails } from '../../hooks/usePostDetails';

export const PostCommentsPage = observer(() => {
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
});
