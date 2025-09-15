import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

export function AboutUsPage() {
    return (
        <div style={{
            padding: '50px 20px',
            minHeight: '100vh',
            background: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Card
                title={<Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>关于我们</Title>}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}
            >
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    这是一个简单而强大的待办事项管理工具，帮助你更好地规划每一天。
                    我们致力于让任务管理变得轻松、直观、高效。
                </Paragraph>
            </Card>
        </div>
    );
}