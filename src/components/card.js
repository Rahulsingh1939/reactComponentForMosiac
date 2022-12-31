import React from 'react';

function Card(props) {
    const handleMouseEnter = e => {
        e.target.style.transform = "scale(1.2)"
        e.target.style.transition = "transform 0.5s"
      }
      const handleMouseLeave = e => {
        e.target.style.transform = "scale(1)"
      }
    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            ...styles.card,
            ...styles[props.size],
        }}>
        </div>
    )
}

const styles = {
    card: {
        margin: '25px 20px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: '#cccccc',
        backgroundImage: "url('https://picsum.photos/200/300')",
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    small: {
        gridRowEnd: 'span 30'
    },
    medium: {
        gridRowEnd: 'span 37'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Card;