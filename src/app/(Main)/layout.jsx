import "@/app/globals.css";
import HeaderNav from "../Client_Components/HeaderNav";
import { Space_Grotesk } from "next/font/google"

export const metadata = {
    title: {
        default: "Learn Next.js",
        template: "%s | Next.js"
    },
    description: "learning next.js is great."
}

const spaceGrotest = Space_Grotesk({
    weight: "500",
    subsets: ["latin"]
})

const RootLayout = ({ children }) => {

    return (
        <html>
            <body className={`${spaceGrotest.className}`}>
                <header className="bg-green-500 p-20">
                    <p>Header</p>
                    <HeaderNav />
                </header>
                {children}
                <footer className="bg-green-500 p-20">
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;