router.get("/", async (req, res) => {
	try {
	} catch (e) {
		return res.status(406).json({
			err: e.message,
		});
	}
});
