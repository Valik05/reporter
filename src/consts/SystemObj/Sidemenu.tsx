import LinksList from "../../components/UI/LinksList/LinksList";
import { NavigationLinks } from "../NavLinks/NavLinks";
import type { SidemenuObjType } from "../../models/SystemElems/Sidemenu";


export const SidemenuObj: SidemenuObjType = {
    "navigation": <LinksList links={NavigationLinks} />
}