import Image from "next/image";

const Logo = () => {
    return(
        <>
        <Image src="/logo.png" width={50} height={50} alt="Logo" title="logo"/>
        </>
    )
};

export default Logo;