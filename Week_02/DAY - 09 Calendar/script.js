var date = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var month = ["Jan","Feb","Mar","Apr","May","June","July", "Aug", "Sept", "Oct", "Nov", "Dec"];
document.getElementById("weekday").innerHTML = days[date.getDay()];
document.getElementById("date").innerHTML = month[date.getMonth()] + ", " + date.getDate() + "<br>" + date.getFullYear();