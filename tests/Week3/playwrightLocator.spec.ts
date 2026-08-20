import {chromium,test} from '@playwright/test';

test('login', async({page})=>{
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.getByText('Leaftaps Login').isVisible()
await page.getByLabel('Username').fill('democsr2')
await page.getByLabel('Password').fill('crmsfa')
await page.getByRole('button',{name:'Login'}).click();
await page.waitForLoadState('domcontentloaded')
await page.getByText('CRM/SFA').isVisible()
await page.getByRole('link',{name:'CRM/SFA'}).click();
})