# html_to_yaml_converter
This is a tool that converts HTML table data into yaml. The goal is to make a webpage that displays this tool, and pushes the user to utilize the tool intuitively.

The converter works by taking html table data and parsing it into usable arrays. an array is created from the headers and arrays are created for each row. Each cell ends up having its own individual value.

These are then iterated through and a javascript object is created holding a header and corresponding cell as a key value pair. These objects are all added to a final array.

I then used the dump method from the yaml-js library to serialize these objects into YAML instead of converting these objects into yaml format manually.

The form on the webpage will take html table data, convert it into YAML once the "Convert" button is clicked, and display it onto the next form. There is a sample table on the page to signify the correct format for the user to use.

I hope to add more functionality to this tool; by being able to download the YAML data into a YAML file, displaying error messages, and generally making the tool more intuitive and visually inviting.
