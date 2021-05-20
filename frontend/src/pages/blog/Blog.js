import {Spin, Typography, Row, Col, Card, Button} from 'antd';
import {useState} from 'react';

const { Title } = Typography;

const Blog = ({loading, posts}) => {

    const [postsShow, setPostsShow] = useState(2);

    const showMore = () => {
        setPostsShow(posts.length);
    };

    if (loading) {
        return <Spin size={'large'} />;
    }

    if (!posts.length) {
        return (
            <>
                <Title>На жаль, зараз немає актуальних постів</Title>
            </>
        )
    }

    return (
        <>
            <Title>Цікаві пости:</Title>
            <Row gutter={24}>
                {posts.slice(0, postsShow).map((post) => <Col span={24} style={{marginBottom: '30px'}}>
                    <Card title={post.title} className={'post-item'}>
                        <div dangerouslySetInnerHTML={{
                            __html: post.content
                        }} />
                    </Card>
                </Col>)}
            </Row>
            {postsShow === 2 && <Button type={'primary'} onClick={showMore}>Показати більше</Button>}
        </>
    );
};

export default Blog;
