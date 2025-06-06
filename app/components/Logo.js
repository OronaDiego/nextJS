import Image from "next/image";

const Logo = () => {
    return(
        <>
        <Image src="/logo.png" width={100} height={100} alt="Logo" title="logo"/>
        </>
    )
};

export default Logo;