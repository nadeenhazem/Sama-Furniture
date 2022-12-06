//create database  in react
import imgchair from './Imgs/chair.png'
import imgsofa from './Imgs/sofa.png'
import imgtable from './Imgs/table.png'
import imglamb from './Imgs/lamb.png'
const data={
   
    product:[
        {
        id:"1",
        name:'Sofaa',
        price:"$300.00",
        addToCart:false,
        img:imgsofa,
        background: '#f1d4a1',
        fontcolor:'rgb(247 115 9 / 96%)'
        },
        {
            id:"2",
            name:'Coffe Table',
            price:"$250.00",
            addToCart:false,
            img:imgtable,
            background:'rgb(184 141 92 / 47%)',
            fontcolor:'rgb(216 116 36 / 88%)'

            },
            {
                id:"3",
                name:'Wood Chair',
                price:"$200.00",
                addToCart:false,
                img:imgchair,
                background:'#5e93ac',
                fontcolor:'rgb(55 63 146 / 96%)'

                },
                {
                    id:"4",
                    name:'Light',
                    price:"$150.00",
                    addToCart:false,
                    img:imglamb,
                    background:'rgb(225 194 158 / 48%)',
                    fontcolor:'rgb(155 113 79)'

                    }
    ]
}
export default data;