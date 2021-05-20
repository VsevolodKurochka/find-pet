import {Button, Select, Form, Input, notification, Spin, Typography, InputNumber, Radio} from 'antd';
import {useContext} from 'react';
import {ProfileContext} from './ProfileContext';
import {notifyHandler, notifySuccessHandler} from '../../notifications';
import api from '../../api';

const { Title, Text } = Typography;
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const ProfileAddAnimal = () => {
    const [form] = Form.useForm();
    const {user} = useContext(ProfileContext);

    const onFinish = async ({name, age, male, city, sterilized, description}) => {
        await api
            .post('/animals', {
                name, age, male: male === 'male', city, sterilized: sterilized === 'yes', description, curator: user._id
            })
            .then(async (response) => {
                await api.put(`/users/${user._id}`, {
                    animals: [response.data._id]
                });
                notification.success(notifySuccessHandler('animal_added'));
                form.resetFields();
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
            <Title>Додати друга!</Title>
            <Form
                layout={'vertical'}
                {...layout}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

                <Form.Item
                    label="Кличка"
                    name="name"
                    rules={[{ required: true, message: 'Введіть кличку!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Вік"
                    name="age"
                    rules={[{ required: true, message: 'Введіть Вік!' }, { type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item name="male" label="Стать" rules={[{ required: true }]}>
                    <Select
                        placeholder="Виберіть стать"
                    >
                        <Option value="male">Хлопчик</Option>
                        <Option value="female">Дівчинка</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Місто"
                    name="city"
                    rules={[{ required: true, message: 'Введіть Місто!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="sterilized" label="Стерилізована чи ні?">
                    <Radio.Group>
                        <Radio value="yes">Так</Radio>
                        <Radio value="no">Ні</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Коротка історія"
                    name="description">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Підтвердити
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default ProfileAddAnimal;
