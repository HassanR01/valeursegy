export default function RootLayout({ children }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center" dir="rtl">
            {children}
        </div>
    );
}