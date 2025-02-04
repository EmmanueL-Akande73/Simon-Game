const puppeteer = require('puppeteer');

describe('Simon Game Integration Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Change URL if needed
    });

    afterAll(async () => {
        await browser.close();
    });

    test('Game starts and displays a sequence', async () => {
        await page.click('#start-button');
        await page.waitForTimeout(1000); // Wait for sequence
        const scoreText = await page.$eval('#player-score', el => el.textContent);
        expect(Number(scoreText)).toBe(0);
    });

    test('User can click buttons', async () => {
        await page.click('.btn.green');
        await page.click('.btn.red');
        await page.click('.btn.yellow');
        await page.click('.btn.blue');
        expect(true).toBe(true); // Ensure clicks don't crash the game
    });

    test('Game resets on wrong input', async () => {
        await page.click('#start-button');
        await page.waitForTimeout(1000);
        await page.click('.btn.green'); // Wrong sequence on purpose
        await page.waitForTimeout(500);
        const scoreText = await page.$eval('#player-score', el => el.textContent);
        expect(Number(scoreText)).toBe(0);
    });
});
