const router = require('express').Router();
const apiRooutes = require("./api")

router.use("/api", apiRooutes)







module.exports = router;