// @ts-check
import { test } from '@playwright/test';
import { EndToEnd } from '../tests/Locators_Login/Locators';

test.describe('Swag Labs', () => {

    test('End to End', async ({page}) => {

        const e2e = new EndToEnd(page);
        
        await page.goto('https://www.saucedemo.com/')

        await e2e.login_page('standard_user', 'secret_sauce')
        await e2e.select_dropdown('hilo')
        await e2e.add_to_cart_checkout()
        await e2e.cust_details('Test First Name','Test Last Name','Test Zip')
        await e2e.finish_transact()
        await e2e.logout()

    });

})