import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'

import { navLinks } from '../constant'

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={130} height={29} />
                </a>
                <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((navLink) => (
                        <li key={navLink.label}>
                            <a
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                                href={navLink.href}
                            >
                                {navLink.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav
