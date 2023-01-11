/* Lab:exp_6_Establishment of the Relationship between Kata Cooling Power and Air Velocity
	 File name: graphplotly6.js
   Author:Prakriti Dhang
*/



var dataPointai =[];

var xArray = [];
var yArray = [];
var xValues = [];
var yValues = [];


 function showplot(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
        var rwe1 = otable.rows[tabrowindex].cells;
         
        //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
        xArray.push(parseFloat(rwe1[3].innerHTML));
        yArray.push(parseFloat(rwe1[1].innerHTML));
        //alert(rwe1[2].innerHTML);
        //alert(rwe1[1].innerHTML);
    }
   
    var data = [
        {x:xArray, y:yArray, mode:"markers"}
        
      ];
      
      var layout = {
        xaxis: {range: [100, 320],dtick: 20, title: "Wet Kata Cooling power "},
        yaxis: {range: [0, 10],dtick: 1, title: "Air Velocity"},  
        title: "Wet Kata Cooling power Vs Air Velocity"
      };
      
      Plotly.newPlot("myPlot", data, layout);

 }




function showbestfitg(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray.push(parseFloat(rwe1[3].innerHTML));
      yArray.push(parseFloat(rwe1[1].innerHTML));
  }
  var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues = [];
  var yValues = [];
  for (var x = 0; x <= 320; x += 1) {
    xValues.push(x);
    yValues.push(x * slope);
  }

var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    
    xaxis: {range: [100, 320], dtick: 50, title: "Wet Kata Cooling power"},
    yaxis: {range: [0, 10],  dtick: 1,  title: "Air Velocity"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myPlot", data, layout);
}