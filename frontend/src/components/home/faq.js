import React from 'react'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

const Appfaq = () => {
    return (
        <div className="block faqBlock">
          <div className="container-fluid">
          <div className="titleHolder">
              <h2>Preguntas Frecuentes</h2>
              <p>aqui encontraras la dudas mas usuales</p>
          </div>
          <Collapse defaultActiveKey={['1']}>
            <Panel header="Tiene algun costo ser usuario?" key="1">
            <p>R//: No tiene ningun costo, es totalmente gratuito</p>
            </Panel>
            <Panel header="Que es Knowlee?" key="2">
            <p>R//: Una Plataforma Comunidad donde aprendes, creas y trabajas las mejores carreras tecnologicas</p>
            </Panel>
            <Panel header="Que son las Donaciones?" key="3">
            <p>R//:Es un ingreso para el mantenimiendo de nuestra plataforma, nuestro equipo para que puedan comer y pagar su alquiler mientras te ayudan a que seas el mejor talento en tu futuro trabajo</p>
            </Panel>
            <Panel header="Que tecnologias aprendere?" key="4">
            <p>R//: Las que tu quieras! y te gusten! tenemos de todo tipo desde backend (codigo en el servidor) como frontend (codigo en el cliente) pasando por muchas otras areas</p>
            </Panel>
            <Panel header="Cuanto tiempo demoro en aprender?" key="5">
            <p>R//: Esta es la mejor pregunta, depende de ti y tus ganas, recuerda la disciplina vence al talento, pero para darte una respuesta sincera en tu primer mes ya podras crear algo!, que te parece? no es super genial? hasta yo mismo me sorprendi</p>
            </Panel>
            <Panel header="No entiendo muy bien los planes?" key="6">
            <p>R//: OK sencillo, el plan basico no incluye ningun servicio solo el uso completo de la plataforma, el plan freelancer incluye vacantes y notificaciones a tu correo y el plan junior incluye todo lo anterior mas mentoria y soporte tecnico</p>
            </Panel>
            <Panel header="Me gustaria iniciar ya mismo como hago?" key="7">
            <p>R//: Escribenos un e-mail y con gusto te contactaremos!, muchas gracias </p>
            </Panel>
        </Collapse>
        <div className="quickSupport">
            <h2>Necesitas Ayuda?</h2>
            <p>Envianos un e-mail dale click en el boton de abajo</p>
            <Button type="primary"><i size="large" class="fas fa-envelope"></i>&nbsp; E-mail tus preguntas</Button>
        </div>
          </div>            
        </div>
    );
}

export default Appfaq;
