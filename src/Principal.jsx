import { ColorChanger } from './components/ColorChanger'
import { useState } from 'react';
export const Principal =()=>{
    const [color,setColor] = useState("blue");        

    return(
        <>            
            <input type='text' placeholder='red' onChange={e => setColor(e.target.value)}/>                            
            <ColorChanger color={color}/>    
        </>
      
    )

}