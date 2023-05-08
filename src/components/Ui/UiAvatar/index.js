export const UiAvatar = ({ src, className, alt }) => {
    return (
        <img
            src = { src || '/img/no-profile-picture-icon.svg' }
            className = { className }
            alt = { alt } />
    );
};
