const MenuList = ({ open, handleClose})=>{
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-500`}>
                <div onClick={handleClose} className="text-white text-center p-5">
                    [x]
                </div>
                <nav className="flex flex-col gap-3 px-3">
                    <a href="#" className="text-white p-2">Link #1</a>
                    <a href="#" className="text-white p-2">Link #2</a>
                    <a href="#" className="text-white p-2">Link #3</a>
                </nav>
            </aside>

        </div>
    ) 
}
export default MenuList;