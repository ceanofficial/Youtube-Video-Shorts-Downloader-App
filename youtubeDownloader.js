/*
DISCLAIMER:
Downloading YouTube videos might violate YouTube's Terms of Service.
Use this code responsibly and ensure you have the rights to download the video content.
*/

const readline = require('readline');
const youtubedl = require('youtube-dl-exec');

async function promptAndDownload() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (query) => new Promise(resolve => rl.question(query, resolve));

  while (true) {
    const url = await question('Enter a YouTube video URL (or type "exit" to quit): ');
    if (!url || url.trim().toLowerCase() === 'exit') {
      console.log('Goodbye!');
      break;
    }

    try {
      console.log(`\nRetrieving info for ${url}…`);
      // First get metadata (including title)
      const info = await youtubedl(url, {
        dumpSingleJson: true,
        noWarnings: true,
        noCheckCertificate: true,
        preferFreeFormats: true,
      });

      // Sanitize title for a filename
      let title = info.title || 'video';
      let safeTitle = title.replace(/[/\\?%*:|"<>]/g, '-').trim() || 'video';
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const outputFileName = `${safeTitle}-${timestamp}.mp4`;

      console.log(`Downloading as "${outputFileName}"…`);
      await youtubedl(url, {
        output: outputFileName,
        format: 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/mp4',
        mergeOutputFormat: 'mp4',
        // adjust this path to where your FFmpeg binary lives
        ffmpegLocation: 'C:\\ffmpeg\\ffmpeg-master-latest-win64-gpl-shared\\bin'
      });

      console.log(`✅ Download complete: ${outputFileName}\n`);
    } catch (err) {
      console.error(`❌ Error downloading video: ${err.message}\n`);
    }
  }

  rl.close();
}

promptAndDownload();
