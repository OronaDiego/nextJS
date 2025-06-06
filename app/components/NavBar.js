import Logo from './Logo.js'
import Menu from './Menu.js'

//Barra de navegacion
const Nav = ()=>{
    return(
        <header className='w-full bg-black'>
            <div className='container m-auto p-5 flex flex-row justify-between'>
            <Logo/>
            <Menu/>
            </div>
        </header>
    )
}
export default Nav