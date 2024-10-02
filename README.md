# Web Scraper with Puppeteer and Express

This project is a simple web scraper built using Puppeteer, designed to scrape listings from [ikman.lk](https://ikman.lk) based on a search keyword. It collects details like the title, price, time posted,location and URL of each listing and serves the scraped data via an Express.js API.

## Features

- Scrapes listing title, price, location, time posted and URL.
- Simple Express API.

## Prerequisites

- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

## Installation

1. **Clone the repo**:
   ```bash
   git clone https://github.com/bhashana99/web-scraper.git
   cd web-scraper
   
2. **Install dependencies:**:
   ```bash
   npm install

## Running the Scraper Locally

1. **Start the Express server**:
     ```bash
     npm start
The server will run on http://localhost:3000

## Testing the API

You can test the API using tools like Postman or directly in the browser.

1. **Using Postman**:
- Open Postman and create a new GET request
- Set the request URL to:
   ```bash
   http://localhost:3000/search?keyword=iphone
   
2. **Using Browser:**:
   You can also test the API directly in your browser by visiting:
   ```bash
   http://localhost:3000/search?keyword=iphone

You will get a response like:
```bash
[{
        "title": "Apple iPhone 13 Pro Max (Used)",
        "price": "Rs 195,000",
        "location": "Trincomalee, Mobile Phones",
        "listingUrl": "https://ikman.lk/en/ad/apple-iphone-13-pro-max-used-for-sale-trincomalee-265",
        "datePosted": "17 minutes"
    },
    {
        "title": "Apple iPhone 14 128GB (Used)",
        "price": "Rs 153,000",
        "location": "Colombo, Mobile Phones",
        "listingUrl": "https://ikman.lk/en/ad/apple-iphone-14-128-87-percent-used-for-sale-colombo",
        "datePosted": "17 minutes"
    },..
]
   
