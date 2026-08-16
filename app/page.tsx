"use client";

import { PageHeader } from "@/components";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="px-10">
			<Image src="/app-icon-light.png" width="64" height="64" alt="App icon" className="mx-auto py-10" />
			<div className="max-w-4xl mx-auto py-8">
				<PageHeader
					title="Zero-friction time tracker for iPhone, Mac and Apple Watch"
				/>
				<p className="mt-5">Hermann is a time tracker built for humans — not project managers. No projects, no clients, no clutter. Just type what you’re doing and go. One tap to start, one tap to stop. And when you’re ready to reflect, Hermann shows you something deeper than billable hours: it answers the questions “where is the time of my life going?” and “am I doing the things that make me happy?” This app is not about making more money. It’s about the meaning of life.</p>
				<div className="text-center">
					<Button
						size="lg"
						color="primary"
						radius="full"
						className="mt-10"
						href="https://apps.apple.com/us/app/hermann-time-tracker/id6480348420"
					>
						Download
					</Button>
					<p className="text-gray-500 mt-5"><small>Requires macOS 26 Tahoe, iOS 26, watchOS 26 or newer.</small></p>
				</div>
			</div>
			<Image src="/screenshot.png" width="1280" height="720" alt="Screenshot" className="mx-auto py-5" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-10">
				<div>
					<h3 className="font-semibold text-lg mb-2">Zero-Friction Tracking</h3>
					<p>Start tracking in seconds. Type a task name, hit enter. No categories to pre-define, no projects to set up. Hermann adapts to how you naturally describe your work.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Machine Learning Predictions</h3>
					<p>Hermann learns your routines. Based on time of day and day of week, it predicts what you’re likely to work on next — and surfaces those tasks right when you need them. The more you track, the smarter it gets.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Universal. Everywhere.</h3>
					<p>Hermann runs natively on iPhone, Mac, and Apple Watch. iCloud sync keeps everything seamlessly up to date across all your devices. Start a timer on your Mac, stop it from your wrist.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Beautiful Statistics</h3>
					<p>Donut charts break down your time by label and time period. Tap any segment to dive deeper. Compare weeks, spot trends, and understand your rhythms — all in a clean, distraction-free interface.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Mental Health Insights</h3>
					<p>This is the heart of Hermann. Labels aren’t just for organization — they’re for self-understanding. Tag tasks with labels that reflect how you feel: “energizing,” “draining,” “flow,” “obligation.” The charts reveal what truly fills your days. Are you living the life you want? Hermann helps you see the truth.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Quick Search & Menu Bar (Mac)</h3>
					<p>Press ⌘⌥H from anywhere to summon Quick Search. Type a few characters, find any task, and start tracking — without touching your mouse or switching windows. Control your timer, switch between tasks, and manage labels right from the menu bar.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Labels & Colors</h3>
					<p>Organize tasks your way. Assign colors and labels that make sense to you. Filter and analyze your time through any lens.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Export & Import</h3>
					<p>Your data belongs to you. Export everything anytime, or import data from other tools.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Privacy by Design</h3>
					<p>All your data lives on your device and syncs privately through iCloud. No accounts, no servers, no tracking. No one sees your data but you.</p>
				</div>
			</div>
			<div className="w-full max-w-4xl mx-auto m-10">
				<div className="relative pb-[56.25%]">
					<iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/WQd-isTD5ZI?rel=0" allowFullScreen></iframe>
				</div>
			</div>
		</div>
	);
}
