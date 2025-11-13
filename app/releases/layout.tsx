import type { Metadata } from "next";

export const metadata: Metadata = {
	metadataBase: new URL("https://hermann.ovodov.me"),
	title: "Release Notes | Hermann",
	description: "Our release history to keep users informed of improvements.",
	openGraph: {
		title: "Release Notes | Hermann",
		description: "Our release history to keep users informed of improvements.",
		url: "https://hermann.ovodov.me/releases",
		siteName: "Hermann | Time tracker without friction",
		locale: "en_US",
	},
};

export default function ReleasesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>{children}</>
	);
}
