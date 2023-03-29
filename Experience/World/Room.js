import * as THREE from "three";
import { SpotLight } from "three";
import Experience from "../Experience.js";

export default class Room{

    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.time = this.experience.time;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.speed= 0.0009;
        this.velo=4;
    

        this.setModel();
        this.setAnimation();
        this.setKey();
    }
   
    setModel(){
        this.actualRoom.children.forEach(child => {
            child.castShadow = true;
            child.receiveShadow  = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    //console.log(groupchild);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                    groupchild.children.forEach((groupchild2) => {
                        //console.log(groupchild2.name);
                        groupchild2.castShadow = true;
                        groupchild2.receiveShadow = true;

                    });
                });
            }
            //console.log(child.name);
            if (child.name === "car_1_2_Mat3_0") {
                //console.log("find it");
                //child.material = new THREE.MeshPhysicalMaterial();
                child.material.roughness = 0;
                child.material.color.set(0x549dd2);
                child.material.ior = 3;
                child.material.transmission = 0.5;
                child.material.opacity = 1;
                child.material.depthWrite = true;
                child.material.depthTest = true;
            }
            if (child.name === "car_1_4_Mat6_0002")
            {
                child.material.emission = new THREE.Color("#ffffff");
                child.material.emissiveIntensity = 30;
                //child.scale = new THREE.Vector3(1,1,1);

            }
            if (child.name === "Sketchfab_model")
            {
                console.log("find it");
                //console.log(child.children[0].children[0]);
                //child.scale = new THREE.Vector3(1,1,1);

            }
            

        });

        

        
        //this.actualRoom.add( spotLightHelper );
        const gridHelper = new THREE.GridHelper( 12, 12 );
        //this.actualRoom.add( gridHelper );
        const axesHelper = new THREE.AxesHelper( 5 );
        //this.actualRoom.add( axesHelper );
        

        this.scene.add(this.actualRoom);
    }
    resize() {
        
    }

    update(){
        this.mixer.update(this.time.delta * this.speed*(this.velo/4));
    }

    setAnimation(){
        this.mixer = new THREE.AnimationMixer(this.actualRoom);
        //console.log(this.room)
        this.room.animations.forEach(
            (a) => {
                this.mixer.clipAction(a).play();
            }
            
        )
        
    }
    setKey()
    {
        //console.log(this.velo);
        var _this = this;
        document.onkeydown = function(e) {
            console.log(e);
            
            switch (e.code) {
                case "ArrowRight":
                _this.velo=_this.velo+1;
                
                break;
                case "ArrowLeft":
                _this.velo=_this.velo-1;
                break;
                case "Space":
                _this.velo=0;
                break;
                case "KeyR":
                    _this.velo=4;
                break;
              }
              console.log(_this.velo);
        }
    }
}