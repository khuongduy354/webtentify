function validateSize(inp, limit) { 
    if(inp.files === undefined) return true;
  if (inp.files.length !== 0) {
    if(inp.files[0].size > limit){
        inp.value = ""; 
        alert("File is too big!");
        return false;
    };  
  } 
  return true;
}
