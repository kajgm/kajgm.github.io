import './css/media.css';

//Fisher-Yates shuffle
function shuffle(array) {
    let i = array.length,
        j;

    while (i > 0) {
        j = Math.floor(Math.random() * i);
        i--;
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export const Media = () => {
    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => {
            images.push(
                <img src={r(item)} className="images" key={item.replace('./', '')} alt={item.replace('./', '')} />
            );
        });

        return shuffle(images);
    }

    let images = importAll(require.context('./img/media/', false, /\.JPG$/));

    return <div>{images}</div>;
};

export default Media;
