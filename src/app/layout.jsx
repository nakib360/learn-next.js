export const metadata = {
    title: "Learn Next.js",
    description: "learning next.js is great."
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;