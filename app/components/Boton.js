const Boton = ({children, className='',...args})=>{
    return(
        <button className={`text-whiterounded-none  px-4 py-2 text-sm font-semibold text-white ${className}`} {...args}>
        {children}
        </button>
    )
}

export default Boton;