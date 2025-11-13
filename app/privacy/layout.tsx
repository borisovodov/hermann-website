import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://hermann.ovodov.me"),
	title: "Privacy Policy | Hermann",
	description: "Hermann’s Privacy Policy",
	openGraph: {
		title: "Privacy Policy | Hermann",
		description: "Hermann’s Privacy Policy",
		url: "https://hermann.ovodov.me/privacy",
		siteName: "Hermann | Time tracker without friction",
		locale: "en_US",
	},
};

export default function PrivacyLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>{children}</>
	);
}
