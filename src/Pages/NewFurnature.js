import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from 'react';

function NewFurnature() {

    const [datafetch, setDataFetch] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/NewFur');
        
        setDataFetch(await res.json())
    }
    const AddFavPage=async (item1)=>{
        console.log(item1)
        await fetch(`http://localhost:5000/fav`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(item1)
            }
        )
        

    }
    const DeleteFav= async(item1)=>{
         await fetch(`http://localhost:5000/fav/${item1.id}`,{method:'DELETE'});
    }

    const updateFav = async (item1) => {

        let favValue;
        if(item1.addToFav){
            favValue = { ...item1, addToFav: false };
            DeleteFav(item1);
        }
        else{
            favValue = { ...item1, addToFav: true };
            AddFavPage(item1)   
        }
        await fetch(`http://localhost:5000/NewFur/${item1.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(favValue)
            }
        )
        window.location.reload();
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
                                        <Link to={{
                                            pathname:`/AddCart/${items.id}`,
                                            state:{items}
                                    }}>
                                            <img src={items.img} className="card-img-top" style={{ backgroundColor: items.background }} alt=''/></Link>
                                        <div className="card-body">
                                            <h2 className="card-title" style={{ color: items.fontcolor }}>{items.name}</h2>
                                            <p className="card-text" style={{ fontSize: '24px' }}>{items.price}
                                               

                                                <span style={{ marginLeft: '250px', fontSize: '35px', cursor: 'pointer' }}
                                                    onClick={() => updateFav(items)}
                                                >{items.addToFav ? <span style={{ color: 'red' }}>
                                                    <FaHeart /></span> :
                                                    <FaRegHeart />}
                                                </span>
                                            </p>

                                        </div>
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
