const router = require("express").Router(),
	{ cronExpressions } = require("../utils/constants"),
	{ schedule } = require("../utils/schedule");

router.get("/", async (req, res) => {
	try {
		// console.log(cronExpressions);
		return res.json({
			message: "this is the cron routes root",
		});
	} catch (e) {
		return res.status(406).json({
			err: e.message,
		});
	}
});

router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		task = schedule(1, 1, 1, true);
		task.start();
		console.log(task.getStatus());
		// Logic to add this "task" job in a db?

		return res.json({ message: "task started" });
	} catch (e) {
		return res.status(406).json({
			err: e.message,
		});
	}
});

router.get("/stop/:id", async (req, res) => {
	//logic to stop cronjob with id = req.param.id
	//So some sort of db storage will be required
});

module.exports = router;
