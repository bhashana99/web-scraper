import puppeteer from "puppeteer";

export const scrapData = async (searchKeyword) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();

  // Navigate the page to a URL.
  await page.goto(`https://ikman.lk/en/ads?query=${searchKeyword}`);

  // Wait for the listings to load
  await page.waitForSelector(".list--3NxGO");

  const items = await page.evaluate(() => {
    const data = [];
    const itemList = document.querySelectorAll(".list--3NxGO > li");

    itemList.forEach((item) => {
      const title = item.querySelector(".heading--2eONR")
        ? item.querySelector(".heading--2eONR").innerText
        : "";

      data.push({ title });
    });
    return data;
  });


  await browser.close();
  return items;
};
