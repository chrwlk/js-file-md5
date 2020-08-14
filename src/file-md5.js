import jsmd5 from "js-md5";

export const md5 = async file => (
  new Promise((resolve, reject) => {
    if(!file) reject("No input file specified");

    const fileReader = new FileReader();

    fileReader.onload = function(e) {
      if(e.target.readyState === FileReader.DONE) {
        resolve(jsmd5(e.target.result));
      }
    }

    fileReader.readAsArrayBuffer(file);
  })
);
