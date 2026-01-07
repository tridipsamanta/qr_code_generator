# 🚀 QR Code Generator – Futuristic & Feature-Rich

A **modern, futuristic QR Code Generator web app** that allows users to generate, customize, save, and re-download QR codes instantly — all directly in the browser.

Built with **clean HTML, CSS, and JavaScript**, this project focuses on **real-time generation**, **multiple QR types**, **theme customization**, and **local history storage**, while remaining fast and lightweight.

---

## ✨ Features

### 🔹 Core Features
- ⚡ **Instant QR Generation** (updates while typing)
- 📥 **Download QR Codes as PNG**
- 🎨 **Custom QR Colors**
- 📱 **Fully Responsive (Mobile-First)**

### 🔹 QR Types Supported
Generate QR codes for:
- 🌐 Website URLs
- 📝 Plain Text
- 📶 WiFi Networks (SSID, password, security)
- 👤 vCard / Contact Info
- ✉️ Email Addresses
- 📞 Phone Numbers

### 🔹 Themes & UI
- 🎨 **5+ Built-in Futuristic Themes**
- 🌑 Dark & light themes supported
- ✨ Neon / cyber / glow-inspired UI
- 🧠 Theme preference saved automatically

### 🔹 QR History
- 🕘 **QR Code History using localStorage**
- 🔁 Re-use previously generated QR codes
- 📥 Re-download old QR codes instantly
- 🗑️ Clear history anytime

---

## 🖼️ UI Preview

> The UI is designed to feel **futuristic, eye-catching, and unique**, avoiding generic SaaS templates.  
> QR preview acts as the hero element, with a control-panel-style interface.

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (Custom properties, gradients, media queries)
- **Vanilla JavaScript**
- **QR Code Library** (Canvas/SVG based)
- **localStorage** (for history & preferences)

No frameworks. No database. No backend required.

---

## ⚙️ How It Works

### 1️⃣ QR Generation
- User selects a **QR type**
- Relevant input fields appear dynamically
- QR updates automatically on input change

### 2️⃣ Theme System
- Each theme defines:
  - Background
  - Accent color
  - Default QR color
  - Light / dark mode flag
- Active theme is stored in `localStorage`

### 3️⃣ QR Color Logic
- QR background is always **white** for scan reliability
- Dark themes enforce **high-contrast QR colors**
- User-selected colors override theme defaults safely

### 4️⃣ History Storage
Each generated QR is saved with:
```json
{
  "type": "url",
  "data": "https://example.com",
  "color": "#00d9ff",
  "theme": "midnight-black",
  "timestamp": 1700000000000
}

🚀 Getting Started
Run Locally

No build step required.

git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator


Open index.html directly in your browser
OR use a local server:

npx serve

🔮 Future Improvements

🔐 Password-protected QR codes

🖼️ Logo embedding in QR

📤 Export as SVG

☁️ Cloud-synced history

🧩 PWA support

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a new branch

Commit your changes

Open a pull request

📜 License

This project is open-source and available under the MIT License.

⭐ Acknowledgements

Inspired by modern UI experiments, futuristic dashboards, and the idea that utility tools don’t have to look boring.