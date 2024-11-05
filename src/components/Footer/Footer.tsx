import Link from "next/link"

const Footer = () => {
    return (
        <footer className="mt-16 ">
            <div className="container mx-auto px-4">
                <Link href="/" className="font-black text-tertiary-dark">
                    RentAll
                </Link>
                <div className="flex-1 md:text-right">
                    <p className="pb-4">Home</p>
                    <p className="pb-4">About Us</p>
                    <p className="pb-4">Contact Us</p>
                    <p className="pb-4">FAQs</p>
                    <p className="pb-4">Privacy Policy</p>
                    <p >Terms of Service</p>
                </div>
            </div>
            <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0"></div>
        </footer>
    )
}

export default Footer
