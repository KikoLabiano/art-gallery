<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  export let cuadro: string;

  const SCREEN_WIDTH = window.innerWidth;
  const SCREEN_HEIGHT = window.innerHeight;

  let container;

  let camera, controls, scene, scene2, renderer;

  let mouseX = 0,
    mouseY = 0,
    mouseZ = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  onMount(() => {
    init();
    animate();
  });

  const init = () => {
    camera = new THREE.PerspectiveCamera(35, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 5000);
    camera.position.z = 1500;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // scene.fog = new THREE.Fog(0x000000, 1500, 4000);

    // scene2 = new THREE.Scene();
    // scene2.background = new THREE.Color(0x000000);
    // scene2.fog = new THREE.Fog(0x000000, 5000, 2000);

    // GROUND

    const imageCanvas = document.createElement('canvas');
    const context = imageCanvas.getContext('2d');

    imageCanvas.width = imageCanvas.height = 128;

    context.fillStyle = '#444';
    context.fillRect(0, 0, 128, 128);

    context.fillStyle = '#fff';
    context.fillRect(0, 0, 64, 64);
    context.fillRect(64, 64, 64, 64);

    const textureCanvas = new THREE.CanvasTexture(imageCanvas);
    textureCanvas.repeat.set(1000, 1000);
    textureCanvas.wrapS = THREE.RepeatWrapping;
    textureCanvas.wrapT = THREE.RepeatWrapping;

    const textureCanvas2 = textureCanvas.clone();
    textureCanvas2.magFilter = THREE.NearestFilter;
    textureCanvas2.minFilter = THREE.NearestFilter;

    const materialCanvas = new THREE.MeshBasicMaterial({ map: textureCanvas });
    // const materialCanvas2 = new THREE.MeshBasicMaterial({ color: 0xffccaa, map: textureCanvas2 });

    const geometry = new THREE.PlaneGeometry(100, 100);

    const meshCanvas = new THREE.Mesh(geometry, materialCanvas);
    meshCanvas.rotation.x = -Math.PI / 2;
    meshCanvas.scale.set(1000, 1000, 1000);

    // const meshCanvas2 = new THREE.Mesh(geometry, materialCanvas2);
    // meshCanvas2.rotation.x = -Math.PI / 2;
    // meshCanvas2.scale.set(1000, 1000, 1000);

    // PAINTING

    const callbackPainting = function () {
      const image = texturePainting.image;

      // texturePainting2.image = image;
      // texturePainting2.needsUpdate = true;

      scene.add(meshCanvas);
      // scene2.add(meshCanvas2);

      const geometry = new THREE.PlaneGeometry(100, 100);
      const mesh = new THREE.Mesh(geometry, materialPainting);
      // const mesh2 = new THREE.Mesh(geometry, materialPainting2);

      // addPainting(scene2, mesh2);

      const addPainting = (zscene, zmesh) => {
        zmesh.scale.x = image.width / 100;
        zmesh.scale.y = image.height / 100;

        zscene.add(zmesh);

        const meshFrame = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000000 }));
        meshFrame.position.z = -10.0;
        meshFrame.scale.x = (1.1 * image.width) / 100;
        meshFrame.scale.y = (1.1 * image.height) / 100;
        zscene.add(meshFrame);

        const meshShadow = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({ color: 0x000000, opacity: 0.75, transparent: false })
        );
        meshShadow.position.y = (-1.1 * image.height) / 2;
        meshShadow.position.z = (-1.1 * image.height) / 2;
        meshShadow.rotation.x = -Math.PI / 2;
        meshShadow.scale.x = (1.1 * image.width) / 100;
        meshShadow.scale.y = (1.1 * image.height) / 100;
        zscene.add(meshShadow);

        // const floorHeight = -3.117 * image.height;
        meshCanvas.position.y = -image.height;
      };
      addPainting(scene, mesh);
    };

    const texturePainting = new THREE.TextureLoader().load(cuadro, callbackPainting);
    // const texturePainting2 = new THREE.Texture();
    const materialPainting = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texturePainting });
    // const materialPainting2 = new THREE.MeshBasicMaterial({ color: 0xffccaa, map: texturePainting2 });

    // texturePainting2.minFilter = texturePainting2.magFilter = THREE.NearestFilter;
    texturePainting.minFilter = texturePainting.magFilter = THREE.LinearFilter;
    texturePainting.mapping = THREE.UVMapping;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.autoClear = false;

    renderer.domElement.style.position = 'relative';
    container.appendChild(renderer.domElement);

    console.log(renderer);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = 500;
    controls.maxDistance = 3000;

    controls.maxPolarAngle = Math.PI / 2;

    document.addEventListener('mousemove', onDocumentMouseMove);
    // document.addEventListener('wheel', onDocumentMouseWheel, { passive: false });
  };

  const onDocumentMouseMove = event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  // const onDocumentMouseWheel = event => {
  //   event.preventDefault();
  //   camera.position.z += event.deltaY / 500;
  //   // mouseZ = event.wheelDelta;
  // };

  const animate = () => {
    requestAnimationFrame(animate);

    render();
  };

  const render = () => {
    // camera.position.x += (mouseX - camera.position.x) * 0.05;
    // camera.position.y += (-(mouseY - 200) - camera.position.y) * 0.05;
    // camera.position.z += mouseZ;

    camera.lookAt(scene.position);

    renderer.clear();
    // renderer.setScissorTest(true);

    // renderer.setScissor(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.render(scene, camera);

    // renderer.setScissor(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2 - 2, SCREEN_HEIGHT);
    // renderer.render(scene2, camera);

    // renderer.setScissorTest(false);
  };
</script>

<div bind:this={container} id="container" />
