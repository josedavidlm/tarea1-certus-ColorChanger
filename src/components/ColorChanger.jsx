    export const ColorChanger =({color})=>{
        console.log(color);
        return(
            <>            
            <div className="cuadrado" style={{backgroundColor:`${color}`}}  >             
            </div>
          </>
        )
    
    }