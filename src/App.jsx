
import { useState } from 'react';
import './App.css';
import searchImg from './api'
import ImageList from './components/ImageList';
import Search from './components/Search';

function App() {
const [images,setImages] = useState([])
const handleSubmit= async (term)=>{
  const result = await searchImg(term);
  setImages(result);
};
  return (
    <>
      <div className='bg-green-200 w-full h-[100vh] gap-4 flex flex-col justify-center '>
        <Search onSumbit={handleSubmit}/>
        <ImageList images={images}/>
      </div>
    </>
  );
}

export default App;
