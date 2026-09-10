import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <nav className= 'sticky top-0 container px-4 py-4 mx-auto grid grid-cols-3'>

            <img src={Logo} alt="DevStack LOGO" />


            <ul className='flex justify-center gap-4'>
                <li className='text-[#DB2777]'>Home</li>
                <li className='text-[#475569]'>Technologies</li>
                <li className='text-[#475569]'>Projects</li>
                <li className='text-[#475569]'>About</li>
                <li className='text-[#475569]'>Contact</li>
            </ul>

            <div className='flex justify-end gap-4'>
                <button className='text-[#334155]'> <a href="">Sign in</a></button>
                <button className='bg-[#D91B7E] text-white py-2 px-5 rounded-3xl'><a href="">Sign Up</a></button>
            </div>


        </nav>
        
    );
};

export default Nav;