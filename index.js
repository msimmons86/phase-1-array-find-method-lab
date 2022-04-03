// code your solution here
//function superbowlWin(win){
  //const winningYear = win.find(win => win.result ==="W")
  //return win.year
//}

//function superbowlWin2(data){
 // if (data.result === "W"){
  //  return record.year
 // }
//}

//function superbowlWin(winningYear){
  //return winningYear.record === "W"
//}
// console.log(record.find(WiningYear))

function superbowlWin(element){
  const result = element.find(record => record.result === "W")
    return (result ? result.year : undefined)
}
