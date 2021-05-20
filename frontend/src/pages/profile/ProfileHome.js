import {Button, Col, Row, Spin, Typography} from 'antd';
import {useContext} from 'react';
import {ProfileContext} from './ProfileContext';
import {useHistory} from 'react-router-dom';

const { Title, Text } = Typography;

const ProfileHome = () => {
    const {user} = useContext(ProfileContext);
    let history = useHistory();

    const addAnimal = () => {
        history.push("/profile/add");
    }

    const showAnimals = () => {
        history.push("/profile/animals");
    }

    if (!user) {
        return <Spin />
    }

    return (
        <>
            <Title>Привіт, {user.name}!</Title>
            <Title level={3} style={{'marginBottom': '30px'}}>Дані користувача: </Title>
            <Row style={{'marginBottom': '60px'}}>
                <Col span={12}>
                    <Text>E-mail:</Text>
                    <Title level={4} className={'profile-home-info-title'}>{user.email}</Title>
                </Col>
                <Col span={12}>
                    <Text>Телефон:</Text>
                    <Title level={4} className={'profile-home-info-title'}>{user.phone}</Title>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col>
                    <Button type="primary" onClick={addAnimal}>Додати оголошення</Button>
                </Col>
                <Col>
                    <Button onClick={showAnimals}>Мої тварини</Button>
                </Col>
            </Row>
        </>
    );
};

export default ProfileHome;
