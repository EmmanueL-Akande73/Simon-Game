const puppeteer = require('puppeteer');

describe('Simon Says Game Integration Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: true }); // Run in headless mode
        page = await browser.newPage();
        await page.goto('http://localhost:5500'); // Change to your actual file/server URL
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Game starts and generates a sequence', async () => {
        await page.click('#start-button'); // Click start
        await page.waitForTimeout(1000); // Wait for sequence to play

        const score = await page.$eval('#player-score', el => el.textContent);
        expect(parseInt(score)).toBe(0); // Level 1 means Score = 0
    });

    test('User follows sequence correctly and progresses', async () => {
        const firstColor = await page.evaluate(() => sequence[0]); // Get first color

        await page.click(`.${firstColor}`); // Simulate correct user click
        await page.waitForTimeout(1000); // Wait for next round

        const newScore = await page.$eval('#player-score', el => el.textContent);
        expect(parseInt(newScore)).toBe(1); // Level 2 means Score = 1
    });

    test('Game over on incorrect input', async () => {
        await page.click('.red'); // Click wrong button intentionally
        await page.waitForTimeout(500);

        const scoreAfterFail = await page.$eval('#player-score', el => el.textContent);
        expect(parseInt(scoreAfterFail)).toBe(0); // Score resets to 0
    });
});
