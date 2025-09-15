import { Outlet, useNavigate} from "react-router";
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

export function DefaultLayout() {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    function navigateTo({ key }) {
        if (key === '1') {
            navigate('/');
        } else if (key === '2') {
            navigate('/done');
        } else if (key === '3') {
            navigate('/about');
        }
    }

    return (
        <div className="app-container">
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="demo-logo-vertical"/>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}
                          onClick={navigateTo}/>
                </Sider>
                <Layout>
                    <Header style={{padding: 0, background: colorBgContainer}}/>
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