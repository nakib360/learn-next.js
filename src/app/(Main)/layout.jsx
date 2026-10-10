import "@/app/globals.css";

export const metadata = {
    title: {
        default: "Learn Next.js",
        template: "%s | Next.js"
    },
    description: "learning next.js is great."
}

const RootLayout = ({ children }) => {
    const Nav = [
        {id: 1, path: "About"},
        {id: 1, path: "About"},
        {id: 1, path: "About"},
        {id: 1, path: "About"},
        {id: 1, path: "About"},
    ]
    return (
        <html>
            <body>
                <header className="bg-green-500 p-20">
                    <p>Header</p>
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