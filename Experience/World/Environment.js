import * as THREE from "three";
import Experience from "../Experience.js";

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
        this.sunLight.shadow.camera.far = 20;
        this.sunLight.shadow.mapSize.set(1024, 1024);
        this.sunLight.position.set(-1.5, 7, 3);
        this.scene.add(this.sunLight);
        this.ambientLight = new THREE.AmbientLight("#ffffff", 0.75);
        this.scene.add(this.ambientLight);
    }
    resize() {
        
    }

    update(){
    }
}