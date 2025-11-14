import { PageHeader } from "@/components";

export default function PrivacyPage() {
	return (
		<div className="max-w-4xl mx-auto p-10">
			<PageHeader
				title="Privacy Policy"
				description="Last modified: October 30, 2024"
			/>
			<h2 className="text-2xl font-semibold mt-8">Introduction</h2>
			<p className="mt-2">Welcome to Hermann Time Tracker (“Hermann”, “we”, “us”, or “our”). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use the Hermann Time Tracker app.</p>
			<h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
			<p className="mt-2">Hermann is designed to minimize the collection of personal data. We do not require or collect any personal information such as your email address, name, or phone number to use the app. Our primary focus is to provide you with a seamless time-tracking experience without the need for personal identifiers.
			</p>
			<h2 className="text-2xl font-semibold mt-8">Use of iCloud for Storage and Data Transfer</h2>
			<p className="mt-2">Hermann utilizes Apple’s iCloud service to store your time-tracking data and synchronize it across your devices. This ensures that your data is always up to date, regardless of which device you are using. We do not have access to your data stored in iCloud. When you use iCloud, your data is subject to Apple’s privacy policies and security measures. We recommend reviewing Apple’s iCloud terms and privacy policy for more information on how your data is protected.
			</p>
			<h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
			<p className="mt-2">Since Hermann does not collect personal data, we do not process, share, or utilize any personal information for marketing or other purposes. The data you track using Hermann is stored in your iCloud account and is only accessible to you.</p>
			<h2 className="text-2xl font-semibold mt-8">Data Security</h2>
			<p className="mt-2">We take data security very seriously and implement various measures to protect your time-tracking data. However, it is important to understand that no method of electronic storage or transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
			<h2 className="text-2xl font-semibold mt-8">Changes to the Privacy Policy</h2>
			<p className="mt-2">We may occasionally update this Privacy Policy. In the event of changes, we will notify you by updating the effective date at the beginning of the policy. We strongly recommend periodically reviewing this policy for any changes.</p>
			<h2 className="text-2xl font-semibold mt-8">Contact Information</h2>
			<p className="mt-2">If you have any questions or comments regarding this Privacy Policy, please contact us at <a href="mailto:hermann@ovodov.me?subject=Privacy">hermann@ovodov.me</a>.</p>
		</div>
	);
}
