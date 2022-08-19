import React from 'react'
import '../Step2/step2.css'

const Page23 = () => {
  
  return (
    <div id="scrollbar1" className="statement">
                            <div className="statement-area">
                                <div className="statement-title">
                                    <h4>Create Your Slogan/Tagline</h4>
                                </div>
                                <div className="statement-video">
                                    <span><img src="images/video.png" alt=""/></span>
                                </div>
                                <div className="statement-form">
                                    <form action="#">

                                        <div className="tagline-area">
                                            <div className="tagline-title">
                                                <h4>We have generated slogans for you! Select the one you like</h4>
                                            </div>
                                            <div className="tagline-input">
                                                <ul>
                                                    
                                                    <li>
                                                        <input type="checkbox" name="" id="check-1"/>
                                                        <label for="check-1">Dress Like A 7-Figure Boss</label>
                                                    </li>

                                                    <li>
                                                        <input type="checkbox" name="" id="check-2"/>
                                                        <label for="check-2">Boss Up Your Leadership Style</label>
                                                    </li>

                                                    <li>
                                                        <input type="checkbox" name="" id="check-3"/>
                                                        <label for="check-3">Intentionally Dressed</label>
                                                    </li>

                                                    <li>
                                                        <input type="checkbox" name="" id="check-4"/>
                                                        <label for="check-4">Lead with Style</label>
                                                    </li>

                                                    <li>
                                                        <input type="checkbox" name="" id="check-5"/>
                                                        <label for="check-5">Turn Your Workplace into a Runway</label>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>

                                        <div className="devider">
                                            <hr/>
                                            <span>OR</span>
                                        </div>

                                        <div className="text-area">
                                            <label for="">Create your custom Slogan</label>
                                            <textarea id="" placeholder="Boss Up Your Leadership Style"></textarea>                             
                                        </div>
    
                                        <div className="statement-button-area">
                                            <div className="statement-save">
                                                <input type="submit" value="Slogan/Tagline Generated"/>
                                                <span id="bottom_gen_btn" className="">Generate Slogan/Tagline Now</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
  )
}

export default Page23
