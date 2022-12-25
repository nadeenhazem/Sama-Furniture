import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/Slices/RequistSlice';

function Fav() {
    const dispatch=useDispatch();
    const NameOfMainPage = 'fav';
    const Fav =useSelector(state=>state.Data.data);

    useEffect(() => {
        dispatch(fetchData(NameOfMainPage))
    }, [dispatch])

    

    return (
        
            Fav == null?'Loading':<>
            <div className='container'>
                <br></br>
                <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--Favorite--</h1>
                <br></br>
                <br></br>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        Fav.map((items) => {
                            return (
                                <section className=" my-5 " key={items.id} style={{ maxWidth: '30rem' }}>
                                <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                                        <img src={items.img} className="card-img-top" style={{ height: '20rem' }} alt='' />
                                        <div className="card-body">
                                            <h2 className="card-title" style={{ color: items.fontcolor }}>{items.name}</h2>
                                            <p className="card-text" style={{ fontSize: '24px',display:'inline' }}>{items.price}
                                            </p>
                                                                
                                                        

                                        </div>
                                    </div>
                                </section>
                                )
                        }
                        )}
                </div>
            </div>
            <br></br></>
        
    );
}

export default Fav;