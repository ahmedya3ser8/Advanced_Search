import {AiFillStar} from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs';


function Products() {
  return (
    <section className="card-container flex flex-wrap ml-[20rem] mt-2rem">
      <div className="card p-[20px] m-[20px] border-2 border-solid border-[#ededed] cursor-pointer">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoe" className='card-img w-[13rem] mb-4'/>
        <div className="card-content">
          <h3 className='card-title mb-4'>Shoe</h3>
          <div className="card-reviews flex mb-4">
            <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' />
            <span className='total-reviews text-[0.9rem] ml-[10px]'>4</span>
          </div>
          <div className="card-price flex justify-between items-center">
            <div className="price">
              <del>$300</del> 400
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='bag-icon text-[#535353]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;