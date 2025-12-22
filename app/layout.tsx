import "@/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning>
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
