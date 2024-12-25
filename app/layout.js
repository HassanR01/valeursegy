import DataProvider from "./components/Context/DataContext";
import "./globals.css";


export const metadata = {
  title: "Valeurs",
  description: "Smart Solutions for Lifelong Wellness. To be the leading global provider of medical AI and wellness solutions, setting new benchmarks for healthcare innovation and accessibility, By leveraging the latest technologies and fostering partnerships across Egypt, the UAE, Jordan, Greece, and the USA, we aspire to redefine the future of health and wellness in the Middle East and create a lasting impact on global healthcare standards.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-mainColor font-mainFont flex items-center justify-center flex-col" suppressHydrationWarning={true}>
        <DataProvider>
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
