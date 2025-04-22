import Button from '../common/Button'
import SidebarMenu from './SidebarMenu'
import Link from './Link'
import Logo from './Logo'

const Nav = () => {
    return (
        <nav className="flex bg-black-main-2 items-center justify-between px-global py-3 z-50 fixed inset-x-0">
            <a className="float-left"> <Logo /></a>
            <div className="flex float-right justify-between max-991:hidden items-center">
                <div className="flex"> {/* Add spacing and proper layout */}
                    <Link>Course</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                    <Link>Blog</Link>
                </div>
                <Button className={'!py-[.85rem] !px-5 ml-4'}>Apply now</Button>
            </div>
            <div className="float-right hidden max-991:block">
                <SidebarMenu />
            </div>
        </nav>
    )
}

export default Nav
