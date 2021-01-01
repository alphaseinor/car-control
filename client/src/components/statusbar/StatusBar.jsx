
import LeftArrow from "./arrow/LeftArrow";
import RightArrow from "./arrow/RightArrow";
import Brake from './brake/Brake'
import HighBeam from "./highbeam/HighBeam";

const StatusBar = () => {
    return(
        <header>
            <LeftArrow />
            <section className="indicatorState">
                <Brake />
                <HighBeam />
            </section>
            <RightArrow />
        </header>
    )
}

export default StatusBar