/*
 * @Author: lanjing
 * @Date: 2022-08-29 17:34:57
 * @LastEditors: lanjing
 * @Description: file content
 */

export default {
    "/sub1/": {
        "target": "http://localhost:3001",
        "rewrite": url => url.replace(/^\/sub1/, ""),
    }
}