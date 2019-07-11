/* eslint-disable strict */
/* jshint -W117 */

'use strict';

// import puppeteer from 'puppeteer';
import fib from './fib.js';

const puppeteer = require('puppeteer');

test('3thd Fibonacci number should be 2', () => {
  // arrange
  const number = 3;
  // act
  const result = fib(number);
  // assert
  expect(result).toBe(2);
});

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    // args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/index.html');
  await page.click('input#operand');
  await page.keyboard.press('Backspace');
  await page.type('input#operand', '6');
  await page.click('button.calc_fact');
  const finalText = await page.$eval('.calc_fact-answer', el => el.textContent);
  expect(finalText).toBe('720');
}, 20000);
