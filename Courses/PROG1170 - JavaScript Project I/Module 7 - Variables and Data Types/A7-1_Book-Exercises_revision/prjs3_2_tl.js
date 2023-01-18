// INCORRECT 

// var sometext = "<h1>This is My Web Page!</h1><em>This text can be affected by other statements.</em><br><br><a href=\"http://www.webxpertz.net\">Web Site Link!</a><br><p>This text can be affected by other statements.</p>";
// document.write(sometext);

var myheading = `<h1>This is My Web Page!</h1>`,
linktag = `<a href=\"http://www.webxpertz.net\">Web Site Link!</a>`,
sometext = `This text can be affected by other statements.`,
begineffect = `<strong>`,
endeffect = `</strong>`,
beginpara = `<p>`,
endpara = `</p>`;
document.write(myheading);
document.write(`${begineffect} ${sometext} ${endeffect}`);
document.write(`${beginpara} ${linktag} ${endpara}`);
document.write(`${beginpara} ${sometext} ${endpara}`);