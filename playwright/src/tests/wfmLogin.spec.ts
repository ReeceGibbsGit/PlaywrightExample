// test method to signin to the workflow max website
import endpoint from "./configTypes"
import { test, expect } from "@playwright/test"

import getPageContent from "../steps/common/getPageContent"
import wfmLogin from "../steps/wfm/wfmLogin"

test("Submit WorkflowMax Timesheet", async ({ page }) => {
    // load wfm login page and get content
    const pageContent = await getPageContent(page, endpoint.WFM_LOGIN_URL)

    // check that the page navigation has succeeded
    expect(pageContent).toContain("WorkflowMax")

    // login to the wfm website
    const result = await wfmLogin(page, "", "")

    // check for successful login
    expect(result).toBeTruthy()
})