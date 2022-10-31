// step to login to wfm
import { Page } from 'playwright'

export default async (page: Page, email: string, password: string) => {
    try {
        // enter the email address
        await page.locator("[name=Code]").fill(email)
        await page.keyboard.press("Enter")

        // wait and then enter the password
        await page.locator("[name=Password]").fill(password)
        await page.keyboard.press("Enter")
    }
    catch {
        return false
    }

    return true
}