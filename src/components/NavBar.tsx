import Links from "./Links";
import MenuBackdrop from "./MenuBackdrop";

export default function NavBar(){
    return(
        <nav className="fixed top-0 px-5 py-3 backdrop-blur-sm z-50 w-screen">
            <div className="max-w-4xl mx-auto  flex items-center justify-between">
                <h1 className="font-bold text-xl text-white">RogelioLB</h1>
                <div>
                    <Links />
                    <MenuBackdrop />
                </div>
            </div> 
        </nav>
    )
}