




/*
     FILE ARCHIVED ON 4:54:55 мар 26, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 3:30:13 ноя 27, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function init(){var e=75,n=.1,r=4e3,o=336,t=phoneParent.css("height");t=parseInt(t.split("p")[0]),clock=new THREE.Clock,clock.start(),timer=1,container=document.getElementById("phone-image"),renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),renderer.setSize(o,t),renderer.setClearColor(0,0),container.appendChild(renderer.domElement),scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(e,o/t,n,r),scene.add(camera),camera.position.z=10,loadPhone(),light=new THREE.PointLight(16777215,1),light.position.z=-5,camera.add(light),renderer.render(scene,camera),loop()}function loadPhone(){function e(){o.load("/art/home/screen"+t+".png",function(n){screens[t-1].image=n,screens[t-1].needsUpdate=!0,6>t&&e(++t)})}var n=new THREE.Texture,r=new THREE.Texture,o=new THREE.ImageLoader;o.load("/art/home/Iphone5_diffuse-gold.png",function(e){n.image=e,n.needsUpdate=!0}),o.load("/art/home/Iphone5_specular.png",function(e){r.image=e,r.needsUpdate=!0});for(var t=0;6>t;t++)screens[t]=new THREE.Texture;var t=1;e(t);var a=new THREE.OBJLoader;a.load("/art/home/iPhone5.obj",function(e){var r=e.children[0],o=new THREE.MeshPhongMaterial({map:n,transparent:!1,opacity:.5});r.material=o,r.scale.x=r.scale.y=r.scale.z=.6,iphone=r;var t=new THREE.PlaneGeometry(400,700,20,20),a=new THREE.MeshLambertMaterial({color:16777215,side:THREE.DoubleSide,map:screens[currentScreen]});iscreen=new THREE.Mesh(t,a),iscreen.position.z=31.5,iscreen.position.x=1,iscreen.position.y=-3,r.add(iscreen),scene.add(r),r.material.specular=new THREE.Color(179/255,171/255,141/255),console.log(r)})}function flipForward(){5>flipGoal&&flipTo(++flipGoal)}function flipBackward(){flipGoal>0&&flipTo(--flipGoal)}function flipTo(e){0>e?e=0:e>5&&(e=5),currentScreen!=e&&(1>timer?(clearTimeout(nextFlip),nextFlip=setTimeout(flipTo,1100*(1-timer),e)):(timer=0,angleGoal=e>currentScreen?2*-Math.PI:2*Math.PI,setTimeout(function(){iscreen.material.map=screens[e],currentScreen=e},500)))}function loop(){requestAnimationFrame(loop);var e=clock.getDelta();timer+=e,transforms.yRot=1>timer?THREE.Math.smootherstep(timer,0,1)*angleGoal:0,iphone.rotation.x=transforms.xRot+transforms.xOffset,iphone.rotation.y=transforms.yRot+transforms.yOffset,iphone.position.z=transforms.zPos,renderer.render(scene,camera)}function onMouseMove(e){var n=window.innerWidth,r=window.innerHeight;transforms.xOffset=2*-((r-e.clientY)/r-.5)*Math.PI/16,transforms.yOffset=2*-((n-e.clientX)/n-.5)*Math.PI/16}var scene,camera,renderer,clock,timer,math,iphone=new THREE.Object3D,iscreen,currentScreen=0,screens=[],transforms={xRot:0,yRot:0,zPos:-500,xOffset:0,yOffset:0},angleGoal,flipGoal=0,nextFlip;window.onmousemove=onMouseMove;