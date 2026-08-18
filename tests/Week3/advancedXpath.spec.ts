import {chromium,test} from '@playwright/test';

test('login', async({page})=>{
await page.goto('https://login.salesforce.com/?locale=in')
await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
await page.locator('[value="Log In"]').click()
await page.waitForTimeout(3000)
await page.locator('#password').fill('TestLeaf@2025')
await page.locator('[value="Log In"]').click()
await page.waitForTimeout(3000)
})