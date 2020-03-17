$( document ).ready(() =>{
   
    $("#removable").click(function(){
        $(this).remove();
    });
    $("#changebtn").click(()=>{
        $("#changeable").val("Jeg er blevet skiftet!");
    });

    let i = 4;
$('#submit-button').click(()=> {
    $("#first-list").append("<li>Reason"+i+"</li>");
    i++;
});
    
});