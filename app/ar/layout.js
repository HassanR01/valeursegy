
export const metadata = {
    title: "ڤالورز",
    description: "حلول ذكية للصحة العامة مدى الحياة. أن نكون في مقدمة الشركات التي توفر حلول الرعاية الصحية الحديثة التي تمكّن الأفراد والمتخصصين في الرعاية الصحية على حد سواء.",
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center" dir="rtl">
            {children}
        </div>
    );
}