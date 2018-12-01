function getAppointments(){
	$.ajax({
    		url:"/getAppointments",
    		type:"get",
    		data:{
    		},

    		success:function(data , status){
    			if(data) {
    			for(var i =0 ;i<data.length;i++){
                 document.getElementById("content").innerHTML += "<br>"+data[i].subject;
             }
                } else {
                 document.getElementById('content').innerHTML = "No appointments!";
                }
}});
}

function getPractice(){
	$.ajax({
    		url:"/getPractice",
    		type:"get",
    		data:{
    		},

    		success:function(data , status){
    			if(data) {
    				document.getElementById('practice').innerHTML ="<option value=''>None</option>";
    				for(var i =0 ;i<data.length;i++){
                 	document.getElementById('practice').innerHTML +="<option value='"+data[i].practice+"'>"+data[i].practice+"</option>";
             		}
                } else {
                 document.getElementById('practice').innerHTML = "Empty";
                }
}});
}

function getDoctors(){

        var practice = $("#practice").val();
        console.log(practice);
        $.ajax({
            url: "/search",
            type: "post",
            data: {
                practice:practice             
            },
            success: function(data, status) {
            	console.log(data);
            	for(var i =0 ;i<data.length;i++){
                document.getElementById('content').innerHTML+=data[i].dr_name;
                document.getElementById('content').innerHTML+="<input type ='button' value='Book appointment' onclick=placeAppointment("+data[i].dr_id+",'"+data[i].dr_name+"')>";
              }
            }
        });
    

}

function placeAppointment(dr_id,dr_name){
	var html = '\
<form action="/placeAppointment" method="post">\
	<input type="datetime-local" name="schedule">\
	<input type="text" name="subject">\
	<input type="number" name="dr_id" value="'+dr_id+'" hidden>\
	<input type="hidden" name="dr_name" value="'+dr_name+'">\
	<input type="submit" value="Book">\
</form>';
	document.getElementById('content').innerHTML+=html;
}

function cancelAppointment(dr_id){

}

