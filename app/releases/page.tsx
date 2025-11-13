export default function ReleasesPage() {
	return (
		<div className="max-w-4xl mx-auto p-10">
			<h1 className="text-5xl font-bold">Release Notes</h1>
			<p className="mt-4">Our release history to keep users informed of improvements.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.27.1</h2>
			<p className="text-gray-500"><small>Released on November 10, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 26 Tahoe, iOS 26, watchOS 26 or newer</small></p>
			<p>Fixed incorrect timer display on iOS 26.1.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.27.0</h2>
			<p className="text-gray-500"><small>Released on October 22, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 26 Tahoe, iOS 26, watchOS 26 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added support for macOS 26 Tahoe, iOS 26, and watchOS 26.</li>
				<li>Introduced the new Liquid Glass design language.</li>
				<li>Updated the app icon.</li>
				<li>Improved color picker appearance.</li>
				<li>Fixed an issue preventing deletion of tasks, projects, and areas.</li>
				<li>Improved overall app stability.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.26.1</h2>
			<p className="text-gray-500"><small>Released on September 23, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<p>Fixed an issue where the timer wouldn’t update over time.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.26.0</h2>
			<p className="text-gray-500"><small>Released on September 18, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Increased number of suggestions.</li>
				<li>Suggestions now adapt faster to changes in your habits.</li>
				<li>The current task is now hidden from suggestions.</li>
				<li>Faster iCloud data sync.</li>
				<li>The watchOS app now works independently from your iPhone.</li>
				<li>Faster search form launch.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.25.0</h2>
			<p className="text-gray-500"><small>Released on August 22, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Improved color picker from the palette.</li>
				<li>Added the ability to set colors for tasks and projects not nested in areas of responsibility.</li>
				<li>Added the ability to create tasks on watchOS.</li>
				<li>Added the ability to set emotional tone for tasks on watchOS.</li>
				<li>Added the ability to change the parent of tasks and projects.</li>
				<li>Added full task name to the timer context menu on iOS.</li>
				<li>Fixed an issue where the parent of tasks was cleared during iCloud sync.</li>
				<li>Fixed an issue where tasks were cleared from time entries during iCloud sync.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.24.0</h2>
			<p className="text-gray-500"><small>Released on June 25, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added a Settings page on iOS and macOS.</li>
				<li>Added the option to hide the timer from the menu bar on macOS.</li>
				<li>Recent time entries are now displayed in the Statistics section.</li>
				<li>Added the ability to completely clear the data storage.</li>
				<li>Introduced Developer Mode for testing preview features.</li>
				<li>Fixed an issue where pressing ⌘F on macOS did not initiate search.</li>
				<li>Fixed an issue where the previous time entry was not deleted correctly when repeatedly shifting the current timer to the end of the previous entry.</li>
				<li>Fixed a freeze that could occur when syncing zero-duration time entries with iCloud.</li>
				<li>Fixed incorrect task title shown in the timer during iCloud sync.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.23.0</h2>
			<p className="text-gray-500"><small>Released on May 5, 2025</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<p>Added handling of synchronization conflicts between multiple devices.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.22.0</h2>
			<p className="text-gray-500"><small>Released on December 7, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added the ability to undo actions (Command + Z).</li>
				<li>Added clarification that specifying a parent is optional when creating a task.</li>
				<li>Fixed an issue with displaying empty data during synchronization with iCloud.</li>
				<li>Fixed an issue where the timer in the menu bar would stop if the main application window was closed.</li>
				<li>Fixed an issue with incorrect editing of time entries without an end date.</li>
				<li>Fixed an issue where starting the timer changed the end date of the previous time entry if the end date was in the future.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.21.1</h2>
			<p className="text-gray-500"><small>Released on October 30, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Fixed multiple issues with hiding the quick search window.</li>
				<li>Fixed the issue with displaying recommended tasks during the search in the quick search window.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.21.0</h2>
			<p className="text-gray-500"><small>Released on October 9, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 15 Sequoia, iOS 18, watchOS 11 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Support for macOS 15 Sequoia, iOS 18 and watchOS 11.</li>
				<li>The time entry list now updates more frequently and works faster.</li>
				<li>Editing time entries and generating statistics is now quicker.</li>
				<li>Application stability has been improved.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.20.0</h2>
			<p className="text-gray-500"><small>Released on September 3, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added privacy manifest.</li>
				<li>Fixed an error in the name of the frequent tasks section on watchOS.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.19.1</h2>
			<p className="text-gray-500"><small>Released on August 30, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<p>Recommendations updates on macOS now occur more frequently.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.19.0</h2>
			<p className="text-gray-500"><small>Released on August 3, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>You can now edit and rename the current task directly in the timer.</li>
				<li>Items can now be moved on macOS.</li>
				<li>The design of the search results form and the quick search window on macOS has been updated.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.18.0</h2>
			<p className="text-gray-500"><small>Released on June 28, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<ul className="list-disc list-inside">
				{/* <li>Import are now hided.</li> */}
				<li>A chart with summaries by items has been added.</li>
				<li>Grouping by item types in charts has been added (tasks, projects, areas of responsibility).</li>
				<li>Values without a category in charts can now be hidden. For example, tasks without an area when grouped by areas of responsibility.</li>
				<li>Time zones are now considered when training the recommendation model.</li>
				<li>The time entry list and statistics display have been merged.</li>
				<li>The app icon on watchOS has been updated.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.17.0</h2>
			<p className="text-gray-500"><small>Released on February 17, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added a chart for time spent on tasks that energize and those that drain energy.</li>
				<li>Added the ability to filter the list of time entries by months, years, and all time.</li>
				<li>Improved the color selection mechanism for areas of responsibility.</li>
				<li>To improve performance, the training of the recommendation model and the update of the current timer now occur less frequently.</li>
				<li>Search results are now generated faster.</li>
				<li>Fixed an issue with the constant rebuilding of the time entry editing form.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.16.0</h2>
			<p className="text-gray-500"><small>Released on February 9, 2024</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Tasks can be assigned an emotional perception.</li>
				<li>Areas of responsibility can be assigned a color.</li>
				<li>Sensory feedback now only works when the timer is started and stopped manually.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.15.0</h2>
			<p className="text-gray-500"><small>Released on November 22, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 14 Sonoma, iOS 17, watchOS 10 or newer</small></p>
			<p>Support for macOS 14 Sonoma, iOS 17 and watchOS 10.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.14.0</h2>
			<p className="text-gray-500"><small>Released on September 25, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16, watchOS 9 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Improved display of time entry list.</li>
				<li>It is now possible to specify the duration of a time entry when creating and editing it.</li>
				<li>Updated app icon.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.13.0</h2>
			<p className="text-gray-500"><small>Released on August 31, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16, watchOS 9 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Created watchOS app.</li>
				<li>The button for shifting the start of the current timer has been added to the player on iOS.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.12.0</h2>
			<p className="text-gray-500"><small>Released on August 23, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<ul className="list-disc list-inside">
				{/* <li>Implemented basic import.</li> */}
				<li>Logging added.</li>
				<li>Improved speed of the recommendation system.</li>
				<li>Fixed several issues with opening quick search window.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.11.0</h2>
			<p className="text-gray-500"><small>Released on June 12, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<p>Added quick search window to macOS.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.10.1</h2>
			<p className="text-gray-500"><small>Released on March 5, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<p>Fixed incorrect calculation of task start frequency.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.10.0</h2>
			<p className="text-gray-500"><small>Released on March 5, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>You can now search for a parent when creating a task or editing a time entry on iOS.</li>
				<li>It’s now possible to search for tasks by their parent name.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.9.0</h2>
			<p className="text-gray-500"><small>Released on February 28, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Ability to shift the start of the task in the timer.</li>
				<li>Export records to TSV.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.8.0</h2>
			<p className="text-gray-500"><small>Released on February 23, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<ul className="list-disc list-inside">
				<li>Added task recommendations using ML.</li>
				<li>Search results are now ranked by task frequency.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.7.0</h2>
			<p className="text-gray-500"><small>Released on February 17, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<p>Added timer to macOS control panel and iOS.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.6.0</h2>
			<p className="text-gray-500"><small>Released on January 21, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<p>The current timer is shown in the menu bar on macOS.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.5.0</h2>
			<p className="text-gray-500"><small>Released on January 20, 2023</small></p>
			<p className="text-gray-500"><small>Requires macOS 13 Ventura, iOS 16 or newer</small></p>
			<p>Support for macOS 13 Ventura and iOS 16.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.4.0</h2>
			<p className="text-gray-500"><small>Released on September 18, 2022</small></p>
			<p className="text-gray-500"><small>Requires macOS 12 Monterey, iOS 15 or newer</small></p>
			<p>Ability to rename tasks.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.3.0</h2>
			<p className="text-gray-500"><small>Released on July 25, 2022</small></p>
			<p className="text-gray-500"><small>Requires macOS 12 Monterey, iOS 15 or newer</small></p>
			<ul className="list-disc list-inside">
				{/* <li>Displaying a badge on the app icon when the timer is running.</li> */}
				<li>Animations have been added.</li>
				<li>Added link to the privacy policy.</li>
				<li>Fixed an issue where the end date of a running time entry would change after editing its start date.</li>
			</ul>
			<h2 className="text-2xl font-semibold mt-4">Version 0.2.0</h2>
			<p className="text-gray-500"><small>Released on July 3, 2022</small></p>
			<p className="text-gray-500"><small>Requires macOS 12 Monterey, iOS 15 or newer</small></p>
			<p>Manual work with time entries.</p>
			<h2 className="text-2xl font-semibold mt-4">Version 0.1.0</h2>
			<p className="text-gray-500"><small>Released on June 12, 2022</small></p>
			<p className="text-gray-500"><small>Requires macOS 12 Monterey, iOS 15 or newer</small></p>
			<p>First version.</p>
		</div>
	);
}
