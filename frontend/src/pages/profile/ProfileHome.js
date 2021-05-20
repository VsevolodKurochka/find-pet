import {Button, Col, Row, Spin, Typography, Modal, Form, Input, notification} from 'antd';
import {useContext, useState} from 'react';
import {ProfileContext} from './ProfileContext';
import {useHistory} from 'react-router-dom';
import {notifyHandler, notifySuccessHandler} from '../../notifications';
import api from '../../api';

const { Title, Text } = Typography;

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 15 },
};

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 3,
    },
};

const ProfileHome = () => {
    const {user, setUser} = useContext(ProfileContext);
    let history = useHistory();

    const [isModalVisible, setIsModalVisible] = useState(false);

    const addAnimal = () => {
        history.push("/profile/add");
    }

    const showAnimals = () => {
        history.push("/profile/animals");
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const onFinish = ({email, name, phone}) => {
        api
            .put(`/users/${user._id}`, {email, name, phone})
            .then(({data}) => {
                notification.success(notifySuccessHandler('user_edited'));
                setUser(data);
            })
            .catch((e) => {
                notification.error(notifyHandler(e.response.data.message))
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
                <Col span={24}>
                    <Button type="primary" onClick={showModal}>Редагувати</Button>
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
            <Modal title="Редагувати дані" visible={isModalVisible} onCancel={closeModal} footer={null}>
                <Form
                    {...layout}
                    initialValues={{ email: user.email, name: user.name, phone: user.phone }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{type: 'email', message: 'Введіть коректний E-mail!',}, { required: true, message: 'Введіть E-mail!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Ім'я"
                        name="name"
                        rules={[{ required: true, message: 'Введіть Ім\'я!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Телефон"
                        rules={[{ required: true, message: 'Введіть телефон!' }]}>
                        <Input style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Зберегти
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ProfileHome;
