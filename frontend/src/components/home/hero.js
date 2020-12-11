import React from 'react';
import { Carousel, Button, Typography } from 'antd';

const {Title, Text, Link, Paragraph} = Typography;

const items = [
    {
        key: '1',
        title: 'Aprende',
        content: 'Estudia las diferentes rutas creadas por la comunidad',
    },
    {
        key: '1',
        title: 'Comparte',
        content: 'Crea tus propias rutas para ti y compartelas con la comunidad',
    },
    {
        key: '1',
        title: 'Trabaja',
        content: 'Date a conocer y encuentra el trabajo que tanto amas',
    },
]

const AppHero = () => {
    return (

        <div className="heroBlock">
        <Carousel>
        {items.map(item => {
            return (
             <div key={item.key} className="container-fluid">
             <div className="content">
              <Title style={{ fontSize: '50px', color: '#ffffff' }}>{item.title}</Title>
              <p style={{ fontSize: '30px', color: '#ffffff' }}>{item.content}</p>
              <div className="btnHolder">
              <Button size="large">Learn more</Button>
              <Button size="middle">Watch a demo</Button>
              </div>
             </div>
             </div>
            );
        })}        
       </Carousel>
      </div>
    );
}

export default AppHero;