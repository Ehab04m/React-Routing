import React, { useState } from 'react'
import "./Contact.css"


export default function Contacts() {
    const [labelh,sethh] = useState("");
    const typing = (e)=>{
    const inputLabel = e.target.closest('div').querySelector(`label[for="${e.target.id}"]`);
    const hh = inputLabel.htmlFor
    console.log(hh);
    console.log(labelh);
    if(e.target.value != ""){
        sethh(hh)

    }
    else{
        sethh("")
    }
    
  
    
   
    


    }
    
    


    return (
        <div id='contact'>
            <div className="text-center pt-4" style={{ color: 'rgb(44, 62, 80)' }}>
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">conatct section</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}>
                    </div>
                    <i className="fa-solid fa-star" />
                    <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}>
                    </div>
                </div>
            </div>
            <form className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid">
                <label  htmlFor="userName" className={`position-relative top-0 ${"userName" == labelh ? "":"__top"} `} >userName:</label>
                <input  onInput={typing} id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label  htmlFor="userAge" className={`position-relative top-0 ${"userAge" == labelh ? "":"__top"} `}>userAge:</label>
                <input onInput={typing} id="userAge" type="text" placeholder="userAge" name="userAge" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label  htmlFor="userEmail" className={`position-relative top-0 ${"userEmail" == labelh ? "":"__top"} `}>userEmail:</label>
                <input onInput={typing} id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <label  htmlFor="userPassword" className={`position-relative top-0 ${"userPassword" == labelh ? "":"__top"} `}>userPassword:</label>
                <input onInput={typing} id="userPassword" type="text" placeholder="userPassword" name="userPassword" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid" />
                <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}>send Message</button>
            </form>




        </div>





    )



}