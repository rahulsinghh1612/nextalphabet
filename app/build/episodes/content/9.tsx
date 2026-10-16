import { EpisodeResourceLink, PromptBlock } from "@/components/episode-ui";

export default function Episode9() {
  return (
    <div className="space-y-10 text-[15px] leading-7">
      <section>
        <div className="space-y-4 text-muted-foreground">
          <p>yt-dlp is a free tool that can save videos from YouTube and many other supported websites to your computer.</p>
          <p>You type a short instruction into Terminal on a Mac or PowerShell on Windows. The tool then finds the video and downloads it for you.</p>
          <p>The first setup takes a few minutes. After that, you only need the video link.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">What gets installed?</h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="font-semibold text-foreground">yt-dlp</strong> downloads the video.</p>
          <p><strong className="font-semibold text-foreground">FFmpeg</strong> joins the best video and audio together and can create MP3 files.</p>
          <p><strong className="font-semibold text-foreground">Deno</strong> helps yt-dlp work properly with YouTube.</p>
          <p>You install these once. You do not need to understand how they work internally.</p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Set it up on a Mac</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Press <strong className="font-semibold text-foreground">Command + Space</strong>, type <strong className="font-semibold text-foreground">Terminal</strong>, and open it.</p>
          <p>Copy the command below, paste it into Terminal, and press Return:</p>
        </div>
        <div className="mt-5">
          <PromptBlock>{`brew install yt-dlp ffmpeg deno`}</PromptBlock>
        </div>
        <p className="mt-4 text-muted-foreground">Wait until the command finishes. If your Mac says <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">brew: command not found</code>, install Homebrew from its official website first, then run the command again.</p>
        <div className="mt-5">
          <EpisodeResourceLink href="https://brew.sh/" title="Install Homebrew" context="Only needed when brew is not available" />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Set it up on Windows</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Open the Start menu, type <strong className="font-semibold text-foreground">PowerShell</strong>, and open it.</p>
          <p>Copy and run these three commands one at a time. Press Enter after each command and wait for it to finish before running the next one.</p>
        </div>
        <div className="mt-5">
          <PromptBlock>{`winget install yt-dlp

winget install Gyan.FFmpeg

winget install DenoLand.Deno`}</PromptBlock>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Download your first video</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>Open the video in your browser and copy its web address.</p>
          <p>Replace <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">VIDEO_URL</code> in the command below with that address. Keep the quotation marks.</p>
        </div>

        <h3 className="mb-3 mt-6 font-semibold text-foreground">Mac — save it in Downloads</h3>
        <PromptBlock>{`yt-dlp -P ~/Downloads "VIDEO_URL"`}</PromptBlock>

        <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows — save it in Downloads</h3>
        <PromptBlock>{`yt-dlp -P "$HOME/Downloads" "VIDEO_URL"`}</PromptBlock>

        <p className="mt-4 text-muted-foreground">Press Return or Enter. yt-dlp will download the best quality it can find and place the finished file in your Downloads folder.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Download a playlist</h2>
        <p className="mb-5 text-muted-foreground">Paste a playlist address instead of a single video address. yt-dlp will try to download every video in that playlist.</p>

        <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
        <PromptBlock>{`yt-dlp -P ~/Downloads "PLAYLIST_URL"`}</PromptBlock>

        <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
        <PromptBlock>{`yt-dlp -P "$HOME/Downloads" "PLAYLIST_URL"`}</PromptBlock>

        <p className="mt-4 text-muted-foreground">Large playlists can take a long time and use a lot of storage, so check the playlist before starting.</p>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Download only the audio</h2>
        <p className="mb-5 text-muted-foreground">Use this when you want an MP3 file instead of a video.</p>

        <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
        <PromptBlock>{`yt-dlp -P ~/Downloads -x --audio-format mp3 "VIDEO_URL"`}</PromptBlock>

        <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
        <PromptBlock>{`yt-dlp -P "$HOME/Downloads" -x --audio-format mp3 "VIDEO_URL"`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Use it with Claude Code</h2>
        <p className="mb-5 text-muted-foreground">If Claude Code is already open on your computer, you can describe what you want in normal language. Claude can prepare the command and ask for permission before running it.</p>
        <PromptBlock>{`Download this video using yt-dlp and save it in my Downloads folder.

VIDEO_URL`}</PromptBlock>

        <div className="mt-6">
          <PromptBlock>{`Download this entire playlist using yt-dlp.

Save it in a new folder inside my Downloads folder.

PLAYLIST_URL`}</PromptBlock>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">If it stops working</h2>
        <p className="mb-5 text-muted-foreground">Websites change over time, so an older version of yt-dlp may stop working. Updating it often fixes the problem.</p>

        <h3 className="mb-3 font-semibold text-foreground">Mac</h3>
        <PromptBlock>{`brew upgrade yt-dlp`}</PromptBlock>

        <h3 className="mb-3 mt-6 font-semibold text-foreground">Windows</h3>
        <PromptBlock>{`winget upgrade yt-dlp`}</PromptBlock>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Remember these four steps</h2>
        <div className="space-y-4 text-muted-foreground">
          <p><strong className="font-semibold text-foreground">1.</strong> Install the three tools once.</p>
          <p><strong className="font-semibold text-foreground">2.</strong> Copy the video address.</p>
          <p><strong className="font-semibold text-foreground">3.</strong> Put that address where the command says <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">VIDEO_URL</code>.</p>
          <p><strong className="font-semibold text-foreground">4.</strong> Run the command and look in your Downloads folder.</p>
        </div>
      </section>

      <section className="border-t border-border pt-8">
        <p className="text-sm leading-6 text-muted-foreground">Only download content you own, content that is licensed for download, or content you have permission to save. Follow the website&apos;s terms and the laws that apply to you.</p>
        <div className="mt-5 space-y-1">
          <EpisodeResourceLink href="https://github.com/yt-dlp/yt-dlp" title="yt-dlp" context="Official repository and documentation" />
          <EpisodeResourceLink href="https://github.com/yt-dlp/yt-dlp/wiki/EJS" title="YouTube JavaScript support" context="Official yt-dlp guide" />
        </div>
      </section>
    </div>
  );
}
