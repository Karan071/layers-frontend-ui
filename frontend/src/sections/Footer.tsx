import Logo from "@/assets/images/logo.svg";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-6 md:justify-between">
                <div>
                    <Image
                        src={Logo}
                        alt={`layers ${Logo}`}
                    />
                </div>
                <div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link) => (
                            <a  
                                key={link.label}
                                href={link.href}
                                className="text-white/50 text-sm"
                                >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>;
}
