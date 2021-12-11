const {Router} = require('express')
const axios = require('axios');

router = Router()

router.get('/getproducts',(request,response)=>{
    axios.get("https://fakestoreapi.com/products",{
        headers: {'content-type': 'application/json'}
    }).then((result)=>{
        return response.end(JSON.stringify(result.data))
    }).catch((err)=>{
        console.log(err)
        throw err
    })
})

router.get('/getproduct/:id',(request,response)=>{
    const id = request.params.id;
    axios.get("https://fakestoreapi.com/products/"+id.toString(),{
        headers: {
            'content-type': 'application/json'
        }
    }).then((result)=>{
        return response.end(JSON.stringify(result.data))
    }).catch((err)=>{
        console.log(err)
        throw err
    })
})

module.exports = router