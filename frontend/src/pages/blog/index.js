import {LayoutPage} from '../../Layout';
import {useEffect, useState} from 'react';
import Blog from './Blog';
import data from './data.json';

const BlogPage = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setPosts(data.posts);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <LayoutPage>
            <Blog loading={loading} posts={posts} />
        </LayoutPage>
    );
};

export default BlogPage;
