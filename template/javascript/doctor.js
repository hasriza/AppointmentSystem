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