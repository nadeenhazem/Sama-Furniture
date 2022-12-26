import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../Sass/Buy.scss'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddCart(props){
    
const item=props.location.state.items
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const showMessage = () => {
    toast.success('Success', {
        position: toast.POSITION.TOP_CENTER
    });
};

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
                            <div className="buy-card-body">
                                <h5 className="card-title" style={{ color: item.fontcolor, fontSize: '40px',marginTop:'100px',marginLeft:'50px' }}>{item.name}</h5>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '30px', marginTop: '30px',marginLeft:'50px' }}>{item.price}</p>
                                <p className="card-text" style={{ color: '#0f6f9b', fontSize: '25px', marginTop: '30px',marginLeft:'50px' }}>Colors:{item.Colors}</p>
                                 <button type="button" className='btn-buy'style={{backgroundColor:item.fontcolor}}
                                onClick={handleShow}>
                                   Buy Now
                        
                                                    
                                                    </button>

                            </div>
                        </div>
                    </div>
                </div> 


            </div>
        </div>



    </div> 
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:'rgb(240, 242, 243)'}}>
          <Modal.Title>PAYMENT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'rgb(240, 242, 243)'}}>
        <form className="card-details" style={{margin:'0% 10%',paddingLeft:'20%'}} >
                             <div className="">
                                     <h4 className="Card-Name">Card Number</h4> 
                                       <input type="text" name="card-num" placeholder="1234 5678 9012 3457"
                                             size="17" id="cno" minLength="19" maxLength="19"
                                             className='Input-Style'/>
                                    <img src="https://i.ibb.co/k3F3N3M/visa.png" width="64px" height="60px" alt='..'/>
                            </div>
    
                            <div className="form-group">
                                <p className="Card-Name mb-0">Cardholder's Name</p>
                                <input type="text" name="name" 
                                className='Input-Style'placeholder="Name" size="17"/>
                             </div>
                             <div className="form-group pt-2">
                                <div className="row d-flex">
                                    <div className="col-sm-6">
                                        <p className="Card-Name mb-0">Expiration</p>
                                         <input type="text" 
                                         className='Input-Style' name="exp" placeholder="MM/YYYY" size="7" id="exp" minLength="7" maxLength="7"/>
                                     </div>
                                     <div className="col-sm-3">
                                         <p className="Card-Name mb-0">Cvv</p>
                                         <input type="password"
                                         className='Input-Style'  name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3"/>
                                    </div>
                                 <br/>
                                     
                                </div>
                            </div>		
                        </form>
                        <Button variant="primary" 
                        style={{marginLeft:'25%',marginTop:'5%',width:'50%',fontSize:'20px'}}
          onClick={showMessage}>
            Buy
          </Button>
          <ToastContainer />
        </Modal.Body>
      
      </Modal>  
      
        </>
    )
}
export default AddCart;
