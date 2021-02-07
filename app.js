const express = require("express"),
	cronRoutes = require("./routes/cronRoutes");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
	res.json({
		message: "running",
		path: "/",
	});
});

app.get("/home", (req, res) => {
	res.json({
		message: "home page",
		rootPath: "/",
	});
});

app.use("/api/cron", cronRoutes);

app.listen(3000, () => {
	console.log("server started on post 3000");
});
