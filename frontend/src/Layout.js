import {Layout, Menu, notification} from 'antd';
import {
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
import {useCallback, useContext} from 'react';
import Logo from './logo.png';
import {
    Link,
    useLocation
} from "react-router-dom";
import {AuthContext} from './AuthContext';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const LayoutPage = ({children}) => {
    let location = useLocation();
    const {isAuthenticated, logout} = useContext(AuthContext);
    const year = new Date().getFullYear();

    const logoutFromAccount = useCallback(() => {
        logout();
        notification.success({message: 'Успішно!', description: 'Ви вийшли з системи!'})
    }, [logout]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo">
                    <Link to={'/'}><img src={Logo} alt={'logo'} /></Link>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[location.pathname]}>
                    <Menu.Item key="/"><Link to="/">Головна</Link></Menu.Item>
                    <Menu.Item key="/about"><Link to="/about">Про нас</Link></Menu.Item>
                    <Menu.Item key="/contacts"><Link to="/contacts">Контакти</Link></Menu.Item>
                    <Menu.Item key="/blog"><Link to="/blog">Статті</Link></Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                        defaultOpenKeys={['sub1']}
                        defaultSelectedKeys={[location.pathname]}
                    >
                        {isAuthenticated && <>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Кабінет">
                                <Menu.Item key="/profile"><Link to="/profile">Кабінет</Link></Menu.Item>
                                <Menu.Item key="/profile/add"><Link to="/profile/add">Додати оголошення</Link></Menu.Item>
                                <Menu.Item key="/profile/animals"><Link to="/profile/animals">Мої тварини</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="logout" icon={<LogoutOutlined />}><Link to="/" onClick={logoutFromAccount}>Вийти</Link></Menu.Item>
                        </> }
                        {!isAuthenticated && (
                            <>
                                <Menu.Item key="register"><Link to="/register">Реєстрація</Link></Menu.Item>
                                <Menu.Item key="login"><Link to="/login">Вхід в систему</Link></Menu.Item>
                            </>
                        )}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
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
            <Footer style={{ textAlign: 'center' }}>Find Pet ©{year}<br />Курочка Всеволод</Footer>
        </Layout>
    );
};