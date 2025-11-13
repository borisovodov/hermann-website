"use client";

import {
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/react";
import Image from "next/image";

export function Header() {
    return (
        <Navbar
            maxWidth="full"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href="/" className="flex items-center text-lg text-inherit no-underline">
                        <Image src="/app-icon-dark.png" width="32" height="32" alt="Icon" />
                        <p className="font-bold text-inherit ml-4">Hermann</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-8" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="/releases">
                        What’s New
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="https://testflight.apple.com/join/gABvbUHH">
                        Download
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                <NavbarMenuItem key="releases">
                    <Link
                        className="w-full"
                        color="foreground"
                        href="/releases"
                        size="lg"
                    >
                        What’s New
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem key="download">
                    <Link
                        className="w-full"
                        color="foreground"
                        href="https://testflight.apple.com/join/gABvbUHH"
                        size="lg"
                    >
                        Download
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
