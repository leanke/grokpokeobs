// This file contains helper functions for manipulating the user interface, such as showing and hiding elements.

function showElement(element) {
    if (element) {
        element.style.display = 'block';
    }
}

function hideElement(element) {
    if (element) {
        element.style.display = 'none';
    }
}

function toggleElement(element) {
    if (element) {
        element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none';
    }
}

function setElementText(element, text) {
    if (element) {
        element.textContent = text;
    }
}

function setElementStyle(element, styles) {
    if (element && styles) {
        Object.keys(styles).forEach(style => {
            element.style[style] = styles[style];
        });
    }
}