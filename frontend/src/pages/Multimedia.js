import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Multimedia = () => {

    let urlY='https://www.youtube.com/watch?v=lWQ69WX7-hA'

    return (<div>
        <h1>Video</h1>
    <ReactPlayer url={urlY} />
    </div>  
    )}


export default Multimedia;


        // console.log(value.slice(0, 8))


        //FRONT text//



        // let accumText= value.text ?  setContents([...content.concat(value.text)]): setContent(contenty)
        // let accumText = value.text ? setContents([content.concat(value.text)])  : setContent(contenty)



       


        //FRONT video//
        // value.link? setContents([...content, <ReactPlayer url={value.link} />]) :  setContent(contenty) 
        // value.link? setContents(content.concat(<ReactPlayer url={value.link} />)) : setContent(contenty) 


   
        // setAllInfo([...allInfo, accumText])


        //FRONT video//

    //    let complete= value.txt? setContents(allTxt): value.link? setContents(allVideos): setContent(contenty) 
    //    console.log(complete)
       // setImg(content.concat(<ContentForm value={value.link}/>));