import { Form, Input, Button, Typography, notification, Select } from 'antd';
import {LayoutPage} from '../../Layout';
import api from '../../api';
import {Redirect, useHistory} from 'react-router-dom';
import {notifications, notifyHandler} from '../../notifications';
import {useContext} from 'react';
import {AuthContext} from '../../AuthContext';

const {Option} = Select;

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

const RegisterPage = () => {
    const {isAuthenticated} = useContext(AuthContext);
    let history = useHistory();

    const onFinish = async ({email, password, name, phone, prefix}) => {
        await api
            .post('/auth/registration', {email, password, name, phone: `+${prefix}${phone}`})
            .then((data) => {
                history.push('/login');
            })
            .catch((e) => {
                notification.error(notifyHandler(e.response.data.message))
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option value="38">+38</Option>
                <Option value="7">+7</Option>
            </Select>
        </Form.Item>
    );

    if (isAuthenticated) {
        return <Redirect to={{pathname: '/profile'}} />
    }

    return (
        <LayoutPage>
            <Title style={{'textAlign': 'center'}}>Зареєструватися</Title>
            <Form
                {...layout}
                name="basic"
                initialValues={{ prefix: '38' }}
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
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введіть пароль!' }, {min: 5, message: 'Мінімум 5 символів'}]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Підтвердити пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Введіть пароль!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error(notifications.password_duplicate));
                            },
                        }),
                    ]}>
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

export default RegisterPage;
