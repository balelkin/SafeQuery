# SafeQuery

A Chrome extension that blocks unwanted search queries on Google, Bing, and DuckDuckGo, keeping your search experience clean and safe.

## Description

SafeQuery is designed to filter out searches containing forbidden words or phrases (e.g., vulgarity, drugs, violence) across major search engines. It uses a dynamic list of blocked words, which can be managed via a popup interface, and provides real-time blocking with a warning page.

## Features

- Blocks search queries containing predefined or custom forbidden words.
- Supports multiple languages (Ukrainian, Russian, English).
- User-friendly popup to add or remove blocked words.
- Real-time filtering on Google, Bing, and DuckDuckGo.
- Displays a warning page when a blocked query is detected.

## Tech Stack

- **Manifest Version**: 3
- **Languages**: JavaScript
- **APIs**: Chrome Extensions API (`declarativeNetRequest`, `chrome.storage`, `chrome.runtime`)
- **Tools**: Chrome DevTools for testing

## Installation

### **Via Developer Mode in Google Chrome**

1. **Clone or Download the Repository**
    - Clone this repository to your local machine:
      ```bash
      git clone https://github.com/your-username/SafeQuery.git
      ```
    - Or download the ZIP archive and extract it.

2. **Open Chrome and Navigate to the Extensions Manager**
    - Open Google Chrome.
    - In the address bar, enter:
      ```
      chrome://extensions/
      ```
    - Press **Enter**.

3. **Enable Developer Mode**
    - In the top-right corner, find the toggle switch **"Developer Mode"** and turn it on.

4. **Load the Extension**
    - Click the **"Load unpacked"** button.
    - In the pop-up window, select the folder containing the extension files (the `SafeQuery` folder).
    - Click **OK**.

5. **Done!**
    - Once loaded, the extension will appear in the list of active extensions.
    - You can configure the blocked words list through the popup window.

To update the extension, simply remove it and repeat these steps. 🚀

