import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import imgchair from '../Imgs/chair.png'
import imgsofa from '../Imgs/sofa.png'
import imgtable from '../Imgs/table.png'
import imglamb from '../Imgs/lamb.png'
import {FaRegHeart } from "react-icons/fa";

function NewFurnature() {
    return (
        <>
         <div className='container'>
            <br></br>
            <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--Sama Wood Shop</h1>
            <p style={{ textAlign: 'center', fontSize: '23px', color: '#1f8dc0',marginLeft:'20px' }}>New & Now Furnature Shop</p>
            <br></br>

            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card" style={{border : '0 solid whitesmoke', backgroundColor:'#eeeeee'}}>
                        <Link to={'/sofa'}>
                        <img src={imgsofa} className="card-img-top" alt="..." style={{ backgroundColor: '#f1d4a1' }}/></Link>
                        <div className="card-body">
                            <h2 className="card-title" style={{ color: 'rgb(247 115 9 / 96%)' }}>Sofaa</h2>
                            <p className="card-text" style={{fontSize:'24px'}}>$300.00
                            <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart /></span> </p>

                        </div>
                        {/* <div className="top-left" style={{position:'absolute',top:'5px',left:'20px',fontSize:'30px'}}>Sofa</div> */}
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{border : '0 solid whitesmoke', backgroundColor:'#eeeeee'}}>
                        <Link to={'/coffetable'}>
                        <img src={imgtable} className="card-img-top" alt="..." style={{ backgroundColor: 'rgb(184 141 92 / 47%)' }}/>
                        </Link>
                        <div className="card-body">
                            <h2 className="card-title" style={{ color: 'rgb(216 116 36 / 88%)' }}>Coffe Table</h2>
                            <p className="card-text" style={{fontSize:'24px'}}>$250.00       
                            <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart /></span> </p>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card"style={{border : '0 solid whitesmoke', backgroundColor:'#eeeeee'}} >
                        <Link to={'/chair'}>
                        <img src={imgchair} className="card-img-top" alt="..." style={{ backgroundColor: '#5e93ac' }} />
                        </Link>
                        <div className="card-body">
                            <h2 className="card-title" style={{ color: 'rgb(55 63 146 / 96%)' }}>Wood Chair</h2>
                            <p className="card-text" style={{fontSize:'24px'}}>$200.00
                            <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart /></span> </p>

                        </div>
                        {/* <div className="top-left" style={{ position: 'absolute', top: '5px', left: '20px', fontSize: '30px' }}>Wood Chair</div> */}


                    </div>
                </div>
               
                <div className="col">
                    <div className="card" style={{border : '0 solid whitesmoke', backgroundColor:'#eeeeee'}}>
                        <Link to={'/light'}>
                        <img src={imglamb} className="card-img-top" alt="..." style={{ backgroundColor: 'rgb(225 194 158 / 48%)' }}/>
                        </Link>
                        <div className="card-body">
                            <h2 className="card-title" style={{ color: 'rgb(155 113 79)' }}>Light</h2>
                            <p className="card-text" style={{fontSize:'24px'}}>$150.00       
                            <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart /></span> </p>

                        </div>
                        {/* <div className="top-left" style={{ position: 'absolute', top: '5px', left: '20px', fontSize: '30px' }}>Table</div> */}


                    </div>
                </div>


            </div>

        </div>
        <br></br>
           
        </>
    );
}
export default NewFurnature