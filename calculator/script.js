function showInputs(event) {
    const input_div = event.target.value;
    const shape_inputs = document.getElementsByClassName("shape_inputs");
    for (const element of shape_inputs) {
        element.style.display = "none";
    }
    document.getElementById(input_div).style.display="block";

    const canvas = document.getElementById("result_canvas");
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    
}

function draw_result_text(area, circumference) {
    var c = document.getElementById("result_canvas");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Area: "+ area, 10, 50)
    ctx.fillText("Circumference: "+ circumference, 10, 50)
}

function draw_result_rectangle(width,height) {
    const canvas = document.getElementById("result_canvas");
    const ctx = canvas.getContext("2d");
    const start_pos_x = 10;
    const start_pos_y = 90;
    ctx.beginPath()
    ctx.rect(start_pos_x, start_pos_x, width, height)
    ctx.stroke();
}

function draw_result_circle(radius) {
    const canvas = document.getElementById("result_canvas");
    const ctx = canvas.getContext("2d");
    const start_pos_x = 10;
    const start_pos_y = 90;
    ctx.beginPath();
    ctx.arc(start_pos_x + radius, 0, 2 * math.PI);
    ctx.stroke();
}

const shape_radios = document.getElementsByName("shape")
for (const element of shape_radios) {
    element.addEventListener("change", showInputs);
}


const calc_button = document.getElementById("calc_button");
calc_button-addEventListener("click", (event) => {
    const checked_shape = document.querySelector("Input[name=shape]:checked");
    if (checked_shape !== null) {
        const shape_id = checked_shape.value; 
        console.log(shape_id);
        const input_div = document.getElementById(shape_id);
        console.log(input_div)
        const inputs = input_div.getElementsByTagName("input");
        for (const element of inputs) {
            const input_value = parseFloat(element.value)
                if(isNaN(input_value) || input_value <= 0) {
                console.log("Puudub väärtus");
                return;
                } 
        }
        switch (shape_id) {
            case "rect_inputs":
                case "square_inputs":
                    let input_index = 1;
                    if (shape_id === "square_inputs") {
                        input_index = 0;
                    }
                const height = parseFloat(inputs[0].value);
                const width = parseFloat(inputs[1].value);
                const area = height * width;
                console.log("Rectangle area is ", area);
                const circumference = 2 * (height + width);
                console.log("circumference is", circumference)
                clearCanvas();
                draw_result_text(area, circumference);
                draw_result_rectangle(height,width)
                break;
                    case "circle_inputs": {
                        const area = Math.PI * height * height;
                        const circumference = 2 * math.PI * height
                        clearCanvas();
                        draw_result_text(area, circumference);
                        draw
                    }
                default:
                    break;
        }
    }
});