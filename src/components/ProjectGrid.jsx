import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

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

const ProjectGrid = ({ projects }) => {
  // Filter projects into app, utility, and content categories
  const appProjects = projects.filter(project => 
    project.category === "app"
  );
  
  const utilityProjects = projects.filter(project => 
    project.category === "utility"
  );

  const contentProjects = projects.filter(project => 
    project.category === "content"
  );

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
        <Title>content</Title>
        <Grid>
          {contentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Grid>
      </GridWrapper>
    </>
  );
};

export default ProjectGrid;
