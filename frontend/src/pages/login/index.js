import { Form, Input, Button, Typography, notification } from 'antd';
import {LayoutPage} from '../../Layout';
import api from '../../api';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../../useAuth';
import {notifyHandler} from '../../notifications';
import {useContext} from 'react';
import {AuthContext} from '../../AuthContext';

const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
};

const tailLayout = {
    wrapperCol: {
        offset: 10,
        span: 3,
    },
};

const { Title } = Typography;

const LoginPage = () => {
    const {isAuthenticated, login} = useContext(AuthContext);

    const onFinish = async ({email, password}) => {

        await api
            .post('/auth/login', {email, password})
            .then(({data}) => {
                login(data.token, data.id);
            })
            .catch((e) => {
                notification.error(notifyHandler(e.response.data.message))
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (isAuthenticated) {
        return <Redirect to={{pathname: '/profile'}} />
    }

    return (
        <LayoutPage>
            <Title style={{'textAlign': 'center'}}>Вхід до системи:</Title>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Введіть Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введіть пароль!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Підтвердити
                    </Button>
                </Form.Item>
            </Form>
        </LayoutPage>
    );
};

export default LoginPage;
