import { Button } from "bootstrap"

function Cart(props) {
    // get data from localstorage
    const Arr = JSON.parse(localStorage.getItem('data') || "[]")
    const fun = props.location.state
    let checkId = []

    
    // localStorage.setItem('cartcount',n)
    //to add Data in localStorage
    const addinData = () => {
        Arr.unshift(fun)
        localStorage.setItem('data', JSON.stringify(Arr))

    }
    console.log(checkId)
    //check if item added before
    const findId = () => {
        Arr.map(defid => { checkId.push(defid.id) })

        return checkId.includes(fun.id)
    }
    //handel exception
    if (props.location.state === undefined) { }
    else {
        if (Arr.length === 0) {
            addinData()
        }
        else {
            findId() ? console.log('this item added before') : addinData();
        }
    }
   
    let n=Arr.length
    localStorage.setItem('cartcount',n)

    return (
        <>
            <div className='container'>
                <br /><br />
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {Arr.map(data1 => (

                        <div className="col" key={data1.id}>

                            <div className="card" style={{ border: '0 solid whitesmoke', backgroundColor: '#eeeeee' }} >
                                <img src={data1.img} className="card-img-top" alt='..' />
                                <div className="card-body">
                                    <h2 className="card-title" style={{ color: data1.fontcolor }}>{data1.name}</h2>
                                    <span className="card-text" style={{ fontSize: '24px' }}>{data1.price}
                                    </span>
                                    <span ><button className='btn btn-danger'style={{marginLeft:'50%'}}
    
                                onClick={()=>{
                                    const itemRemove=Arr.indexOf(data1)
                                    Arr.splice(itemRemove,1)
                                    localStorage.setItem('data', JSON.stringify(Arr))
                                    window.location.reload(false)

                                }}
                                 >Remove</button></span>

                                </div>
                            </div>


                        </div>))}


                </div>

            </div>
            <br /><br />
        </>
    )
}
export default Cart;