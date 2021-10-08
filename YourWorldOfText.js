(async function(){
$alert({msg:'To see more of the screen, rezize the window, or put it in fullscreen.',title:"Note",icon:"https://i.imgur.com/zzz1KA1.png"});
  $window({
    icon: "apps/chat.gif",
    title: "Your World Of Text",
    width: 500,
    height: 470,
    animationIn: "",
    animationOut: "hinge",
    url: "https://www.yourworldoftext.com"
  })
})
