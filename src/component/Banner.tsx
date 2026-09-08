import bgShadow from "../assets/bg-shadow.png";
import bannerLogo from "../assets/banner-main.png";

const Banner = () => {
    return (
        <div className="container mx-auto pt-10">
            <div
                className="hero bg-black rounded-3xl h-125"
                style={{
                    backgroundImage: `url(${bgShadow})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="hero-content flex-col w-full">
                    <img src={bannerLogo} alt="logo" />
                    <div className="mx-auto">
                        <h1 className="text-5xl font-bold text-white mx-auto">The most exciting tournament in the world</h1>
                    </div>

                    <div className="mx-auto">
                        <p className="text-2xl font-bold text-white mx-auto">The most exciting tournament in the world</p>
                    </div>

                    <button className="btn  bg-primary text-white px-7 py-5 font-bold">Claim Free Cradit</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;