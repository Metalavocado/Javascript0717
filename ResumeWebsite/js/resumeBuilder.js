//Value declarations
var name = "Rohan Cruickshank";
var role = "Unity Developer";







//Value formatting
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

//Display values on website
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
