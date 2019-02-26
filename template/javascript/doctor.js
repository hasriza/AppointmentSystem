function getAppointments () {
  $.ajax({
    url: '/getSchedule',
    type: 'get',
    data: {
    },

    success: function (data, status) {
      document.getElementById('content').innerHTML = ' '
      if (data) {
        console.log(data)
        for (var i = 0; i < data.length; i++) {
          document.getElementById('content').innerHTML += '<hr>'
          document.getElementById('content').innerHTML += '<br>Subject :' + data[i].subject
          document.getElementById('content').innerHTML += '<br> Patient :' + data[i].cust_name
          document.getElementById('content').innerHTML += '<br> Date & Time :' + data[i].schedule
          document.getElementById('content').innerHTML += '<hr>'
        }
      } else {
        document.getElementById('content').innerHTML = 'No appointments!'
      }
    } })
}
