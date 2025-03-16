import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  height: 100%;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Card = styled.div`
  background-color: var(--card-color);
  border: 2px solid var(--border-color);
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(96, 165, 250, 0.1);
    border-color: var(--accent-color);
  }
`;

const Title = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
  color: var(--accent-color);
`;

const Excerpt = styled.p`
  margin-bottom: 15px;
  color: var(--text-color);
  font-size: 16px;
  line-height: 1.4;
  
  /* Limit to 2 lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReadMoreText = styled.span`
  color: var(--text-color);
  border-bottom: 1px dashed var(--text-color);
  padding-bottom: 2px;

  ${CardLink}:hover & {
    border-bottom-style: solid;
    color: var(--accent-color);
  }
`;

const DateText = styled.span`
  color: var(--text-secondary);
  font-size: 14px;
  font-style: italic;
`;

// Helper function to decode HTML entities
const decodeHtmlEntities = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

// Helper function to clean up WordPress excerpt
const cleanExcerpt = (excerpt) => {
  // Remove HTML tags and decode HTML entities
  let cleaned = decodeHtmlEntities(excerpt);
  
  // Remove ellipsis and trailing dots if present
  cleaned = cleaned.replace(/\.{3,}$/, '');
  cleaned = cleaned.replace(/…$/, '');

  // Remove any remaining HTML-like content
  cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, "");
  
  // Get just the first sentence or part
  const firstSentence = cleaned.split(/\.\s+/)[0];
  
  return firstSentence;
};

// Helper function to format the post date as "X days ago"
const formatTimeAgo = (dateString) => {
  const postDate = new Date(dateString);
  const now = new Date();
  
  // Calculate difference in milliseconds
  const differenceMs = now - postDate;
  
  // Convert to days
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  
  if (days === 0) {
    return "Today";
  } else if (days === 1) {
    return "Yesterday";
  } else {
    return `${days} days ago`;
  }
};

const BlogCard = ({ post }) => {
  const decodedTitle = decodeHtmlEntities(post.title.rendered);
  const cleanedExcerpt = cleanExcerpt(post.excerpt.rendered);
  const timeAgo = post.date ? formatTimeAgo(post.date) : "";
  
  return (
    <CardContainer>
      <CardLink href={post.link} target="_blank" rel="noopener noreferrer">
        <Card>
          <Title>{decodedTitle}</Title>
          <Excerpt>{cleanedExcerpt}</Excerpt>
          
          <FooterRow>
            <ReadMoreText>READ MORE &gt;</ReadMoreText>
            {timeAgo && <DateText>{timeAgo}</DateText>}
          </FooterRow>
        </Card>
      </CardLink>
    </CardContainer>
  );
};

export default BlogCard;