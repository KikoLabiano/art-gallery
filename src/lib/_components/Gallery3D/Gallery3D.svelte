<script lang="ts">
  import { onMount } from 'svelte';

  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  // import { Reflector } from 'three/examples/jsm/objects/Reflector.js';
  import { Sky } from 'three/examples/jsm/objects/Sky.js';

  export let cuadro: string;

  const SCREEN_WIDTH = window.innerWidth - 225;
  const SCREEN_HEIGHT = window.innerHeight - 100;

  let container;

  let camera, controls, scene, renderer;

  // let groundMirror;
  let sky, sun;
  let texturePainting;

  console.log(cuadro);

  onMount(() => {
    init();
    animate();
  });

  $: if (cuadro) {
    console.log(cuadro, texturePainting, renderer);
    if (renderer) renderer.clear();
    // render();
  }

  const init = () => {
    camera = new THREE.PerspectiveCamera(45, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 2000000);
    camera.position.z = 6000;

    scene = new THREE.Scene();

    const imageCanvas = document.createElement('canvas');
    const context = imageCanvas.getContext('2d');

    imageCanvas.style.marginLeft = 'auto';
    imageCanvas.style.marginRight = 'auto';
    imageCanvas.width = imageCanvas.height = 128;

    context.fillStyle = '#444';
    context.fillRect(0, 0, 128, 128);

    context.fillStyle = '#fff';
    context.fillRect(0, 0, 64, 64);
    context.fillRect(64, 64, 64, 64);

    const textureCanvas = new THREE.CanvasTexture(imageCanvas);
    textureCanvas.repeat.set(100, 100);
    textureCanvas.wrapS = THREE.RepeatWrapping;
    textureCanvas.wrapT = THREE.RepeatWrapping;

    const textureCanvas2 = textureCanvas.clone();
    textureCanvas2.magFilter = THREE.NearestFilter;
    textureCanvas2.minFilter = THREE.NearestFilter;

    const materialCanvas = new THREE.MeshBasicMaterial({ map: textureCanvas, color: 0xffffff, reflectivity: 0.5 });
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
      mesh.material.needsUpdate = true;
      mesh.castShadow = true;

      // const mesh2 = new THREE.Mesh(geometry, materialPainting2);

      // const groundGeometry = new THREE.PlaneGeometry(image.width + 100, 3000);
      // groundMirror = new Reflector(groundGeometry, {
      //   clipBias: 0.003,
      //   textureWidth: window.innerWidth * window.devicePixelRatio,
      //   textureHeight: window.innerHeight * window.devicePixelRatio,
      //   color: 0x777777
      // });
      // groundMirror.position.y = -image.height / 2;
      // groundMirror.rotateX(-Math.PI / 2);
      // scene.add(groundMirror);

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
          new THREE.MeshBasicMaterial({
            color: 0x000000,
            opacity: 0.75,
            transparent: false
          })
        );
        meshShadow.position.y = (-1.1 * image.height) / 2;
        meshShadow.position.z = (-1.1 * image.height) / 2;
        meshShadow.rotation.x = -Math.PI / 2;
        meshShadow.scale.x = (1.1 * image.width) / 100;
        meshShadow.scale.y = (1.1 * image.height) / 100;
        zscene.add(meshShadow);

        console.log(image.height);
        meshCanvas.position.y = -image.height / 2;
      };
      addPainting(scene, mesh);
    };

    texturePainting = new THREE.TextureLoader().load(cuadro, callbackPainting);

    const materialPainting = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texturePainting });

    texturePainting.minFilter = texturePainting.magFilter = THREE.LinearFilter;
    texturePainting.mapping = THREE.UVMapping;

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    renderer.autoClear = false;

    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.listenToKeyEvents(window); // optional

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = true;

    controls.minDistance = 500;
    controls.maxDistance = 9500;

    controls.maxPolarAngle = Math.PI;

    // Add Sky
    sky = new Sky();
    sky.scale.setScalar(450000);
    scene.add(sky);

    sun = new THREE.Vector3();

    const effectController = {
      turbidity: 2,
      rayleigh: 3,
      mieCoefficient: 0.005,
      mieDirectionalG: 0.7,
      elevation: 2.8,
      azimuth: 0,
      exposure: renderer.toneMappingExposure
    };

    const uniforms = sky.material.uniforms;
    uniforms['turbidity'].value = effectController.turbidity;
    uniforms['rayleigh'].value = effectController.rayleigh;
    uniforms['mieCoefficient'].value = effectController.mieCoefficient;
    uniforms['mieDirectionalG'].value = effectController.mieDirectionalG;

    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);
    const theta = THREE.MathUtils.degToRad(effectController.azimuth);

    sun.setFromSphericalCoords(1, phi, theta);

    uniforms['sunPosition'].value.copy(sun);

    renderer.toneMappingExposure = effectController.exposure;

    // const light = new THREE.DirectionalLight(0xffffff, 1, 10000);
    // light.position.set(0, 1, 1); //default; light shining from top
    // light.castShadow = true; // default false
    // scene.add(light);

    // //Set up shadow properties for the light
    // light.shadow.mapSize.width = 512; // default
    // light.shadow.mapSize.height = 512; // default
    // light.shadow.camera.near = 0.5; // default
    // light.shadow.camera.far = 500; // default

    renderer.render(scene, camera);

    window.addEventListener('resize', onWindowResize, false);
    renderer.render(scene, camera);

    // document.addEventListener('mousemove', onDocumentMouseMove);
    // document.addEventListener('wheel', onDocumentMouseWheel, { passive: false });
  };

  // const onDocumentMouseWheel = event => {
  //   event.preventDefault();
  //   camera.position.z += event.deltaY / 500;
  //   // mouseZ = event.wheelDelta;
  // };

  const onWindowResize = () => {
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  };

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

<div class:canvasWrapper={true} bind:this={container} id="container" />

<style src="./Gallery3D.scss" type="text/scss"></style>
