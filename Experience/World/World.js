import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "../World/Environment"

import Room from "./Room.js";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;


        this.resources.on("ready", () => {

            this.Environment= new Environment()
            this.room = new Room();
            console.log('Create room');

        });
  
    }
   

    resize() {
        
    }

    update(){
    }
}