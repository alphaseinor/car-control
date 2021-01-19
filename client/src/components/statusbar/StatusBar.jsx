
import LeftArrow from "./arrow/LeftArrow";
import RightArrow from "./arrow/RightArrow";
import Brake from './brake/Brake'
import HighBeam from "./highbeam/HighBeam";
import LightList from "./LightList/LightList";
import "./styles/statusBar.scss"

const StatusBar = () => {

    const lightList = [
        {
            type: "button",
            image: "/images/arrow.svg",
            text: "",
            transform: ""
        },
        {
            type: "section",
            subLight: [
                {
                    type: "button",
                    image: "/images/brake.svg",
                    text: "",
                    transform: ""
                },
                {
                    type: "button",
                    image: "/images/highbeam.svg",
                    text: "",
                    transform: ""
                },
                {
                    type: "button",
                    image: "/images/lowbeam.svg",
                    text: "",
                    transform: ""
                },
                {
                    type: "button",
                    image: "/images/fog.svg",
                    text: "",
                    transform: ""
                },
            ]
        },
        {
            type: "button",
            image: "/images/arrow.svg",
            text: "",
            transform: "rotate(180deg)"
        },
    ]

    return(
        <header>
            {
                lightList.map((light, index) => (
                    <LightList key={"StatusBar"+index} light={light} />
                ))
            }
        </header>
    )
}

export default StatusBar
        // <header>
        //     <LeftArrow />
        //     <section className="indicatorState">
        //         <Brake />
        //         <HighBeam />
        //     </section>
        //     <RightArrow />
        // </header>