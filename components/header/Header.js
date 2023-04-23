import {ReactSVG} from "react-svg";
import {useState} from "react";
import {useInView} from "react-intersection-observer";

export const Header = ({logo,icons,menu,button,burger}) => {
    const [active,setActive] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0
    });
    return (
        <header ref={ref} className={`header ${inView ? 'header_in' : ''}`}>
            <div className={'header__content'}>
                <div className={'header__logo'}>
                    <span>{logo}</span>
                </div>
                <div className={`header__block ${active ? 'header__block_active' : ''}`}>
                    <nav className={'header__menu'}>
                        <ul className={'header__menu-list'}>
                            {menuList(menu)}
                        </ul>
                    </nav>
                    <button className={'header__btn'}>{button.text}</button>
                    <div className={'header__icons'}>
                        {iconList(icons)}
                    </div>
                </div>
                <div className={'header__burger'} onClick={()=>{
                    setActive(!active);
                }
                }>
                    {<img src={active ? burger.active : burger.icon} alt={'burger'}/>}
                </div>
            </div>
        </header>
    )
}

function menuList(menu){
    return menu.map((item,index)=>{
        return <li key={`menu-item-${index}`} className={`header__menu-item header__menu-item_${index+1}`}>
            <a href={item.href}>{item.text}</a>
        </li>
    })
}

function iconList(icons){
    return icons.map((icon)=>{
        return <a key={`header-icon-${icon.mod}`} className={`header__icon header__icon_${icon.mod}`}>
            <img src={icon.src} alt={`${icon.mod}`}/>
        </a>
    })
}