import { decorateIcons } from "../../scripts/lib-franklin.js";

export default function decorate(block){
    block.classList = 'sidemenu';
    [...block.children].forEach(element => {
        element.classList = "sidemenuentry";
    })
   
    decorateIcons(block);
}