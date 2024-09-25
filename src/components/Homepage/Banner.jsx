import React from 'react'

export default function Banner() {
  return (
    <div className='container mx-auto'>
      <div className="carousel w-full mt-12">
        {
            banners.map((banner,index) =>(
                <div style={{
                    backgroundImage: `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`,

                }} 
                key ={index} id={`slide${index+1}`} className="carousel-item relative w-full h-[90vh] bg-no-repeat bg-cover bg-top rounded-xl">
        <div className='h-full w-full flex items-center pl-36'>
            <div className='space-y-6'>
            <h1 className='text-5xl text-white font-bold'>{banner.title}
            </h1>
            <p>{banner.description}</p>
            <button className='btn btn-primary mr-4'>Discover More</button>
            <button className='btn btn-outline bg-slate-100 hover:bg-green-400 font-semibold px-8'>Latest Project</button>
            </div>
        </div>
    <div className="absolute transform justify-between bottom-12 right-12">
      <a href={banner.prev} className="btn btn-circle mr-6">❮</a>
      <a href={banner.next} className="btn btn-circle">❯</a>
    </div>
  </div>
            ) )
        }
  
  </div>
    </div>
  );
};

const banners = [
    {
        title: 'first slide ',
        description: "There are many various of passag",
        next:"#slide2",
        prev:"#slide4",
    },
    {
        title: 'second slide ',
        description: "There are many various of passag",
        next:"#slide3",
        prev:"#slide1",
    },
    {
        title: 'third slide ',
        description: "There are many various of passag",
        next:"#slide4",
        prev:"#slide2",
    },
    {
        title: 'fourth slide ',
        description: "There are many various of passag",
        next:"#slide1",
        prev:"#slide3",
    }, 
]
