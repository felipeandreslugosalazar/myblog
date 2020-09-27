// 4.1 we will use the  build-in fetch api to connect FE and BE
import React, { useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList";
import CommentsList from "../components/CommentsList";

import NotFoundPage from "./NotFoundPage";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  // 4.2 Use state to track and storage temporary info from the backend
  const [articleInfo, setarticleInfo] = useState({ upvotes: 0, comments: [] });

  // here we create an anomymus function that will be call anytime a component is loaded
  // also updates everytime
  // USE EFFECT HOOK !!!
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setarticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <>
      <h1>{article.title}</h1>
      {/* 4.2  UseEffect*/}
      <p>This post has been upvoted {articleInfo.upvotes} times.</p>
      {/* 4.3 create a element to show how many votes an article has */}
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <h3>Other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
