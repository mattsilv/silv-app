import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Card = styled.div`
  background-color: var(--card-color);
  border: 2px solid var(--border-color);
  padding: 20px;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(96, 165, 250, 0.1);
    border-color: var(--accent-color);
  }
`;

const ContentArea = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  flex-grow: 1;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--accent-color);
`;

const Description = styled.p`
  margin-bottom: 15px;
  color: var(--text-color);
  flex-grow: 1;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LaunchButton = styled.a`
  padding: 6px 12px;
  background-color: var(--accent-color);
  color: var(--card-color);
  border-radius: 4px;
  transition: all 0.3s;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    color: var(--card-color);
    background-color: var(--accent-color-darker, #4F46E5);
  }
`;

const GitHubLink = styled.a`
  color: var(--text-color);
  font-size: 20px;
  text-decoration: none;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const DateText = styled.span`
  color: var(--text-secondary);
  font-size: 14px;
  font-style: italic;
  cursor: help;
  
  &:hover {
    color: var(--accent-color);
  }
`;

// GitHub icon as SVG for better quality
const GitHubIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0.297C5.37 0.297 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297 12 0.297Z" />
  </svg>
);

// Helper function to format launch date
const formatLaunchDate = (dateString) => {
  if (!dateString) return { display: null, tooltip: null };
  
  const date = new Date(dateString);
  const now = new Date();
  
  // Calculate difference in days
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Format exact date for tooltip
  const exactDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // If launched this year, show "X months ago" or "X days ago"
  if (date.getFullYear() === now.getFullYear()) {
    const diffMonths = Math.floor(diffDays / 30);
    
    if (diffDays < 30) {
      if (diffDays === 0) return { display: "today", tooltip: exactDate };
      if (diffDays === 1) return { display: "yesterday", tooltip: exactDate };
      return { display: `${diffDays} days ago`, tooltip: exactDate };
    } else if (diffMonths === 1) {
      return { display: "1 month ago", tooltip: exactDate };
    } else {
      return { display: `${diffMonths} months ago`, tooltip: exactDate };
    }
  }
  
  // For older projects, just show the year
  return { display: date.getFullYear().toString(), tooltip: exactDate };
};

const ProjectCard = ({ project }) => {
  // Check if the main link is a GitHub link
  const isGitHubLink = project.link && project.link.includes('github.com');
  
  // For GitHub links, use "VIEW REPO" instead of "LAUNCH"
  const launchText = isGitHubLink ? "VIEW REPO" : "LAUNCH";
  
  // Format the launch date
  const dateInfo = formatLaunchDate(project.launchDate);
  
  return (
    <CardContainer>
      <Card>
        <ContentArea href={project.link} target="_blank" rel="noopener noreferrer">
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>
        </ContentArea>
        
        <FooterRow>
          <LeftSection>
            <LaunchButton 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {launchText} &gt;
            </LaunchButton>
            {project.githubUrl && (
              <GitHubLink 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </GitHubLink>
            )}
          </LeftSection>
          {dateInfo.display && (
            <DateText title={dateInfo.tooltip}>
              {dateInfo.display}
            </DateText>
          )}
        </FooterRow>
      </Card>
    </CardContainer>
  );
};

export default ProjectCard;
