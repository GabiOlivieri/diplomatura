import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
const { Meta } = Card;
import { Col, Row } from 'antd';
import { useEffect, useState } from "react";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
    useEffect(
        () => {
            const mediaQuery = window.matchMedia(query);
            setMatches(mediaQuery.matches);
            const handler = (event) => setMatches(event.matches);
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        },
        [] // Empty array ensures effect is only run on mount and unmount
    );
    return matches;
}

const PublicacionesPage = (props) => {
    const [publicaciones, setPublicaciones] = React.useState([]);

    const isActive = useMediaQuery('(max-width: 640px)');


    const fetchPublicaciones = async () => {
        await axios({
            method: 'GET',
            url: 'https://node-dev.frba.utn.edu.ar/publicaciones/ultimas'
        }).then(response => setPublicaciones(response.data)
        ).catch(error => {
            alert(error)
        })
    }

    React.useEffect( () => {
       fetchPublicaciones()
    },[])


    return (
        <>
        <section className="holder">
            <h2>Novedades</h2>
            <Row align='middle' gutter={2} justify='center'>
                {publicaciones.map(publicacion => {
                    return (
                    <Col span={isActive ? 24 : 8}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2.5%', width: '100%', height: '100%'}}>
                            <Card
                                hoverable
                                style={{
                                    width: isActive ? '20%' : '80%',
                                    height: isActive ? '20%' : '80%'
                                }}
                                cover={<iframe src={publicacion.iframe}
                                               title={publicacion.title} frameBorder="0"
                                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                               allowFullScreen></iframe>}
                            >
                                {publicacion.fecha_subida}
                                <Meta title={publicacion.titulo} description={publicacion.descripcion} />
                            </Card>
                        </div>
                    </Col>
                    )
                }
                    )
                }
            </Row>

        </section>
    <br/>
    </>
    );
}

export default PublicacionesPage;