
import 'bootstrap/dist/css/bootstrap.min.css';
function AddCart(props){
    console.log(props.location.state)
    
const item=props.location.state.items
console.log(item)
    const AddCartPage=async (item1)=>{
        console.log(item1)
        await fetch(`http://localhost:5000/Cart`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(item1)
            }
        )
        
        window.location.reload();

    }
    const DeleteCart= async(item1)=>{
         await fetch(`http://localhost:5000/Cart/${item1.id}`,{method:'DELETE'});
    }

    const updateCart = async (item1) => {

        let CartValue;
        if(item1.addToCart){
            CartValue = { ...item1, addToCart: false };
            DeleteCart(item1);
        }
        else{
            CartValue = { ...item1, addToCart: true };
            AddCartPage(item1)   
        }
        const res=await fetch(`http://localhost:5000/NewFur/${item1.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(CartValue)
            }
        )
        // window.location.reload();
        console.log(CartValue)
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
                            <img src={item.img} className="card-img-top" style={{  marginTop:'100px' }} alt='...' />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: item.fontcolor, fontSize: '40px',marginTop:'100px',marginLeft:'50px' }}>{item.name}</h5>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '30px', marginTop: '30px',marginLeft:'50px' }}>{item.price}</p>
                                
                                 <button type="button" style={{ marginLeft: '50px', marginTop: '45px',fontSize:'23px',backgroundColor:item.fontcolor,color:'white',borderRadius:'10px',width:'150px',border:'0',height:'40px' }}
                                onClick={() =>updateCart(item)}>
                                    {item.addToCart?'Delete Cart':'Add to Cart'  }
                        
                                                    
                                                    </button>

                            </div>
                        </div>
                    </div>
                </div> 


            </div>
        </div>



    </div>     
        </>
    )
}
export default AddCart