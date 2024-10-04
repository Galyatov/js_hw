'use strict';

const IMG_FOLDER = './images';
const IMG_EXT = '.jpg';

const generateImgElement = (imgName) => {
    const img = document.createElement('img');
    img.src = `${IMG_FOLDER}/${imgName}${IMG_EXT}`;
    img.alt = `Image: ${imgName}`;
    img.title = `Image: ${imgName}`;
    return img;
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const appendHTMLElement = (parentElement, elementToAppend) => {
    if (!parentElement || !elementToAppend) return;
    parentElement.append(elementToAppend);
};

const randomImgName = getRandomNumber(1, 9);
const imgElement = generateImgElement(randomImgName);
appendHTMLElement(document.body, imgElement);
