export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h4>Layout for Products group</h4>
            {children}
        </>
    )
}
