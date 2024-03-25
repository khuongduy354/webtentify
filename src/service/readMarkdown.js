class MarkdownReader {
  constructor() {
    this.reader = new FileReader();
  }

  async readFile(file) {
    return new Promise((resolve, reject) => {
      this.reader.onload = function (event) {
        const fileData = event.target.result;
        resolve({data: fileData, name: file.name});
      };
      this.reader.onerror = function (event) {
        reject(event);
      };
      this.reader.readAsText(file);
    });
  }

  async readFiles(fileList) {
    let promiseList = [];
    for (let file of fileList) { 
      promiseList.push(this.readFile(file));
    }
    return Promise.all(promiseList);
  }  

  parseToHTML(mdFileList) {    
    let result = [];
    for(let mdFile of mdFileList) {
      let html = marked.parse(mdFile.data);  
      let newName = mdFile.name.replace(".md", ".html")
      result.push({name: newName, data: html});
    }
    return result;
  }

}

