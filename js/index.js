// Your code goes here


//Stop nav items
const stopLink = document.querySelector("a");

stopLink.addEventListener("click", (event) => {
  
  
  event.preventDefault();
})


//event propagation click

const body = document.querySelector("body");

body.addEventListener("click", () => {
    body.style.backgroundColor="lightgreen";
  
})
const contentGroup = document.querySelectorAll(".content-section").forEach(cg => {
    
    cg.addEventListener('click', (event) => {
        cg.style.backgroundColor="pink";
        event.stopPropagation();
        });

})



//Topbus img dblclick


const topBus = document.querySelector('.intro img')

topBus.addEventListener('dblclick', event => {
    topBus.setAttribute('src', 'https://d32c3oe4bky4k6.cloudfront.net/articles-videos/-/media/uscamediasite/images/story-images/2018/11/13/spaceballs(1).ashx?modified=20181113144516')
     
    topBus.addEventListener('click', event => {
        topBus.setAttribute('src', 'img/fun-bus.jpg');
        })
})




//wheel

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('header img');
  el.onwheel = zoom;




//create bus ) keypress


const footer = document.querySelector('footer');
document.addEventListener('keydown', create);

function create(thing){
    const newBus = document.createElement('img');
    newBus.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPu9ZhVpBrsWX7DKGBAXHSpAhsfCp7BXCW1FQIE44sZsr_3U_')
    footer.prepend(newBus);
    newBus.style.transform = "scale(1.3)";
    
    newBus.addEventListener('click', event => {
    newBus.remove();
    })
    TweenLite.to(newBus, 20, {y:-1000});
    TweenLite.to(newBus, 10, {x:500});
}
 
//focus event and blur


const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'yellow';    
  
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
  
});

//load

const log = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  log.textContent ='';
  window.setTimeout(() => {
      window.location.reload(true);
  }, 200);
});

window.addEventListener('load', (event) => {
    log.textContent = log.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    log.textContent = log.textContent + `rdy: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    log.textContent = log.textContent + `DOMContentLoaded\n`;
});


//resize 

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// bottom button mouse over

const botButton = document.querySelectorAll('.destination .btn').forEach(el => { 

el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(3)";
    el.style.transition = "all 0.3s"
    TweenMax.to(el,1, {
        rotation: -90,
        filter: 'none',
        ease: Elastic.easeOut.config( 1, 0.75),
        yoyo: true,
        repeat: 2
      })
    })
    el.addEventListener("mouseleave", () => {
    el.style.transform = "scale(1.0)";
    el.style.transition = "all 0.3s"
    TweenMax.to(el,1, {
        rotation: 0,
        filter: 'none',
        ease: Elastic.easeOut.config( 1, 0.75),
        yoyo: true,
        repeat: 2
      })
    })
})

//pointermove
let htmlBackground = document.querySelector('html');


htmlBackground.addEventListener('pointermove', (event) => {
    

  

    htmlBackground.style.color = "purple"
})



