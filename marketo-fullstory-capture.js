//add this to your site's head code if you don't already have jQuery
//<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>

//Use on non-Marketo web pages or on pages that include multiple forms

document.getElementById("mktoForm_1001").onsubmit = grabFormData;
document.getElementById("mktoForm_1002").onsubmit = grabFormData;
document.getElementById("mktoForm_1003").onsubmit = grabFormData; 
//add as many additional lines here as you need, specifying a unique formId for each
//you can find the Marketo form id in the embed code Marketo provides

function grabFormData(e) { 
  var id = e.srcElement.getAttribute("id");
  var email = $("#" + id).find("#Email").val();
  var first = $("#" + id).find("#FirstName").val();
  var last = $("#" + id).find("#LastName").val();
  var company = $("#" + id).find("#Company").val();
  var formid = $("#" + id).find("input[name=formid]").val();  // adds the Marketo formid so you can use this value to filter results in Fullstory
  //console.log(first + " " + last, email, company); 
  //uncomment the line above to test in browser console
  FS.identify(email, {
    "displayName": first + " " + last,
    "email": email,
    "company": company,
    "formid": formid
   });
}  

//The version below is more universal and does not use specific formId to capture information
//You can add this to any Marketo landing page template to capture information

window.onload = function(){ 
document.getElementsByClassName("mktoForm")[0].onsubmit = grabFormData;
};

function grabFormData(e) { 
  var id = e.srcElement.getAttribute("id");
  var email = $("#" + id).find("#Email").val();
  var first = $("#" + id).find("#FirstName").val();
  var last = $("#" + id).find("#LastName").val();
  var company = $("#" + id).find("#Company").val();
  var phone = $("#" + id).find("#Phone").val();
//var customfield = $("#" + id).find("#Purple_unicorn__c").val();
  var formid = $("#" + id).find("input[name=formid]").val();
  //console.log(first + " " + last, email, company);
  FS.identify(email, {
    "displayName": first + " " + last,
    "email": email,
    "company": company,
    "phone": phone,
    "formid": formid
//  "customfield": customfield
   });
}  

//You can add custom or standard fields as shown in this example
//To find the id for any field, you can export a list of field names from Marketo
//using the REST API name for the field
//In the example above, my custom field "Purple unicorn" is mapped to
//the SFDC contact object and has the REST name Purple_unicorn__c

//This version ONLY works with landing pages that have a single form
//it does not work on pages with multiple forms

