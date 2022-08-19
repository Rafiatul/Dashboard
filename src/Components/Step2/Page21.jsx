import React from 'react'
import '../Step2/step2.css'




export default function Page21() {
  return (
    
    <div id="scrollbar1" className="step2">
        <div className="step2-area">
            <div className="step2-title">
                <h4>Create Your Slogan/Tagline</h4>
            </div>
            <div className="step2-video">
                <span><img src="assets/images/video.png" alt=""/></span>
            </div>
            <div className="step2-form">
                <form action="#">
                    <label for="fashion">What’s your industry?</label>  
                        <input type="text" placeholder="Your industry"/>
                             
                        <select name="" id="fashion">
                            
                            <option value="">Fashion</option>
                            <option value="">Fashion</option>
                            <option value="">Fashion</option>
                        </select> 

                    <label for="women">What’s your business niche?</label> 
                    <input type="text" placeholder="Your Business niche"/>   
                        <select name="" id="women">
                            <option value="">Women Fashion</option>
                            <option value="">Women Fashion</option>
                            <option value="">Women Fashion</option>
                        </select>     

                    <label >Describe your business</label>
                    <textarea id="" placeholder="I help Women Entrepreneurs Boss-Up Their Leadership Style"></textarea>                             


                    <div className="step2-button-area">
                        <div className="step2-save">
                            <input type="submit" value="Slogan/Tagline Generated"/>
                            <a href="../2nd Page/index.html"><span id="bottom_gen_btn" className="">Generate Slogan/Tagline Now</span></a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

  )
}

