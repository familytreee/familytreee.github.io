//window.addEventListener("load", function(event) {

const swup = new Swup();

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`); // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
let smoother = ScrollSmoother.create({
	wrapper: '.wrapper',
 	content: '.content',
})
  
//   //--------------------------------4>5  
  
//     four01_five01.position();
//     //four01_five01.hide();

//     four02_five02.position();
//     //four02_five02.hide();

//     four04_five03.position();
//     //four04_five03.hide();
//     four04_five04.position();
//     //four04_five04.hide();


//     four05_five05.position();
//     //four05_five05.hide();

//     four06_five06.position();
//     //four06_five06.hide();

   
//     four07_five07.position();
//     //four07_five07.hide();
//     four07_five08.position();
//     //four07_five08.hide();

//     four08_five09.position();
//     //four08_five09.hide();
//     four08_five10.position();
//     //four08_five10.hide();

//     four09_five11.position();
//     //four09_five11.hide();
//     four09_five12.position();
//     //four09_five12.hide();
//     four09_five13.position();
//     //four09_five13.hide();

//     //-------------------------3>4

//     three02_four01.position();
//     //three02_four01.hide();

//     three02_four02.position();
//     //three02_four02.hide();

//     three05_four03.position();
//     //three05_four03.hide();

//     three05_four04.position();
//     //three05_four04.hide();

//     three06_four05.position();
//     //three06_four05.hide();

//     three07_four06.position();
//     //three07_four06.hide();

//     three07_four07.position();
//     //three07_four07.hide();

//     three08_four08.position();
//     //three08_four08.hide();

//     three08_four09.position();
//     //three08_four09.hide();

//     // four02_five02.start = document.getElementById('111');
//     // four02_five02.end = document.getElementById('222');
//   },
//   onStop: self => {
    
//     four01_five01.position();
//     //four01_five01.show();

//     four02_five02.position();
//     //four02_five02.show('draw');

//     four04_five03.position();
//     //four04_five03.show('draw');
//     four04_five04.position();
//     //four04_five04.show('draw');

//     four05_five05.position();
//     //four05_five05.show('draw');

//     four06_five06.position();
//     //four06_five06.show('draw');

//     four07_five07.position();
//     //four07_five07.show('draw');
//     four07_five08.position();
//     //four07_five08.show('draw');

//     four08_five09.position();
//     //four08_five09.show('draw');
//     four08_five10.position();
//     //four08_five10.show('draw');

//     four09_five11.position();
//     //four09_five11.show('draw');
//     four09_five12.position();
//     //four09_five12.show('draw');
//     four09_five13.position();
//     //four09_five13.show('draw');

// //------------------------------3>4

//     three02_four01.position();
//     //three02_four01.show('draw');

//     three02_four02.position();
//     //three02_four02.show('draw');

//     three05_four03.position();
//     //three05_four03.show('draw');

//     three05_four04.position();
//     //three05_four04.show('draw');

//     three06_four05.position();
//     //three06_four05.show('draw');

//     three07_four06.position();
//     //three07_four06.show('draw');

//     three07_four07.position();
//     //three07_four07.show('draw');

//     three08_four08.position();
//     //three08_four08.show('draw');

//     three08_four09.position();
//     //three08_four09.show('draw');
//     // AnimEvent.add(function() {
//     //   four01_five01.position();});
//   }
// });
 




// let nativeScrollVelocity = smoother.scrollTrigger.getVelocity();

//console.log(smoother);

// if(true){ AnimEvent.add(function() {
//   line.position();
// }), false;}

  // new LeaderLine(
  //   document.getElementById('111'),
  //   LeaderLine.areaAnchor(document.getElementById('222'), {
  //     x: 80,
  //     y: (this.scrollY / -7.5),
  //     width: 50,
  //     height: 80,
  //   }),
  //   {endLabel: 'This is additional label'}
  // );

  // window.addEventListener('load', function() { // NOT `DOMContentLoaded`
  //   // Do something about HTML document
  //   var line = new LeaderLine(
  //     document.getElementById('start'),
  //     document.getElementById('end')
  //   );
  // });
