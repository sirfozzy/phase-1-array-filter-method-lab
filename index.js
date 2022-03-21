// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Anette', 'Star']

function findMatching(drivers, string){
    let answer = drivers.filter(element => element === string)
    return answer
}

function fuzzyMatch(drivers, string){
    let firstLetter = drivers.filter(driver => driver.slice(0, string.length) === string)
    return firstLetter

    function matchName(drivers, name){
        return drivers.filter(function(driver){
          return driver.name === name
        })
    }
}