
function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray = [...dateArray, new Date (currentDate).toISOString().replace('Z', '+00:00' )];
        currentDate = new Date(currentDate).setDate(new Date(currentDate).getDate()+1);
    }
    return dateArray;
}

console.log(getDates(new Date('2019-04-08'), new Date()));