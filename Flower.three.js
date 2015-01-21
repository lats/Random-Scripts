//declare some variables and constants.
var camera, controls, scene, renderer;
var object, geometry, face, material;
var a = 0;
var i = 0;
var t = 0;
var p = 0;
var n = 0;
var o = 0;
var q = 0;
var u = 0;
//Array, used for later
var objectArray = [];
var stemArray = [];
var petalArray = [];
var flowerArray = [];
for (var a = 0; a <= 2; a++) {
    flowerArray[a] = [];
  }
var vertArray = [];
var wardArray = [];

//Create the scene
Init();
//animate the scene
animate();
function Init() {
	//Build Scene & Camera bounds
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera (90, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set(0,1,5);
	
	//What is the point of a blank scene?
	flower(0,2.5,1);	
	flower(1,-2.5,1);	

	//Build renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight ); document.body.appendChild( renderer.domElement );

	//There are 3 lights
	var Light1 = new THREE.AmbientLight(0x00FFFF);
	scene.add( Light1 );
}
function animate() {
	requestAnimationFrame(animate);
	render();
}
function render() {
	objectArray[0].rotation.y += 1/100;
	objectArray[1].rotation.y += 1/100;
	flowerArray[0][0].rotation.y += 1/100;
	flowerArray[0][1].rotation.y += 1/100;
	for (u = 0; u < p*2; u++){
		flowerArray[1][u].rotation.y += 1/100;
	}
	
	renderer.render(scene, camera); 
}
function normalbase(i) { 
	geometry = new THREE.CylinderGeometry(.75,1.5,1,4,false);
	geometry.colorsNeedUpdate = true;
	for ( faceIndex in geometry.faces )
	{
	face = geometry.faces[ faceIndex ];
	face.vertexColors[0] = new THREE.Color(0x8888aa);
	face.vertexColors[1] = new THREE.Color(0xaaaacc);
	face.vertexColors[2] = new THREE.Color(0xccccee);
	}
	texture = new THREE.ImageUtils.loadTexture('./img/ward.png');
	material = new THREE.MeshPhongMaterial({ map: texture, shininess: 100, vertexColors: THREE.VertexColors });
	objectArray[i] = new THREE.Mesh(geometry,material);
	objectArray[i].position.set(-2.5,0,0);
	scene.add(objectArray[i]);
	objectArray[i].geometry.dynamic = true;
	objectArray[i].geometry.verticesNeedUpdate = true;
	objectArray[i].geometry.normalsNeedUpdate = true;
}
function sentrybase(i) { 
	geometry = new THREE.SphereGeometry(1.5, 32, 16, Math.PI, Math.PI, 3*Math.PI/2);
	geometry.colorsNeedUpdate = true;
	for ( faceIndex in geometry.faces )
	{
	face = geometry.faces[ faceIndex ];
	face.vertexColors[0] = new THREE.Color(0x8888aa);
	face.vertexColors[1] = new THREE.Color(0xaaaacc);
	face.vertexColors[2] = new THREE.Color(0xccccee);
	}
	material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('./img/ward.png'), shininess: 100, vertexColors: THREE.VertexColors});
	material.side = THREE.DoubleSide;
	objectArray[i] = new THREE.Mesh(geometry,material);
	objectArray[i].position.set(2.5,-.5,0);
	scene.add(objectArray[i]);
	objectArray[i].geometry.dynamic = true;
	objectArray[i].geometry.verticesNeedUpdate = true;
	objectArray[i].geometry.normalsNeedUpdate = true;	
}
function flower(o,x,y) { 
	geometry = new THREE.CylinderGeometry(.05,.05,3.5,16,false);
	geometry.colorsNeedUpdate = true;
	for ( faceIndex in geometry.faces )
	{
	face = geometry.faces[ faceIndex ];
	face.vertexColors[0] = new THREE.Color(0x228844);
	face.vertexColors[1] = new THREE.Color(0x66aa88);
	face.vertexColors[2] = new THREE.Color(0x88ffaa);
	}
	material = new THREE.MeshPhongMaterial({ shininess: 100, vertexColors: THREE.VertexColors });
	stemArray[o] = new THREE.Mesh(geometry,material);
	stemArray[o].position.y = y;
	stemArray[o].position.x = x;
	scene.add(stemArray[o]);
	stemArray[o].geometry.dynamic = true;
	stemArray[o].geometry.verticesNeedUpdate = true;
	stemArray[o].geometry.normalsNeedUpdate = true;
	flowerArray[0].push(stemArray[o]);
	petal(p++,32,x,y+2);
	sphere(.5,i++,x,y+2);
}			
function petal(o,n,x,y) { 
	for ( p = 0; p < n ; p++ ){
	geometry = new THREE.Geometry();
	//Draw the points for the petal
	vertArray[0] = new THREE.Vector3(0,0,0);
	vertArray[1] = new THREE.Vector3(.5,1,.4);
	vertArray[2] = new THREE.Vector3(.75,2.5,.8);
	vertArray[3] = new THREE.Vector3(.5,3.5,1.2);
	vertArray[4] = new THREE.Vector3(.5,4.5,1.6);
	vertArray[5] = new THREE.Vector3(0,9,2);
	vertArray[6] = new THREE.Vector3(-.5,4.5,1.6);
	vertArray[7] = new THREE.Vector3(-.5,3.5,1.2);
	vertArray[8] = new THREE.Vector3(-.75,2.5,.8);
	vertArray[9] = new THREE.Vector3(-.5,1,.4);
	//No Really
	for (t = 0; t <= 9; t++)
	{ 
		geometry.vertices.push(vertArray[t]);
	}
	//Make the petal look like a petal
	geometry.faces.push( new THREE.Face3( 0, 1, 2 ));
	geometry.faces.push( new THREE.Face3( 2, 3, 4 ));
	geometry.faces.push( new THREE.Face3( 4, 5, 6 ));
	geometry.faces.push( new THREE.Face3( 6, 7, 8 ));
	geometry.faces.push( new THREE.Face3( 8, 9, 0 ));
	geometry.faces.push( new THREE.Face3( 0, 6, 8 )); 
	geometry.faces.push( new THREE.Face3( 0, 2, 4 ));
	geometry.faces.push( new THREE.Face3( 0, 4, 6 )); 
	geometry.colorsNeedUpdate = true;
	for ( faceIndex in geometry.faces )
	{
		face = geometry.faces[ faceIndex ];
		face.vertexColors[0] = new THREE.Color(0x446688);
		face.vertexColors[1] = new THREE.Color(0x88AACC);
		face.vertexColors[2] = new THREE.Color(0x6688AA);
	}
	material = new THREE.MeshPhongMaterial({ shininess: 100, vertexColors:THREE.VertexColors });
	material.side = THREE.DoubleSide;
	petalArray[p] = new THREE.Mesh(geometry,material);
	petalArray[p].scale.set(.3,.3,.3);
	petalArray[p].rotation.z = 80 * Math.PI/180;
  petalArray[p].rotation.z = (360/n)*p * Math.PI/180;
	petalArray[p].position.y = y;
	petalArray[p].position.x = x;
	scene.add(petalArray[p]);
	petalArray[p].geometry.dynamic = true;
	petalArray[p].geometry.verticesNeedUpdate = true;
	petalArray[p].geometry.normalsNeedUpdate = true;
	flowerArray[1].push(petalArray[p]);
	}
}		
function sphere(n,i,x,y) { //Spheres
	geometry = new THREE.SphereGeometry(n,32,32);
	geometry.colorsNeedUpdate = true;
	for ( faceIndex in geometry.faces )
	{
	face = geometry.faces[ faceIndex ];
	face.vertexColors[0] = new THREE.Color(0x332200,.7);
	face.vertexColors[1] = new THREE.Color(0x332200,.8);
	face.vertexColors[2] = new THREE.Color(0x332200,.9);
	}
	material = new THREE.MeshPhongMaterial({ shininess: 100, vertexColors: THREE.VertexColors });
	objectArray[i] = new THREE.Mesh(geometry,material);
	objectArray[i].position.set(x,y,0);
	scene.add(objectArray[i]);
	objectArray[i].geometry.dynamic = true;
	objectArray[i].geometry.verticesNeedUpdate = true;
	objectArray[i].geometry.normalsNeedUpdate = true;
}
