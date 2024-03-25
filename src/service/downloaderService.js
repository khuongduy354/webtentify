class DownloaderService {
  zip = new JSZip();
  parsePathToArray(path = "") {
    return path.split("/").filter((stuff) => {
      if (stuff !== "" && stuff !== "." && stuff !== ".." && stuff !== " ") {
        return true;
      }
      return false;
    });
  }
  packFiles(files, path = "") { 
    let zipper = this.zip;
    if (path !== "") {
      const pathArray = this.parsePathToArray(path);

      for (let folder of pathArray) {
        zipper = zipper.folder(folder);
      }
    } 
    for(let file of files) {
      zipper.file(file.name, file.data);
    } 
  }

  packFile(file, path = "") { 
    let zipper = this.zip;
    if (path !== "") {
      const pathArray = this.parsePathToArray(path);

      for (let folder of pathArray) {
        zipper = this.zip.folder(folder);
      }
    }
    zipper.file(file.name, file.data); 
  }

  async packDefaultTemplateAssets(assetName) {
    if (assetName === "massively") {  
      const res = await fetch("/src/templates/default/massively/assets.zip");  
      const _data = await res.blob();

      this.zip.file("assets.zip", _data); 
    } else {
      throw new Error("Invalid default template");
    }
  }


  download(zipName = "example.zip") {
    this.zip.generateAsync({ type: "blob" }).then(function (content) {
      saveAs(content, zipName);
    });
  }
}
