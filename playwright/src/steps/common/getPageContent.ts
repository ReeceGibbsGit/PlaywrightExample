// step to load a page and return its content
import { Page } from 'playwright'

export default async (page: Page, url: string): Promise<string> => {
    // enter the url and wait for the page to load
    await page.goto(url)
    await page.waitForLoadState('networkidle')
    
    return await page.content()
}