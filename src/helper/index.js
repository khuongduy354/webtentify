function validateSize(inp, limit) { 
    if(inp.files === undefined) return true;
  if (inp.files.length !== 0) {
    if(inp.files[0].size > limit){
        inp.value = ""; 
        return false;
    };  
  } 
  return true; 
} 

function isFileNameOverlap(fileList){   
  let fileNames = fileList.map(file => file.name);  
  let isOverlap = false;    
  let nameMap = {} 

  for(file of fileNames){
    if(nameMap.hasOwnProperty(file)){
      isOverlap = true;
      break;
    }else{
      nameMap[file] = true;
    }
  }
  return isOverlap;
} 


module.exports = { 
  validateSize, 
  isFileNameOverlap
}
