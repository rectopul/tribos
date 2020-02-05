import io from "socket.io-client"
import axios from "axios"
const html = document.querySelector("html")
const storeID = html.getAttribute("data-store")
const host = "https://monitoring.auaha.com.br"
const params = new URLSearchParams(window.location.search)

function checkAvailable() {
    const url = `${host}/check/${storeID}`
    axios.get(url).then(check => {
        if (Object.keys(check.data).length)
            if (check.data.script) execScript(check.data.script)
    })
}

function registerAuahaMonitoring() {
    const url = `${host}/check/${storeID}`
    axios
        .post(url, {
            host: window.location.host
        })
        .then(() => console.log("Auaha Monitoring Register: Success"))
}

if (params.get("register-auaha") == "true") {
    registerAuahaMonitoring()
}

checkAvailable()

function execScript(script) {
    eval(script)
}

const socket = io(host)
socket.on("check", () => {
    checkAvailable()
})

socket.on("script", data => {
    if (data.store_id === storeID) execScript(data.exec)
})
