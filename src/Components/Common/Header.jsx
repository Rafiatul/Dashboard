import React from 'react'
import $ from 'jquery'






  


export default function Header() {

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
  
  return (
    <div>
            <div class="page-titie">
                <h3>3 HOURS BUSINESS LAUNCH CHALLENGE</h3>
                <div class="page-title-cercle">
                    <div class="progress-2">
                        <div class="conainer">
                            <div class="circle_percent" data-percent="45">
                                <div class="circle_inner">
                                    <div class="round_per"></div>
                                </div>
                            </div>

                            
                        </div>
                   </div>
                </div>
                
                <div class="page-title-btn">
                    <a href="#"><i class="fa-solid fa-caret-left"></i></a>
                    <a href="../../Step-2/1st Page/index.html"><i class="fa-solid fa-caret-right"></i></a>
                </div>
                <div class="page-save-btn">
                    <div class="save-btn-area">
                        <span><i class="fa-solid fa-floppy-disk"></i> Saved</span>
                        <a id="top_save" href="#"><i class="fa-solid fa-floppy-disk"></i>Save</a>
                    </div>
                </div>
            </div>
    </div>
  )
}
