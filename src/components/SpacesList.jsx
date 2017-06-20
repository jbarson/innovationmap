import React from 'react';

const SpacesList = () => {
  return (
    <aside className="spaces-list" id="spaces-list">
            <div className="search">
              <input className="search__input" placeholder="Search..." />
              <button
                className="boxbutton boxbutton--darker close-search"
                aria-label="Close details"
              >
                <svg className="icon icon--cross">
                  <use xlinkHref="#icon-cross" />
                </svg>
              </button>
            </div>
            <span className="label">
              <input
                id="sort-by-name"
                className="label__checkbox"
                type="checkbox"
                aria-label="Show alphabetically"
              />
              <label className="label__text">A - Z</label>
            </span>
            <ul className="list grouped-by-category">
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.08"
              >
                <a href="#" className="list__link">The Wizard</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.01"
              >
                <a href="#" className="list__link">The Ramones</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.02"
              >
                <a href="#" className="list__link">Crazy Banana</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.05"
              >
                <a href="#" className="list__link">The Eggplanthead</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.09"
              >
                <a href="#" className="list__link">Smoothies &amp; Soul</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.06"
              >
                <a href="#" className="list__link">Seed of Life</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.07"
              >
                <a href="#" className="list__link">Raw Delight</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.01"
              >
                <a href="#" className="list__link">Grilled Chipotle</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.01"
              >
                <a href="#" className="list__link">Oolong House</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.01"
              >
                <a href="#" className="list__link">Cold Soup Kitchen</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.06"
              >
                <a href="#" className="list__link">Superfood</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.06"
              >
                <a href="#" className="list__link">Love 2 Cook</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.07"
              >
                <a href="#" className="list__link">Permaculture Hub</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.03"
              >
                <a href="#" className="list__link">Folding Life</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.02"
              >
                <a href="#" className="list__link">Rocketship Tech</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.03"
              >
                <a href="#" className="list__link">Which Bug?</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.02"
              >
                <a href="#" className="list__link">Enlightend Path</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.02"
              >
                <a href="#" className="list__link">Docu Dome</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.03"
              >
                <a href="#" className="list__link">Little Artist</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.04"
              >
                <a href="#" className="list__link">Your Last Shirt</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.08"
              >
                <a href="#" className="list__link">Tool Exchange</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.04"
              >
                <a href="#" className="list__link">Dress me not</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.04"
              >
                <a href="#" className="list__link">Cognitio</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.03"
              >
                <a href="#" className="list__link">What makes us walk</a>
              </li>
              <li
                className="list__item"
                data-level="2"
                data-category="1"
                data-space="2.07"
              >
                <a href="#" className="list__link">No Princess</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.07"
              >
                <a href="#" className="list__link">Star Gazer</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.04"
              >
                <a href="#" className="list__link">Space 16</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.05"
              >
                <a href="#" className="list__link">Breathe</a>
              </li>
              <li
                className="list__item"
                data-level="1"
                data-category="1"
                data-space="1.05"
              >
                <a href="#" className="list__link">Meditation Garden</a>
              </li>
              <li
                className="list__item"
                data-level="4"
                data-category="1"
                data-space="4.05"
              >
                <a href="#" className="list__link">Hot Tub Festival</a>
              </li>
              <li
                className="list__item"
                data-level="3"
                data-category="1"
                data-space="3.06"
              >
                <a href="#" className="list__link">Feel the Grass</a>
              </li>
            </ul>
          </aside>
  );
};

export default SpacesList;