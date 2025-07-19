# 🎬 YouTube Video Downloader CLI

A simple command-line tool to download YouTube videos one by one. Just paste a link and the video will be saved with a sanitized filename.

> ⚠️ **Disclaimer**  
> Downloading videos from YouTube may violate their Terms of Service. Use this tool only for content you own or have permission to download.

---

## 💡 Features

- CLI prompt for YouTube video links
- Automatic title-based filename generation
- Clean naming (invalid characters stripped)
- MP4 download via `youtube-dl-exec`
- Uses FFmpeg to merge best video and audio

---

## 🔧 Requirements

- Node.js (v14+)
- FFmpeg installed and path configured  
  > Adjust `ffmpegLocation` in `index.js` if needed

---

## 🚀 Installation

```bash
git clone https://github.com/yourusername/youtube-video-downloader-cli.git
cd youtube-video-downloader-cli
npm install
