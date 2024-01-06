export default function Dashboard() {
	return (
		<>
			<div className="flex flex-col p-8">
				<p className="text-3xl font-bold">Dashboard</p>
			</div>

			<div className="flex flex-col w-full p-8">
				<div className="grid grid-cols-2 gap-8">
					<div class="flex flex-col bg-white border shadow-sm rounded-xl">
						<div class="p-4 md:p-7">
							<h3 class="text-lg font-bold text-gray-800">
								Account Verification
							</h3>
							<ul class="flex flex-col justify-end text-start -space-y-px mt-4">
								<li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
									<div class="w-full flex justify-between truncate">
										<span class="me-3 flex-1 w-0 truncate">
											Account 2
										</span>
										<span class="flex items-center gap-x-2 text-gray-500 whitespace-nowrap">
											Bus operator
										</span>
									</div>
								</li>
								<li class="flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
									<div class="w-full flex justify-between truncate">
										<span class="me-3 flex-1 w-0 truncate">
											Account 1
										</span>
										<span class="flex items-center gap-x-2 text-gray-500 whitespace-nowrap">
											Bus operator
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col bg-white border shadow-sm rounded-xl">
						<div class="p-4 md:p-7">
							<h3 class="text-lg font-bold text-gray-800">Chart here</h3>
							<p class="mt-2 text-gray-500">TBD</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
