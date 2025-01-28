import Link from 'next/link';

const Header = () => {

    return (
        <header className="bg-black text-white py-6 flex justify-between items-center px-10 relative z-10 text-xl">
            <h1 className="text-3xl font-bold">Car Universe</h1>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex gap-10 text-white font-bold">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/cars">Cars</Link>
                <Link href="/contact">Contact</Link>

            </nav>
        </header>
    );
};

export default Header;