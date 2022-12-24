import React from 'react';

import Card from './card.js';

function Image() {
    return (
        <div style={styles.container}>
            <Card size="small" />
            <Card size="medium" />
            <Card size="large" />
            <Card size="medium" />
            <Card size="large" />
            <Card size="large" />
            <Card size="medium" />
            <Card size="small" />
        </div>
    )
}

const styles = {
    container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'LightGray'
    }
}

export default Image;