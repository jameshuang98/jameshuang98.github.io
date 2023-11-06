import React, { useContext } from "react";
import "./Articles.scss";
import ArticleCard from "../../components/articleCard/ArticleCard";
import { articleSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function Articles() {
  const { isDark } = useContext(StyleContext);

  return (
    <>
      {
        articleSection.display === true &&
        <div className="main" id="articles">
          <div className="article-header">
            <h1 className="article-header-text">{articleSection.title}</h1>
            {/* <p
              className={
                isDark ? "dark-mode article-subtitle" : "subTitle article-subtitle"
              }
            >
              {articleSection.subtitle}
            </p> */}
          </div>
          <div className="article-main-div">
            <div className="article-text-div">
              {articleSection.articles.map((article, i) => {
                return (
                  <ArticleCard
                    key={i}
                    isDark={isDark}
                    article={{
                      url: article.url,
                      image: article.image,
                      title: article.title,
                      description: article.description
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      }
    </>
  );
}