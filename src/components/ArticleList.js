import React from "react";
import Article from "./Article";
import blogData from "../data/blog";
function ArticleList(){
    const renderedArticles = blogData.posts.map((data) => (
<Article 
    key={data.id} 
    title={data.title} 
    date={data.date} 
    preview={data.preview} 
    minutes={data.minutes}
    />
    ));
return (
    <main>
        {renderedArticles}
    </main>
)

}
export default ArticleList;