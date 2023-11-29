import React from 'react';
import { ConfigProvider } from 'antd';

export default function ThemeProvider ({children}) {

    return (
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#00b96b',
                colorSecondary: '#007e49'
            },
        }}
    >
        {children}
    </ConfigProvider>
    )
};