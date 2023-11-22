import './AllProduct.css'
import { Box, Stack, } from "@mui/material";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const AllProduct = () => {
  const [product, setProduct] = useState([])
  const [loading,setLoading]= useState(true)
  const getData = () => {
    axios.get('https://fakestoreapi.com/products').then((sucess) => setProduct(sucess.data),setLoading(false)).catch((error) => console.log(error),setLoading(false))
  }

  useEffect(() => {
    getData();
  }, [product])
  console.log(product);
  const navigations = useNavigate()
  const logOut = () => {
    navigations("/")
  }

  return (
    <div>

      

    
      <Box sx={{ textAlign: "center", color: "cadetblue", fontFamily: "fantasy", fontSize: "30px" }}>All PRODUCT CARD</Box>

<Box sx={{ textAlign: "center", color: "cadetblue", fontFamily: "fantasy", fontSize: "30px" }}><button className='bttn' onClick={logOut}>logout</button></Box>
{
  loading ? <img src='https://cdn.pixabay.com/animation/2023/03/20/02/45/02-45-27-186_512.gif' alt=''/> :
  <Stack sx={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    // marginTop: "3vh",
    flexWrap: "wrap",
    textAlign: "center"
  }}>
    {
      product.map((e, i) => <Box sx={{
        marginTop: "10px",
        boxShadow: "0 0 15px black",
        border: "2px solid black",
        width: "200px",
        borderRadius: "10px",
        height: "230px"
      }} key={i}>

        <Box sx={{
          height: "140px",
          width: "190px",
          margin: "3px",
          padding:"10px",
          borderRadius: "10px",
        }}>
          <img className='img-product' style={{ borderRadius: "10px" }} src={e.image} alt={e.title} width="100%" height="100%" />
        </Box>




        <Box sx={{
          fontSize: "20px",
          margin: "3px",
          textAlign: "center",
          width: "190px",
        }}>{e.category}</Box>

        
          <Box><button className='bttn'>See All Detail</button></Box>
       

      </Box>)

    }
  </Stack>
  
}

    </div>
  )
}
export default AllProduct;