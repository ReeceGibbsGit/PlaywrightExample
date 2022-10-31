// config file to define the global variables we will be using to run our tests
import { Browser, Page } from "playwright"

import * as fs from "fs"
import * as toml from "toml"
const config = toml.parse(fs.readFileSync("./config.toml", "utf-8"))

declare global {
    const page: Page;
    const browser: Browser;
    const browserName: string;
}

export default {
    WFM_LOGIN_URL: config.wfm_login_url ?? ""
}