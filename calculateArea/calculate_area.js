function calculateArea() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    document.getElementById('result').innerText =
        `The area of the rectangle is: ${area}`;
}
