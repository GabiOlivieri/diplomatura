import React from 'react';

const ContactoPage = (props) => {
    return (
        <div class="fcf-body">

    <div id="fcf-form">
    <h3 class="fcf-h3">Contact us</h3>

    <form id="fcf-form-id" class="fcf-form-class" method="post" >
        
        <div class="fcf-form-group">
            <label for="Name" class="fcf-label">Nombre y apellido</label>
            <div class="fcf-input-group">
                <input type="text" id="Name" name="Name" class="fcf-form-control" required/>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Email" class="fcf-label">Tu dirección de mail</label>
            <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required/>
            </div>
        </div>

        <div class="fcf-form-group">
            <label for="Message" class="fcf-label">Mensaje</label>
            <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
            </div>
        </div>

        <div class="fcf-form-group">
            <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Enviar mensaje</button>
        </div>

    </form>
        <div class="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 11 5524-6481</li>
                <li>Email: contacto@fbol.com.ar</li>
                <li>Facebook:</li>
                <li>Twitter:</li>
                <li>Skype:</li>
            </ul>
        </div>
    </div>

</div>
    );
}

export default ContactoPage;