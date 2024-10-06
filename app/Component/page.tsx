import Link from "next/link";

export default function Navbar(){
    return (
        <div>
           <Link href={"/"}>Home🏠</Link> | &nbsp;
           <Link href={"/about"}>About📝</Link> | &nbsp;
           <Link href={"/country"}>Country🖼</Link> | &nbsp;
        </div>
    )
}