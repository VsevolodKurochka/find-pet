import {Spin, Typography, Row, Col, Button} from 'antd';
import {useContext} from 'react';
import {ProfileContext} from '../ProfileContext';
import {Animal} from '../../../components/animal/Animal';
import {useHistory} from 'react-router-dom';

const { Title } = Typography;

const ProfileAnimals = () => {
    const {user} = useContext(ProfileContext);
    let history = useHistory();

    function handleClick() {
        history.push("/profile/add");
    }

    if (!user) {
        return <Spin />
    }

    if (!user.animals.length) {
        return (
            <>
                <Title>Додай друзів!</Title>
                <Button type="primary" onClick={handleClick}>Додати друга</Button>
            </>
        )
    }

    return (
        <>
            <Title>Твої друзі!</Title>
            <Row gutter={16}>
                {user.animals.reverse().map((animal) => <Col span={6}>
                    <Animal animal={animal} />
                </Col>)}
            </Row>
        </>
    );
};

export default ProfileAnimals;
