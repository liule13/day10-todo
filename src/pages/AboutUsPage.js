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
                title={<Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>About Us</Title>}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }}
            >
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    This application is developed by a passionate team dedicated to helping you manage your tasks efficiently.
                    Our goal is to provide a simple and effective tool to keep track of your to-dos and enhance your productivity.
                </Paragraph>
            </Card>
        </div>
    );
}