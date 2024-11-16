import SubMenu from "../SubMenu/SubMenu"

export default function Trigger(props) {
    return(
    <li className="trigger"><a href="/#"> {props.menuItem ? props.menuItem : 'MENU ITEM'}</a>
        <ul className="submenu">
            {
                props.linkItems && props.linkItems.length > 0 ? (
                    props.linkItems.map((linkItem, index) => {
                        return (
                            <SubMenu
                                key={index}
                                title={linkItem.title}
                                link={linkItem.link}
                            />
                        );
                    })
                ) : (
                    <li>No links available</li>  
                )}
        </ul>
    </li>)
}

//added the functionality to add the links externally so dont have ti hard code eac time