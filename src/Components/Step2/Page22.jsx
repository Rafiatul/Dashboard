import React from 'react'
import '../Step2/step2.css'


const Page22 = () => {
  return (


    
    <div id="scrollbar1" className="step2">
    <div className="step2-area">
        <div className="step2-title">
            <h4>Create Your Slogan/Tagline</h4>
        </div>
        <div className="step2-video">
            <span><img src="images/video.png" alt=""/></span>
        </div>
        <div className="step2-form for-width">
            <form action="#">
                <label for="fashion-2">What’s your industry?</label>  
                <input type="text" placeholder='Others' />
                <select name="" id="fashion-2">
                    <option value="">Other</option>
                    <option value="">Fashion</option>
                    <option value="">Fashion</option>
                </select> 

                <label for="name-ind">Name your industry</label>
                <input className="" type="text" name="" id="name-ind" placeholder="Fashin"/>

                <label  for="women">What’s your business niche?</label> 
                <select className='' name="" id="women">
                    <option value="">Women Fashion</option>
                    <option value="">Women Fashion</option>
                    <option value="">Women Fashion</option>
                </select>     

                <label for="">Describe your business</label>
                <textarea id="" placeholder="I help Women Entrepreneurs Boss-Up Their Leadership Style"></textarea>                             


                <div className="step2-button-area">
                    <div className="step2-save">
                        <input type="submit" value="Slogan/Tagline Generated"/>
                        <a href="../3rd Page/index.html"><span id="bottom_gen_btn" className="">Generate Slogan/Tagline Now</span></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Page22
