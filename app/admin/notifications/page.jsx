export default function Notification() {
	return (
		<>
			<div className="flex flex-col p-8">
				<p className="text-3xl font-bold">Notification</p>
                

				<p class="text-sm text-gray-600 dark:text-gray-400">
					List of all notifications.
				</p>
			</div>

			<div className="flex flex-col w-full p-8 bg-white">
				<ul class="flex flex-col">
					<button type="button" class="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        User 01 registered an account, check to verify
                    </button>
					<button type="button" class="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        User 02 registered an account, check to verify
                    </button>
					<button type="button" class="inline-flex items-center gap-x-2 py-3 px-4 text-sm text-start font-medium border border-gray-200 text-gray-800 hover:text-blue-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        User 03 registered an account, check to verify
                    </button>
				</ul>
			</div>
		</>
	);
}
