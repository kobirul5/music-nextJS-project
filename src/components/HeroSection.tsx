import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="h-auto md:h[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 ">
            <div className="py relative z-10 w-full text-center">
                <h1 className="mt-20 md: text-7xl font-bold">Master The Art of Music</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis excepturi voluptates assumenda architecto magnam ullam at officia debitis consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima!</p>
                <div className="mt-4">
                    <Link href={"#"}>Explore Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;