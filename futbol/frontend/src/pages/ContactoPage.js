import {React, useState} from 'react';
import '../styles/pages/Contacto.css';
import { Col, Row } from 'antd';
import axios from 'axios';
import { Button, notification } from 'antd';

const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('https://node-dev.frba.utn.edu.ar/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        openNotification()
        if(response.data.error === false){
            setFormData(initialForm);
        }
    }

    const openNotification = () => {
        notification.open({
            message: 'Email enviado',
            description:
                'El email de contacto a sido enviado con exito',
        });
    };


    return (
        <Row align='center' justify='center'>
            <Col span={18}>
            <div className="fcf-body">

                <div id="fcf-form">
                    <h3 className="fcf-h3">Formulario de contacto</h3>

                    {msg ? <h5>{msg}</h5> : null}

                    <form id="fcf-form-id" className="fcf-form-class" method="POST" onSubmit={handleSubmit}>

                        <div className="fcf-form-group">
                            <label htmlFor="Name" className="fcf-label">Nombre y apellido</label>
                            <div className="fcf-input-group">
                                <input type="text" id="Name" name="nombre" className="fcf-form-control" value={formData.nombre} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Email" className="fcf-label">Tu dirección de mail</label>
                            <div className="fcf-input-group">
                                <input type="text" id="Email" name="email" className="fcf-form-control" value={formData.email} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Telefono" className="fcf-label">Tu teléfono</label>
                            <div className="fcf-input-group">
                                <input type="text" id="telefono" name="telefono" className="fcf-form-control" value={formData.telefono} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <label htmlFor="Message" className="fcf-label">Mensaje</label>
                            <div className="fcf-input-group">
                                <textarea id="Message" name="mensaje" className="fcf-form-control" rows="6"
                                          maxLength="3000" value={formData.mensaje} onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div className="fcf-form-group">
                            <button type="submit" id="fcf-button"
                                    className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Enviar mensaje
                            </button>
                        </div>

                    </form>
                    <div className="datos">
                        <h2>Otras vias de comunicación</h2>
                        <p>También puede contactarse con nosotros usando los siguientes medios</p>
                        <ul>
                            <li>Teléfono: 11 5524-6481</li>
                            <li>Email: gabrielolivieri01@gmail.com</li>
                        </ul>
                    </div>
                </div>

            </div>
            </Col>
        </Row>

    );
}

export default ContactoPage;