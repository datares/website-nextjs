import {Dropdown, Menu} from 'semantic-ui-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/Assets/Home/logo.svg';


export default function Navbar() {
    return (
        <div>
            <Menu style={{padding: '1%'}} position="right" size="large" secondary stackable>
                <Menu.Menu position="left">
                    <Link href="/">
                        <Image src={logo} width={200} alt='datares logo'/>
                    </Link>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Link href="/about">
                        <Menu.Item
                        name='About'
                        style={{fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                    <Dropdown item openOnFocus text="Branches" style={{fontWeight: "bold", fontSize: "1.2em"}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link href='/datablog'>
                                    <Menu.Item
                                    name='DataBlog'
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                    
                            <Dropdown.Item>
                                <Link href='/research'>
                                    <Menu.Item
                                    name='Research'
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>

                            <Dropdown.Item>
                                <Link href='/consulting'>
                                    <Menu.Item
                                    name='Consulting'
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link href='/athletics'>
                                    <Menu.Item
                                    name='UCLA Athletics'
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item openOnFocus text="Community" style={{fontWeight: "bold", fontSize: "1.2em"}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link href='/events'>
                                    <Menu.Item
                                    name='Events'
                                    style={{color: "black", 
                                            fontWeight: "bold"}} />
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link href="join-us">
                        <Menu.Item
                        name='Join Us'
                        style={{fontWeight: "bold",
                                fontSize: "1.2em"}} />
                    </Link>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

