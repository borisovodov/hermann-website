import { PageHeader, Release } from "@/components";

export default function ReleasesPage() {
	return (
		<div className="max-w-4xl mx-auto p-10">
			<PageHeader
				title="Release Notes"
				description="Our release history to keep users informed of improvements."
			/>
			<Release
				version="0.28.0"
				releaseDate="January 16, 2023"
				requirements="macOS 26 Tahoe, iOS 26, watchOS 26 or newer"
				changes={[
					"Added daily and weekly statistics views.",
					"Added display of total hours logged for the selected period.",
					"Added daily total hours display in the time entries list.",
					"Statistics view settings are now saved.",
					"Added timer controls to the macOS menu bar.",
					"Removed the ability to group entries by projects.",
					"Fixed an issue where switching the period filter type did not navigate to the current period.",
				]}
			/>
			<Release
				version="0.27.1"
				releaseDate="November 10, 2025"
				requirements="macOS 26 Tahoe, iOS 26, watchOS 26 or newer"
				changes={[
					"Fixed incorrect timer display on iOS 26.1.",
				]}
			/>
			<Release
				version="0.27.0"
				releaseDate="October 22, 2025"
				requirements="macOS 26 Tahoe, iOS 26, watchOS 26 or newer"
				changes={[
					"Added support for macOS 26 Tahoe, iOS 26, and watchOS 26.",
					"Introduced the new Liquid Glass design language.",
					"Updated the app icon.",
					"Improved color picker appearance.",
					"Fixed an issue preventing deletion of tasks, projects, and areas.",
					"Improved overall app stability.",
				]}
			/>
			<Release
				version="0.26.1"
				releaseDate="September 23, 2025"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Fixed an issue where the timer wouldn’t update over time.",
				]}
			/>
			<Release
				version="0.26.0"
				releaseDate="September 18, 2025"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Increased number of suggestions.",
					"Suggestions now adapt faster to changes in your habits.",
					"The current task is now hidden from suggestions.",
					"Faster iCloud data sync.",
					"The watchOS app now works independently from your iPhone.",
					"Faster search form launch.",
				]}
			/>
			<Release
				version="0.25.0"
				releaseDate="August 22, 2025"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Improved color picker from the palette.",
					"Added the ability to set colors for tasks and projects not nested in areas of responsibility.",
					"Added the ability to create tasks on watchOS.",
					"Added the ability to set emotional tone for tasks on watchOS.",
					"Added the ability to change the parent of tasks and projects.",
					"Added full task name to the timer context menu on iOS.",
					"Fixed an issue where the parent of tasks was cleared during iCloud sync.",
					"Fixed an issue where tasks were cleared from time entries during iCloud sync.",
				]}
			/>
			<Release
				version="0.24.0"
				releaseDate="June 25, 2025"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Added a Settings page on iOS and macOS.",
					"Added the option to hide the timer from the menu bar on macOS.",
					"Recent time entries are now displayed in the Statistics section.",
					"Added the ability to completely clear the data storage.",
					"Introduced Developer Mode for testing preview features.",
					"Fixed an issue where pressing ⌘F on macOS did not initiate search.",
					"Fixed an issue where the previous time entry was not deleted correctly when repeatedly shifting the current timer to the end of the previous entry.",
					"Fixed a freeze that could occur when syncing zero-duration time entries with iCloud.",
					"Fixed incorrect task title shown in the timer during iCloud sync.",
				]}
			/>
			<Release
				version="0.23.0"
				releaseDate="May 5, 2025"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Added handling of synchronization conflicts between multiple devices.",
				]}
			/>
			<Release
				version="0.22.0"
				releaseDate="December 7, 2024"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Added the ability to undo actions (Command + Z).",
					"Added clarification that specifying a parent is optional when creating a task.",
					"Fixed an issue with displaying empty data during synchronization with iCloud.",
					"Fixed an issue where the timer in the menu bar would stop if the main application window was closed.",
					"Fixed an issue with incorrect editing of time entries without an end date.",
					"Fixed an issue where starting the timer changed the end date of the previous time entry if the end date was in the future.",
				]}
			/>
			<Release
				version="0.21.1"
				releaseDate="October 30, 2024"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Fixed multiple issues with hiding the quick search window.",
					"Fixed the issue with displaying recommended tasks during the search in the quick search window.",
				]}
			/>
			<Release
				version="0.21.0"
				releaseDate="October 9, 2024"
				requirements="macOS 15 Sequoia, iOS 18, watchOS 11 or newer"
				changes={[
					"Support for macOS 15 Sequoia, iOS 18 and watchOS 11.",
					"The time entry list now updates more frequently and works faster.",
					"Editing time entries and generating statistics is now quicker.",
					"Application stability has been improved.",
				]}
			/>
			<Release
				version="0.20.0"
				releaseDate="September 3, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"Added privacy manifest.",
					"Fixed an error in the name of the frequent tasks section on watchOS.",
				]}
			/>
			<Release
				version="0.19.1"
				releaseDate="August 30, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"Recommendations updates on macOS now occur more frequently.",
				]}
			/>
			<Release
				version="0.19.0"
				releaseDate="August 3, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"You can now edit and rename the current task directly in the timer.",
					"Items can now be moved on macOS.",
					"The design of the search results form and the quick search window on macOS has been updated.",
				]}
			/>
			<Release
				version="0.18.0"
				releaseDate="June 28, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"A chart with summaries by items has been added.",
					"Grouping by item types in charts has been added (tasks, projects, areas of responsibility).",
					"Values without a category in charts can now be hidden. For example, tasks without an area when grouped by areas of responsibility.",
					"Time zones are now considered when training the recommendation model.",
					"The time entry list and statistics display have been merged.",
					"The app icon on watchOS has been updated.",
				]}
			/>
			<Release
				version="0.17.0"
				releaseDate="February 17, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"Added a chart for time spent on tasks that energize and those that drain energy.",
					"Added the ability to filter the list of time entries by months, years, and all time.",
					"Improved the color selection mechanism for areas of responsibility.",
					"To improve performance, the training of the recommendation model and the update of the current timer now occur less frequently.",
					"Search results are now generated faster.",
					"Fixed an issue with the constant rebuilding of the time entry editing form.",
				]}
			/>
			<Release
				version="0.16.0"
				releaseDate="February 9, 2024"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"Tasks can be assigned an emotional perception.",
					"Areas of responsibility can be assigned a color.",
					"Sensory feedback now only works when the timer is started and stopped manually.",
				]}
			/>
			<Release
				version="0.15.0"
				releaseDate="November 22, 2023"
				requirements="macOS 14 Sonoma, iOS 17, watchOS 10 or newer"
				changes={[
					"Support for macOS 14 Sonoma, iOS 17 and watchOS 10.",
				]}
			/>
			<Release
				version="0.14.0"
				releaseDate="September 25, 2023"
				requirements="macOS 13 Ventura, iOS 16, watchOS 9 or newer"
				changes={[
					"Improved display of time entry list.",
					"It is now possible to specify the duration of a time entry when creating and editing it.",
					"Updated app icon.",
				]}
			/>
			<Release
				version="0.13.0"
				releaseDate="August 31, 2023"
				requirements="macOS 13 Ventura, iOS 16, watchOS 9 or newer"
				changes={[
					"Created watchOS app.",
					"The button for shifting the start of the current timer has been added to the player on iOS.",
				]}
			/>
			<Release
				version="0.12.0"
				releaseDate="August 23, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Logging added.",
					"Improved speed of the recommendation system.",
					"Fixed several issues with opening quick search window.",
				]}
			/>
			<Release
				version="0.11.0"
				releaseDate="June 12, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Added quick search window to macOS.",
				]}
			/>
			<Release
				version="0.10.1"
				releaseDate="March 5, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Fixed incorrect calculation of task start frequency.",
				]}
			/>
			<Release
				version="0.10.0"
				releaseDate="March 5, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"You can now search for a parent when creating a task or editing a time entry on iOS.",
					"It’s now possible to search for tasks by their parent name.",
				]}
			/>
			<Release
				version="0.9.0"
				releaseDate="February 28, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Ability to shift the start of the task in the timer.",
					"Export records to TSV.",
				]}
			/>
			<Release
				version="0.8.0"
				releaseDate="February 23, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Added task recommendations using ML.",
					"Search results are now ranked by task frequency.",
				]}
			/>
			<Release
				version="0.7.0"
				releaseDate="February 17, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Added timer to macOS control panel and iOS.",
				]}
			/>
			<Release
				version="0.6.0"
				releaseDate="January 21, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"The current timer is shown in the menu bar on macOS.",
				]}
			/>
			<Release
				version="0.5.0"
				releaseDate="January 20, 2023"
				requirements="macOS 13 Ventura, iOS 16 or newer"
				changes={[
					"Support for macOS 13 Ventura and iOS 16.",
				]}
			/>
			<Release
				version="0.4.0"
				releaseDate="September 18, 2022"
				requirements="macOS 12 Monterey, iOS 15 or newer"
				changes={[
					"Ability to rename tasks.",
				]}
			/>
			<Release
				version="0.3.0"
				releaseDate="July 25, 2022"
				requirements="macOS 12 Monterey, iOS 15 or newer"
				changes={[
					"Animations have been added.",
					"Added link to the privacy policy.",
					"Fixed an issue where the end date of a running time entry would change after editing its start date.",
				]}
			/>
			<Release
				version="0.2.0"
				releaseDate="July 3, 2022"
				requirements="macOS 12 Monterey, iOS 15 or newer"
				changes={[
					"Manual work with time entries.",
				]}
			/>
			<Release
				version="0.1.0"
				releaseDate="June 12, 2022"
				requirements="macOS 12 Monterey, iOS 15 or newer"
				changes={[
					"First version.",
				]}
			/>
		</div>
	);
}
