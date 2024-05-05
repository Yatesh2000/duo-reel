function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

function crsrMaker() {
  var crsr = document.querySelector("#cursor");
  var main = document.querySelector("#main");

  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px";
    crsr.style.top = dets.y + 20 + "px";
  });
}
crsrMaker();

function jabCrsrVideoParAaya() {
  var page1video = document.querySelector("#page1 video");
  var crsr = document.querySelector("#cursor");

  page1video.addEventListener("mouseenter", function (dets) {
    crsr.style.display = "flex";
    crsr.style.alignItems = "center";
    crsr.style.justifyContent = "center";
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr.innerHTML = "SOUND ON";
    crsr.style.borderRadius = "20px";
    crsr.style.padding = "15px 60px";

  });

  page1video.addEventListener("mouseleave", function () {
    crsr.innerHTML = "";
    crsr.style.borderRadius = "50%";
    crsr.style.padding = "0px";
    crsr.style.display = "flex";
    crsr.style.alignItems = "center";
    crsr.style.justifyContent = "center";
  });
}

jabCrsrVideoParAaya();


var tl0 = gsap.timeline({
  

})

tl0.from("#page1 h1",{
  y: 50,
  rotate: "8deg",
  transformOrigin: "0% 100%",

  opacity: 1,
  duration: 0.8
},"hey")


tl0.from("#page1 h2",{
  y: 50,
  rotate: "8deg",
  transformOrigin: "0% 100%",


  opacity: 1,
  duration: 0.8
}, "hey")

tl0.from('#page1>h3',{
  opacity: 0,
  y: 50
})

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    // markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true
  },
});

tl.to(
  "#page1 h1",
  {
    x: -150,
    duration: 3,
    filter: "blur(10px)",
    opacity: 0,
  },
  "a"
);

tl.to(
  "#page1 h2",
  {
    x: 150,
    filter: "blur(10px)",
    duration: 3,
    opacity: 0,

  },
  "a"
);

tl.to(
  "#page1 h3",
  {
    filter: "blur(8px)",
    duration: 3,
  },
  "a"
);

tl.to("#page1 video", {
  y: "-30vw",
  height: "100%",
  // filter: "blur(8px)",
  duration: 3,
  width: "90%",

  // scrollTrigger: {
  //   trigger: "#page1",
  //   scroller: "#main",
  //   // markers: true,
  //   start: "top -10%",
  //   end: "top -100%",
  //   scrub: 1,
  // },
},"a");

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    // markers: true,
    start: "top -80%",
    end: "top -82%",
    scrub: 1,
  },
});

tl2.to("#main", {
  backgroundColor: "white",
  color: "black",
});

tl2.to("#page2-left h2, #page2-right p, #page2 h1", {
  color: "black",
});

function page3ImageChanging() {
  var page3RightImg = document.querySelector("#page3-right-img img");

  var page3Elem = document.querySelectorAll("#page3-left-elem1");

  var pageElem = document.querySelector("#page3-elems .elem1");
  var pageElem2 = document.querySelector("#page3-elems .elem2");
  var page3Elem3 = document.querySelector("#page3-elems .elem3");

  page3Elem.forEach(function (val) {
    var page3ExpandBtn = val.querySelector(
      "#page3-left-elem1 #branding button"
    );

    val.addEventListener("mouseenter", function () {
      page3ExpandBtn.style.display = "initial";
    });

    val.addEventListener("mouseleave", function () {
      page3ExpandBtn.style.display = "none";
    });
  });

  pageElem.addEventListener("mouseenter", function () {
    page3RightImg.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  });

  pageElem2.addEventListener("mouseenter", function () {
    page3RightImg.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  });

  page3Elem3.addEventListener("mouseenter", function () {
    page3RightImg.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  });
}

page3ImageChanging();




var tl3Box = gsap.timeline({
  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    // markers: true,
    start: "top 30%",
    end: "top 0%",
    scrub: 3
  }

})

tl3Box.from("#page3-left-elem1",{
  stagger: 0.7,
  y: 40,
  opacity: 0

})

function learn3Btn(){
  var learn3btn = document.querySelector("#learn3")
var crsr = document.querySelector("#cursor")

learn3btn.addEventListener("mouseenter", function(){
  learn3btn.style.backgroundColor = "black"
  learn3btn.style.color = "white"
  crsr.style.scale = 3
})


learn3btn.addEventListener("mouseleave", function(){
  learn3btn.style.backgroundColor = "#EDBFFF"
  learn3btn.style.color = "black"
  crsr.style.scale = 1
})
}

learn3Btn()



gsap.from("#page4>h1",{
  y: 100,
  opacity: 0,
  duration: 0.8,
  transformOrigin: "0% 100%",
  rotate: "10deg",
  scrollTrigger:{
    trigger:"#page4",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 69%",
    scrub: 2
  }
})




