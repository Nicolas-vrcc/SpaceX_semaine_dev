// // get element we're going to append the renderer to
// const mars = document.querySelector('.marsplanet3d')
// console.log(mars);
// // environment setup
// let camera = new THREE.PerspectiveCamera(45, 500 / 500, 0.1, 10000)
// let light = new THREE.PointLight(0xFFFFFF, 2, 5000)
// camera.position.set(1300, 0, 0)
// let scene = new THREE.Scene()
//
// camera.lookAt(scene.position)
// light.position.set(2000, 2000, 1500)
// scene.add(light)
//
// // renderer
// let renderer = new THREE.WebGLRenderer({antialiasing : true});
// renderer.setSize(500, 500)
// mars.appendChild(renderer.domElement);
//
// // load images
// THREE.ImageUtils.crossOrigin = '';
// const loader = new THREE.TextureLoader()
//
// //creates the shape
// var geometry = new THREE.SphereGeometry( 300, 32, 32 )
// // material used for the apperance of the spere
// var material = new THREE.MeshPhongMaterial()
// // texture
// material.map = THREE.ImageUtils.loadTexture('images/mars.jpg')
// // making it more realistic with bumps
// material.bumpMap = THREE.ImageUtils.loadTexture('images/marsbump.jpg')
// material.bumpScale = 15
// // deleting the shiny effect
// material.specular = new THREE.Color('#000000');
//
// var sphere = new THREE.Mesh( geometry, material )
//
// // append the shape to the scene
// scene.add( sphere )
//
//
// window.addEventListener('keydown', (e) =>{
// 	console.log(e.keyCode)
// 	if(e.keyCode == 39){
// 		sphere.rotation.y += 0.01
// 	}
// 	if(e.keyCode == 37){
// 		sphere.rotation.y -= 0.01
// 	}
// })
//
// // render the renderer frame
// const animate = () => {
// 	requestAnimationFrame( animate )
//   sphere.rotation.y += 0.001;
// 	renderer.clear()
// 	renderer.render( scene, camera )
// }
// animate()
