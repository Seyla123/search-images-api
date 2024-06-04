import axois from 'axios'
const searchImg = async (term)=>{
  const response = await axois.get('https://api.unsplash.com/search/photos',{
    headers : {
      Authorization : 'Client-ID RpYp8iLaCcm0eDhUm5ta8iF49M_ELRsj8I-oDwFGEBU'
    },
    params :{
      query : term
    }
  })
  return response.data.results
}
export default searchImg