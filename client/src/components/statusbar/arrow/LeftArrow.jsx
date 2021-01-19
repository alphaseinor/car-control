import React, {useState} from "react"
import Arrow from "./arrow.svg"

const LeftArrow = () => {

    const [onOff, setOnOff] = useState(false)

    const setButton = (e) => {
        e.preventDefault()
        setOnOff(!onOff)
    }

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