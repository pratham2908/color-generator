import convert from "color-convert/conversions";
import { useEffect } from "react";


const ColorGrid = ({ color }) => {

    color = `#${color}`
    let hsl = convert.rgb.hsl(convert.hex.rgb(color));
    let colorArr = [];
    let lessDiff = ((hsl[2]) - 5) / 10;
    let moreDiff = (95 - hsl[2]) / 10;

    for (let j = 10; j > 0; j--) {
        colorArr.push(convert.rgb.hex(convert.hsl.rgb([hsl[0], hsl[1], hsl[2] + j * moreDiff])));
    }
    for (let i = 0; i < 10; i++) {
        const diff = hsl[2] - i * lessDiff < 0 ? 0 : hsl[2] - i * lessDiff;
        colorArr.push(convert.rgb.hex(convert.hsl.rgb([hsl[0], hsl[1], diff])));
    }


    function copyToClipboard(e) {
        let color = e.target.innerText;
        color = color.split('Click')[0];
        navigator.clipboard.writeText(color);
        e.target.classList.add("copied");
        setTimeout(() => {
            e.target.classList.remove("copied");
        }, 500);
    }

    useEffect(() => {
        const boxes = document.querySelectorAll(".color-box");
        boxes.forEach((box, index) => {
            const light = (convert.rgb.hsl(convert.hex.rgb(colorArr[index])))[2];
            if (light <= 50) {
                box.style.color = "white";
            }
        }
        )
    }, [color])


    return (
        <div className="color-grid">
            {colorArr.map((col, index) => {
                return (
                    <div className="color-box" key={index} onClick={copyToClipboard} style={{ backgroundColor: `#${col}` }}>#{col}
                        <h6 >Click to Copy</h6>
                        <h5>Copied To Clipboard</h5>
                    </div>
                )
            })}
        </div>
    );

}

export default ColorGrid;