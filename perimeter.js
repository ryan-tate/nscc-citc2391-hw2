"use strict";
            
// get miles driven from user
const miles = parseInt(prompt("Enter miles driven"));

// get gallons used from user
const gallons = parseInt(prompt("Enter gallons of gas used"));

// calculate mpg
const mpg = parseFloat(miles/gallons);

// display results
const html = `<p><label>Miles: </label>${miles}</p>
    <p><label>Gallons: </label>${gallons}</p>
    <p><label>MPG: </label>${mpg.toFixed(2)}</p>`;
document.write(html);
