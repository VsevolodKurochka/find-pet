import {Col, Row, Spin, Typography} from 'antd';
import FemaleIcon from '../../images/female-gender.svg';
import MaleIcon from '../../images/male-gender.svg';

const SingleAnimal = ({animal, loading}) => {
    if (loading || !animal) {
        return <Spin size={'large'} />
    }
    console.log(animal.curator.phone);
    return (
        <>
            <Row gutter={32}>
                <Col span={12}>
                    <div className="single-animal-image">
                        <img src={animal.images[0]} alt={animal.name} title={animal.title} />
                    </div>
                </Col>
                <Col span={12}>

                    <Typography.Title>
                        {animal.name}, <img src={animal.male ? MaleIcon : FemaleIcon} alt={animal.name} className={'animal-item-icon'} />
                    </Typography.Title>
                    <Typography.Paragraph><strong>Стать</strong>: {animal.male ? 'Чоловіча' : 'Жіноча'}</Typography.Paragraph>
                    <Typography.Paragraph><strong>Стерилізована</strong>: {animal.sterilized ? 'Так' : 'Ні'}</Typography.Paragraph>
                    <Typography.Paragraph><strong>Вік</strong>: {animal.age}</Typography.Paragraph>
                    <Typography.Paragraph><strong>Місто</strong>: {animal.city}</Typography.Paragraph>
                    <Typography.Paragraph><strong>Опис</strong>:<br /> {animal.description}</Typography.Paragraph>
                    <Typography.Title level={3}>Контакти куратора: </Typography.Title>
                    <Typography.Paragraph>Ім'я: <strong>{animal.curator.name}</strong></Typography.Paragraph>
                    <Typography.Paragraph>Email: <a href={'mailto: ' + animal.curator.email}>{animal.curator.email}</a></Typography.Paragraph>
                    <Typography.Paragraph>Телефон: <a href={'tel: ' + animal.curator.phone}>{animal.curator.phone}</a></Typography.Paragraph>
                </Col>
            </Row>
        </>
    );
};

export default SingleAnimal;
