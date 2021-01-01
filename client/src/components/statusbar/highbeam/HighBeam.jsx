import React from "react"
import highBeam from "./highbeam.svg"

const HighBeam = ({setButton, onOff}) => {
    return (<>
    <button
        className={onOff ? "on" : "off"}
        onClick={setButton}
    >
        <img src={highBeam} alt="left arrow"/>
    </button>
    </>)
}

export default HighBeam