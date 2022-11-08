import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import imgchair from '../Imgs/chair.png'
import imgsofa from '../Imgs/sofa.png'
// import imgtable from '../Imgs/table.png'
// import imgsofa from '../Imgs/sofa.png'
// import {FaRegHeart } from "react-icons/fa";



function Sofa() {


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
                            <img src={imgsofa} class="card-img-top" style={{ marginTop:'70px' }} alt='...' />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: 'rgb(247 115 9 / 96%)', fontSize: '40px',marginTop:'100px',marginLeft:'50px' }}>SAMPLE. Wood Sofa</h5>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '30px', marginTop: '25px',marginLeft:'50px' }}>$300.00</p>

                            </div>
                                <button type="button" style={{ marginLeft: '50px', marginTop: '40px',fontSize:'23px',backgroundColor:'rgb(247 115 9 / 96%)',color:'white',borderRadius:'10px',width:'150px',border:'0',height:'40px' }}> Add To Cart </button>
                        </div>
                    </div>
                </div>


            </div>
        </div>



    </div>        </>
    );
}
export default Sofa