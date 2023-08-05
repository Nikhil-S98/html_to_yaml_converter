// Description: This file contains the functions that convert html to yaml and vice versa

//Function to get string data from "htmlInput" and send it to converter function
//Then it will take the output from the converter function and put it in "yamlOutput" in index.html
function convertToYAML() {
    const htmlInput = document.getElementById("htmlInput").value;
    const yamlOutput = converter(htmlInput);
    document.getElementById("yamlOutput").value = yamlOutput;
}

//Function to get get string data "htmlInput" formatted as table data and convert it into YAML format
function converter(htmlInput) {

    //Temporary div element to store htmlInput so that querySelector can be used
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlInput;

    //Create tempDiv to store htmlInput so that querySelector can be used
    const table = tempDiv.querySelector("table");
    const headers = table.querySelectorAll("thead th");

    //Create an array to store the header values
    const headerValues = [];

    //Loop through the th elements and add their text content to the array
    for (let i=0; i < headers.length; i++) {
        headerValues.push(headers[i].textContent);
    }

    //Select rows from the table and crate an array of rows
    const rows = table.querySelectorAll("tbody tr");
    rowArrays = [];

    //Create an array for each row and push it back into rowArrays
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll("td");
        const rowValues = [];

        for (let j = 0; j < cells.length; j++) {
            rowValues.push(cells[j].textContent);
        }

        rowArrays.push(rowValues);
    }   
}