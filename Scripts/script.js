"use strict";
class ImageClass {
    constructor(link, caption) {
        this.Url = link;
        this.Caption = caption;
    }
}
class Operation {
    constructor(index, imgTag, captionTag, imageList) {
        this.imageIndex = index;
        this.imageTag = imgTag;
        this.captionTag = captionTag;
        this.imageList = imageList;
        window.addEventListener('load', () => {
            this.CurrentImage();
        });
    }
    CurrentImage() {
        this.imageTag.src = this.imageList[this.imageIndex].Url;
        this.captionTag.innerHTML = this.imageList[this.imageIndex].Caption;
    }
    NextImage() {
        //console.log("Next");
        this.imageIndex++;
        if (this.imageIndex >= this.imageList.length) {
            this.imageIndex = 0;
        }
        this.CurrentImage();
    }
    PreviousImage() {
        //console.log("Prev");
        this.imageIndex--;
        if (this.imageIndex < 0) {
            this.imageIndex = this.imageList.length - 1;
        }
        this.CurrentImage();
    }
}
let mountain = new ImageClass("https://images.unsplash.com/photo-1619994948937-ef1e758d46ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80", "Mountain");
let sea = new ImageClass("https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", "Mountain -Sea");
let sitout = new ImageClass("https://images.unsplash.com/photo-1588125270427-53873e46db41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", "Sit-Out");
let photoGraphic = new ImageClass("https://images.unsplash.com/photo-1523359247812-29dde5ac53a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhkJTIwcGhvdG9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60", "Photo Graphic");
let butterfly = new ImageClass("https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg", "Butterfly");
let bird = new ImageClass("https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "Bird");
let lion = new ImageClass("https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "Lion");
let car = new ImageClass("https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "Car");
let bridge = new ImageClass("https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&w=600", "Beidge");
let imageList = [mountain, sea, sitout, photoGraphic, butterfly, bird, lion, car, bridge];
let index = 0;
let imageTag = document.getElementById("image-box");
let captionTag = document.getElementById("caption-tag");
let operationObj = new Operation(index, imageTag, captionTag, imageList);