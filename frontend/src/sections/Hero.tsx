"use client";
import Button from "@/components/Button";
import designExampleOneImage from "@/assets/images/design-example-1.png";
import designExampleTwoImage from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg"

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, [leftDesignAnimate, leftDesignScope, leftPointerAnimate, leftPointerScope, rightDesignAnimate, rightDesignScope, rightPointerAnimate, rightPointerScope]);

    return (
        <section className="py-24 overflow-x-clip" style={{ cursor: `url(${cursorYouImage.src}), auto`}}>
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    className="hidden lg:block absolute -left-32 top-16"
                    drag
                >
                    <Image
                        src={designExampleOneImage}
                        alt="Design example one"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    className="hidden lg:block absolute left-56 top-96"
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                >
                    {/* The pointer component is imported here, if has a color prop optional for red and blue color;  blue is default color */}
                    <Pointer name="Karan" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    className="hidden lg:block absolute -right-64 -top-16"
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                >
                    <Image
                        src={designExampleTwoImage}
                        alt="Design example two"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="hidden lg:block absolute right-80 -top-4"
                >
                    <Pointer name="Alex" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to bg-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✴️ $7.5M seeds round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tool shouldn&apos;t slow your down. Layers powerful
                    features with an intuitive interface combined that keeps you
                    in your flows.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
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
