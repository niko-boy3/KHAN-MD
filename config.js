const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "JK~H4sIAAAAAAAAA5VUWbOiOBT+L3nVahYBxapbNYgKiAvg7tQ8BAgQZbskbHb536fQvn37YabnDk8hSZ3znW/Jd5BmmCATtWD8HeQFriBF3ZK2OQJjMCmDABWgD3xIIRiDZPZ+nra7qd/burEz1cOT6VkKSuJ2uznKFi/dW77EQiXfbm/g0Qd56cbY+03BijUSKTQdrMlalLeXPNMOVXuyN5PGr9o9M5QnNvGuhDkJb+DRVYS4wGk4yyOUoALGJmotiIuvwTcn3nJKr3MvbitntuYd53YzFnc+pfTsJvfs3Fq+mDgoTuuvwY8Tbe8e7Ggbc044n+hZ/b4XDbvnFWSzukdiY9fybiOFpqK84BMcpsg3fJRSTNsv836eIOXsRgzM+Nps0WAypyPu1DpMi1CFFuJ9rp3CmxmXt/CLwBW55Jp1Mnc80+Pva2kRl0crryvVOTWua9BzWu057rS4178Ct4oPr9z+D+/ZLBN6jl5Gs3e2t5qnin9EMfL3LbMJaXuaYC3j8d03nET5GvzFrpy411i+S3lpHnODk5tUUxy/rbTB4Wqx1o45Gu7pkh7sT/iQlsXvUBJyDZESidB/H9aNfbfrbHlJNEaPec2PteGg3cnO+rhQb1Jz5oZlQzUarw60CO9tWsvLQOPud0MdCi5DAnXbNPPEU5S350Q31Bo+GHOPPihQiAktIMVZ+twbCn0A/WqLvALRJ70gO/SK636+Lg83Z8XMj3puMLekcVG1ETDNh8jjyGIpyN6afQN9kBeZhwhBvo4JzYp2hQiBISJg/OdffZCihr6E69oNuD4IcEHoPi3zOIP+h6ofh9DzsjKl2zb11G6BCjBmP7cRpTgNScdjmcLCi3CF1AhSAsYBjAn6OSEqkA/GtCjRz9Sqmd8Rb+rKejdTddAHyVMQ7IMxkIUhK7A8ywnSWJT/IN/qrirM828poqAP4uctbjiSWH4wkkcSK0rPm93B4yfArp6PKMQxAWOgWtgccsQWL2jXKuezghXlGcbPgT6c8WJe2e+2wlWNRBnySnQpnUXV1PopHF51eZgTok9mNa8YzIBl/6kIGIORYqtSst6om3c2aunZHh3W0dpcxGU1JX4qto63qoNanF7rq8brAucZFyKvlsxI4ZWe2WvXRiS52ey8Ik699FYDa2iq9VvXzUcV9tCvzYpjc2LMwnfxWXQInNnsKHnf7TVndOV3S/FkB+5UwKZlSRduv73NuXof4JwEi8bRmnQf11tWEkOhrL2dgm+20awYMg1fnn1mJv7xVuGnmzqput8Ao2f0U9gJ+J/SvXB3BmMf/V9K/HhL/iWPE3s+Y0ujzlBwpKFxdG9bd+RNOGEjNAyS3OWkdlbrULVkeQ0ej7/6II8hDbIiAWMAU7/IsA/6oMjKzrFGGmS/aaYqoTG1X4PHkFDlMwU7nCBCYZJ3WZU4medZXnjdsoos1yGJOmOaQqQLnaVbJc+3FNKPUAGl+/QEgsffIlRT/nAHAAA=",  // Your bot's session ID (keep it secure)
    XDEV: process.env.XDEV || "niko-boy3",  // Github Username 
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "off", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "94704020146",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "MR NIKO",           // Owner's name
    DEV: process.env.DEV || "94743595243",                     // Developer's contact number
    DEVELOPER_NUMBER: '943595243@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://ibb.co/fV5dgkZS",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
