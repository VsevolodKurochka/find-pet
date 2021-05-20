import GrumpyCat from '../../images/grumpy.jpg';
import {Spin, Typography, Row, Col} from 'antd';
import {Animal} from '../../components/animal/Animal';
const { Title } = Typography;


const Home = ({loading, animals}) => {

    if (loading) {
        return <Spin size={'large'} />;
    }

    if (!animals.length) {
        return (
            <>
                <Title>На жаль, зараз немає тварин, яких можна прихистити</Title>
                <img src={GrumpyCat} alt={''} style={{'maxWidth': '200px'}} />
            </>
        )
    }

    return (
        <>
            <Title>Друзі, яких ти можеш прихистити:</Title>
            <Row gutter={16}>
                {animals.map((animal, index) => <Col span={6} key={animal._id}>
                    <Animal animal={animal}  />
                </Col>)}
            </Row>
        </>
    );
};

export default Home;
