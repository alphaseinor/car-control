import React from "react"
import Arrow from "./arrow.svg"

const LeftArrow = ({setButton, onOff}) => {
    return (<>
    <button
        className={onOff ? "on" : "off"}
        onClick={setButton}
    >
        <img src={Arrow} alt="left arrow"/>
    </button>
    </>)
}

export default LeftArrow