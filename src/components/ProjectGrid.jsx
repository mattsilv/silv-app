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
  return (
    <GridWrapper>
      <Title>apps</Title>
      <Grid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </GridWrapper>
  );
};

export default ProjectGrid;
