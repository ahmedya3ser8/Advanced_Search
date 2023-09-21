import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='flex justify-around items-center p-4 border-b-2 border-solid border-[#f3f3f3] ml-8 relative z-50'>
      <div className="nav-container">
        <input type="text" className="input-search p-[10px_15px] border-none bg-[#f7f6f6] outline-none mr-[20px] rounded-[25px] w-[14rem] relative" placeholder="Enter Your Search Shoes." />
      </div>
      <div className="nav-links flex space-x-4">
        <a href="#">
          <FiHeart className='nav-icons w-[1.5rem] h-[1.5rem] hover:text-[#888]' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons w-[1.5rem] h-[1.5rem] hover:text-[#888]'/>
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons w-[1.5rem] h-[1.5rem] hover:text-[#888]'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar;