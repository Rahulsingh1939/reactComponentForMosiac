import React from 'react';
import {Photos} from '../data/photos';
import Card from './card.js';

const data =Photos;

function Image() {
    return (
        <div style={styles.container}>
            {data.map((item) => {
          return <Card size="large"/>;
        })}
        </div>
    )
}

const styles = {
    container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 350px)',
        gridAutoRows: '10px',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        backgroundColor: 'LightGray'
    }
}

export default Image;