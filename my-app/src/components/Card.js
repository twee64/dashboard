import React, {useState} from "react";
import "./Card.css";
function Card(props, {style}) {
  const [isIncreased] = useState(false);

  return (
      <div className="container-item" style= {style}> 
      <div className="one-item"> {props.image}
      <span className='username'>{props.username}</span>
      <div className="large-number">{props.number}</div>
      <div className ="follower">Followers</div>
      <div> 
        {isIncreased ? <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z"/></svg>}
      <span className ="subtitle"
      style ={isIncreased ? {color:'hsl(163, 72%, 41%)'} : {color: 'hsl(356, 69%, 56%)'}}>Today</span>
     </div>
</div>
</div>
      
    
  )
};
export default Card;
