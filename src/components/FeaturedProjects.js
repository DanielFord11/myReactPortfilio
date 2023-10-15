import React from 'react';
import './FeaturedProjects.css';
import'../Assets/Health.png'
import healthImage from '../Assets/Health.png';
import ufoImage from '../Assets/UFOs.png';
import refugeeImage from '../Assets/Refugee.png';
import collegeImage from '../Assets/college.png';
import ghostWriterImage from '../Assets/ghostWriter.png';

function FeaturedProjects() {
  return (
    <section className="Featured_Projects_Section">
      <div className="Featured_Projects">
        <h1 id="Project_Landing">03. Some Things I've Built</h1>
        <div className="Project_1">
           <h1>AI Generated News Site</h1>
           <a href="https://stormy-plains-32549-a1bc163e95b5.herokuapp.com/login"></a>
           <img id="NewSite_Photo" src={ghostWriterImage} alt="New Site Photo" height="620rem" />
           <span>
             <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
               cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
               tenetur alias?
             </p>
           </span>
         </div>
         <div className="Project_5">
          <h1>College Financials Calculator</h1>
          <a href="https://dry-retreat-65171-458eb87d7676.herokuapp.com/">
          <img id="Health_Photo" src={collegeImage} alt="Health Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
         <div className="Project_5">
          <h1>UFO NLP Semantic Similarity and Cluster Analysis</h1>
          <a href="https://github.com/DanielFord11/ufo-nlp-custer-analysis">
          <img id="Health_Photo" src={ufoImage} alt="Health Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
        <div className="Project_4">
          <h1>Refugee Analysis</h1>
          <a href="https://github.com/DanielFord11/Refugee-Project">
          <img id="UFO_Photo" src={refugeeImage} alt="Refugee Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
        <div className="Project_5">
          <h1>d3 JS Health Visualizations</h1>
          <a href="https://danielford11.github.io/d3-JS-Health-Visualizations/">
          <img id="Health_Photo" src={healthImage} alt="Health Data Photo" height="320rem" />
          </a>
          <span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam esse, hic quaerat consequuntur beatae
              cumque sed magni id harum adipisci, earum blanditiis culpa accusamus distinctio! Debitis facere laborum
              tenetur alias?
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
