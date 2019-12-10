import React from "react";
import "../styles/HomePage.css";

const Article = ({ title, title2, text, img, path, pathName, alt }) => {
  return (
    <div className="article">
      <article>
        <h3
          style={{
            marginBottom: 3,
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}
        >
          {title}
        </h3>
        <h1>
          {title2}
        </h1>
        <p style={{ fontSize: 20 }}>{text}</p>
        <a href={path}>{pathName}</a>
      </article>
      <img src={img} alt={alt} />
    </div>
  );
};

export default Article;
