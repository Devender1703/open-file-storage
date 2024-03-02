
import Image from "next/image";
import icon from "../../../public/logos/icon.svg";
import UploadButton from "./uploadButton";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center p-4">
                <div className="p-2">
                    <Image src={icon} alt="openFileStorage" width={50} height={50}></Image>
                </div>
                <h4 className="text-black text-2xl font-bold" >Open file storage</h4>
            </div>
            <div className="flex space-x-4">
                <UploadButton/>
                <Link href="/">
                    <h4 className="p-2">Home</h4>
                </Link>
                <Link href="/">
                    <h4 className="p-2">Account</h4>
                </Link>
            </div>
        </div>
    )
};

export default NavBar;
