import * as THREE from "three";
import Experience from "../Experience.js";
import GSAP from "gsap";
export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setSunlight();
    }
   
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight("#ffffff", 3);
        
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.left=-7;
        this.sunLight.shadow.camera.right=7;
        this.sunLight.shadow.camera.far = 20;
        this.theme = this.experience.theme; 
        this.sunLight.shadow.mapSize.set(1024*4, 1024*4);
        var helper2 = new THREE.CameraHelper(this.sunLight.shadow.camera);
        //this.scene.add(helper2);
        this.sunLight.position.set(-4.5, 7, 3);
        this.scene.add(this.sunLight);
        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.75);
        this.scene.add(this.ambientLight);
        this.spotLight = new THREE.SpotLight( 0xFFFF00 );
        this.spotLight.position.set( -0.808683, 0.892429, 0.905544 );
        this.spotLight.penumbra=0.1;
        this.spotLight.target.position.set(-0.8,-15,1+0.8);
        this.spotLight.target.updateMatrixWorld();
        this.spotLight.castShadow = true;
        this.spotLight.intensity= 0;
        this.spotLight.decay = 0.4;
        this.spotLight.shadow.mapSize.width = 1024;
        this.spotLight.shadow.mapSize.height = 1024;
        this.spotLight.shadow.camera.near = 0.1;
        this.spotLight.shadow.camera.far = 4000;
        this.spotLight.shadow.camera.fov = 50;
        this.spotLight2= new THREE.SpotLight( 0xFFFF00 );
        this.spotLight2.copy(this.spotLight);
        this.spotLight2.position.set(.414067,0.892429,-0.905544-0.3 );
        this.spotLight2.target.position.set(0,-15,-3);
        this.spotLight2.target.updateMatrixWorld();
        this.spotLight3 = new THREE.SpotLight( 0xFFFFFF );
        this.spotLight3.copy(this.spotLight);
        this.spotLight3.color = new THREE.Color( 0xFFFFFF);
        this.spotLight3.angle= Math.PI/10;
        this.spotLight3.position.set(0.12278582900762558,0.602553129196167+0.1,-0.21854272484779358);
        this.spotLight3.target.position.set(5.042092800140381,  2.2108606338500977,  3.5512826442718506);
        this.spotLight3.shadow.mapSize.width = 1024*4;
        this.spotLight3.shadow.mapSize.height = 1024*4;
        this.spotLight3.shadow.camera.near = 0.1;
        this.spotLight3.shadow.camera.far = 6000;
        this.spotLight3.shadow.camera.fov = 20;
        this.spotLight3.penumbra=0.5;
        this.spotLight3.shadow.focus = 2;
        const helper = new THREE.CameraHelper( this.spotLight3.shadow.camera );
        //this.scene.add( helper );
        this.spotLight3.target.updateMatrixWorld();
        /*
        const spotLightHelper3 = new THREE.SpotLightHelper( this.spotLight3 );
        this.scene.add( spotLightHelper3 );
        const spotLightHelper2 = new THREE.SpotLightHelper( this.spotLight2 );
        this.scene.add( spotLightHelper2 );
        const spotLightHelper = new THREE.SpotLightHelper( this.spotLight );
        this.scene.add( spotLightHelper );
        */
        this.scene.add(this.spotLight);
        this.scene.add(this.spotLight2);
        this.scene.add(this.spotLight3);



    }
    resize() {
        
    }

    switchTheme(theme) {
        console.log(this.sunLight);
        if (theme === "dark") {
            GSAP.to(this.sunLight.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.ambientLight.color, {
                r: 0.17254901960784313,
                g: 0.23137254901960785,
                b: 0.6862745098039216,
            });
            GSAP.to(this.sunLight, {
                intensity: 0.78,
            });
            GSAP.to(this.ambientLight, {
                intensity: 0.78,
            });
            GSAP.to(this.spotLight, {
                intensity: 3,
            });
            GSAP.to(this.spotLight2, {
                intensity: 3,
            });
            GSAP.to(this.spotLight3, {
                intensity: 4,
            });
        } else {
            GSAP.to(this.sunLight.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(this.ambientLight.color, {
                r: 255 / 255,
                g: 255 / 255,
                b: 255 / 255,
            });
            GSAP.to(this.sunLight, {
                intensity: 3,
            });
            GSAP.to(this.ambientLight, {
                intensity: 1,
            });
            GSAP.to(this.spotLight, {
                intensity: 0,
            });
            GSAP.to(this.spotLight2, {
                intensity: 0,
            });
            GSAP.to(this.spotLight3, {
                intensity: 1,
            });
        }
    }
    update(){
    }

    
}