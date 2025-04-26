import React from 'react'

const Shoecard = ({ImgUrl,changeBigShoeImg,bigshoeImg}) => {
    const Handelclick =()=>{
        if (bigshoeImg!== ImgUrl.bigShoe){
            changeBigShoeImg(ImgUrl.bigShoe)
        }
    }
  return (
    <div className={`rounded-xl border-2 
    ${bigshoeImg===ImgUrl.bigShoe ?"border-red-300":"border-transparent"}
    cursor-pointer max-sm:flex-1 
    `} onClick={Handelclick}>
        <div className='flex justify-center items-center bg-cover bg-card bg-center rounded-2xl sm:w-40 sm:h-40 max-sm:p-4  '>
            <img src={ImgUrl.thumbnail} alt=""
            width={127}
            height={103} 
            className='object-contain '
            />
        </div>
    </div>
  )
}

export default Shoecard
