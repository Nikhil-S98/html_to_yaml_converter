function convertToYAML() {
    const htmlInput = document.getElementById("htmlInput").value;
    const yamlOutput = converter(htmlInput);
    document.getElementById("yamlOutput").value = yamlOutput;
}


function converter(htmlInput) {

    //Temporary div element to store htmlInput so that querySelector can be used
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlInput;

    // Get the table from the htmlInput
    const table = tempDiv.querySelector("table");
    const headers = table.querySelectorAll("thead th");

    const headerValues = [];

    //Loop through the th elements and add their text content to the array
    for (let i=0; i < headers.length; i++) {
        headerValues.push(headers[i].textContent);
    }
}