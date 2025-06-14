"use client"
import { useState } from "react";
import Image from "next/image";
import MenuList from "./MenuList.js";

const MenuHamburg = ()=>{

    const [open,setOpen]= useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <div onClick={handleOpen}>
                <Image src={"/MenuHmburg.png"} width={48} height={48} alt=" Barra del Menu" title="Menu"/>
            </div>
            <MenuList open={open} handleClose={handleClose}/>
        </>
    )
}
export default MenuHamburg;