import { test } from "@playwright/test";
import convertingDates, { returnTime, alreadySigned } from "../utils/functions";
require("dotenv").config();

test("Auto Sign Process", async ({ page }) => {
  //
  // Auto Sign Process
  //

  // Launch website
  await page.goto(process.env.USER_WEB_URL);

  // Type credentials into fields form
  await page
    .getByRole("textbox", { name: "Email ou n° de téléphone" })
    .fill(process.env.USER_EMAIL);
  await page
    .getByRole("textbox", { name: "Code pin" })
    .fill(process.env.USER_PIN_CODE);

  // Click button to authenticate user
  await page.getByRole("button", { name: "Se connecter" }).click();

  // Redirect to timesheet
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Feuille de présence" })
    .click();

  //
  // Signature Process
  //

  // 1- Retrieving the current date (today)
  const date = new Date();
  const today = convertingDates(date);

  // 2- Recovery period (am ou pm)
  const period = returnTime(date);

  // 3- Retrieving the date in EN format from the timesheet
  const splittedTodayDate = today.split("/");

  // 4- Creating a selector for today's date
  const daySelector = `\\3${splittedTodayDate[0].split("")[0]} ${
    splittedTodayDate[0].split("")[1]
  }\\/${splittedTodayDate[1]}\\/${splittedTodayDate[2]}${period}`;

  // 6- Signature recovery
  const sign = await page.locator(`[id=${daySelector}]`).getAttribute("src");

  // 7- Checking if the date is present
  const isDatePresent = page.locator("a", {
    has: page.locator(`[id=${daySelector}]`),
  })
    ? true
    : false;

  // 8- Verification that it is signed
  const isSigned = alreadySigned(sign);

  // Start of the signing process
  if (!isSigned && isDatePresent) {
    await page
      .locator("a", { has: page.locator(`[id=${daySelector}]`) })
      .click();
  } else {
    console.log("Timesheet Already signed !");
  }
});
