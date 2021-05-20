import {LayoutPage} from '../../Layout';
import {notification} from 'antd';
import {useEffect, useState} from 'react';
import api from '../../api';
import {notifyHandler} from '../../notifications';
import Home from './Home';

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        setLoading(true)
        api.get('/animals').then(({data}) => setAnimals(data))
        .catch((e) => notification.error(notifyHandler(e.response.data.message)))
        .finally(() => setLoading(false))
    }, []);

    return (
        <LayoutPage>
            <Home loading={loading} animals={animals} />
        </LayoutPage>
    );
};

export default HomePage;
