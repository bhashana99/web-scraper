import express from 'express';
import {fetchScrapedData} from '../Controllers/scrapperController.js';


const router = express.Router();

router.get("/search",fetchScrapedData);

export default router;
