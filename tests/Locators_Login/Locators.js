import { expect } from '@playwright/test';
export class EndToEnd {

    constructor(page) {

        this.page = page

        //Login Page
        this.login_username = page.locator('[name=user-name]')
        this.login_password = page.locator('[name=password]')
        this.click_submit = page.locator('[name=login-button]')

        //Dropdown and Select Value
        this.select_dvalue = page.locator('[data-test=product-sort-container]')
        
        //Add to Cart and Checkout
        this.item_add_to_cart = page.locator('[name=add-to-cart-sauce-labs-fleece-jacket]')  
        this.cart_icon = page.locator('[data-test=shopping-cart-link]')
        this.click_checkout = page.locator('[name=checkout]')

        //Enter Customer Details
        this.customer_first_name = page.locator('xpath=//*[@id="first-name"]')
        this.customer_last_name = page.locator('xpath=//*[@id="last-name"]')
        this.customer_zip_code = page.locator('xpath=//*[@id="postal-code"]')
        this.cust_continue_button = page.locator('[name=continue]')

        //Click Finish and Validate
        this.finish_button = page.locator('xpath=//*[@id="finish"]')
        this.transact_image_validate = page.locator('xpath=//*[@id="checkout_complete_container"]/h2')
        this.button_back_home = page.locator('xpath=//*[@id="back-to-products"]')

        //Logout
        this.logout_side_menu = page.locator('xpath=//*[@id="react-burger-menu-btn"]')
        this.logout_confirm = page.locator('xpath=//*[@id="logout_sidebar_link"]')

    }

    async login_page(username, password) {
        await this.login_username.fill(username)
        await this.login_password.fill(password)
        await this.click_submit.click()
    }

    async select_dropdown(value) {
        await this.select_dvalue.selectOption(value)
    }

    async add_to_cart_checkout() {
        await this.item_add_to_cart.click()
        await this.cart_icon.click()
        await this.click_checkout.click()
    }

    async cust_details(customer_first_name, customer_last_name, customer_zip_code) {
        await this.customer_first_name.fill(customer_first_name)
        await this.customer_last_name.fill(customer_last_name)
        await this.customer_zip_code.fill(customer_zip_code)
        await this.cust_continue_button.click()
    }

    async finish_transact() {
        await this.finish_button.click()
        await expect (this.transact_image_validate).toBeVisible()
        await this.button_back_home.click()
    }

    async logout() {
        await this.logout_side_menu.click()
        await this.logout_confirm.click()
    }

}