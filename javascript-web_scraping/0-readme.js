#!/usr/bin/node

function readFile(filePath) {
    try {
        const file = new FileReader();
        file.readAsText(filePath, "utf-8");
        file.onload = () => {
            console.log(file.result);
        };
    } catch (error) {
        console.log(error);
    }
}
