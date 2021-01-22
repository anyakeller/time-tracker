let fileReader;

// helper to read the file
const handleFileRead = e => {
  const content = fileReader.result;
  console.log(content);
  // … do something with the 'content' …
};

// fileReader = new FileReader();
// fileReader.onloadend = handleFileRead;
// fileReader.readAsText(this.state.file);
//
// module.exports =
