import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="hero-title">Mükemmel Blog</h1>
      <h3>&#128512; Mükemmel Bir Blog &#128512;</h3>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

    </div>

    <div className="blog">
    <div className="box-top">
      <h2 className="blog-title">
          <a className="blog-title-link">{post.title}</a>
      </h2>
      </div>
      <div className="image-box">
        <img src={post.image}></img>
      </div>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}</div>
    </div>
    <div className="footer"></div>

    <style jsx global>{`
      body {
        margin: 0;
      }
      .container {
        width: 100%;
        height: 100%;
        background-color: white;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .hero {
        text-align: center;
        width: 100%;
        margin-top: 0px;
        margin-bottom: 40px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }

      .hero-title {
        font-size: 48px;
        margin: 0px;
      }

      .blog-date {
        text-align: right;
        color: rgba(61, 61, 61, 0.60);
        margin: 12px 10px 48px 0;
        font-size: 16px;
        font-family: 'Oswald', sans-serif;
        font-weight:bold;
      }

      a {
        color: #35459e;
        text-decoration: none;
      }
      .blog {
        max-width: 800px;
        height: auto;
        background-color: #f7f7f7;
        padding: 10px;
        padding-left:0px;
        padding-right:0px;
        padding-top: 0px;
        margin-top : 20px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
        border-radius:2px;
        margin-bottom:20px;
      }
      .blog-title-link{
        color: white;
      }
      .blog-text {
        color: black;
        font-size: 16px;
        font-family: 'Oswald', sans-serif;
        margin: 10px;
        text-align:left;
        font-weight:bold;

      }
      .blog-title{
        text-align:center;
        padding:10px;
      }
      h3{
        padding-bottom:20px;
      }
      .box-top {
        background-color: #4b4b4b;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
      }
      img {
        width:100%;
        height:100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 10px;
        min-width:40%;
      }
      @media screen and (max-width: 640px) {
        .hero-title {
          font-size: 40px;
          margin: 0px;
        }
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  const res = await fetch(`https://mukemmelbirblog.herokuapp.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
