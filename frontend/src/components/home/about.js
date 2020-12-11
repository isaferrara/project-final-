import React from 'react'
import { Row, Col} from 'antd';

const items = [
    {
        key: '1',
        icon: <i class="far fa-file-code"></i>,
        title: 'Somos Coders',
        content: 'todos los dias codiamos para poder mejorar nuestro servicio y producto mas y mas.',
    },
    {
        key: '2',
        icon: <i class="fas fa-code-branch"></i>,
        title: 'Somos Estudiantes',
        content: 'nos preparamos con nuevos temas y maneras de hacer las cosas cada dia',
    },
    {
        key: '3',
        icon: <i class="fas fa-user-secret"></i>,
        title: 'Somos Mentores',
        content: 'al igual que tu fuimos estudiantes y sabemos como puedes aprender mas rapido',
    },
]

const AppAbout = () => {
    return (
       <div className="block aboutBlock">
           <div className="container-fluid">
            <div className="titleHolder">
             <h2>Quienes somos?</h2>   
             <h3>Somos igual que tu!</h3>
            </div>
            <div className="contentHolder">
                <p>Nos apasiona aprender codigo, trabajar en este planeta de desarrollo de tecnologias informaticas y lo mas importante! somos muy buenos guiandote para que aprendas lo mas rapido posible y seas autodidacta</p>
            </div>
            <Row gutter={[16, 16]}>
            {items.map(item =>{
                return (
                <Col span={8}>
                    <div className="content">
                        <div className="icon">
                        {item.icon}
                        </div>                    
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </Col>
                );
            })}
            </Row>            
           </div>
       </div>
    );
}

export default AppAbout;
