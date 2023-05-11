import { HomeOutlined, FileImageOutlined, InfoCircleOutlined, PhoneOutlined   } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Col, Row } from 'antd';
import {Link} from "react-router-dom";
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Button  } from 'antd';
import {useAuth} from "../../context/AuthContext";

const items = [
    {
        label: (<Link to="/">Home</Link>),
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: (<Link to="/publicaciones">Publicaciones</Link>),
        key: '/publicaciones',
        icon: <FileImageOutlined />,
    },
    {
        label: (<Link to="/nosotros">Nosotros</Link>),
        key: '/nosotros',
        icon: <InfoCircleOutlined />,
    },
    {
        label: (<Link to="/contacto">Contacto</Link>),
        key: '/contacto',
        icon: <PhoneOutlined />,
    }
];



const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
}
const Nav = () => {
    const [current, setCurrent] = useState('/');
    const [options, setOptions] = useState(items);
    const {isLogedIn} = useAuth();
    const onClick = (e) => {
        setCurrent(e.key);
    };

    const login = ({
            label: 'Sesión',
            key: 'SubMenu',
            icon: <UserOutlined />,
            children: [
                {
                    label: (<Link to="/login">Iniciar Sesión</Link>),
                    key: 'login'
                }
            ],
        })

    const logout = ({
        label: 'Sesión',
        key: 'SubMenu',
        icon: <UserOutlined />,
        children: [
            {
                label: (<Link to="/logout">Cerrar Sesion</Link>),
                key: 'logout'
            }
        ],
    })

    React.useEffect( () => {
        const {
           pathname
        } = window.location

        if (!isLogedIn) setOptions(prevState => [...prevState,login])
        else setOptions(prevState => [...prevState,logout])

        setCurrent(pathname)
    },[isLogedIn])



    return (
        <>
            <Row>
                <Col span={24}><Menu style={navStyle} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={options} /></Col>
            </Row>
        </>
    );
};
export default Nav;