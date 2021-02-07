let cron = require("node-cron"),
	{ cronExpressions } = require("./constants"),
	{ spawn } = require("child_process");

const schedule = (day, hour, minutes, recurring) => {
	const cronExpression = cronExpressions.every10Seconds;
	let task = cron.schedule(
		cronExpression,
		() => {
			console.log("running command...");
			const ls = spawn("netstat", ["-a"], { shell: true });
			ls.stdout.on("data", (data) => {
				console.log(`stdout: ${data}`);
			});

			ls.stderr.on("data", (data) => {
				console.error(`stderr: ${data}`);
			});

			ls.on("close", (code) => {
				console.log(`child process exited with code ${code}`);
			});
		},
		{
			scheduled: false,
			timezone: "Asia/Kolkata",
		}
	);

	return task;
};

module.exports = { schedule };
