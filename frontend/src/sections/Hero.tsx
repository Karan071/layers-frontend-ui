import Button from "@/components/Button";
import designExampleOneImage from "@/assets/images/design-example-1.png";
import designExampleTwoImage from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="hidden lg:block absolute -left-32 top-16">
                    <Image src={designExampleOneImage} alt="Design example one"/>
                </div>
                <div className="hidden lg:block absolute -right-64 -top-16">
                    <Image src={designExampleTwoImage} alt="Design example two"/>
                </div>
                <div className="hidden lg:block absolute left-56 top-96">
                    {/* The pointer component is imported here, if has a color prop optional for red and blue color;  blue is default color */}
                    <Pointer name="Karan"/> 
                </div>
                <div className="hidden lg:block absolute right-80 -top-4">
                    <Pointer name="Nandinee" color="red"/>
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to bg-pink-400 rounded-full text-neutral-950 font-semibold">✴️ $7.5M seeds round raised</div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tool shouldn&apos;t slow your down.
                    Layers powerful features with an intuitive interface combined that keeps you in your flows.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full" />
                    <Button
                        variant="primary"
                        type="submit"
                        size="sm"
                        className="whitespace-nowrap"
                    >
                        Sign up
                    </Button>
                </form>
            </div>
        </section>
    );
}
