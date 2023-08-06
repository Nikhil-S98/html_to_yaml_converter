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

    //Select rows from the table body
    let rows = table.querySelectorAll("tbody tr");

    //Create an array to store the row objects and one to store cell values
    let rowObjects = [];
    let cellValues = [];

    //Loop through the rows and store the cell values in the cellValues array
    //For every iteration, create a new object
    for (let i=0; i < rows.length; i++) {
        cellValues = rows[i].querySelectorAll("td");
        let data = {};

        //nested for loop to create and store key-value pairs in the data object out of headers and individual cell values
        for (let j=0; j < cellValues.length; j++) {
            data[headerValues[j]] = cellValues[j].textContent;
        }
    //Push the data object into the rowObjects array to prep for yaml conversion
    rowObjects.push(data);
    }

    //Convert the rowObjects array into yaml strings and return yaml output
    const yamlOutput = jsyaml.dump(rowObjects);
    return yamlOutput;
}