function page4Part1Part2(){
  var part1LeftImage = document.querySelector("#page4-left-image")
var part1rightVideo = document.querySelector("#page4-right-video")

var part2LeftVideo= document.querySelector("#page4-part2-left")
var part2RightImage = document.querySelector('#page4-part2-top')
var crsr = document.querySelector("#cursor")

part1LeftImage.addEventListener("mouseenter", function(dets){
    crsr.innerHTML = "View"
    crsr.style.display = "flex";
    crsr.style.alignItems = "center";
    crsr.style.justifyContent = "center";
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsr.style.borderRadius = "20px";
    // crsr.style.height = "20px"
    crsr.style.padding = " 15px 40px"
    // crsr.style.width = "100px"


})


part1LeftImage.addEventListener("mouseleave", function(){

    crsr.innerHTML = "";
    crsr.style.borderRadius = "50%";
    crsr.style.padding = "0px";
    crsr.style.display = "flex";
    crsr.style.alignItems = "center";
    crsr.style.justifyContent = "center";
    // crsr.style.height = "15px"
    // crsr.style.width = "15px"
  

})


part1rightVideo.addEventListener("mouseenter", function(dets){
  crsr.innerHTML = "View"
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr.style.borderRadius = "20px";
  // crsr.style.height = "20px"
  crsr.style.padding = " 15px 40px"
  // crsr.style.width = "100px"


})


part1rightVideo.addEventListener("mouseleave", function(){

  crsr.innerHTML = "";
  crsr.style.borderRadius = "50%";
  crsr.style.padding = "0px";
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  // crsr.style.height = "15px"
  // crsr.style.width = "15px"


})



part2LeftVideo.addEventListener("mouseenter", function(dets){
  crsr.innerHTML = "View"
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr.style.borderRadius = "20px";
  // crsr.style.height = "20px"
  crsr.style.padding = " 15px 40px"
  // crsr.style.width = "100px"


})


part2LeftVideo.addEventListener("mouseleave", function(){

  crsr.innerHTML = "";
  crsr.style.borderRadius = "50%";
  crsr.style.padding = "0px";
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  // crsr.style.height = "15px"
  // crsr.style.width = "15px"


})



part2RightImage.addEventListener("mouseenter", function(dets){
  crsr.innerHTML = "View"
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsr.style.borderRadius = "20px";
  // crsr.style.height = "20px"
  crsr.style.padding = " 15px 40px"
  // crsr.style.width = "100px"


})


part2RightImage.addEventListener("mouseleave", function(){

  crsr.innerHTML = "";
  crsr.style.borderRadius = "50%";
  crsr.style.padding = "0px";
  crsr.style.display = "flex";
  crsr.style.alignItems = "center";
  crsr.style.justifyContent = "center";
  // crsr.style.height = "15px"
  // crsr.style.width = "15px"


})

}

page4Part1Part2()



var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    // markers: true,
    start: "top -220%",
    end: "top -222%",
    scrub: 1,
  },
});

tl3.to("#main", {
  backgroundColor: "#0f0d0d",
  color: "white",
});


function page5Photo(){
  var boxCont = document.querySelectorAll(".box-cont")
var crsr = document.querySelector("#cursor");


boxCont.forEach(function(val){

var h2 = val.querySelector(".box-cont h2")
var h3 = val.querySelector("#box-cont-part2 h3")
var h4 = val.querySelector("#box-cont-part2 h4")



  
  val.addEventListener("mouseenter", function(){
    var att =  val.getAttribute("data-image")
    crsr.style.width = "430px"
    crsr.style.height = "320px"
    crsr.style.borderRadius = "0"
    crsr.style.backgroundImage = `url(${att})`
    h2.style.color = "white"
    h3.style.color = "white"
    h4.style.color = "white"


  })



  val.addEventListener("mouseleave", function(){
    crsr.style.width = "15px"
    crsr.style.height = "15px"
    crsr.style.borderRadius = "50%"
    crsr.style.backgroundImage = `none`
    h2.style.color = "rgb(71, 70, 70)"
    h3.style.color = "rgb(71, 70, 70)"
    h4.style.color = "rgb(71, 70, 70)"


  })
})
}

page5Photo()




gsap.from("#page55-top h1",{
  y: 100,
  opacity: 0,
  duration: 0.8,
  transformOrigin: "0% 100%",
  rotate: "10deg",
  scrollTrigger:{
    trigger:"#page55",
    scroller: "#main",
    // markers: true,
    start: "top 70%",
    end: "top 69%",
    scrub: 2
  }
})


gsap.from("#page6 .box-cont",{
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.3,
  transformOrigin: "0% 100%",
  rotate: "10deg",
  scrollTrigger:{
    trigger:"#page6",
    scroller: "#main",
    // markers: true,
    start: "top -55%",
    end: "top -95%",
    scrub: 2
  }
})


function page55Circle(){

  var crsr = document.querySelector("#cursor")
  var circle55 = document.querySelector("#page55-circle")
  var main = document.querySelector("#main")

  circle55.addEventListener("mouseenter", function(){
    circle55.style.backgroundColor = "white"
    crsr.style.display = "none"
    
  })


  circle55.addEventListener("mouseleave", function(){
    circle55.style.backgroundColor = "#EDBFFF"
    crsr.style.display = "initial"
    
  })

}

page55Circle()



var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page55",
    scroller:"#main",
    // markers: {
    //   horizontal: true
    // },
    start: "top 0%",
    end: "top -100%",
    scrub: true,
    pin: true
  }

})


tl4.to("#page55-bottom #page55-box",{
  x: "-130vw",
  
}, "yashu")

tl4.to("#page55-innerLine",{
  width: "100%",

},"yashu")





