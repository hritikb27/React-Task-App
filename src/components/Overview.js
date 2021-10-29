import React from "react";

class Overview extends React.Component{

    render(){
        const data = this.props.task;
        const styleObj = {
            fontWeight: "bold",
            listStyleType: "none",
        }
        return(
            <div>
               {data.map(item=>{
                   return <li style={styleObj}>{item}</li>
               })}
            </div>
        )
    }
}

export default Overview;