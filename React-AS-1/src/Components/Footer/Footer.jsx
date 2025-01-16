import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div id='footer'>
            <div className="top ">
                <div className="row gy-4 mt-3">
                    <div className="col-sm-4">
                        <div className="item text-text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p> 65243</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item">
                        <h3>AROUND THE WEB</h3>
                        <div className="icons"><i  className="fa-brands fa-facebook mx-1 icon"></i><i  className="fa-brands fa-twitter mx-1 icon"></i><i  className="fa-brands fa-linkedin-in mx-1 icon"></i><i  className="fa-solid fa-globe mx-1 icon"></i></div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item">
                        <h3 >ABOUT FREELANCER</h3>
                        <p > Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttom">
            <p>Copyright © Your Website 2021</p>
            </div>
        </div>


    )
}
