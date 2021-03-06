function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function increaseRankBy(n){
  const upRank = document.getElementById('app').querySelectorAll('ul.ranked-list')
  
  for (let i = 0; i<upRank.length; i++){
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML))+n)
  }
}

function deepestChild(){
  var deep = document.querySelector('#grand-node')
  var nextNode = deep.children[0]
  
  while (nextNode){
    deep = nextNode;
    nextNode = deep.children[0]
  }
  return deep;
}