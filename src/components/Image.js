import React from 'react';

export default function Image(props) {

  const {
    src,
    alt,
    name,
    handleClick,
   } = props;

  return (
    <figure>
      <img
        className="dnd-class-img" 
        src={src} 
        alt={alt}
        onClick={handleClick}
      />
      <figcaption>{name}</figcaption>
    </figure>
  )
}
