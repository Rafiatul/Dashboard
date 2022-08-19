import React, { useEffect } from 'react'
import { ReactDOM } from 'react'
import $ from 'jquery'





  



export default function Clock() {


      


  return (
    
    


    <div class="timer-section">
                            <div class="timer-section-title">
                                <h4>Step 4</h4>
                                <p>Choose your mission statement</p>
                            </div>

                            {/* <div class="page-title-cercle" >
                                <div class="progress-2">
                                    <div class="conainer">
                                        <div class="circle_percent" data-percent="35">
                                            <div class="circle_inner">
                                                <div class="round_per"></div>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div> */}


                     <div className="timer-progress">
                        <div className=" span_1of_4 my-style style-6">
                            <svg className="radial-progress timer-progress-1" data-percentage={35} viewBox="0 0 80 80">
                            <circle className="incomplete" cx={40} cy={40} r={35} />
                            <circle className="complete" cx={40} cy={40} r={35} style={{strokeDashoffset: '39.58406743523136'}} />
                            <text className="percentage" x="50%" y="57%" transform="matrix(0, 1, -1, 0, 80, 0)">
                                35%
                            </text>
                            </svg>
                            <h3>completed</h3>
                        </div>
                    </div>





                            <div class="timer-area">
                                <div class="timer-cercle">
                                    <div id='cercle-1' class="cercle-1">
                                        <div id='cercle-2' class="cercle-2">
                                            <div class="cercle-border">
                                                <div id="border_transform">
                                                    <div class="border-sec"></div>
                                                </div>
                                                <div class="cercle-text">
                                                    <div class="" id="time_stat">
                                                        <span id="cercle_min">05</span>
                                                        <span>:</span>
                                                        <span id="cercle_sec">00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="timer-set-area">
                                    <div class="single-timer">
                                        <div class="timer-shadow">
                                            <div class="hour">
                                                <span id="hour_last">00</span>
                                                <span id="hour">00</span>
                                                <span id="hour_first">00</span>
                                            </div>
                                        </div>
                                        <p>h</p>
                                    </div>

                                    <div class="single-timer">
                                        <div class="timer-shadow">
                                            <div class="min">
                                                <span id="min_last">00</span>
                                                <span id="min">05</span>
                                                <span id="min_first">00</span>
                                            </div>
                                        </div>
                                        <p>min</p>
                                    </div>

                                    <div class="single-timer">
                                        <div class="timer-shadow">
                                            <div class="sec">
                                                <span id="sec_last">00</span>
                                                <span id="sec">00</span>
                                                <span id="sec_first">00</span>
                                                <span id="sec_1first">00</span>
                                            </div>
                                        </div>
                                        <p>sec</p>
                                    </div>

                                </div>
                                <div class="timer-button">
                                    <ul>
                                        <li><div id="reset" class="reset"><i class="fa-solid fa-rotate-right"></i></div></li>
                                        <li id="pouse_item"><div id="pause" class="pouse"><i  class="fa-solid fa-pause"></i></div></li>
                                        <li id="start_item"><div id="start" class="play"><i class="fa-solid fa-play"></i></div></li>
                                        <li><div class="bell"><i id="bell_icon" class="fa-solid fa-bell"></i></div></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

  )
}
