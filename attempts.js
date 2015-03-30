
//this is what Michal wants me to use - a built-in event of
//"show.bs.modal" to render the modal body content (the iframe)

$(document).onload(function () {
    $(‘#signup').on('show.bs.modal', function (e) {
    	var start = "<iframe scrolling='none' height='363' width='600' style='border:none;' src='";
    	var iframe = "https://multitenant-admin.3scale.net/p/signup?origin=website-modal";   
    	var end = "'></iframe>";
    	$(".modal-body").append(start + iframe + end);  
    });    
});






//this works with an inline onclick="loadModal()" addition
function loadModal() {
    var start = "<iframe scrolling='none' height='363' width='600' style='border:none;' src='";               // Create element with HTML  
    var iframe = "https://multitenant-admin.3scale.net/p/signup?origin=website-modal";   
    var end = "'></iframe>";
    $(".signuplb").append(start + iframe + end);  
}



//this kinda works, but won't load the iframe on the first click.
//no idea what's wrong

$(document).ready(function () {
    $('#signup').click(function () {
    	var start = "<iframe scrolling='none' height='363' width='600' style='border:none;' src='";
    	var iframe = "https://multitenant-admin.3scale.net/p/signup?origin=website-modal";   
    	var end = "'></iframe>";
    	$(".modal-body").append(start + iframe + end);  
    });    
});

