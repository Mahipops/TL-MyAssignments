import {chromium,test,expect} from '@playwright/test';

test('Playwright  assertions',async({page})=>{

    await page.goto('https://leafground.com/input.xhtml')

    console.log(await page.title());
    console.log(page.url());
    
    //retry assertion (for locators and page)
    await expect(page).toHaveURL('https://leafground.com/input.xhtml')
    
    //soft assertion - continues to execute next line of code
    await expect.soft(page.getByPlaceholder('Disabled')).toBeDisabled({timeout:8000})
    
    const username=page.getByPlaceholder('Babu Manickam')
    await expect.soft(username).toBeEditable()

    await page.getByPlaceholder('Babu Manickam').fill('Maha')
  
    // const abturself = page.getByPlaceholder('About yourself')
    // await expect(abturself).toBeDisabled()
    
    await page.locator('[id="j_idt88:j_idt95"]').clear();
await page.locator('[id="j_idt88:j_idt95"]').fill('playwright learning');

    console.log('Asertion completed successfully');
})
