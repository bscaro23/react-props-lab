export default function SubMenu(props) {
    return(
    <li className="trigger"><a href="/#">MENU ITEM</a>
        <ul className="submenu">
            <li><a href="/#">Link 1</a></li>
            <li><a href="/#">Link 2</a></li>
        </ul>
    </li>)
}

//Could utilise the props to specify the names and links if there were specific places