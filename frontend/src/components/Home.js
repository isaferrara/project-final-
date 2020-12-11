/*import React, {useState, useEffect} from 'react';
import { getAllPaths } from '../services/paths.js'
import { Carousel } from 'antd';
import ReactPlayer from 'react-player/youtube'

const background = "https://onestopmedia.com.au/wp-content/uploads/2019/10/OSM-dev-top-updated-img.png"
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  //background: '#364d79',
  backgroundImage: "url(" + background + ")"
};

function Home() {
  const [pathsy, setPaths] = useState(null)

  useEffect(() => {
      async function getPaths() {
          const {data} = await getAllPaths()
          setPaths(data)

      }
      getPaths()
      }, [])
  

  return (
    <div>
        <Carousel autoplay>
                <div>
                <h3 style={contentStyle} >1</h3>
                </div>
                <div>
                <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                <h3 style={contentStyle}>4</h3>
                </div>
        </Carousel>
        <div style={{ padding: '1rem 3rem'}}>
        <ReactPlayer url="https://www.youtube.com/watch?v=YBYmhWlk8o4" />

        <h1>Learning paths</h1> 
            {pathsy?.map(path => (
            <div style={{border:' 1px black solid', margin:'10px'}}>    
            <h1>{path.title}</h1>
            {path.topics?.map(({title}) => (
                <p>{title}</p> ))}
            </div>          
            ))}
            
        </div>
    </div>
  )
}

export default Home;*/

import React, {useState, useEffect} from 'react';
import { getAllPaths } from '../services/paths.js'
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFeature from '../components/home/feature';
import Appworks from '../components/home/works';
import Appfaq from '../components/home/faq';
import AppPricing from '../components/home/pricing';
import AppContact from '../components/home/contact';
function Home() {
  const [pathsy, setPaths] = useState(null)
  useEffect(() => {
      async function getPaths() {
          const {data} = await getAllPaths()
          setPaths(data)
      }
      getPaths()
      }, [])  
  return (
      <div className="main">
          <AppHero />          
          <AppAbout />    
          <AppFeature /> 
          <Appworks />
          <Appfaq />
          <AppPricing />
          <AppContact />
          <h1>Learning paths</h1> 
            {pathsy?.map(path => (
            <div style={{border:' 1px black solid', margin:'10px'}}>    
            <h1>{path.title}</h1>
            {path.topics?.map(({title}) => (
                <p>{title}</p> ))}
            </div>          
            ))}
     </div>
       
        
  );
}

export default Home;
