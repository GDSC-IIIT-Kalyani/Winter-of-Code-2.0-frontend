global.THREE = require("three");
const THREE = global.THREE;
const OrbitControls = require("three-orbit-controls")(THREE);
const loadFont = require("load-bmfont");
const createGeometry = require("three-bmfont-text");

//const threebm_MSDFShader = require("three-bmfont-text/shaders/msdf");
const threebm_MSDFShader = require("./normal_msdf");
const MSDFShader = require("./msdf");
console.log(MSDFShader)
console.log(threebm_MSDFShader)

// Font assets
const font_json = require("../assests/manifold-msdf.json")
const fontTexture = require("../assests/manifold-msdf.png")

const fontFile = require("../assests/Lato-Black.fnt");
const fontAtlas = require("../assests/Lato-Black.png");




const colors = require("nice-color-palettes");
const palette = colors[27];
const background = palette[4];

export default class WebGLFont {
  constructor(opts = {}) {

    this.options = opts;

    //Req. parameters
    this.vars = {
      word: this.options.word,
      position: [...this.options.position],
      rotation: [...this.options.rotation],
      zoom: this.options.zoom,
      vertex: this.options.vertex,
      fragment: this.options.fragment,
      index: this.options.index
    };
    this.container = document.getElementById("container")

    // Scene
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    this.camera.position.z = this.vars.zoom;

  
   this.width = this.container.offsetWidth;
   this.height = this.container.offsetHeight;

  this.renderer = new THREE.WebGLRenderer({alpha: true});
   //this.renderer.setClearColor(background);
   this.renderer.setSize(window.innerWidth, window.innerHeight);
   this.renderer.setPixelRatio(window.devicePixelRatio);


   this.container.appendChild(this.renderer.domElement);


    this.clock = new THREE.Clock();

    // 3d vieW controls . TURN OFF WHEN DEPLOYING (cant gib user too much power)!!
   // this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.camera.position.set(-100, -15, 0);
    console.log(this.camera)
    this.time = 0;
    this.mouse = {x:0,y:0}
    this.isPlaying = true;

    
    console.log(this.vars.index)
    if(this.vars.index == 1)                  // Index 1 shader requires xtra mehnat in implementation
    { 
      console.log("Enter on outsider")
      new THREE.TextureLoader().load(fontTexture,(t)=>{
        this.texture = t;
        this.addObjects();
        this.load_BMF();
        this.mouseEvents();
        //this.resize();
        this.onResize();
        window.addEventListener("resize", () => this.onResize(), false);
        this.render_unq();
        //this.setupResize();
      })
      
    }
    else
    {

      this.loadBMF();
      console.log("Entered on normal")
    }
  }

  loadBMF() 
  {
    // Create geometry of packed glyphs (glyph means character/symbol but sophisticated)
    loadFont(fontFile, (err, font) => {
      this.geometry = createGeometry({
        font: font,
        text: this.vars.word
      });
    });

    // Load texture containing font glyphs 
    this.loader = new THREE.TextureLoader();
    this.loader.load(fontAtlas, texture => {
      setTimeout(() => {
        this.init(this.geometry, texture);
        this.animate();
      }, 1500);
    });
  }

  init(geometry, texture) 
  {
   
    this.material = new THREE.ShaderMaterial(
      threebm_MSDFShader({
        vertexShader: this.vars.vertex,
        fragmentShader: this.vars.fragment,
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
        //color: 0xff0000,
        negate: false
      })
    );

    // Create time variable from prestablished shader uniforms
    this.material.uniforms.time = { type: "f", value: 0.0 };

    // Mesh
    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.position.set(...this.vars.position);
    this.mesh.rotation.set(...this.vars.rotation);
    this.scene.add(this.mesh);


    this.onResize();
    window.addEventListener("resize", () => this.onResize(), false);
    this.render();
  }

 
  mouseEvents()
  {
    window.addEventListener('mousemove',(event)=>{
      this.mouse = {
        x: event.clientX/window.innerWidth,
        y: event.clientY/window.innerHeight,
      }
      this.material_msdf.uniforms.uMouse.value = new THREE.Vector2(this.mouse.x, this.mouse.y)
      //this.material_msdf.uniformsNeedUpdate = true;
      this.material_point.uniforms.uMouse.value = new THREE.Vector2(this.mouse.x, this.mouse.y)
      //this.material_point.uniformsNeedUpdate = true;
    })
  }

  setupResize() 
  {
    window.addEventListener("resize", this.resize.bind(this));
  }

  resize() 
  {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  
  //load_BMF for using json format of fonts
  load_BMF() 
  {
  
    // Create geometry of packed glyphs
      this.geometry = createGeometry({
        text: this.vars.word,
        font: font_json,
        flipY: this.texture.flipY

      });
  
    
  
        this.material_msdf = new THREE.ShaderMaterial(
          MSDFShader({
            // vertexShader: this.vars.vertex,
            // fragmentShader: this.vars.fragment,
            map: this.texture,
            side: THREE.DoubleSide,
            transparent: true,
            color: 0xffffff
          }));
     

        this.mesh_text = new THREE.Mesh(this.geometry, this.material_msdf);
        this.mesh_text.position.set(...this.vars.position);
        this.mesh_text.rotation.set(...this.vars.rotation);
        console.log(this.mesh_text);
        this.scene.add(this.mesh_text);
  
        //this.render();

  }

  addObjects() 
  {
    let that = this;
    let number = 1000;
    let geo = new THREE.BufferGeometry();
    let pos = []
    for (let i = 0; i <number; i++) {
      let x = 3*(Math.random() - 0.5)
      let y = 3*(Math.random() - 0.5)
      let z = (Math.random() - 0.5)
      pos.push(x,y,z);
    }

    pos = new Float32Array(pos);


    geo.setAttribute('position', new THREE.BufferAttribute(pos,3));


    this.material_point = new THREE.ShaderMaterial({
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable"
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        viewport: {  value: new THREE.Vector2(window.innerWidth,window.innerHeight) },
        uMouse: {  value: new THREE.Vector2(0,0) },
        resolution: { value: new THREE.Vector4() },
      },
      // wireframe: true,
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertexShader: this.vars.vertex,
      fragmentShader: this.vars.fragment,
    });

    // this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    this.points = new THREE.Points(geo, this.material_point);
    console.log(this.points);
    this.scene.add(this.points);
    
  }


  stop() 
  {
    this.isPlaying = false;
  }

  play() 
  {
    if(!this.isPlaying){
      this.render_unq()
      this.isPlaying = true;
    }
  }

  render_unq() 
  {
    // console.log(this.material_msdf);
    // console.log(this.material_point);
    if (!this.isPlaying) return;
    this.time += 0.05;
    this.material_point.uniforms.time.value = this.time;
    this.material_point.uniformsNeedUpdate = true;
    if(this.material_msdf) 
    {
      this.material_msdf.uniforms.time.value = this.time;
      this.material_msdf.uniformsNeedUpdate = true;
      //console.log(this.materialText.uniforms);
    }
    requestAnimationFrame(this.render_unq.bind(this));
    this.renderer.render(this.scene, this.camera);
  }



  onResize() 
  {
    let w = window.innerWidth;
    let h = window.innerHeight;

    w < 640
      ? (this.camera.position.z = 250)
      : (this.camera.position.z = this.vars.zoom);

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(w, h);
  }

  animate(){
    requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render(){
    // Update time uniform
    this.mesh.material.uniforms.time.value = this.clock.getElapsedTime();
    this.mesh.material.uniformsNeedUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }
}
