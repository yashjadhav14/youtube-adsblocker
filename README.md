# 🚀 YouTube Ad Blocker Chrome Extension  
A simple Chrome extension that blocks YouTube ads, including video ads, banner ads, and pop-ups.

## 📌 Features  
✅ Blocks YouTube video ads (pre-roll, mid-roll, and post-roll)  
✅ Hides banner ads and pop-ups on YouTube  
✅ Lightweight and fast  
✅ Open-source and free to use  

---

## 📥 Installation Guide  

### **1️⃣ Download the Extension**  
1. Click on the **Code** button in this repository.  
2. Select **Download ZIP** and extract the files on your computer.  

### **2️⃣ Load the Extension in Chrome**  
1. Open **Google Chrome**.  
2. Type `chrome://extensions/` in the address bar and press **Enter**.  
3. Enable **Developer Mode** (top-right corner).  
4. Click **"Load unpacked"** and select the extracted folder.  
5. The extension will be installed and activated! 🎉  

---

## 📂 Files and Explanation  

| File Name           | Description |
|---------------------|-------------|
| `manifest.json`    | Defines extension metadata, permissions, and scripts. |
| `background.js`    | Handles ad-blocking logic in the background. |
| `content.js`       | Injects script to modify the YouTube page and remove ads. |
| `styles.css`       | (Optional) Custom CSS for UI tweaks (if needed). |
| `icon.png`         | Extension icon displayed in the Chrome toolbar. |

---

## 🛠️ How It Works  
This extension uses JavaScript to detect and block YouTube ad elements before they load.  
- **`content.js`** modifies the YouTube DOM to remove ads.  
- **`background.js`** listens for network requests and blocks known ad URLs.  

---

## 🔄 Updating the Extension  
If YouTube changes its ad system, follow these steps to update the extension:  
1. Open `background.js` and `content.js` to check for changes in YouTube's ad structure.  
2. Modify the scripts to target new ad elements.  
3. Reload the extension in `chrome://extensions/`.  
4. Test on YouTube to ensure ads are blocked successfully.  

---

## ⚠️ Disclaimer  
This extension is for educational purposes only.  
It is not affiliated with, endorsed by, or officially connected to YouTube or Google.  

---

## 📢 Contribute  
If you find any issues or have improvements, feel free to submit a pull request!  

📌 **Created by [Your Name](https://github.com/YOUR_GITHUB_USERNAME)**  
