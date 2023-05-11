import React from 'react';
import '../styles/pages/Home.css';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import { Button, Input, Space } from 'antd';
const { Title } = Typography;
import { theme } from 'antd';
import {useAuth} from "../context/AuthContext";
const { useToken } = theme;

const HomePage = (props) => {
    const [password, setPassword] = React.useState(null);
    const [usuario, setUsuario] = React.useState(null);
    const { token } = useToken();
    const {doLogin} = useAuth();

    const handleLogin = async () => {
       await doLogin(usuario,password)
    }

    return (
        <>
            <Row>
                <Col span={24}><Title level={2}>Formulario de inicio de sesión</Title></Col>
            </Row>

            <Row>
                <Col span={24}><div> Ingrese sus credenciales de usuario para poder continuar</div> </Col>
            </Row>
            <br/>

            <Row align='middle' justify='center'>
                <Space direction="vertical">
                    <Input placeholder="Usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                    <Button onClick={handleLogin} type="primary">Iniciar Sesión</Button>
                </Space>
            </Row>
            <br/>
        </>
    );
}

export default HomePage;