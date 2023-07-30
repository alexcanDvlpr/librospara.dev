import Link from "next/link";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 fixed top-0 right-0 left-0 w-full flex flex-col sm:flex-row justify-center">
            <div className="justify-center sm:navbar-start">
                <Link href="/" className="sm:px-4 font-bold normal-case text-xl">librosPara.dev</Link>
            </div>
            <div className="navbar-center">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-lg font-semibold">
                            <Link href="/books">Libros</Link>
                        </li>
                        <li className="text-lg font-semibold">
                            <Link href="https://alexcantongarcia.es" target="_blank">alexcan.dvlpr</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end"></div>
        </div>
    )
}

export default Navbar;