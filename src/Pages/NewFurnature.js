import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import { BsCart4 } from "react-icons/bs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
//import database
import NewFurData from '../Data'
import { useEffect, useState } from 'react';

function NewFurnature() {

    const [datafetch, setDataFetch] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/NewFur');
        // const data=await res.json()
        setDataFetch(await res.json())
    }

    const updateFav = async (item1) => {

        console.log(item1)
        let favValue;
        item1.addToFav ? favValue = { ...item1, addToFav: false } :
            favValue = { ...item1, addToFav: true };
        const res = await fetch(`http://localhost:5000/NewFur/${item1.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(favValue)
            }
        )
        const data2 = await res.json()
        console.log(item1)



    }

    return (
        <>

            <div className='container'>
                <br></br>
                <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--Sama Wood Shop</h1>
                <p style={{ textAlign: 'center', fontSize: '23px', color: '#1f8dc0', marginLeft: '20px' }}>New & Now Furnature Shop</p>
                <br></br>

                <br></br>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        datafetch.map((items) => {
                            return (
                                <div className="col" key={items.id}>
                                    <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                                        <Link to={`/AddCart/${items.name}`}>
                                            <img src={items.img} className="card-img-top" style={{ backgroundColor: items.background }} /></Link>
                                        <div className="card-body">
                                            <h2 className="card-title" style={{ color: items.fontcolor }}>{items.name}</h2>
                                            <p className="card-text" style={{ fontSize: '24px' }}>{items.price}
                                                {/* <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart />
                                    </span> */}

                                                <span style={{ marginLeft: '250px', fontSize: '35px', cursor: 'pointer' }}
                                                    onClick={() => updateFav(items)}
                                                >{items.addToFav ? <span style={{ color: 'red' }}>
                                                    <FaHeart /></span> :
                                                    <FaRegHeart />}
                                                </span>
                                            </p>

                                        </div>
                                        {/* <div className="top-left" style={{position:'absolute',top:'5px',left:'20px',fontSize:'30px'}}>Sofa</div> */}
                                    </div>

                                </div>)
                        })}


                </div>

            </div>
            <br></br>

        </>
    );
}
export default NewFurnature
{/* <div className="col">
<div className="card" style={{border : '0 solid whitesmoke', backgroundColor:'#eeeeee'}}>
    <Link to={'/sofa'}>
    <img src={imgsofa} className="card-img-top" alt="..." style={{ backgroundColor: '#f1d4a1' }}/></Link>
    <div className="card-body">
        <h2 className="card-title" style={{ color: 'rgb(247 115 9 / 96%)' }}>Sofaa</h2>
        <p className="card-text" style={{fontSize:'24px'}}>$300.00
        <span style={{marginLeft:'250px',fontSize:'35px'}}><FaRegHeart /></span> </p>

    </div>
    {/* <div className="top-left" style={{position:'absolute',top:'5px',left:'20px',fontSize:'30px'}}>Sofa</div> */}
{/*</div>
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


{/*</div>
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


{/*</div> 
</div>*/}