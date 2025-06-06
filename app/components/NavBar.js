import Logo from './Logo.js'
import MenuHamburg from './MenuHamburg.js'
import NavigationLinks from './NavigationLinks.js'

const Nav = () => {
    return (
        <header className='w-full bg-black'>
            <div className='container m-auto p-5 flex justify-between items-center'>
                <Logo />

                {/* Links visibles en escritorio */}
                <div className="hidden md:block">
                    <NavigationLinks />
                </div>

                {/* Menú hamburguesa en mobile */}
                <div className="block md:hidden">
                    <MenuHamburg />
                </div>
            </div>
        </header>
    )
};

export default Nav;
