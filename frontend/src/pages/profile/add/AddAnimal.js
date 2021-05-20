import {Button, Select, Form, Input, notification, Spin, Typography, InputNumber, Radio} from 'antd';
import {useContext, useState} from 'react';
import {ProfileContext} from '../ProfileContext';
import {notifyHandler, notifySuccessHandler} from '../../../notifications';
import api from '../../../api';
import {cities} from './cities';
const { Title } = Typography;
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const ProfileAddAnimal = () => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [form] = Form.useForm();
    const {user} = useContext(ProfileContext);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const uploadImage = async (base64EncodedImage) => {
        const response = await api.post(
            '/images/upload',
            JSON.stringify({ image: base64EncodedImage }), {headers: { 'Content-Type': 'application/json' }}
        );
        return response.data.secure_url;
    };

    const addAnimalRequest = ({name, age, male, city, sterilized, description}, imageUrl) => {
        api
            .post('/animals', {
                name, age, description, city,
                male: male === 'male',
                sterilized: sterilized === 'yes',
                curator: user._id,
                images: [imageUrl]
            })
            .then(async (response) => {
                await api.post(`/users/animal`, {
                    animalId: response.data._id,
                    userId: user._id
                });
                notification.success(notifySuccessHandler('animal_added'));
                form.resetFields();
                setFileInputState('');
                setPreviewSource('');
            })
            .catch((e) => {
                notification.error(notifyHandler(e.response.data.message))
            });
    };


    const onFinish = (form) => {
        if (!selectedFile) return;
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = async () => {
            const imageUrl = await uploadImage(reader.result);
            await addAnimalRequest(form, imageUrl);
        };
        reader.onerror = () => {
            console.error('AHHHHHHHH!!');
        };
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
                <div style={{'marginBottom': '30px'}}>
                    <input
                        id="fileInput"
                        type="file"
                        name="image"
                        onChange={handleFileInputChange}
                        value={fileInputState}
                        className="form-input"
                    />
                    {previewSource && (
                        <div style={{marginTop: '20px'}}>
                            <Typography.Text>Вибране зображення: </Typography.Text><br />
                            <img
                                src={previewSource}
                                alt="chosen"
                                style={{ height: '100px' }}
                            />
                        </div>
                    )}
                </div>


                <Form.Item
                    label="Вік"
                    name="age"
                    rules={[{ required: true, message: 'Виберіть Вік!' }]}>
                    <Select
                        placeholder="Виберіть вік"
                    >
                        <Option value="До 1 року">До 1 року</Option>
                        <Option value="1-3 роки">1-3 роки</Option>
                        <Option value="3-5 років">3-5 років</Option>
                        <Option value="5-9 років">5-9 років</Option>
                        <Option value="Від 10 років">Від 10 років</Option>
                    </Select>
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
                    rules={[{ required: true, message: 'Виберіть Місто!' }]}>
                    <Select
                        placeholder="Виберіть місто"
                    >
                        {cities.map((city, index) => <Option value={city} key={city}>{city}</Option>)}
                    </Select>
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
