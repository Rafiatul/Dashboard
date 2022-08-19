
$(".circle_percent").each(function () {
  var $this = $(this),
    $dataV = $this.data("percent"),
    $dataDeg = $dataV * 3.6,
    $round = $this.find(".round_per");
  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  $this.append(
    '<div class="circle_inbox"><span class="percent_text"></span></div>'
  );
  $this.prop("Counter", 0).animate(
    { Counter: $dataV },
    {
      duration: 2000,
      easing: "swing",
      step: function (now) {
        $this.find(".percent_text").text(Math.ceil(now) + "%");
      }
    }
  );
  if ($dataV >= 51) {
    $round.css("transform", "rotate(" + 360 + "deg)");
    setTimeout(function () {
      $this.addClass("percent_more");
    }, 1000);
    setTimeout(function () {
      $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
    }, 1000);
  }
});



$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });

  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
    
  }).trigger('scroll');