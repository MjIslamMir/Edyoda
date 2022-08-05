import React from "react"
export const HOC=(Component)=>{
    function updatedComponent(){
        return <Component val={100}/>
    }
    return updatedComponent
}
