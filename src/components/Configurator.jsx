import { useCusomization } from "./Customization";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBrush, 
    faSocks, 
    faHand, 
    faImage,
    faPlay,
    faStop
} from '@fortawesome/free-solid-svg-icons';


const Configurator = () => {
    const {setMaterial, setHands , setLegs, doorColor, doorColors, setDoorColor, setFloating, floating} = useCusomization()

    return <div className="configurator">
        <div className="configurator_section ">
            <div className="configurator_section_values dropdown">
            <button className="dropbtn"><FontAwesomeIcon icon={faHand} /></button>
                <div class="dropdown-content">
                    <a><button class="dropdown-item" type="button" onClick={() => setHands(1)}>classic</button></a>
                    <a><button class="dropdown-item" type="button" onClick={() => setHands(2)}>modern</button></a>
                </div>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator_section_values dropdown">
                <button className="dropbtn"><FontAwesomeIcon icon={faSocks} /></button>
                <div class="dropdown-content">
                    <a><button class="dropdown-item" type="button" onClick={() => setLegs(1)}>classic</button></a>
                    <a><button class="dropdown-item" type="button" onClick={() => setLegs(2)}>modern</button></a>
                </div>
            </div>
        </div>
        <div className="configurator_section">
            <div className="configurator__section__values dropdown">
            <button className="dropbtn"><FontAwesomeIcon icon={faBrush} /></button>
            <div class="dropdown-content">
                    { doorColors.map((item, index) => (
                        <a>
                            <button key={index} className={`dropdown-item item ${item.color === doorColor.color ? "item--active" : ""}`} style={{ backgroundColor: item.color }} onClick={() => setDoorColor(item)}>
                                <div className="item__dot" style={{ backgroundColor: item.color }} />
                                {/* <div className="item__label"> {item.color} </div> */}
                            </button>
                        </a>
                    ))}
                </div>
            
            </div>
        </div>
        <div className="configurator_section ">
            <div className="configurator_section_values dropdown">
            <button className="dropbtn"><FontAwesomeIcon icon={faImage} /></button>
                <div class="dropdown-content">
                    <a><button class="dropdown-item" type="button" onClick={() => setMaterial("wicker")}>wood</button></a>
                    <a><button class="dropdown-item" type="button" onClick={() => setMaterial("stone")}>stone</button></a>
                </div>
            </div>
        </div>
        <div className="configurator_section ">

        </div>
        <div className="configurator_section ">
            
        </div>
        <div className="configurator_section ">
            
        </div>
        <div className="configurator_section ">
            
        </div>
        <div className="configurator_section ">
            <div className="configurator_section_values dropdown">
                <button 
                    className={`floatOn ${floating ? '' : 'active'}`} 
                    type="button" 
                    onClick={() => setFloating(false)}
                >
                    <FontAwesomeIcon icon={faStop} />
                </button>

                <button 
                    className={`floatOff ${floating ? 'active' : ''}`} 
                    type="button" 
                    onClick={() => setFloating(true)}
                >
                    <FontAwesomeIcon icon={faPlay} />
                </button>
            </div>
        </div>
    </div>
}

export default Configurator