function openNav() {
  document.getElementById("start").style.width = "500px";
}

function closeNav() {
  document.getElementById("start").style.width = "0";
}



window.onload = function(){date()}, setInterval(function(){date()}, 1000);

function date() {
    var now = new Date(),
        now = now.getHours()+':'+now.getMinutes();
    $('#time').html(now);
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$('#example1')
  .awesomeCursor('paper-plane', {
    color: '#2cb2da',
    hotspot: 'top right'
  });