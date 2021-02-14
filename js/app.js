'use strict'
/* 

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	       23	       65	              6.3
Tokyo	       3	       24	              1.2
Dubai	       11	       38              	  3.7
Paris	       20	       38	              2.3
Lima	       2	       16	              4.6 
*/

// choose the branch
let branch = prompt('branches are: seattle, tokyo, dubai, paris and lima','choose a branch to show');

// define branches objects
let seattle = {
    minCust : 24,
    maxCust : 65,
    avgCookie : 6.3,
    noOfCustPerHour : [],
    noOfCookiesPerHour : [],
    totalNoOfCookies : 0,
    addCust : function(){
        for (let i = 0; i < 14 ; i++){
            this.noOfCustPerHour.push(randomCustmer(this.minCust,this.maxCust));
        }
    },
    cookiesConsumed : function(){
        for (let i = 0; i < this.noOfCustPerHour.length; i++) {
            let noOfCookies = this.noOfCustPerHour[i]*this.avgCookie;
            this.noOfCookiesPerHour.push(noOfCookies);
            this.totalNoOfCookies += noOfCookies;
        }
    }
}

seattle.addCust();
seattle.cookiesConsumed();

let tokyo = {
    minCust : 3,
    maxCust : 24,
    avgCookie : 1.2,
    noOfCustPerHour : [],
    noOfCookiesPerHour : [],
    totalNoOfCookies : 0,
    addCust : function(){
        for (let i = 0; i < 14 ; i++){
            this.noOfCustPerHour.push(randomCustmer(this.minCust,this.maxCust));
        }
    },
    cookiesConsumed : function(){
        for (let i = 0; i < this.noOfCustPerHour.length; i++) {
            let noOfCookies = this.noOfCustPerHour[i]*this.avgCookie;
            this.noOfCookiesPerHour.push(noOfCookies);
            this.totalNoOfCookies += noOfCookies;
        }
    }
}

tokyo.addCust();
tokyo.cookiesConsumed();

let dubai = {
    minCust : 11,
    maxCust : 38,
    avgCookie : 3.7,
    noOfCustPerHour : [],
    noOfCookiesPerHour : [],
    totalNoOfCookies : 0,
    addCust : function(){
        for (let i = 0; i < 14 ; i++){
            this.noOfCustPerHour.push(randomCustmer(this.minCust,this.maxCust));
        }
    },
    cookiesConsumed : function(){
        for (let i = 0; i < this.noOfCustPerHour.length; i++) {
            let noOfCookies = this.noOfCustPerHour[i]*this.avgCookie;
            this.noOfCookiesPerHour.push(noOfCookies);
            this.totalNoOfCookies += noOfCookies;
        }
    }
}

dubai.addCust();
dubai.cookiesConsumed();

let paris = {
    minCust : 20,
    maxCust : 38,
    avgCookie : 2.3,
    noOfCustPerHour : [],
    noOfCookiesPerHour : [],
    totalNoOfCookies : 0,
    addCust : function(){
        for (let i = 0; i < 14 ; i++){
            this.noOfCustPerHour.push(randomCustmer(this.minCust,this.maxCust));
        }
    },
    cookiesConsumed : function(){
        for (let i = 0; i < this.noOfCustPerHour.length; i++) {
            let noOfCookies = this.noOfCustPerHour[i]*this.avgCookie;
            this.noOfCookiesPerHour.push(noOfCookies);
            this.totalNoOfCookies += noOfCookies;
        }
    }
}

paris.addCust();
paris.cookiesConsumed();

let lima = {
    minCust : 2,
    maxCust : 16,
    avgCookie : 4.6,
    noOfCustPerHour : [],
    noOfCookiesPerHour : [],
    totalNoOfCookies : 0,
    addCust : function(){
        for (let i = 0; i < 14 ; i++){
            this.noOfCustPerHour.push(randomCustmer(this.minCust,this.maxCust));
        }
    },
    cookiesConsumed : function(){
        for (let i = 0; i < this.noOfCustPerHour.length; i++) {
            let noOfCookies = this.noOfCustPerHour[i]*this.avgCookie;
            this.noOfCookiesPerHour.push(noOfCookies);
            this.totalNoOfCookies += noOfCookies;
        }
    }
}

lima.addCust();
lima.cookiesConsumed();
// end of define branches objects

// calculating number of custemers
function randomCustmer(min,max) {
    return Math.floor( Math.random()*(max-min+1)+min);
}

// branches objects array
let branches = [seattle,tokyo,dubai,paris,lima];

// object index in the array
let branchIndex = 0;
switch (branch.toLowerCase()){
    case 'seattle':
        branchIndex = 0;
        break;
    case 'tokyo':
        branchIndex = 1;
        break;
    case 'dubai':
        branchIndex = 2;
        break;
    case 'paris':
        branchIndex = 3;
        break;
    case 'lima':
        branchIndex = 4;
        break;
}

// making a branch name header
let parents = document.getElementById('sales');
let branchName = document.createElement('h1');
parents.appendChild(branchName);
branchName.textContent = branch;

// making the branch sales list
let unOrderdList = document.createElement('ul');
parents.appendChild(unOrderdList);
for (let i =0; i < 15; i++) {
    let time = i + 6;
    let timeZone = 'am';
    if (time > 12){
        time -= 12;
        timeZone = 'pm';
    }
    time = `${time} ${timeZone}`;
    let listItem = document.createElement('li');
    unOrderdList.appendChild(listItem);
    if (i < 14){
        listItem.textContent = `${time} : ${Math.round(branches[branchIndex].noOfCookiesPerHour[i])} cookies`; 
    } else {
        listItem.textContent = `total : ${Math.round(branches[branchIndex].totalNoOfCookies)} cookies`
    }    
}
;
