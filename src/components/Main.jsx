import React from "react";
import Level0 from "./Level0";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import Level4 from "./Level4";
import Level5 from "./Level5";
import Level6 from "./Level6";

const Main = () => {
  return (
    <div className="main">
      <header className="codrops-header">
        <h1>888 Yonge Book-o-Matic</h1>
      </header>
      <div className="mall">
        <div className="surroundings">
          <img
            className="surroundings__map"
            src="img/surroundings.svg"
            alt="Surroundings"
          />
        </div>
        <div className="levels">
          <Level0 />
          <Level1 />
          <Level2 />
          <Level3 />
          <Level4 />
          <Level5 />
          <Level6 />
        </div>
      </div>
      <button
        className="boxbutton boxbutton--dark open-search"
        aria-label="Show search"
      >
        <svg className="icon icon--search">
          <use xlinkHref="#icon-search" />
        </svg>
      </button>
      <nav className="mallnav mallnav--hidden">
        <button className="boxbutton mallnav__button--up" aria-label="Go up">
          <svg className="icon icon--angle-down">
            <use xlinkHref="#icon-angle-up" />
          </svg>
        </button>
        <button
          className="boxbutton boxbutton--dark mallnav__button--all-levels"
          aria-label="Back to all levels"
        >
          <svg className="icon icon--stack">
            <use xlinkHref="#icon-stack" />
          </svg>
        </button>
        <button
          className="boxbutton mallnav__button--down"
          aria-label="Go down"
        >
          <svg className="icon icon--angle-down">
            <use xlinkHref="#icon-angle-down" />
          </svg>
        </button>
      </nav>
      <div className="content">
        <div className="content__item" data-space="1.01" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.02" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.03" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.04" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.05" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.06" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.07" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.08" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="1.09" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.01" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.02" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.03" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.04" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.05" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.06" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.07" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="2.08" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.01" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.02" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.03" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.04" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.05" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.06" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="3.07" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.01" data-category="1">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.02" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.03" data-category="3">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.04" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.05" data-category="4">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.06" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <div className="content__item" data-space="4.07" data-category="2">
          <img src="img/Ramones.jpg" alt="" height={400} />
        </div>
        <button
          className="boxbutton boxbutton--dark content__button content__button--hidden"
          aria-label="Close details"
        >
          <svg className="icon icon--cross">
            <use xlinkHref="#icon-cross" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Main;
