import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "../World/Environment.js"

import Room from "./Room.js";

export default class World{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.theme = this.experience.theme;


        this.resources.on("ready", () => {

            this.environment= new Environment()
            this.room = new Room();
            //console.log('Create room');

        });
        
        this.theme.on("switch", (theme) => {
           this.switchTheme(theme);
        });
        
        
        
  
    }
    switchTheme(theme) {
        //console.log(this.environment)
        if (this.environment) {
            this.environment.switchTheme(theme);
        }
    }


    resize() {
        
    }

    update(){
        if (this.room) {
            this.room.update();
        }
    }
}