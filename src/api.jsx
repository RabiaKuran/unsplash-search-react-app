import axios  from "axios";

const searchImage = async (value) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
     headers:{
       Authorization: 'Client-ID mssJLGMvmo89b3PY75F03EC4di-n5DSCi80UNFSTYCU'
     },
     params:{
       query:value
     }
    })
    return response.data.results;
   };

export default searchImage;