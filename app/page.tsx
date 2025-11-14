"use client";

import { PageHeader } from "@/components";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function HomePage() {
	return (
		<div className="px-10">
			<Image src="/app-icon-dark.png" width="64" height="64" alt="App icon" className="mx-auto py-10" />
			<div className="max-w-4xl mx-auto py-8">
				<PageHeader
					title="A time tracker without friction for Mac, iPhone and Apple Watch"
				/>
				<p className="mt-5">Hermann allows you to answer the questions “where is the time of my life going?” and “am I doing the things that give me strength?” This app is not about making more money. It’s about the meaning of life.</p>
				<div className="text-center">
					<Button
						size="lg"
						color="primary"
						radius="full"
						className="mt-10"
						href="https://testflight.apple.com/join/gABvbUHH"
					>
						Get through TestFlight
					</Button>
					<p className="mt-4 text-gray-500"><small>While Hermann is in public beta, you can use it for free through TestFlight.</small></p>
					<p className="text-gray-500"><small>Requires macOS 26 Tahoe, iOS 26, watchOS 26 or newer.</small></p>
				</div>
			</div>
			<Image src="/screenshot.png" width="1280" height="720" alt="Screenshot" className="mx-auto py-5" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-10">
				<div>
					<h3 className="font-semibold text-lg mb-2">Quick Task Search</h3>
					<p>Hermann is designed to let you effortlessly indicate what you’re currently working on with minimal clicks. On macOS, a single command brings up the quick search window, allowing you to instantly find the task you need. On iOS, the search field is right at your fingertips. Smart suggestions help you find the right tasks even without typing a search query.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Machine Learning Suggestions</h3>
					<p>The time tracker predicts what you’re working on based on the current day of the week, time, and your previous tasks.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Not charts, but the meaning of life</h3>
					<p>Hermann isn’t designed to make you earn more money. Its purpose is to help you lead a happier life; to spend your precious time on activities that make your life fulfilling and meaningful. Instead of showing charts about dollars earned, app will tell you how much time you’ve spent on tasks that energize you versus tasks that drain you.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Getting Tasks Done with Even Thousands of Them</h3>
					<p>Time tracker optimised on work with thousands tasks. They all will be accessible on any device (even on Apple Watch). And you never need to go to the web for statistics.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Privacy First</h3>
					<p>We respect your privacy. That’s why all your data store in your own iCloud Drive and developers don’t have access to them at all. iCloud also provides seamless data integration between all your devices.</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-2">Native</h3>
					<p>Hermann is native for Apple ecosystem. It provides high speed, low memory and battery consumption.</p>
					<p><i>In the near future, support will be introduced for Complications, Widgets, Actions in Control Center, Spotlight, Shortcuts, Siri Suggestions, and Apple Intelligence.</i></p>
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
