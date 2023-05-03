import { NavLink } from 'react-router-dom';

export const Profile = () => {
    return (
        <form className = 'form'>
            <div className = 'wrapper'>
                <div>
                    <h1>Привіт, Chuck Norris</h1>
                    <img src = 'https://placeimg.com/256/256/animals' alt = 'User avatar' />
                    <label>
                        <input placeholder = "Ім'я" type = 'text' />
                    </label>
                    <label>
                        <input placeholder = "Ім'я" type = 'Прізвище' />
                    </label>
                    <button className = 'loginSubmit' type = 'submit'>
                        Оновити профіль
                    </button>
                </div>
                <NavLink
                    to = '/profile/new-password'>
                    Змінити пароль →
                </NavLink>
            </div>
        </form>
    );
};
