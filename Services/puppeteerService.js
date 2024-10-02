import puppeteer from "puppeteer";

export const scrapData = async (searchKeyword) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();

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

      const price = item.querySelector(".price--3SnqI > span")
        ? item.querySelector(".price--3SnqI > span").innerText
        : "";

    const location = item.querySelector(".description--2-ez3") ? item.querySelector(".description--2-ez3").innerText : "";

    const listingUrl = item.querySelector("a") ? item.querySelector("a").href : "";

    const timePosted = item.querySelector(".updated-time--1DbCk") ? item.querySelector(".updated-time--1DbCk").innerText : "";

      data.push({ title, price,location,listingUrl,timePosted });
    });
    return data;
  });

  await browser.close();
  return items;
};
