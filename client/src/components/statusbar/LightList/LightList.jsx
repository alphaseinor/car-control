import React, {useState} from 'react'

const LightList = ({light}) => {
    const [onOff, setOnOff] = useState(false)

    const setButton = (e) => {
        e.preventDefault()
        setOnOff(!onOff)
    }

    switch(light.type){
        case 'button':
            return(
                <button
                    className={onOff ? "on" : "off"}
                    onClick={setButton}
                >
                    <img style={{transform: light.transform}} src={light.image}/>
                </button>
            )
        case 'section':
            console.log(light)
            return(<section>
                {
                    light.subLight.map((subLight, index) => (
                        <LightList key={"StatusBar"+index} light={subLight} />
                    ))
                }
            </section>)
        default:
            return(<></>)

    }

}

export default LightList