import {useEffect, useState} from "react";
function Message({ size, featherCount }) {
  const [message, setMessage] = useState("");
  const [className, setClassName] = useState("");
  useEffect(()=> {
    console.log('Message', size);
    let className ="";
    switch (size) {
      case "s":
        className = "small";
        break;
      case "m":
        className = "medium";
        break;
      case "l":
        className = "large";
        break;
      case "xl":
        className = "xlarge";
        break;
      default:
        break;
    };
    setClassName(className);
  }, [size]);
  useEffect(()=>{
    if (featherCount < 1) {
      setMessage("Oh my! Your bird is naked!");
    } else {
      setMessage(`Your bird has ${featherCount} feather(s)!`);
    }
  }, [featherCount]);
  return (
    <div className={`message ${className}`}>
      {/* (Oh my! Your bird is naked!) */}
      {`(${message})`}
    </div>
  );
};

export default Message;
