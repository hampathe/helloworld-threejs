window.addEventListener("load", event => main());
window.addEventListener("resize", event => resize());

const resize = () => {

	console.log("resize", window.innerWidth, window.innerHeight);

};

const createCube = (color, x, y, z) => {

	// create cube geom and material
	var geometry = new THREE.BoxGeometry();
	var material = new THREE.MeshBasicMaterial( { color: color } );
	var cube = new THREE.Mesh( geometry, material );
	return cube;
};


const main = () => {

	console.log("hello world");

	// initialisation de la scène
	var scene = new THREE.Scene();

	// init camera
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

	// web gl renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );
	
	var cube = createCube("#FF0000");
	// add cube to scene
	scene.add( cube );

	var recube = createCube("#00FF00");
	// add cube to scene
	scene.add( recube );
	


	camera.position.z = 5;

	animate();

	// animate loop
	function animate() {
		requestAnimationFrame( animate ); // request next frame

		// move cube
		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		// move cube
		recube.rotation.x -= 0.01;
		recube.rotation.y -= 0.01;

		// render !
		renderer.render( scene, camera );
	}

};


