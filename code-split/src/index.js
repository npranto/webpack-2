const button = document.createElement('button');
button.innerText = 'Load Images';
button.onclick = ()=>{

    // tells webpack to split index.js code from 'image-viewer.js'
    System.import('./image-viewer/image-viewer').then((module)=>{
        console.log('MODULE: ', module);

        // runs 'default' function to load and run the code inside image-viewer.js
        module.default();
    })
}

document.body.appendChild(button);
