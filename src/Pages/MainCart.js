import React from 'react';
import { useEffect ,useState } from 'react';
function MainCart() {
    const [datafetch, setDataFetch] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/Cart');
        setDataFetch(await res.json())
    }
    console.log(datafetch)

    return (
        <>

<div className='container'>
                <br></br>
                <h1 style={{ textAlign: 'center', color: '#0f6f9b' }}>--Cart--</h1>
                <br></br>
                <br></br>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        datafetch.map((items) => {
                            return (
                                <div className="col" key={items.id}>
                                    <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                                        <img src={items.img} className="card-img-top" style={{ maxHeight: '280px' }} alt='' />
                                        <div className="card-body">
                                            <h2 className="card-title" style={{ color: items.fontcolor }}>{items.name}</h2>
                                            <p className="card-text" style={{ fontSize: '24px' }}>{items.price}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                )
                        }
                        )}
                </div>
            </div>
            <br></br>
       
    </>
    );
}

export default MainCart;