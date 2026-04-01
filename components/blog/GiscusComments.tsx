"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <div className="mt-12 pt-10 border-t border-border/40">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground-subtle mb-6">
        Comments
      </h3>
      {/*
        To activate comments:
        1. Enable GitHub Discussions on your repo (Settings → Features → Discussions)
        2. Install Giscus app: https://github.com/apps/giscus
        3. Go to https://giscus.app, select your repo, and copy the repoId + categoryId below
      */}
      <Giscus
        repo="Nchotie-cliford/nchotie_portfolio"
        repoId="REPLACE_WITH_REPO_ID"
        category="General"
        categoryId="REPLACE_WITH_CATEGORY_ID"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark_dimmed"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
