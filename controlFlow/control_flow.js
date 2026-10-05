let userRole = "manager";
let accessLevel;

function display() {
    if (userRole == "admin")  {
        accessLevel = "full access granted";
        document.getElementById("demo").innerHTML = accessLevel;
    } else if (userRole == "manager"){
        accessLevel = "limited access granted";
    } else {
        accessLevel = "No access granted";
    }

}
