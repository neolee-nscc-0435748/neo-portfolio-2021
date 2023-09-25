import React from "react";
import { Link } from "react-router-dom";

function ProjectCardItem(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={ props.path } target="_blank">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h4 className="cards__item__header_text">
              <span>{"\u26A1"} </span>What I utilized
              <button
                className="cards__item__button"
                onClick={() => {
                  window.open(props.git_path);
                }}
              >
                &nbsp;GitHub&nbsp;
              </button>
            </h4>
            <h5 className="cards__item__text">{props.text1}</h5>
            <br />
            <h4 className="cards__item__header_text">
              <span>{"\u26CF"} </span>What I learned
            </h4>
            <h5 className="cards__item__text">{props.text2}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default ProjectCardItem;
