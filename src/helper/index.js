function validateSize(inp, limit) {
  if (inp.files === undefined) return true;
  if (inp.files.length !== 0) {
    if (inp.files[0].size > limit) {
      inp.value = "";
      return false;
    }
  }
  return true;
}

function isFileNameOverlap(fileList) {
  let isOverlap = false;
  let nameMap = {};

  for (let file of fileList) { 
    const fileName = file.name.trim();
    if (nameMap.hasOwnProperty(fileName)) {
      isOverlap = true;
      break;
    } else {
      nameMap[fileName] = true;
    }
  }
  return isOverlap;
}

try {
  module.exports = exports = {
    validateSize,
    isFileNameOverlap,
  };
} catch (e) {}
