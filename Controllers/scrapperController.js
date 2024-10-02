import { scrapData } from "../Services/puppeteerService.js";

export const fetchScrapedData = async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Keyword is required" });
  }

  try {
    const results = await scrapData(keyword);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
};
