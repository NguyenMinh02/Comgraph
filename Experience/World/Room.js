import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room{
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;

        this.setModel();
        this.setAnimation();
    }
   
    setModel(){
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow  = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }
        });
        this.scene.add(this.actualRoom);
    }
    resize() {
        
    }

    update(){
        this.mixer.update(this.time.delta * 0.0009)
    }

    setAnimation(){
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        console.log(this.room)
        this.room.animations.forEach(
            (a) => {
                this.mixer.clipAction(a).play();
            }
            
        )
        
    }
}