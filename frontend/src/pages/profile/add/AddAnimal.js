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
            <Title>???????????? ??????????!</Title>
            <Form
                layout={'vertical'}
                {...layout}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

                <Form.Item
                    label="????????????"
                    name="name"
                    rules={[{ required: true, message: '?????????????? ????????????!' }]}>
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
                            <Typography.Text>?????????????? ????????????????????: </Typography.Text><br />
                            <img
                                src={previewSource}
                                alt="chosen"
                                style={{ height: '100px' }}
                            />
                        </div>
                    )}
                </div>


                <Form.Item
                    label="??????"
                    name="age"
                    rules={[{ required: true, message: '???????????????? ??????!' }]}>
                    <Select
                        placeholder="???????????????? ??????"
                    >
                        <Option value="???? 1 ????????">???? 1 ????????</Option>
                        <Option value="1-3 ????????">1-3 ????????</Option>
                        <Option value="3-5 ??????????">3-5 ??????????</Option>
                        <Option value="5-9 ??????????">5-9 ??????????</Option>
                        <Option value="?????? 10 ??????????">?????? 10 ??????????</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="male" label="??????????" rules={[{ required: true }]}>
                    <Select
                        placeholder="???????????????? ??????????"
                    >
                        <Option value="male">??????????????</Option>
                        <Option value="female">????????????????</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="??????????"
                    name="city"
                    rules={[{ required: true, message: '???????????????? ??????????!' }]}>
                    <Select
                        placeholder="???????????????? ??????????"
                    >
                        {cities.map((city, index) => <Option value={city} key={city}>{city}</Option>)}
                    </Select>
                </Form.Item>

                <Form.Item name="sterilized" label="?????????????????????????? ???? ?????">
                    <Radio.Group>
                        <Radio value="yes">??????</Radio>
                        <Radio value="no">????</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="?????????????? ??????????????"
                    name="description">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        ??????????????????????
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default ProfileAddAnimal;
