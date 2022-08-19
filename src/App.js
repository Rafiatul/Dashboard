import React, { useEffect } from 'react';
import { Routes , Route } from 'react-router-dom';


import Header from './Components/Common/Header';
import Clock from './Components/Common/Clock';
import Number from './Components/Common/Number';



import Page21 from './Components/Step2/Page21';
import Page22 from './Components/Step2/Page22';
import Page23 from './Components/Step2/Page23';


import Page31 from './Components/Step3/Page31'
import Page32 from './Components/Step3/Page32'


import Page41 from './Components/Step4/Page41'
import Page42 from './Components/Step4/Page42'







function App() {
  return (
   

  <React.StrictMode>
       {/* <Routes>
          <Route path='/Common/Page21' element={<Page21/>}> </Route>
          <Route path='/Page22' element={<Page22/>}> </Route>
      </Routes> */}


      <div className='main-container '>
            <div className='side-app'>
                <Header/>
                <div className='row' style={{margin:'30px, 30px'}}>
                    
                    <div className='col-md-3 ' >
                    <Clock/>
                    </div>
                    <div className='col-md-4'>
                      <Number/>
                    </div>
                    <div className='col-md-5'>
                    <Page31/>
                    
                    
                    </div>
                  
                  
                </div>
            </div>
      </div>
  
</React.StrictMode>
    
  );
}

export default App;
