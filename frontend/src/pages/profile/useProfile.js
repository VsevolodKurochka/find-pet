import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../../AuthContext';
import api from '../../api';
import {notification} from 'antd';
import {notifyHandler} from '../../notifications';

const useProfile = () => {
    const {isAuthenticated, userId, token} = useContext(AuthContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user && userId) {
            api.get(`/users/${userId}`)
                .then(({data}) => setUser(data))
                .catch((e) => notification.error(notifyHandler(e.response.data.message)))
        }
    }, [user, userId]);

    return {
        user
    }
};

export {
    useProfile
};
