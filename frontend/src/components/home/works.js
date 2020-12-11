import React, { useState } from 'react';
import { Button, Modal, Typography } from 'antd';

const {Title, Text, Link, Paragraph} = Typography;

const AppWorks = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };  
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    return (
        <div className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <Title style={{ color: '#ffffff'}}>Linux</Title>
                    <h2>Asi como lo vez y escuchas mucho Linux, linux y mas linux y terminal de comandos aprenderas con nosotros</h2>
                </div>
                <div className="contentHolder">
                    <Button onClick={showModal}>
                        <i class="fas fa-play"></i>
                    </Button>
                </div>
                <Modal
                    title="Linux tutorial"
                    visible={isModalVisible}                    
                    onCancel={handleCancel}
                    footer={null}
                >
                    <iframe width="100%" height="350"
                    src="https://www.youtube.com/embed/BMGixkvJ-6w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="allowfullscreen"
                    mozallowfullscreen="mozallowfullscreen" 
                    msallowfullscreen="msallowfullscreen" 
                    oallowfullscreen="oallowfullscreen" 
                    webkitallowfullscreen="webkitallowfullscreen"
                    ></iframe>

                </Modal>
            </div>
        </div>
    );
  }

export default AppWorks;

