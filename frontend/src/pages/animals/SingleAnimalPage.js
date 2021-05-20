import {LayoutPage} from '../../Layout';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import SingleAnimal from './SingleAnimal';
import api from '../../api';
import {notification} from 'antd';
import {notifyHandler} from '../../notifications';

const SingleAnimalPage = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        setLoading(true);
        api.get(`/animals/${id}`)
            .then(({data}) => setAnimal(data))
            .catch((e) => notification.error(notifyHandler(e.response.data.message)))
            .finally(() => setLoading(false))
    }, [id]);

    return (
        <LayoutPage>
            <SingleAnimal animal={animal} loading={loading} />
        </LayoutPage>
    );
};

export default SingleAnimalPage;
