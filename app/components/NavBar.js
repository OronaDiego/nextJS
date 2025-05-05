import Logo from './Logo.js'
import Menu from './Menu.js'

const Nav = ()=>{
    return(
        <header className='w-full bg-gray-600'>
            <div className='container m-auto p-5 flex flex-row justify-between'>
            <Logo/>
            <Menu/>
            </div>
        </header>
    )
}
export default Nav