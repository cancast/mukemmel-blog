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
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>

        <div className="hero">
          <h1 className="hero-title">Mukemmel Blog</h1>
          <h3>&#128512; Mukemmel Bir Blog &#128512;</h3>
        </div>

        {posts.map(post => (
          <div className="blog">
          <div className="box-top">
            <h2 className="blog-title">
              <Link href={post.slug}>
                <a className="blog-title-link">{post.title}</a>
              </Link>
            </h2>
          </div>
          <div className="image-box">
            <img src={post.image}></img>
          </div>
            <div className="blog-text">
              <ReactMarkdown source={post.shorttext} /><a>...</a>
            </div>
            <Link href={post.slug}><div className="readmore"><a className="readmoretext">Read More</a></div></Link>
            <div className="blog-date">{post.date}</div>
          </div>
        ))}
        <div className="footer">
          <div className="sag">
            <h3 className="text-link">Quick Links</h3>
            {posts.map(post => (
            <div>
            <Link href={post.slug}>
              <p href="" className="text-link2">{post.title}</p>
            </Link>
            </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          body {
            margin: 0;
            background-color: #3d3d3d;
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

          .social-link {
            margin-right: 8px;
          }

          .hero-title {
            font-size: 48px;
            margin: 0px;
          }

          .blog-date {
            text-align: right;
            color: #54534f;
            margin: 12px 10px 48px 0;
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
          }
          .blog-title-link{
            color: #ecf0f1;
          }
          .blog-text {
            color: black;
            font-size: 16px;
            font-family: 'Oswald', sans-serif;
            margin: 10px;
            text-align:left;
            font-weight:bold;

          }
          .box-top{
            width:100%;
            height:50px;
            min-height:60px;
            background-color:#524c4c;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
          }
          .page{
            width: 1000px;
            height: 100%;
            background-color: gray ;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .blog-title{
            text-align:center;
            padding:20px;
          }
          h3{
            padding-bottom:20px;
          }
          .footer{
            width:100%;
            height:200px;
            background-color:#4b4b4b;
            margin-top:20px;
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
          .sag {
            width:100%;
            height: auto;
          }
          .text-link {
            text-align:center;
            color: white;
            padding-top:15px;
            font-size:20px;
            margin:0px;
          }
          .text-link2 {
            text-align:center;
            color: white;
            font-size: 15px;
            margin:0px;
            margin-top:5px;
            margin-bottom: 20px;
            -webkit-transition: font 0.5s;
          }.readmore{
            margin-left:20px;
            margin-top:20px;
            background-color:#524c4c;
            width:30%;
            height:20px;
            padding-top:10px;
            border-radius:0px;
            padding-bottom:15px;
            box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.2);
            -webkit-transition: margin 0.5s;

          }
          .readmoretext{
            margin-left:30%;
            font-size:20px;
            font-weight:bold;
            color:white;
            margin-right:20%;
          }
          @media screen and (max-width: 640px) {
            .readmoretext {
              font-size:20px;
              margin-left:10%;
              margin-right:10%;
            }
          }
          .text-link2:hover {
            font-weight:bold;
            color: gray;
          }
          .readmore:hover{
            background-color:#796b6b;
            margin-left:40px;
          }


        `}</style>
      </div>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch("https://mukemmelbirblog.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
