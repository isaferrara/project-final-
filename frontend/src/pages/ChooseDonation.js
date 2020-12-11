import React from 'react'
import {InputNumber, Button} from 'antd'
import {
 Link
} from 'react-router-dom'
import LayoutDash from "../components/LayoutDash";

const PreDonate = () => {

function onPressEnter(value) {
  console.log('changed', value);
}

return (<div>
    <LayoutDash>
    Please choose the amount<br/>
    <Button type="link" href="/donate100">100</Button>
    <Button type="link" href="/donate200">200</Button>
    <Button type="link" href="/donate300">300</Button>
    <Button type="link" href="/donate400">400</Button>
    <br/>
    $
    {/*<InputNumber>
        defaultValue={1000}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onPressEnter={onPressEnter}
    </InputNumber> MXN*/}
    </LayoutDash>
</div>
      
    
) 
}

export default PreDonate

