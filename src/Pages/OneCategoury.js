import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, AddNewData, DeleteData, UpdateData } from "../Redux/Slices/RequistSlice";
import { BsCart4 } from "react-icons/bs";

function OneCategoury(props) {
    const item = props.location.state.items
    const dispatch = useDispatch();
    const NameOfMainPage = item.name;
    const NameOfFavPage = 'fav'
    const NameOfCartPage = 'Cart'
    const categ = useSelector(state => state.Data.data);


    useEffect(() => {
        dispatch(fetchData(NameOfMainPage))
    }, [dispatch])




    const updateFav = async (item1) => {

        let favValue;
        if (item1.addToFav) {
            favValue = { ...item1, addToFav: false };
            dispatch(DeleteData([item1, NameOfFavPage]));
        }
        else {
            favValue = { ...item1, addToFav: true };
            dispatch(AddNewData([item1, NameOfFavPage]))
        }
        dispatch(UpdateData([NameOfMainPage, item1, favValue]))



        window.location.reload();
    }
    const updateCart = async (item1) => {

        let CartValue;
        if (item1.addToCart) {
            CartValue = { ...item1, addToCart: false };
            dispatch(DeleteData([item1, NameOfCartPage]));
        }
        else {
            CartValue = { ...item1, addToCart: true };
            dispatch(AddNewData([item1, NameOfCartPage]))
        }
        dispatch(UpdateData([NameOfMainPage, item1, CartValue]))



        window.location.reload();
    }


    return (
        categ == null ? 'Loading' :
            <>


                <div className='container'>
                    <br></br>
                    <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--{item.name}--</h1>
                    <br></br>

                    <br></br>
                    <div className="row row-cols-1 row-cols-md-3 g-4">




                        {
                            categ.map((items) => {
                                return (
                                    <section className=" my-5 " key={items.id} style={{ maxWidth: '30rem' }}>

                                        <div className="card " style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee', margin: '2%' }} >
                                            <Link to={{
                                                pathname: `/AddCart/${items.id}`,
                                                state: { items }
                                            }}>



                                                <div className="bg-image hover-overlay ripple rounded-0" >
                                                    <img className="img-fluid" src={items.img}
                                                        style={{ backgroundColor: items.background ,width:'99%',height: '20rem'}}
                                                        alt=".." />

                                                </div>
                                            </Link>

                                            <div className="card-body d-flex flex-row">

                                                <div>
                                                    <h2 className="card-title font-weight-bold mb-2" style={{ color: items.fontcolor }}>{items.name}</h2>
                                                    <p className="card-text" style={{ fontSize: '24px' }}>
                                                        {items.price}</p>
                                                </div>

                                            </div>
                                            <div className="card-body">

                                                <div className="d-flex justify-content-between" style={{ direction: 'rtl' }}>
                                                    <div>
                                                        <i className="p-md-1 my-1 me-0" style={{ fontSize: '35px', cursor: 'pointer' }}
                                                            onClick={() => updateCart(items)}>
                                                            {items.addToCart ? <i style={{ color: '#327eca' }}>
                                                                <BsCart4 /></i> :
                                                                <BsCart4 />}
                                                        </i>



                                                        <i className=" p-md-1 my-1 me-0"
                                                            style={{ fontSize: '35px', cursor: 'pointer' }}
                                                            onClick={() => updateFav(items)}>
                                                            {items.addToFav ? <i style={{ color: 'red' }}>
                                                                <FaHeart /></i> :
                                                                <FaRegHeart />}</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                            )}


                    </div>

                </div>
                <br></br>

            </>
    );
}

export default OneCategoury;