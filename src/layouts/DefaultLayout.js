import {Outlet, useNavigate} from "react-router";
import React, {useState} from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Layout, Menu, theme} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('TodoList', '1', <PieChartOutlined/>),
    getItem('DoneList', '2', <DesktopOutlined/>),
    getItem('About Us', '3', <UserOutlined/>),
];
const routes = {
    1: "/",
    2: "/done",
    3: "/about",
};
const menuTitles = {
    '1': 'Todo List',
    '2': 'Done List',
    '3': 'About Us',
};


export function DefaultLayout() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1');
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    const handleMenuClick = ({key}) => {
        setSelectedKey(key);
        navigate(routes[key]);
    };
    return (
        <div className="app-container">
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="demo-logo-vertical"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}
                          onClick={handleMenuClick}/>
                </Sider>
                <Layout>
                    <Header style={{padding: 0, background: colorBgContainer}}>
                        <div style={{
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <h2>
                                {menuTitles[selectedKey]}
                            </h2>
                        </div>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}
                        >
                            <Outlet></Outlet>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}