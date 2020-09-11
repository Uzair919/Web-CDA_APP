$(document).ready(function () {

    $('#scroll').hide()
    window.addEventListener("scroll", myScrollFunc);

});

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y > 500) {
      $('#scroll').show();
    } else {
      $('#scroll').hide();
    }
  };

  



  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
	$('#scroll').hide()
  }

 