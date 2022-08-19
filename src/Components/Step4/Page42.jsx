import React from 'react'

const Page42 = () => {
  return (
    <div id="scrollbar1" class="statement">
        <div class="statement-area">
          <div class="statement-title">
                                    <h4>Already Have a Mission Statement?</h4>
           </div>
               <div class="statement-form">
                                    <form action="#">
    
                                        
                                        <div class="single-row">
                                            <div class="row-3-input5 default-input">
                                                <label for="text-area">Type your current mission statement here</label>
                                                <textarea  id="text_area" placeholder="I help new moms to lose their baby weight in 8 weeks so they can have their body back and enjoy their newborn with confidence"></textarea>
                                            </div>
                                        </div>
    
                                        <div class="statement-button-area">
                                            <div class="statement-save">
                                                <input type="submit" value="Mission Statement Saved"/>
                                                <span id="page4_gen_btn" class="">Save Generated Mission Statement</span>
                                            </div>
                                        </div>
                                    </form>
                </div>
        </div>
    </div>
  )
}

export default Page42
