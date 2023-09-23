import {AiFillStar} from 'react-icons/ai';
import {BsFillBagHeartFill} from 'react-icons/bs';

function Card({ img, title, reviews, prevPrice, newPrice }) {
  return (
    <div className="card p-[20px] m-[20px] border-2 border-solid border-[#ededed] cursor-pointer">
    <img src={img} alt={title} className='card-img w-[13rem] mb-4'/>
    <div className="card-content">
      <h3 className='card-title mb-4'>{title}</h3>
      <div className="card-reviews flex mb-4">
        <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' /> <AiFillStar className='rating-star text-[#d5ab55]' />
        <span className='total-reviews text-[0.9rem] ml-[10px]'>{reviews}</span>
      </div>
      <div className="card-price flex justify-between items-center">
        <div className="price">
          <del>{prevPrice}</del> {newPrice}
        </div>
        <div className="bag">
          <BsFillBagHeartFill className='bag-icon text-[#535353]' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card;