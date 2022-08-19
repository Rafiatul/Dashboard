import React from 'react'
import './Step3.css'




const Page31 = () => {
  return (
    <div id="scrollbar1" className="statement">
    <div className="statement-area">
        <div className="statement-title">
            <h4>Create Your Logo</h4>
        </div>
        <div className="statement-video">
            <span><img src="../../../public/assets/images/video.png" alt=""/></span>
            
        </div>
        <div className="statement-form">
            <form action="#">
                
                <label for="name-ind">Enter your name</label>
                <input type="text" name="" id="name-ind" placeholder="Dyna"/>
               
                <label for="name-ind">Enter your business niche</label>
                <input type="text" name="" id="name-ind" placeholder="Women Fashion"/>

                <label for="slogan">Enter your slogan/tagline</label>
                <textarea id="slogan" placeholder="Boss Up Your Leadership Style"></textarea>                             


                <div className="statement-button-area">
                    <div className="statement-save">
                        <input type="submit" value="Logo Generated"/>
                        <a href="../2nd Page/index.html"><span id="bottom_gen_btn" className="">Generate Logo Now</span></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Page31
