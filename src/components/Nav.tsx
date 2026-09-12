import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <div className=' bg-white sticky top-0'>
        <nav className= 'container px-4 py-4 mx-auto flex items-center justify-between lg:grid lg:grid-cols-3'>
         <div className='flex items-center'>

             <button className='lg:hidden'aria-label="Menu"><RxHamburgerMenu size={24}/></button>
            <img className='hidden lg:block' src={Logo} alt="DevStack LOGO" />

         </div>
          <div className='flex justify-center'>
                <img className='lg:hidden' src={Logo} alt="DevStack LOGO" />
            <ul className='hidden lg:flex justify-center gap-4'>
                <li className='text-[#DB2777]'><a href="">Home</a></li>
                <li className='text-[#475569]'><a href="">Technologies</a></li>
                <li className='text-[#475569]'><a href="">Projects</a></li>
                <li className='text-[#475569]'><a href="">About</a></li>
                <li className='text-[#475569]'><a href="">Contact</a></li>
            </ul>

          </div>


            <div className='flex justify-end gap-4'>
                <button className='text-[#334155]'> <a href="">Sign in</a></button>
                <button className='bg-[#D91B7E] text-white py-1 px-2 lg:py-2 lg:px-5 rounded-3xl'><a href="">Sign Up</a></button>
            </div>


        </nav>
        </div>
        
    );
};

export default Nav;