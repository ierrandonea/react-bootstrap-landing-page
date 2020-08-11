import React from 'react';
import PropTypes from "prop-types";

const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover"
}

const Card = props => {
    return (
        <div className="card col my-5 px-0 mx-1">
            <img src={props.imgURL} className="card-img-top px-0 mx-0" style={imgStyle}/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text  text-justify">{props.description}</p>
            </div>
            <div className="card-footer text-center">
                <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    imgURL: PropTypes.string,
    description: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string
    
};

export default Card;