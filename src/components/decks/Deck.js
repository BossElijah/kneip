import React from 'react';

const Deck = props => {
  const HeaderTag = props.dataIndex === 0 ? 'h1' : 'h2';

  if (props.type === 'hero') {
    return (
      <div
        className={`hero ${props.layout && props.layout}`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            props.backgroundUrl})`
        }}
      >
        <div className={`hero-wrap ${props.border && props.border}`}>
          <HeaderTag className="l-heading">{props.title}</HeaderTag>
          <p className="l-paragraph">{props.text}</p>
          <a className="btn btn-transparent" href={props.cta.ctaUrl}>
            {props.cta.ctaText}
          </a>
        </div>
      </div>
    );
  } else if (props.type === 'cardDeck')
    return (
      <div className={`card deck ${props.layout && props.layout}`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + props.backgroundUrl}`}>
        <div className="content">
          <HeaderTag className="l-heading">{props.title}</HeaderTag>
          <div className="cards-wrapper">
            {props.cards.map((card, index) => (
              <div key={index} className="card">
                <img
                  className="card-image image"
                  key={index}
                  src={process.env.PUBLIC_URL + card.image.src}
                  alt={process.env.PUBLIC_URL + card.image.alt}
                ></img>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  else if (props.type === 'quote')
    return (
      <div
        className={`hero ${props.layout && props.layout}`}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL +
            props.backgroundUrl})`
        }}
      >
        <div className="hero-wrap">
          <HeaderTag className="m-heading">{props.title}</HeaderTag>
          <p className="m-paragraph">{props.text}</p>
          <p className="s-paragraph">
            <strong>{props.source}</strong>
          </p>
        </div>
      </div>
    );
};

export default Deck;
