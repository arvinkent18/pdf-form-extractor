let fs = require('fs'),
        PDFParser = require("pdf2json");
let pdfParser = new PDFParser();

let source = process.argv[2];
let destination = process.argv[3];

if(!source || !destination) {
    console.log('Source and filename required.');
}

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log(pdfData);
    console.log(destination);
    fs.writeFile(destination, JSON.stringify(pdfData), function (err) {
        if (err) throw err;
    });
});

pdfParser.loadPDF(source);