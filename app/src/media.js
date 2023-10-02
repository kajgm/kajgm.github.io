import React, { useState } from 'react';

function importAll(r) {
    let images = [];
    r.keys().map((item, index) => {
        images.push(<img src={r(item)} className="images" key={item.replace('./', '')} alt={item.replace('./', '')} />);
        return images;
    });

    return images;
}

const defaultImages = importAll(require.context('./img/media/', false, /\.JPG$/));

export const Media = () => {
    const [images, setImages] = useState(defaultImages);

    //Fisher-Yates shuffle
    const shuffle = () => {
        let i = images.length,
            j;

        while (i > 0) {
            j = Math.floor(Math.random() * i);
            i--;
            [images[i], images[j]] = [images[j], images[i]];
        }
        setImages([...images]);
    };

    return (
        <div id="media" className="sub-content">
            {' '}
            A completely{' '}
            <button onClick={shuffle} id="random-text">
                <strong>random</strong>
            </button>{' '}
            collection
            <div id="media-content" className="sub-content">
                {images}
            </div>
        </div>
    );
};

export default Media;
