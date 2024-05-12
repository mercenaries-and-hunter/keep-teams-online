import { getItem, sendMessageToAllTabs } from "./utils";


function messageWatching (request, sender, sendResponse) {
    if (request.args === "on") {
        sendMessageToAllTabs({
            type:'on'
        })
        sendResponse({
            data: true
        })
        return
    }
    if (request.args === "off") {
        sendMessageToAllTabs({
            type:'off'
        })
        sendResponse({
            data: false
        })
        return
    }
    if (request.args === "get-config") {
        getItem('flag').then((e)=>{
            sendResponse({
                flag:e
            })
        })
        return true
    }
    return true
}

export default messageWatching