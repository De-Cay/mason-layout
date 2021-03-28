const Gallary = (() =>{


  const arrImage = ['archer1.jpg', 'blade1.jpg', 'castle1.jpg', 'coco1.jpg', 'coco2.jpg', 'corpse1.jpg',
  'ferdi1.jpg', 'future1.jpg', 'howls1.jpg', 'inhum1.jpg', 'isle1.jpg', 'isle2.jpg', 'kill1.jpg', 'metro1.jpg',
  'minion1.jpg', 'naus1.jpg', 'spirit1.jpg', 'up1.jpg'];
  const arrImageLen = arrImage.length;
  let arrIndex = 0;

  const $masonLayout = document.getElementsByClassName('mason-layout')[0];
  const $masonColumn = document.getElementsByClassName('mason-content');

  const throttle = (func, limit) =>{
    let inThrottle;
    return function(){
      if(!inThrottle){
        inThrottle = true;
        let aArgs = Array.prototype.slice.call(arguments);
        func.apply(this, aArgs);
        setTimeout(()=>{
          inThrottle = false;
        }, limit)
      }
    }
  }

  const addImage = () =>{
    let ii = 0;
    while(ii <= 5 && arrIndex < arrImageLen){
      let $img = document.createElement('img');
      $img.src = '/images/'+arrImage[arrIndex];
      $img.alt = 'image description';

      $masonColumn[ii % 3].append($img);

      arrIndex++;
      ii++
    }
  }

  const initialize = () =>{
    addImage();

    window.addEventListener('scroll', throttle((event)=>{
      if (window.innerHeight + window.scrollY + 200 > document.body.scrollHeight) {
        addImage();
      }
    }, 500), false);
  }

  return{
    initialize: initialize
  }
})();

Gallary.initialize();
