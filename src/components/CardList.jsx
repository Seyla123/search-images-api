// import React, { useState,useEffect } from 'react';
// import Card from './Card';
// import productData from '../productData';
// function CardList({ products }) {
//     const [product,setProduct] = useState(products)
//     useEffect(() => {
//         // Perform side effects here
//         setProduct(products)
//       }, );
//     function handleClick(id){
//         const fitler = product.filter(product=>product.id!==id)

//         setProduct(fitler);
//     }
    
//   return (
//     <>
//       <div>
//         {product.map(item => {
//             return (
           
//                 <div key={item.id+1} onClick={()=>{handleClick(item.id)}} >
//                     <Card  imgSrc={item.imgSrc} title={item.title} price={item.price} key={item.id} />
//                 </div>
            
//             )
//         })}
//       </div>
//     </>
//   );
// }

// export default CardList;
