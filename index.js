function takeANumber(curline,nam){
  curline.push(nam);

  return `Welcome, ${nam}. You are number ${curline.indexOf(nam) + 1} in line.`
}
function nowServing(line){
  if(line[0] === undefined){
    return 'There is nobody waiting to be served!';
  }
  return 'Currently serving ' + line.shift() + '.';
}
