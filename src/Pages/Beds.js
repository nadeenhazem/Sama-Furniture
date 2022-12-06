import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart,FaHeart } from "react-icons/fa";
 import { BsCart4 } from "react-icons/bs";

function Beds() {
    const [datafetch,setDataFetch]= useState([])

    useEffect(()=>{
        
        
        fetchData()
        
        

    },[])
   
    const fetchData=async()=>{
        const res=await fetch('http://localhost:5000/bed');
        // const data=await res.json()
        setDataFetch(await res.json())    
    } 


    const updateFav=async(item1)=>{
        
        console.log(item1)
        let favValue;
        item1.addToFav?favValue={...item1,addToFav:false}:
         favValue={...item1,addToFav:true};
const res=await fetch(`http://localhost:5000/bed/${item1.id}`,
{
    method:'PUT',
    headers:{
        'Content-Type':'application/json', 
    }, 
    
    body: JSON.stringify(favValue)
}
)
 const data2=await res.json()
 console.log(item1)



    }
    const updateCart=async(cartitem)=>{
        
        console.log(cartitem)
        let cartValue;
        cartitem.addToCart?cartValue={...cartitem,addToCart:false}:
        cartValue={...cartitem,addToCart:true};
const res=await fetch(`http://localhost:5000/bed/${cartitem.id}`,
{
    method:'PUT',
    headers:{
        'Content-Type':'application/json', 
    }, 
    
    body: JSON.stringify(cartValue)
}
)



    }


    return (
        <>

        <div className='container'>
            <br></br>
            <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--BEDS--</h1>
            {/* <p style={{ textAlign: 'center', fontSize: '23px', color: '#1f8dc0', marginLeft: '20px' }}>New & Now Furnature Shop</p> */}
            <br></br>

            <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
             datafetch.map((items) =>
            {return(
                <div className="col" key={items.id}>
                    <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                        <Link to={`/AddCart/${items.name}`}>
                            <img src={items.img} className="card-img-top"  style={{ maxHeight:'220px'}} /></Link>
                        <div className="card-body">
                            <h2 className="card-title" style={{ color: items.fontcolor }}>{items.name}</h2>
                            <p className="card-text" style={{ fontSize: '24px' }}>{items.price}
                                
                                 
                                    <span style={{marginLeft:'220px',fontSize:'35px',cursor:'pointer'}}
                                    onClick={()=>updateFav(items)}
                                    >{items.addToFav?<span style={{color:'red'}}>
                                        <FaHeart/></span>:
                                        <FaRegHeart />}
                                    </span>
                                 
                                
                                 <span style={{ marginLeft: '10px', fontSize: '35px',direction:'rtl',cursor:'pointer' }}
                                 onClick={()=>updateCart(items)}
                                 >
                                    <BsCart4 /></span>
                               
                                  </p>

                         </div>
                          </div> 
           
 </div>)}
 )} 


        </div> 

    </div>
    <br></br>
       
    </>
    );
}

export default Beds;