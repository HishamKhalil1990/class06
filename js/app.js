'use strict'
/* 

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	       23	       65	              6.3
Tokyo	       3	       24	              1.2
Dubai	       11	       38              	  3.7
Paris	       20	       38	              2.3
Lima	       2	       16	              4.6 
*/

let numberOfHour = 14;

//making branch object model ///////////////////////////////////////////////
function Branch(name,minCust,maxCust,avgCookie){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.noOfCustPerHour = [];
    this.noOfCookiesPerHour = [];
    this.totalNoOfCookies = 0;
}
Branch.prototype.addCust = function(){
    for (let i = 0; i < numberOfHour ; i++){
        this.noOfCustPerHour.push(Math.floor(randomCustmer(this.minCust,this.maxCust)));
    }
}
Branch.prototype.cookiesConsumed = function(){
    for (let i = 0; i < this.noOfCustPerHour.length; i++) {
        let noOfCookies = Math.floor(this.noOfCustPerHour[i]*this.avgCookie);
        this.noOfCookiesPerHour.push(noOfCookies);
        this.totalNoOfCookies += noOfCookies;
    }
}
Branch.prototype.render = function(){
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for(let i = 0; i <= numberOfHour + 1; i++ ){
        let tableData = document.createElement('td');
        tableRow.appendChild(tableData);
        tableData.setAttribute('style','border-style: solid;');
        if (i == 0){
            tableData.textContent = this.name;
        } else if (i <= numberOfHour) {
            tableData.textContent = this.noOfCookiesPerHour[i-1];
        } else {
            tableData.textContent = this.totalNoOfCookies;
        }
    }
}
///////////////////////////////////////////////////////////////////////////

//making and filling instances of the branch object 
let seattle = new Branch('Seattle',23,65,6.3);
seattle.addCust();
seattle.cookiesConsumed();
let tokyo = new Branch('Tokyo',3,24,1.2);
tokyo.addCust();
tokyo.cookiesConsumed();
let dubai = new Branch('Dubai',11,38,3.7);
dubai.addCust();
dubai.cookiesConsumed();
let paris = new Branch('Paris',20,38,2.3);
paris.addCust();
paris.cookiesConsumed();
let lima = new Branch('Lima',2,16,4.6);
lima.addCust();
lima.cookiesConsumed();
let allBranches = [seattle,tokyo,dubai,paris,lima];
//////////////////////////////////////////////////////////

//making the table heading ///////////////////////////////
let parents = document.getElementById('sales');
let table = document.createElement('table');
parents.appendChild(table);
table.setAttribute('style','border-style: solid;');
table.setAttribute('style','text-align: center;');
rowConstruct(1);
/////////////////////////////////////////////////////////

//making the table body
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
//////////////////////

//making the table footer
rowConstruct(2);
////////////////////////

//function used ////////////////////////////////////////////////////////////
//random custmer nmber 
function randomCustmer(min,max) {
    return Math.floor( Math.random()*(max-min+1)+min);
}
//first and last row in the table constructor function
function rowConstruct(number){
    let tableRow = document.createElement('tr');
    table.appendChild(tableRow);
    for(let i = 0; i <= numberOfHour + 1; i++ ){
        let tableHead = document.createElement('th');
        tableRow.appendChild(tableHead);
        tableHead.setAttribute('style','border-style: solid;');
        switch (number){
            //table head row
            case 1:
                let time = i + 5;
                let timeZone = 'am';
                if (time > 12){
                    time -= 12;
                    timeZone = 'pm';
                }
                time = `${time} ${timeZone}`;
                if (i == 0){
                    tableHead.textContent = null;
                } else if (i <= numberOfHour) {
                    tableHead.textContent = time;
                } else {
                    tableHead.textContent = 'daily location total';
                }
                break;
            //table footer row    
            case 2:
                if (i == 0){
                    tableHead.textContent = 'Totals';
                } else if (i <= numberOfHour) {
                    let counterOne = 0;
                    for (let j = 0; j < allBranches.length; j++){
                        counterOne += allBranches[j].noOfCookiesPerHour[i-1];
                    }
                    tableHead.textContent = counterOne;
                } else {
                    let counterTwo = 0;
                    for (let j = 0; j < allBranches.length; j++){
                        counterTwo += allBranches[j].totalNoOfCookies;
                    }
                    tableHead.textContent = counterTwo;
                }
                break;
        }
    } 
}
///////////////////////////////////////////////////////////////////////////

