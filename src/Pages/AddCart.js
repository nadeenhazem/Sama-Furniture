
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useHistory } from 'react-router-dom';
import NewFurData from '../Data'
function AddCart(){
    // to send data to another page
    const name1=useParams()
    const foundArr=NewFurData.product.find(obj=>{
        return obj.name===name1.name
    })
    // to push data to Cart page value
        const history = useHistory();


    


// to push data to Cart page fun
        const clickedbtn=()=>{
            history.push({
                pathname:'/Cart',
                state:foundArr
            })
            
        }
    return(
        <>
        <div style={{  backgroundColor: 'rgb(164 147 115 / 29%)', width: '100%', height: '800px' }}>
        <div className="container"  >


            <div className="row">
                <div >
                    <h1 style={{ textAlign: 'center', marginTop: '15px', color: '#1f8dc0', fontSize: '50px' }}>Let's Go Shop </h1>
                </div>
                <div  style={{ maxWidth: "1100px" }}>
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={foundArr.img} className="card-img-top" style={{  marginTop:'100px' }} alt='...' />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: foundArr.fontcolor, fontSize: '40px',marginTop:'100px',marginLeft:'50px' }}>{foundArr.name}</h5>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '30px', marginTop: '30px',marginLeft:'50px' }}>{foundArr.price}</p>
                                
                                 <button type="button" style={{ marginLeft: '50px', marginTop: '45px',fontSize:'23px',backgroundColor:foundArr.fontcolor,color:'white',borderRadius:'10px',width:'150px',border:'0',height:'40px' }}
                                onClick={clickedbtn}> Add To Cart</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>



    </div>        </>
    )
}
export default AddCart