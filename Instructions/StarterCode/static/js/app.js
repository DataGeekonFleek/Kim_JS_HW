// from data.js
var tableData = data;

//FILTER
// make the 'Filter Table' box the button
var submit = d3.select("#filter-btn");

// when someone clicks..filter the table by the date they put in 

submit.on("click", function() {
    // No Refresh so filter can run on table w/o page refreshing
    d3.event.preventDefault();

    // Tell it where the input box is
    var date = d3.select("#datetime");

    // Tell it how to get input values 
    var userdate = date.property("value"); 
    console.log(userdate);

    //Filter the ufo table by the user date
    var filtertable = tableData.filter(sighting => sighting.datetime === userdate);
    console.log(filtertable);

    //TABLE
    //Display filtertable subset of data in the actual table on the site
    var tbody = d3.select("tbody"); 
    // Each dictionary should be a line in the console and each console line should be a row. 
    // Then really what I want are the values of the object...inserted as cells in each row
    filtertable.forEach(function(ufo) {
    //console.log(ufo);
    var tablerow = tbody.append("tr");
    Object.values(ufo).forEach(function(value) {
        var cellvalue = tbody.append("td");
        //console.log (cellvalue);
        cellvalue.text(value);
    });

});
    
    });
