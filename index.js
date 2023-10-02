const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
require('dotenv').config();

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto("https://shopee.com.my/");

  await page.fill('input[name="loginKey"]', process.env.EMAIL);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button[type="submit"]');

  await browser.close();
}

main();
