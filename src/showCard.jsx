/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled`
  width: 32%;
  border: 2px solid #333; 
  border-radius: 4px; 
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const showCard = (props) => (
  <Wrapper>
    <Image
      alt={`${props.title} show poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

// showCard.defaultProps = {
//   foo: 'stuff'
// }

showCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default showCard;
