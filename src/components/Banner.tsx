import Image from "../assets/banner-stack.png"
const banner = () => {
    return (


        <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20">

            <div>
                <h1 className="text-[#0F172A] font-bold text-[60px]">Build Your Ideal<span className="bg-linear-to-br from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                    <br />Development Stack</span></h1>

                <p className="text-[18px] mb-10">Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your<br />
                    next project.</p>

                <button className="text-amber-50 btn bg-linear-to-br from-[#F97316] via-[#F35E57] to-[#EC4899] rounded-xl">Explore Technologies</button>
                <button className="btn text-[#374151] rounded-xl py-3 px-4">Learn More</button>
            </div>

            <div className="flex justify-end">
                <img src={Image} alt="" className="-mt-8 " />
            </div>

        </section>




    );
};

export default banner;