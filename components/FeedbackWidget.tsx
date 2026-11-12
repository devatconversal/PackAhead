"use client";

import Script from "next/script";

const EMBED_KEY = "cfe_39415fd278376154b442019fe8f13056120a84b9bab27a6a";

type ConversalFeedbackApi = {
  init: (options: { embedKey: string }) => void;
  get?: () => unknown;
};

declare global {
  interface Window {
    ConversalFeedback?: ConversalFeedbackApi;
    __conversalFeedbackStarted?: boolean;
  }
}

/**
 * Conversal feedback widget (lets the client leave feedback on the site).
 *
 * The widget is started from the script's own onLoad. It used to wait for
 * the page's "load" event, but on fast static pages (e.g. on Vercel) that
 * event has already fired before the code runs, so the widget never started.
 */
export default function FeedbackWidget() {
  return (
    <Script
      src="https://feedback.conversal.io/widget.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (window.__conversalFeedbackStarted || !window.ConversalFeedback) return;
        window.__conversalFeedbackStarted = true;
        window.ConversalFeedback.init({ embedKey: EMBED_KEY });
      }}
    />
  );
}
