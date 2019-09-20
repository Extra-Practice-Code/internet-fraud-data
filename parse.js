let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("./test/F1040EZ.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./data/overzicht-koop--en-verkoopfraude-op-het-internet.pdf");
