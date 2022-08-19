import React from 'react';
import CatFrame from '../Components/CatFrame';
import SearchBar from '../Components/SearchBar';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import { ReactComponent as CatLogo } from '../logo.svg';

const HomePage = () => {
  const { width } = useWindowDimensions();
  return (
    <>
    <div className='bg-cover p-7 rounded-t-3xl bg-hero-sm md:bg-hero-md lg:bg-hero-lg md:p-32 text-white'>
      <CatLogo fill='white' width={280} height={100}/>
      <p className='mb-5'>Get to know more about your cat breed</p>
      <SearchBar placeholderText={width >= 768 ? 'Enter your cat breed' : 'Search'} />
    </div>
    <div className='rounded-b-3xl bg-accent p-3 mb-12'>
      <div className='p-10'>
        <p className='font-bold text-3xl'>Most Searched Breeds</p>
        <div className='h-1 w-12 bg-black rounded-md mb-12' />
        <p className='font-bold text-xl mb-3'>66+ Breeds For you to discover </p>
        <div className='grid grid-cols-2 gap-5 md:flex md:justify-between'>
          <div className='text-center'>
          <CatFrame image="/image/image-1.png"/>
          <p className='mt-4 font-bold'>Bengal</p>
          </div>
          <div className='text-center'>
          <CatFrame image="/image/image-1.png"/>
          <p className='mt-4 font-bold'>Savannah</p>
          </div>
          <div className='text-center'>
          <CatFrame image="/image/image-1.png"/>
          <p className='mt-4 font-bold'>Norwegian Forest Cat</p>
          </div>
          <div className='text-center'>
          <CatFrame image="/image/image-1.png"/>
          <p className='mt-4 font-bold'>Selkirk Rex</p>
          </div>
      </div>
      </div>
    </div>
    <div className='md:flex md:p-20'>
      <div className='mb-5'>
        <div className='h-1 w-12 bg-black rounded-md mb-3' />
        <h1 className='text-3xl font-bold mb-6'>Why should you have a cat ?</h1>
        <p className='font-semibold mb-3'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
        <button type="button" class="text-gray-500 font-bold text-center inline-flex items-center">
          READ MORE
          <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div className='inline-grid grid-cols-2'>
        <div>
        <CatFrame image="/image/image-1.png"/>
        </div>
        <div>
        <CatFrame image="/image/image-3.png"/>
        </div>
        <div>
        <CatFrame image="/image/image-2.png"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage