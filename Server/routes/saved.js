const express = require("express")
const router = express.Router()
const { savedRoutes, getSaved, deleteSaved } = require ("../controllers/savedController")
const { protect } = require("../middleware/authMiddleware")


router.post("/", protect, savedRoutes)
router.get("/", protect, getSaved)
router.delete("/:id", protect, deleteSaved)


module.exports = router