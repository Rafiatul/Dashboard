import React from 'react'
import './Step4.css'

const Page41 = () => {
  return (
    <div id="scrollbar1" className="step4">
                            <div className="step4-area">
                                <div className="step4-title">
                                    <h4>Create Your Mission step4</h4>
                                    <a href="../2nd Page/index.html">Already Have a Mission step4?</a>
                                </div>
                                <div className="step4-video">
                                    <span><img src="images/video.png" alt=""/></span>
                                </div>
                                <div className="step4-form">
                                    <form action="#">
    
                                        
                                        <div className="single-row">
                                            <button className="row-1-btn">I help</button>
                                            <div className="row-1-input1 default-input">
                                                <label for="input1">Who?</label>
                                                <input id="input1" type="text" placeholder="New moms"/>
                                            </div>
                                            <div className="row-1-input2 default-input">
                                                <label for="input2">Do what?</label>
                                                <input id="input2" type="text" placeholder="lose their baby weight"/>
                                            </div>
                                        </div>
    
                                        
                                        <div className="single-row">
                                            <button className="row-2-btn">In</button>
                                            <div className="row-2-input3 default-input">
                                                <label for="input3">What timeframe?</label>
                                                <input id="input3" type="text" placeholder="8 weeks"/>
                                            </div>
                                            <button className="row-3-btn">So that they can</button>
                                        </div>
    
    
                                        
                                        <div className="single-row">
                                            <div className="row-3-input5 default-input">
                                                <label for="input4">Have or do what?</label>
                                                <input id="input4" type="text" placeholder="have their body back"/>
                                            </div>
                                        </div>
    
                                       
                                        <div className="single-row">
                                            <div className="row-3-input5 default-input">
                                                <label for="input5">How would that benefit them or change their life?</label>
                                                <input id="input5" type="text" placeholder="enjoy their newborns with confidence"/>
                                            </div>
                                        </div>
    
                                        
                                        <div className="single-row">
                                            <div className="notice">
                                                <h3>Generated Mission step4</h3>
                                                <p id="form_conten_generated"></p>
                                            </div>
                                        </div>
    
    
                                        <div className="step4-button-area">
                                            <div className="step4-save">
                                                <input type="submit" value="Mission step4 Saved"/>
                                                <span id="bottom_gen_btn" className="">Save Generated Mission step4</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
  )
}

export default Page41
