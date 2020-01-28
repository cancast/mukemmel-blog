import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Home = ({ posts }) => (

      <div className="container">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="hero">
          <h1 className="hero-title">Mukemmel Blog</h1>
          <p>&#128512; Mukemmel Bir Blog &#128512;</p>

        </div>

        {posts.map(post => (
          <div className="blog">
            <h2 className="blog-title">
              <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
              </Link>
            </h2>
            <div className="blog-text">
              <ReactMarkdown source={post.details} />
            </div>
            <div className="blog-date">{post.date}</div>
          </div>
        ))}

        <style jsx>{`
          .container {
            max-width: auto;
            width: 100%;
            margin-top: 0;
          }

          .hero {
            text-align: center;
            width: 100%;
            margin-top: 0px;
          }

          .social-link {
            margin-right: 8px;
          }

          .hero-title {
            font-size: 48px;
          }

          .blog-date {
            text-align: right;
            color: #cccccc;
            margin: 12px 0 48px 0;
          }

          a {
            color: #35459e;
            text-decoration: none;
          }
          .blog {
            max-width: 800px;
            height: auto;
            background-color: #27ae60;
            padding: 10px;
            padding-left:15px;
            padding-right:15px;
            margin-top : 20px;
            border-radius: 10px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .blog-title-link{
            color: #ecf0f1;
          }
          .blog-text {
            color: black;
            font-size: 16px;
            font-family: 'Oswald', sans-serif;
            font-size:large;

          }
          p{
            color: #4b4b4b;
            font-size: 16px;
            font-family: 'Oswald', sans-serif;
            font-size:large;
            font-weight:bold;
            text-align:center;
          }
        `}</style>
      </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
