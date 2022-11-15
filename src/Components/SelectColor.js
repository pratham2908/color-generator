

const SelectColor = (props) => {

    function closeModal() {
        document.querySelector(".select-color").classList.remove("error");

    }
    function validateInput(input) {
        if (input.length === 0) {
            document.querySelector(".select-color").classList.add("error");
            document.querySelector("#error-msg").innerHTML = "Please enter a color";

            return false;

        }
        return true;
    }
    function generateColor() {
        const input = document.querySelector("#color-input");

        if (validateInput(input.value)) {
            props.props(input.value);
            input.value = '';
        }

    }

    function randomColor() {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        props.props(randomColor);
    }
    return (
        <div className="select-color">
            <h1>Color Generator</h1>
            <input type="text" id="color-input" placeholder="Enter a color Hex Code" />
            <i className="fa-solid fa-shuffle" onClick={randomColor}><span>Random Color</span></i>
            <button onClick={generateColor}>Generate</button>
            <h1 id="your-color"> Your Color: #{props.color} <span style={{ backgroundColor: `#${props.color}` }}></span></h1>

            <div className="modal">
                <div className="modal-content">
                    <h1>Error <i className="fa-solid fa-circle-exclamation"></i></h1>
                    <p id="error-msg"></p>
                    <div id="close-modal" onClick={closeModal}><div>OK</div></div>
                </div>
            </div>
        </div>
    )
}

export default SelectColor;