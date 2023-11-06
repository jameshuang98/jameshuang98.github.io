import React from "react";
import "./ArticleCard.scss";

export default function ArticleCard({article, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div onClick={() => openUrlInNewTab(article.url, article.title)}>
      <div className={isDark ? "article-container dark-mode" : "article-container"}>
        <a
          className={
            isDark ? "dark-mode article-card article-card-dark" : "article-card"
          }
          href="#article"
        >
          <h3 className={isDark ? "text-dark article-title" : "article-title"}>
            {article.title}
          </h3>
          <p className={isDark ? "text-dark article-description" : "article-description"}>
            {article.description}
          </p>
        </a>
      </div>
    </div>
  );
}
