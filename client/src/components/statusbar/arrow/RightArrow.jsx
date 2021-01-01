import React from "react"
import Arrow from "./arrow.svg"

const RightArrow = ({setButton, onOff}) => {
    return (<>
    <button
        className={onOff ? "on" : "off"}
        onClick={setButton}
    >
        <img style={{transform: "rotate(180deg)"}} src={Arrow} alt="left arrow"/>
    </button>
    </>)
}

export default RightArrow