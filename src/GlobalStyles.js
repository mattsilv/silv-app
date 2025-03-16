import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent-color: #60a5fa;
    --border-color: #3d4852;
    --card-color: #1e1e1e;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'VT323', monospace;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.2;
    font-size: 18px;
    padding: 20px;
    image-rendering: pixelated;
    max-width: 960px;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;
    
    @media (max-width: 768px) {
      padding: 15px;
      font-size: 16px;
    }
  }
  
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      transparent 0%, 
      rgba(32, 32, 32, 0.05) 50%, 
      transparent 100%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 100;
  }
  
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

export default GlobalStyles;
