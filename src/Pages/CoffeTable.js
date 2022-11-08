import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import imgchair from '../Imgs/chair.png'
// import imgsofa from '../Imgs/sofa.png'
import imgtable from '../Imgs/table.png'
// import imgsofa from '../Imgs/sofa.png'
// import {FaRegHeart } from "react-icons/fa";



function CoffeTable() {


    return (
        <>
        <div style={{  backgroundColor: 'rgb(164 147 115 / 29%)', width: '100%', height: '800px' }}>
        <div className="container"  >


            <div className="row">
                {/* <h1 style={{ textAlign: 'center', marginTop: '50px', color: '#0f6f9b', fontSize: '40px' }}>Start your first steps into Sama Shop</h1> */}
                <div >
                <h1 style={{ textAlign: 'center', marginTop: '15px', color: '#1f8dc0', fontSize: '50px' }}>Let's Go Shop </h1>
                </div>
                <div  style={{ maxWidth: "1100px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={imgtable} class="card-img-top" style={{marginTop:'30px' }} alt='...' />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'rgb(216 116 36 / 88%)', fontSize: '40px',marginTop:'120px',marginLeft:'30px' }}>SAMPLE. Coffe Table</h5>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '30px', marginTop: '25px',marginLeft:'30px' }}>$250.00</p>
                                <button type="button" style={{ marginLeft: '30px', marginTop: '40px',fontSize:'23px',backgroundColor:'#b44c29',color:'white',borderRadius:'10px',width:'150px',border:'0',height:'40px' }}> Add To Cart </button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>



    </div>        </>
    );
}
export default CoffeTable