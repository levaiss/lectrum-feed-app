export const Navigation = () => {
    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'User avatar'
                        className = 'navigation-avatar'  />
                    <div className = 'user-status'>
                        <div className = 'status online'><span></span></div>
                    </div>
                </div>
              Chuck Norris
            </div>
            <a href = '#' className = 'navigation-item'>Профіль</a>
            <a href = '#' className = 'navigation-item active'>Стіна</a>
            <button className = 'logout'>Вийти</button>
        </div>
    );
};
