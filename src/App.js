import React from "react";
import { ProgressiveImage } from "./components/ProgressiveImage";

import "./styles/style.css";

export const App = () => {
  return (
    <div className="App">
      <div className="progressive-images">
        <ProgressiveImage
          title="Harry Potter"
          thumbnail="../assets/harrypotter-small.png"
          source="../assets/harrypotter-big.jpg"
        />
        <ProgressiveImage
          title="Pool"
          thumbnail="../assets/pool-small.png"
          source="../assets/pool-big.jpg"
        />
        <ProgressiveImage
          title="Lighthouse"
          thumbnail="../assets/lighthouse-small.png"
          source="../assets/lighthouse-big.jpg"
        />
        <ProgressiveImage
          title="Lighthouse"
          thumbnail="../assets/bridge-small.png"
          source="../assets/bridge-big.jpg"
        />
      </div>

      <a
        href="https://github.com/imcorentin/Progressive-Images"
        className="project_source"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#607D8B"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
        </svg>
      </a>
    </div>
  );
};
