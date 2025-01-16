import React, { useState } from 'react'
import "./Portfolio.css"
import port1 from "/home/ehab/React Assignment 1/React-AS-1/src/assets/poert1.png"
import port2 from "/home/ehab/React Assignment 1/React-AS-1/src/assets/port2.png"
import port3 from "/home/ehab/React Assignment 1/React-AS-1/src/assets/port3.png"
import { use } from 'react'

export default function Portfolio() {
    const [imgSrc,setimgSrc] = useState("")
    const [isModalVisible,setisModalVisible] = useState(false)
    const getImgSrc = (e)=>{
        const modalImg = (e.target.closest('.p-item').querySelector('img'));
        setisModalVisible(true)
        setimgSrc(modalImg.src)
    }
    const hideModal = ()=>{
        setisModalVisible(false)
    }
    return (
        <div id='portfolio' className='mb-4'>
            <div className="text-center pt-4" style={{ color: 'rgb(44, 62, 80)' }}>
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }}>
                    </div><i className="fa-solid fa-star" />
                    <div className="line ms-3" style={{ backgroundColor: 'rgb(44, 62, 80)' }} />
                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    {/* Card 1 */}
                    <div className="col-lg-4 col-md-6">
                        <div className=" p-item rounded-3 overflow-hidden position-relative">
                            <img alt='' className="img w-100 rounded-3" src={port1} />
                            <div onClick={getImgSrc} className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="r p-item ounded-3 overflow-hidden position-relative">
                            <img alt='' className="w-100 rounded-3" src={port2} />
                            <div onClick={getImgSrc}  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-lg-4 col-md-6">
                        <div className="p-item rounded-3 overflow-hidden position-relative">
                            <img alt='' className="w-100 rounded-3" src={port3} />
                            <div onClick={getImgSrc}  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="col-lg-4 col-md-6">
                        <div className=" p-item rounded-3 overflow-hidden position-relative">
                            <img alt='' className="w-100 rounded-3" src={port1} />
                            <div onClick={getImgSrc}  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="col-lg-4 col-md-6">
                        <div className=" p-item rounded-3 overflow-hidden position-relative">
                            <img alt='' className="w-100 rounded-3" src={port2} />
                            <div onClick={getImgSrc}  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="col-lg-4 col-md-6">
                        <div className=" p-item rounded-3 overflow-hidden position-relative">
                            <img alt='' className="w-100 rounded-3" src={port3} />
                            <div onClick={getImgSrc}  className="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                                <i className="text-white fa-solid fa-plus fa-6x" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                isModalVisible &&(
                    <div onClick={hideModal} id='modal'  className="model__ position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center ">
            <img  alt='' src={imgSrc} />
            </div>

                )
            }
           




        </div>
    )
}
