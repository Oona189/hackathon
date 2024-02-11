import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    SquaresPlusIcon,
    SunIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import _default from "@material-tailwind/react/components/Tabs";


const navListMenuItems = [
    {
        title: "Ajouter une formation",
        href: "ajouterformation",
        icon: SquaresPlusIcon,
    },
    {
        title: "Ajouter un formateur",
        href: "ajouterformateur",
        icon: UserGroupIcon,
    },
    {
        title: "Ajouter un thème",
        href: "ajoutertheme",
        icon: Bars4Icon,
    },
    {
        title: "Ajouter un participant",
        href: "ajouterparticipant",
        icon: SunIcon,
    },
    {
        title: "Ajouter un partenaire",
        href: "ajouterpartenaire",
        icon: GlobeAmericasIcon,
    }
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, href }, key) => (
            <a href={"/" + href} key={key} >
                <MenuItem className="flex items-center gap-3 rounded-lg bg-white">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                    </div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
                    </Typography>
                </MenuItem>
            </a>
        ),
    );

    return (
<<<<<<< HEAD
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <p>+    Ajouter</p>
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
=======
        <nav style={navbar}>
            <div>
                <a href="/" style={Sigrex}>Sigrex</a>
            </div>
            <div>
                <a href="/" style={Accueil}>Accueil</a>
            </div>
        </nav>
>>>>>>> acb170ac3e95811ec8ab54b53889a448570f2465
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-3">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">Accueil</ListItem>
            </Typography>
            <NavListMenu/>
        </List>
    );
}

export default function NavBar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl px-4 py-2 bg-[#000000]" >
            <div className="flex items-center justify-between text-white">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    SIGREX
                </Typography>
                
                <div className="flex">
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <Button variant="gradient" size="sm">
                    Se Connecter
                </Button>
                </div>
                
                <IconButton
                    variant="text"
                    color="white"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <Button variant="gradient" size="sm" fullWidth>
                    Se Connecter
                </Button>
            </Collapse>
        </Navbar>
    );
}