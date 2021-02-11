let fileReader;

// helper to read the file
const readCSVFile = file => {
  return new Promise((res, rej) =>{
    try {
      fileReader = new FileReader();
      fileReader.onloadend = function(){
        let rows = fileReader.result.trim().split("\n").map(row => row.split(","));
        res(rows);
      };
      fileReader.readAsText(file);
    } catch (err) {
      rej(err);
    }
  });
};

export default readCSVFile;