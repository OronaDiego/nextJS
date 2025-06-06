import NavigationLinks from './NavigationLinks';

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end z-50`}>
            <aside className={`${!open ? 'translate-x-48' : ''} transition-all w-48 bg-gray-800`}>
                <div onClick={handleClose} className="text-white text-center p-5 cursor-pointer">
                    [x]
                </div>
                <div className="px-3">
                    <NavigationLinks />
                </div>
            </aside>
        </div>
    )
}

export default MenuList;