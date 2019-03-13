//    Name: Garrett Hall 
//    Date Created: 3-9-19
//    Most recent revision: 3-13-19


function validateItems() 
{
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;	
    var phone = document.forms["contact"]["phone"].value;
    if (name == "") 
	{
        alert("Name must be filled in!");
        document.forms["contact"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["name"].focus();
        return false;
    }
   else if (email == "") 
   {
        alert("Email must be filled in!");
        document.forms["contact"]["email"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["email"].focus();
        return false;
    }
	else if (phone == "") 
	{
        alert("Phone must be filled in!");
        document.forms["contact"]["phone"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["phone"].focus();
        return false;
    }
	else
	{
			alert("Your information has been submitted!");
	}
}