import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: var(--card-color);
  border: 2px solid var(--border-color);
  padding: 20px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(96, 165, 250, 0.1);
    border-color: var(--accent-color);
  }
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--accent-color);
`;

const Description = styled.p`
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: var(--text-color);
  text-decoration: none;
  border-bottom: 1px dashed var(--text-color);
  padding-bottom: 2px;

  &:hover {
    border-bottom-style: solid;
    color: var(--accent-color);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Link href={project.link}>LAUNCH &gt;</Link>
    </Card>
  );
};

export default ProjectCard;
