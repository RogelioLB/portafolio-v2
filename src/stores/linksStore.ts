import { atom } from "nanostores";
import { BiBookAlt, BiHomeAlt2, BiMailSend} from "react-icons/bi/index";
import { CgProfile } from "react-icons/cg/index";

export const links = atom([
    {
        url:"/",
        text:"Home",
        Icon: BiHomeAlt2
    },
    {
        url:"/aboutme",
        text: "Personal Info",
        Icon: CgProfile
    },
    {
        url:"/blog",
        text: "Blog",
        Icon: BiBookAlt
    },
    {
        url: "mailto:rogelio20052011@gmail.com",
        text: "Contact",
        Icon: BiMailSend
    }
])