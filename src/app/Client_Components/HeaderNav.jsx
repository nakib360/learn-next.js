"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderNav = () => {
    const pathName = usePathname();
    const Nav = [
        { id: 1, path: "About" },
        { id: 2, path: "Blog" },
        { id: 3, path: "Daraz" },
        { id: 4, path: "Docs" },
        { id: 5, path: "Image" },
        { id: 6, path: "Products" },
        { id: 7, path: "Profile" },
        { id: 8, path: "Comments" },
    ]
    return (
        <div>
            <div className="flex gap-3 items-center">
                {
                    Nav.map(nav => (
                        <div key={nav.id}>
                            <Link className={pathName === `/${nav.path}` ? "text-blue-700" : undefined} href={`/${nav.path}`}>{nav.path}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HeaderNav;