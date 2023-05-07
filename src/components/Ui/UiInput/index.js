export const UiInput = ({
    type = 'text', label, name, placeholder, register, error,
}) => {
    return (
        <label className = 'ui-input'>
            <div>{ label }</div>
            <input
                name = { name }
                type = { type }
                placeholder = { placeholder }
                { ...register } />
            { error && <span className = 'ui-input__error-message'>{ error.message }</span> }
        </label>
    );
};
