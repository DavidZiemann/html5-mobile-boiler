window.addEventListener("offline", function(e) {
	$('#onlineStatus').text('Offline').attr('class', 'offline');
})

window.addEventListener("online", function(e) {
	$('#onlineStatus').text('Online').attr('class', 'online');
});

var reportStatus = function() {
	if (navigator.onLine) {
	  $('#onlineStatus').text('Online').attr('class', 'online');
	} else {
	  $('#onlineStatus').text('Offline').attr('class', 'offline');
	}
}