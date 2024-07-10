const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleGetAllUrls,
  handleRedirectToUrl
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/", handleGetAllUrls)
router.get("/:shortId", handleRedirectToUrl)
router.get("/analytics/:shortId", handleGetAnalytics);



module.exports = router;
