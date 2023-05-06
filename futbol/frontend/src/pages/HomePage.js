import React from 'react';
import {Link} from "react-router-dom";
import '../styles/pages/Home.css';
import { Col, Row } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
import { theme } from 'antd';
import { Card } from 'antd';
const { useToken } = theme;
import {CameraOutlined,UserAddOutlined,QuestionOutlined} from '@ant-design/icons';

const HomePage = (props) => {

    const { token } = useToken();
    return (
        <>
            <Row>
                <Col span={24}><Title level={2}>¡Bienvenidos!</Title></Col>
            </Row>

            <Row>
                <Col span={24}><div> ¡La página para reaccionar a los mejores momentos futbolisticos de cada fecha!</div> </Col>
            </Row>
            <br/>

            <Row align='middle' justify='center'>
                    <Col span={8}>
                        <div id='cards'>
                            <Card
                                title="¿Que postulamos?"
                                bordered={false}
                                style={{
                                    height: 400,
                                }}
                            >
                                <CameraOutlined style={{
                                fontSize: '50px', color: token.colorSecondary
                                }
                                }/>
                                <p>Momentos que hayan marcado quedado en la historia del futbol mundial por el gran impacto generado en los medios de comunicación y en la memoria de los aficionados</p>
                            </Card>
                        </div>
                    </Col>
                <Col span={8}>
                    <div id='cards'>
                        <Card
                            title="¿Como participar?"
                            bordered={false}
                            style={{
                                height: 400,
                            }}
                        >
                            <UserAddOutlined style={{
                                fontSize: '50px', color: token.colorSecondary
                            }
                            }/>
                            <p>Una vez subido un video representando el momento de la jugada, podrás opinar en los comentarios, guardar dicho video e interactuar con los demas usuarios para buscar curiosidades!</p>
                        </Card>
                    </div>
                </Col>
                <Col span={8}>
                    <div id='cards'>
                        <Card
                            title="¿Como funciona?"
                            bordered={false}
                            style={{
                                height: 400,
                            }}
                        >
                            <QuestionOutlined style={{
                                fontSize: '50px', color: token.colorSecondary
                            }
                            }/>
                            <p>La idea es subir cualquier video o hipervinculo al mismo, y que los demas futboleros pueda ver dicho contenido e interactuar con el mismo </p>
                        </Card>
                    </div>
                </Col>
            </Row>
            <br/>

            <Row>
                <Col span={24}><span> Autor</span></Col>
            </Row>
            <Row>
                <Col span={24}><span> Gabriel Olivieri</span></Col>
            </Row>
            <Row>
                <Col span={24}><p> para mas información: <Link to="/nosotros"> pulse aqui</Link></p></Col>
            </Row>
        </>
    );
}

export default HomePage;