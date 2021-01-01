import React from "react"
import brake from "./brake.svg"

const Brake = ({onOff}) => {
    return (<>
        <div
            className={onOff ? "on" : "off"}
        >
            <img src={brake} alt="left arrow"/>
        </div>
    </>)
}

export default Brake