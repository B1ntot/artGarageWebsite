/* Add any JavaScript you need to this file. */
var images = [
  {
    title: 'Kouhai',
    style: 'Style: Hand',
    date: 2015,
    price: '$14.99',
    source: './images/handDrawn1.jpg'
  },
  {
    title: 'C-e-se',
    style: 'Style: Hand',
    date: 2015,
    price: '$14.99',
    source: './images/handDrawn2.jpg'
  },
  {
    title: 'Alone',
    style: 'Style: Hand',
    date: 2019,
    price: '$14.99',
    source: './images/handDrawn3.jpg'
  },
  {
    title: 'Neon',
    style: 'Style: Hand',
    date: 2020,
    price: '$14.99',
    source: './images/handDrawn4.jpg'
  },
  {
    title: 'Festival Joy',
    style: 'Style: Hand',
    date: 2015,
    price: '$14.99',
    source: './images/handDrawn5.jpg'
  },
  {
    title: 'Living Music',
    style: 'Style: Hand',
    date: 2017,
    price: '$14.99',
    source: './images/handDrawn6.jpg'
  },
  {
    title: 'Melting',
    style: 'Style: Mouse',
    date: 2015,
    price: '$9.99',
    source: './images/mouseDrawn1.jpg'
  },
  {
    title: 'Traditional',
    style: 'Style: Mouse',
    date: 2018,
    price: '$9.99',
    source: './images/mouseDrawn2.jpg'
  },
  {
    title: 'Gotcha',
    style: 'Style: Mouse',
    date: 2018,
    price: '$9.99',
    source: './images/mouseDrawn3.jpg'
  },
  {
    title: 'Saturday',
    style: 'Style: Mouse',
    date: 2020,
    price: '$9.99',
    source: './images/mouseDrawn4.jpg'
  },
  {
    title: 'Drunk at 2am',
    style: 'Style: Mouse',
    date: 2020,
    price: '$9.99',
    source: './images/mouseDrawn5.jpg'
  },
  {
    title: 'Dreams',
    style: 'Style: Mouse',
    date: 2019,
    price: '$9.99',
    source: './images/mouseDrawn6.jpg'
  }
];

var imageGetter = {
  // Grabs all mouse drawn art
  getMouseImgs: function() {
    var listOfImg = [];

    for (let i of images) {
      if (i.style === 'Style: Mouse') listOfImg.push(i);
    }

    return listOfImg;
  },

  // Grabs all hand drawn art
  getHandImgs: function() {
    var listOfImg = [];

    for (let i of images) {
      if (i.style === 'Style: Hand') listOfImg.push(i);
    }

    return listOfImg;
  }
};

var mainHelper = {
  // Clear main in html
  clearMain: function() {
    let mainBody = document.querySelector('main');
    mainBody.innerHTML = '';
  },

  // Creates the boxes for the images
  imgBoxGenerate: function(img) {
    let imgBox = document.createElement('div');
    let imgBox_img = document.createElement('div');
    let image = document.createElement('img');
    let price = document.createElement('p');

    let imgBox_info = document.createElement('div');
    let imgTitle = document.createElement('h2');
    let imgStyle = document.createElement('h2');
    let imgDate = document.createElement('h2');

    // Set class for css
    imgBox.className = 'imgBox';
    imgBox_img.className = 'imgBox-img';
    imgBox_info.className = 'imgBox-info';

    // Set Image div
    image.src = img.source;
    image.alt = 'Image';
    image.width = '300';
    image.height = '300';
    price.innerHTML = img.price;

    imgBox_img.appendChild(image);
    imgBox_img.appendChild(price);

    // Set Info Div

    imgTitle.innerHTML = img.title;
    imgStyle.innerHTML = img.style;
    imgDate.innerHTML = img.date;
    imgBox_info.appendChild(imgTitle);
    imgBox_info.appendChild(imgStyle);
    imgBox_info.appendChild(imgDate);

    // Add everything to imgBox div
    imgBox.appendChild(imgBox_img);
    imgBox.appendChild(imgBox_info);

    return imgBox;
  },

  // Adds the boxes to the body of main
  addToMain: function(imgs) {
    let mainBody = document.querySelector('main');
    this.clearMain();

    for (let i of imgs) {
      let div = this.imgBoxGenerate(i);
      mainBody.appendChild(div);
    }
  },
  // Used when user clicks on an image in the homepage
  addSoloToMain: function(img) {
    let mainBody = document.querySelector('main');
    this.clearMain();

    let div = this.imgBoxGenerate(img);
    div.className = 'imgBoxSolo';
    mainBody.appendChild(div);
  }
};

function setupHandlers() {
  var m = document.querySelector('main');
  let handA = document.querySelector('#handArt');
  let mouseA = document.querySelector('#mouseArt');
  let currentCat = document.querySelector('#currentCat');
  let currentCatTitle = document.createElement('p');
  let hand1 = document.querySelector('#hand1');
  let hand2 = document.querySelector('#hand2');
  let hand3 = document.querySelector('#hand3');
  let hand4 = document.querySelector('#hand4');
  let hand5 = document.querySelector('#hand5');
  let hand6 = document.querySelector('#hand6');

  let mouse1 = document.querySelector('#mouse1');
  let mouse2 = document.querySelector('#mouse2');
  let mouse3 = document.querySelector('#mouse3');
  let mouse4 = document.querySelector('#mouse4');
  let mouse5 = document.querySelector('#mouse5');
  let mouse6 = document.querySelector('#mouse6');

  // Functions for event listener
  function artHand() {
    var listOfImg = imageGetter.getHandImgs();
    mainHelper.addToMain(listOfImg);

    currentCatTitle.innerHTML = 'Hand Drawn Art';
    currentCat.appendChild(currentCatTitle);

    m.className = '';
  }

  function artMouse() {
    var listOfImg = imageGetter.getMouseImgs();
    mainHelper.addToMain(listOfImg);

    currentCatTitle.innerHTML = 'Mouse Drawn Art';
    currentCat.appendChild(currentCatTitle);

    m.className = '';
  }

  function loadHand1() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[0]);
  }
  function loadHand2() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[1]);
  }
  function loadHand3() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[2]);
  }
  function loadHand4() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[3]);
  }
  function loadHand5() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[4]);
  }
  function loadHand6() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[5]);
  }
  function loadMouse1() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[6]);
  }
  function loadMouse2() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[7]);
  }
  function loadMouse3() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[8]);
  }
  function loadMouse4() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[9]);
  }
  function loadMouse5() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[10]);
  }
  function loadMouse6() {
    m.className = 'Solo';
    mainHelper.addSoloToMain(images[11]);
  }

  // Event Listeners
  handA.addEventListener('click', artHand);
  mouseA.addEventListener('click', artMouse);

  hand1.addEventListener('click', loadHand1);
  hand2.addEventListener('click', loadHand2);
  hand3.addEventListener('click', loadHand3);
  hand4.addEventListener('click', loadHand4);
  hand5.addEventListener('click', loadHand5);
  hand6.addEventListener('click', loadHand6);
  mouse1.addEventListener('click', loadMouse1);
  mouse2.addEventListener('click', loadMouse2);
  mouse3.addEventListener('click', loadMouse3);
  mouse4.addEventListener('click', loadMouse4);
  mouse5.addEventListener('click', loadMouse5);
  mouse6.addEventListener('click', loadMouse6);
}

window.onload = setupHandlers;
