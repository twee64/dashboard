import React, {useState} from "react";
import "./OverviewCard.css";

function OverviewCard(props, {style}) {
  const [isIncreased] = useState(true);

  return (
    <div className = "overview-item">
      <div className ="row">
      <div className="title"> {props.title} </div>
    {props.image}
      </div>
      <div className="row-two">
      <div className= "number">{props.number}</div> 
       <div className ="percentage" style ={isIncreased ? {color:'hsl(163, 72%, 41%)'} : {color: 'hsl(356, 69%, 56%)'}}>
        {isIncreased ? <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z"/></svg>}
      <span/> 32% 
      </div> 
      </div>
  </div>
      
    
  )
};
export default OverviewCard;

