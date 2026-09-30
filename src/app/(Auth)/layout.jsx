export const metadata = {
    title: "Learn Next.js",
    description: "learning next.js is great."
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                {children}
                <footer className="bg-green-500 p-20">
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;