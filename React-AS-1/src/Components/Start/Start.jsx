import React, { useState } from 'react'
import logo from "/home/ehab/React Assignment 1/React-AS-1/src/assets/avataaars (1).svg"
import "./Start.css"
import { use } from 'react'

export default function Start(){
    

    
    return (
        <div className="home ">
            <div id="start" className='text-center'>
                <img src={logo} alt="ll" className='mb-3' />
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3" >
                    </div>
                    <i  className="fa-solid fa-star" />
                    <div className="line ms-3"  />
                </div>
                <div >Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>


    )
}
