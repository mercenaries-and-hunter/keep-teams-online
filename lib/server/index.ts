import messageWatching from "./MessageWatching";
import { getItem, saveItem } from "./utils";

chrome.runtime.onMessage.addListener(
    messageWatching
);
chrome.runtime.onMessageExternal.addListener(
    messageWatching
);

chrome.runtime.onInstalled.addListener(async () => {
    const thisState = await getItem('flag') ? 'on' : 'off';
    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        text: thisState,
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