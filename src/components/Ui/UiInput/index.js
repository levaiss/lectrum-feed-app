export const UiInput = (props) => {
    return (
        <label className = 'ui-input'>
            <div>{ props.label }</div>
            <input
                name = { props.name }
                type = { props.type }
                placeholder = { props.placeholder }
                { ...props.register } />
            { props.error && <span className = 'ui-input__error-message'>{ props.error.message }</span> }
        </label>
    );
};

UiInput.defaultProps = {
    type: 'text',
};
