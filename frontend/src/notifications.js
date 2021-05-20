const notifications = {
    user_data_not_correct: 'Дані не коректні',
    user_exists: 'Користувач уже існує',
    password_duplicate: 'Два введені паролі не збігаються',
    user_not_found: 'Такого користувача не існує',
    animal_not_found: 'Такої тварини не існує',

    animal_added: 'Тварина успішно додана'
};

const notifyHandler = (value) => ({
    message: 'Помилка!',
    description: value ? notifications[value] : 'Щось пішло не так...'
})

const notifySuccessHandler = (value) => ({
    message: 'Успіх!',
    description: notifications[value] ? notifications[value] : '...'
})

export {
    notifications,
    notifyHandler,
    notifySuccessHandler
};
