import "@/globals.css";

import type { Metadata } from "next";
// import { PT_Sans } from "next/font/google";

import { Provider } from "@/app/providers";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
	metadataBase: new URL("https://hermann.ovodov.me"),
	title: "Hermann | Time tracker without friction",
	description: "Hermann is a time tracker without friction for Mac, iPhone and Apple Watch",
	openGraph: {
		title: "Hermann | Time tracker without friction",
		description: "Hermann is a time tracker without friction for Mac, iPhone and Apple Watch",
		url: "https://hermann.ovodov.me/",
		siteName: "Hermann | Time tracker without friction",
		locale: "en_US",
	},
};

// const sans = PT_Sans({
// 	weight: ["400", "700"],
// 	subsets: ["cyrillic", "latin"],
// });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<Header />
				<Provider>
					{children}
				</Provider>
				<Footer />
			</body>
		</html>
	);
}
