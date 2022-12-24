import React from 'react';

function Card(props) {
    const handleMouseEnter = e => {
        e.target.style.background = "grey"
      }
      const handleMouseLeave = e => {
        e.target.style.backgroundImage = "url('https://picsum.photos/200/300')"
        e.target.style.backgroundSize = 'cover'
      }
    return (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            ...styles.card,
            ...styles[props.size]
        }}>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        backgroundColor: 'red',
        backgroundImage: "url('https://picsum.photos/200/300')",
        backgroundSize: 'cover'
    },
    small: {
        gridRowEnd: 'span 30'
    },
    medium: {
        gridRowEnd: 'span 35'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Card;