const reactElement = 
{
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank',

    },
    children: 'CLick to visit google'
}

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    
    domELement = document.createElement(reactElement.type);
    domELement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domELement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domELement);





}

const mainContainer = document.querySelector("#root");


customRender(reactElement, mainContainer) 
