export const saveItem = (key, value) => {
    chrome?.storage?.local?.set({[key]: value});
}

export const getItem = (key, type = 'string') => {
    return new Promise(resolve => {
        // @ts-ignore
        chrome.storage?.local?.get(key, function (e) {
            console.log(key,e?.[key])
            resolve(e?.[key])
        })
    })

}
export const sendMessageToAllTabs = (message) => {
    const queryInfo = {};
    chrome?.tabs?.query(queryInfo, function (tabs) {
        tabs?.forEach(tab => {
            chrome?.tabs.sendMessage(tab?.id, message).catch(e => {
                console.log(e)
            })
        })
    });
}