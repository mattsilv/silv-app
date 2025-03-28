import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import BlogCard from "./BlogCard";

const GridWrapper = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;

  &::before {
    content: "> ";
    color: var(--accent-color);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const LoadingOrError = styled.div`
  font-style: italic;
  color: var(--text-color);
  padding: 20px;
  text-align: center;
  border: 2px dashed var(--border-color);
  grid-column: 1 / -1;
`;

const ProjectGrid = ({ projects }) => {
  // State for blog posts
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);
  const [blogError, setBlogError] = useState(null);

  // Filter projects into app and utility categories
  const appProjects = projects.filter((project) => project.category === "app");

  const utilityProjects = projects.filter(
    (project) => project.category === "utility"
  );

  // Fetch blog posts from WordPress API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setBlogLoading(true);
        // Add timestamp to prevent browser caching
        const timestamp = new Date().getTime();
        const response = await fetch(
          `https://silv.blog/wp-json/wp/v2/posts?per_page=3&_fields=id,title,excerpt,link,date&_=${timestamp}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blog posts: ${response.status}`);
        }

        const data = await response.json();
        setBlogPosts(data);
        setBlogLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setBlogError(error.message);
        setBlogLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Render blog posts section
  const renderBlogSection = () => {
    if (blogLoading) {
      return <LoadingOrError>Loading latest blog posts...</LoadingOrError>;
    }

    if (blogError) {
      return (
        <LoadingOrError>
          Could not load blog posts. Please try again later.
        </LoadingOrError>
      );
    }

    if (blogPosts.length === 0) {
      return <LoadingOrError>No blog posts found.</LoadingOrError>;
    }

    return blogPosts.map((post) => <BlogCard key={post.id} post={post} />);
  };

  return (
    <>
      <GridWrapper>
        <Title>apps</Title>
        <Grid>
          {appProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </GridWrapper>

      <GridWrapper>
        <Title>utilities</Title>
        <Grid>
          {utilityProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </GridWrapper>

      <GridWrapper>
        <Title>latest from silv.blog</Title>
        <Grid>{renderBlogSection()}</Grid>
      </GridWrapper>
    </>
  );
};

export default ProjectGrid;
