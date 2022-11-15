import SelectColor from './SelectColor';
import ColorGrid from './ColorGrid';
import { useState } from 'react';

const Home = () => {
    const [color, setColor] = useState("0000ff");

    function changeColor(newCol) {
        setColor(newCol)
    }
    return (
        <div>
            <SelectColor props={changeColor} color={color} />
            <ColorGrid color={color} />
        </div>
    )
}


export default Home;