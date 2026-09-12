import Logo from "../assets/logo-text.png"
const Footer = () => {
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-20">
            <div className="mr-20 text-center lg:text-left">

                <img className="mx-auto lg:mx-0 pb-5" src={Logo} alt="" />
                <p className=" mb-10 text-[12px] text-[#64748B]">Curated tools, technologies, and resources for developers building <br /> modern software.</p>
                <ul className="text-[#475569] mb-15 flex justify-center gap-2 lg:justify-between font-semibold">
                    <li className="mb-2"><a href="">Github</a></li>
                    <li className="mb-2"><a href="">Twitter</a></li>
                    <li className="mb-2"><a href="">Linkedin</a></li>
                </ul>
            </div>

            <div className="hidden lg:block">
                <h2 className="font-bold mb-4">PRODUCT</h2>
                <ul className="mb-4 text-[#64748B]">
                    <li className="mb-2"><a href="">Home</a></li>
                    <li className="mb-2"><a href="">Technology</a></li>
                    <li className="mb-2"><a href="">Projects</a></li>
                </ul>
            </div>

            <div className="hidden lg:block">
                <h2 className="font-bold mb-4">COMPANY</h2>
                <ul className="mb-4 text-[#64748B]">
                    <li className="mb-2"><a href="">About</a></li>
                    <li className="mb-2"><a href="">Contacts</a></li>
                    <li className="mb-2"><a href="">Careers</a></li>
                </ul>
            </div>

            <div className="hidden lg:block">
                <h2 className="font-bold mb-4">LEGAL</h2>
                <ul className="mb-4 text-[#64748B]">
                    <li className="mb-2"><a href="">Privacy Policy</a></li>
                    <li className="mb-2"><a href="">Terms of Service</a></li>
                </ul>
            </div>


            <div className="col-span-full">

                <footer className=" flex justify-between text-[#64748B] mb-10">

                    <p>© 2026 Dev Stack. All rights reserved. </p>
                    <ul className="flex gap-2">
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </footer>

            </div>
        </div>

    );
};

export default Footer;