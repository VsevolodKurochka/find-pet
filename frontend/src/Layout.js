import { Layout, Menu, Breadcrumb } from 'antd';
import {
    UserOutlined, LaptopOutlined, NotificationOutlined
} from '@ant-design/icons';
import {useState, useCallback} from 'react';
import Logo from './logo.png';
import {
    Link
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const LayoutPage = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const year = new Date().getFullYear();

    const onCollapse = useCallback(() => {
        setCollapsed(prevState => !prevState);
    }, []);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo">
                    <img src={Logo} alt={'logo'} />
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Головна</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/catalog">Каталог</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/about">Про нас</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/contacts">Контакти</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/blog">Статті</Link></Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="5"><Link to="/">Реєстрація</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/">Вхід в систему</Link></Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Кабінет">
                            <Menu.Item key="1"><Link to="/">Додати оголошення</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/">Мої тварини</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6"><Link to="/">Вийти</Link></Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Головна</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};