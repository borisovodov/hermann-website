import "@/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Provider } from "@/app/providers";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
	metadataBase: new URL("https://hermann.ovodov.me"),
	title: "Hermann | Zero-friction time tracker",
	description: "Hermann is a zero-friction time tracker for iPhone, Mac and Apple Watch. ML predicts your tasks. Charts reveal what truly makes you happy — or doesn't.",
	openGraph: {
		title: "Hermann | Zero-friction time tracker",
		description: "Hermann is a zero-friction time tracker for iPhone, Mac and Apple Watch. ML predicts your tasks. Charts reveal what truly makes you happy — or doesn't.",
		url: "https://hermann.ovodov.me/",
		siteName: "Hermann | Zero-friction time tracker",
		locale: "en_US",
		images: "https://hermann.ovodov.me/image.png",
	},
	itunes: {
		appId: "6480348420",
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
