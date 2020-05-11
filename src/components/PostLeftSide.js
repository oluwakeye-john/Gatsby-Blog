import React from "react";
import { Link } from "gatsby";

export default ({post, previous, next, author}) => (
    <div className="position-fixed" style={{width: "200px"}}>
        <div className="container-fluid" >
            <br />
            <h4 className="text-center">{post.frontmatter.title}</h4>
            <hr /><br />
            <p className="text-left">Date: {post.frontmatter.date}</p>
            <p className="text-left">{post.timeToRead} min read</p>
            <p className="text-left">By {post.frontmatter.author || author.name}</p>

            <hr /><br />

            {
                (previous || next)
                &&
                <h4>Related</h4>
            }
            {previous && (
                <div>
                    <Link to={previous.fields.slug} rel="prev" className="text-dark">
                        ← {previous.frontmatter.title}
                    </Link>
                    <br />
                </div>
            )}
            {next && (
                <Link to={next.fields.slug} rel="next" className="text-dark">
                    {next.frontmatter.title} →
                </Link>
            )}
        </div>
    </div>
)