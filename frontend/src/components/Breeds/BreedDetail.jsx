import { useEffect } from 'react'
import BreedData from './BreedData'
import { useParams } from 'react-router-dom'

const BreedDetail = () => {

  const { id } = useParams();
  const breed = BreedData.find(b => b.id === id);
  const {name, image, description} = breed;
  const { normal, al, asnw, bpcnt, cwop, cr, ptn, io } = description; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col">
        
        <div className='bg-[#001433] rounded-b-3xl py-10 h-[35vh] text-center'>
          <h1 className="font-bold text-4xl">{name}</h1>
        </div>
        <div className="flex justify-center -mt-20">
          <img className="h-58 w-58 rounded-2xl" src={image} alt={name} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center w-[100%] mt-10 ">
        <div className='w-[70%]'>
          <p className='mb-5'>{normal}</p>
          <div className='mb-5'>
            <h4 className='font-bold'>Average lifespan</h4>
            <p>{al}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Average size and weight</h4>
            <p>{asnw}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Breed personality, characteristics & temperament </h4>
            <p>{bpcnt}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Compatibility with other pets </h4>
            <p>{cwop}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Care requirements </h4>
            <p>{cr}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Please take note </h4>
            <p>{ptn}</p>
          </div>
          <div className='mb-5'>
            <h4 className='font-bold '>Ideal owners </h4>
            <p>{io}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreedDetail
