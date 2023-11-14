import axios from "axios"
import * as base_url from './public_urls'

let result
export const callApi = async (apiObject) => {
    const promise = new Promise((resolve) => {

        let headers = {}

        if (apiObject.state === "login" || apiObject.state === "renewToken") {
            headers = {
                accept: "application/json",
                'Content-Type': 'application/x-www-form-urlencoded',

            }
        } else if (apiObject.state === "form") {
            headers = {
                'Content-Type': 'multipart/form-data',
            }
        } else if (apiObject.state === "auth") {
            headers = {
                'Content-Type': 'application/json',
            }
        } else {
        }

        axios[apiObject.method](`${base_url.FULL_BASE_URL}${apiObject.endPoint}`, apiObject.method !== 'get' && apiObject.method !== 'delete' ? apiObject.body : {headers: headers}, {headers: headers})
            .then(async response => {
                if (response.data.errorCode) {
                    result = await {data: response.data, message: response.data.errorContent, status: 0, success: false}
                } else {
                    result = await {data: response.data, status: 1, success: true}
                }

                resolve(result)
            }).catch(async error => {


            if (error !== undefined) {
                if (error.response === undefined) {
                    result = await {
                        success: false,
                        status: 0,
                        message: "Your connection was interrupted",
                        data: {
                            title: "Your connection was interrupted",
                            detail: "",
                            message: "Your connection was interrupted",
                        }
                    }
                } else if (error.response.status === 401) {


                    let t = error.response.data
                    t.message = error.response.data.message ? error.response.data.message : ""
                    result = await {
                        success: false,
                        status: 401,
                        message: error.response.data.message ? error.response.data.message : "",
                        data: t
                    }

                } else {
                    let t = error.response.data
                    t.message = error.response.data.message ? error.response.data.message : ""
                    result = await {
                        success: false,
                        status: 0,
                        message: error.response.data.message ? error.response.data.message : "",
                        data: t
                    }
                }
            } else {
                result = await {
                    success: false,
                    status: 2,
                    message: "Your connection was interrupted!",
                    data: {
                        title: "Your connection was interrupted!",
                        detail: "",
                        message: "Your connection was interrupted!",
                    }
                }
            }
            resolve(result)
        })
    })
    return await promise
}
