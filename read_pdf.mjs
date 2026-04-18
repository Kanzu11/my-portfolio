import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

let dataBuffer = fs.readFileSync('C:\\\\Users\\\\USER\\\\OneDrive\\\\Desktop\\\\portfolio\\\\src\\\\assets\\\\Kanzedin_akmel_Resume (4).pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('C:\\\\Users\\\\USER\\\\OneDrive\\\\Desktop\\\\portfolio\\\\resume_text.txt', data.text);
}).catch(e => {
    console.error(e);
});
