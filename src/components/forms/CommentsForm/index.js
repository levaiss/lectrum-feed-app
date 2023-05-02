export const CommentsForm = () => {
    return (
        <form className = 'commentForm'>
            <img
                src = 'https://placeimg.com/256/256/animals'
                className = 'comment-avatar'
                alt = 'User avatar' />
            <label>
                <input
                    type = 'text'
                    placeholder = 'Коментарій...'
                    name = 'body' />
            </label>
            <button type = 'submit'>
                Коментувати
            </button>
        </form>
    );
};
