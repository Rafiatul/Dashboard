import React from 'react'
import './Step3.css'
import Aven from './Aven.png'
import Treva from './Treva.png'
import Lighting from './Lighting.png'
import Volicity from './Volicity.png'
import Fox from './Fox Hub.png'
import Kyan from './Kyan.png'
import upload from "./upload.png"
import video from './video.png'

const Step32 = () => {

    /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
     function updateThumbnail(dropZoneElement, file) {
      let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
    
      // First time - remove the prompt
      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }
    
      // First time - there is no thumbnail element, so lets create it
      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
      }
    
      thumbnailElement.dataset.label = file.name;
    
      // Show thumbnail for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
    
        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

  return (
    <div id="scrollbar1" class="statement">
           <div class="statement-area">
           <div class="statement-title">
                                    <h4>Create Your Logo</h4>
                                </div>
                                <div class="statement-video">
                                    <span><img src={video} alt=""/></span>
                                </div>
                                <div class="statement-form">
                                    <form action="#">
                                        <div class="creat-logo-area">
                                            <div class="creat-logo-title">
                                                <h5>Select one of the generated specially for you</h5>
                                            </div>
                                            <div class="image-raio">
                                                <ul>
                                                    <li><input type="radio" name="test" id="cb1" />
                                                      <label for="cb1"><img src={Aven} /></label>
                                                    </li>
                                                    <li><input type="radio" name="test" id="cb2" />
                                                      <label for="cb2"><img src={Treva} /></label>
                                                    </li>
                                                    <li><input type="radio" name="test" id="cb3" />
                                                    <label for="cb3"><img src={Lighting} /></label>
                                                    </li>
                                                    <li><input type="radio" name="test" id="cb4" />
                                                      <label for="cb4"><img src={Volicity} /></label>
                                                    </li>
                                                    <li><input type="radio" name="test" id="cb5" />
                                                      <label for="cb5"><img src={Fox} /></label>
                                                    </li>
                                                    <li><input type="radio" name="test" id="cb6" />
                                                      <label for="cb6"><img src={Kyan} /></label>
                                                    </li>
                                                  </ul>
                                            </div>
                                        </div>

                                        <div class="devider">
                                            <hr/>
                                            <span>OR</span>
                                        </div>
                                        
                                        <div class="upload-logo-area">
                                            <h5>Upload your own logo</h5>
                                            <div class="upload-box">
                                                <div class="upload-img-box">
                                                    <div class="drop-zone">
                                                        <span class="drop-zone__prompt"><img src={upload} alt=""/> Drag & Drop Your Logo Here</span>
                                                        <input id="logo_uplode" type="file" name="myFile" class="drop-zone__input"/>
                                                    </div>
                                                </div>
                                                <label for="logo_uplode" id="logo_uplode_btn">Upload From Computer</label>
                                                
                                            </div>
                                        </div>
    
                                        <div class="statement-button-area">
                                            <div class="statement-save">
                                                <input type="submit" value="Confirm Logo"/>
                                                <span id="bottom_gen_btn" class="">Confimr Logo</span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
           </div>
      </div>
  )
}

export default Step32
