import messageWatching from "./MessageWatching";
import { getItem, saveItem } from "./utils";

chrome.runtime.onMessage.addListener(
    messageWatching
);
chrome.runtime.onMessageExternal.addListener(
    messageWatching
);

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "",
    });
});


chrome.action?.onClicked.addListener(async () => {
    const nextState = await getItem('flag') ? 'off':'on';
    saveItem('flag',!await getItem('flag'));
    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        text: nextState,
    });
});