export const Composer = () => {
    return (
        <section className = 'composer'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'User avatar' />
            <form>
                <textarea placeholder = "What's on your mind, Chuck Norris?" name = 'body'></textarea>
                <button type = 'submit'>
                  Запостити
                </button>
            </form>
        </section>
    );
};
