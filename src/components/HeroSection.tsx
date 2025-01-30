import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
    return (
        <div className="h-auto md:h[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-20 ">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="cyan"
            />
            <div className="py relative z-10 w-full text-center">
                <h1 className="mt-20 md: text-7xl font-bold">Master The Art of Music</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum veritatis excepturi voluptates assumenda architecto magnam ullam at officia debitis consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, minima!</p>
                <div className="mt-4">
                    <Link href={"#"}>
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >Explore Courses</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;