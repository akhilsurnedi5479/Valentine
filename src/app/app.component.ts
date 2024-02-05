import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import confetti from 'canvas-confetti';
import { ConfettiService } from './confetti.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
constructor(private confettiService: ConfettiService) { this.changeText = false;}

// Some function somewhere:
  changeText = false;

  title = 'valentine';
  logoWidthNo = 80;
  logoHeightNo = 60;
  logoWidthYes = 80;
  logoHeightYes= 60;
  showNoButton = true;
  showYesButton = true;
  textList = ["Will you be my valentine?","You are hurting my heart here!!! Say YESSSS!!! ","Say YESSSSSS!!!!!","Yessssssss!!!!!!!"]
  textSrc = this.textList[0]
  imgList=['https://media.giphy.com/media/arEPGd3xoYInsHPA54/giphy.gif','https://media.giphy.com/media/OPsRvyvzcPbuCEoXFy/giphy.gif','https://media.giphy.com/media/CbZq28oBRbWxL8DHw3/giphy.gif','https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3U5bjlxenUzdXoxYjJuNnpkeTVqMXJpYWJncHFjdHZsdWNndzFuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1si4Pts064XTpo27EH/giphy.gif','']
  imgSrc = this.imgList[0]
  noClickCount = 0
  onClickedNo(){
    this.noClickCount+=1
    this.imgSrc = this.imgList[this.noClickCount]
    this.textSrc = this.textList[this.noClickCount]
    
    if(this.logoWidthNo<=50){
      this.showNoButton = false
      this.logoWidthYes = this.logoWidthYes+200;
      this.logoHeightYes =  this.logoHeightYes+150;

    }

    this.logoWidthYes = this.logoWidthYes+15;
    this.logoHeightYes =  this.logoHeightYes+15;
    this.logoWidthNo = this.logoWidthNo-15;
    this.logoHeightNo =  this.logoHeightNo-15;
  }

  onClickedYes(){
    this.celebrate()
    this.imgSrc = "https://media.giphy.com/media/jG1K5tZO4bDAwo2TKP/giphy.gif";
    this.textSrc = "Hell Yeah!!!!!";
    this.showNoButton = false;
    this.showYesButton =  false;
    
  }
  celebrate():void{
    confetti({
      particleCount: 1500,
      spread: 700
  }); 
  }

  left = '0';
  top = '0';
   onChangeText(){
    //console.log(this.changeText)
    this.changeText = !this.changeText;
    this.left = `${Math.ceil(Math.random() * 90)}%`;
    this.top = `${Math.ceil(Math.random() * 90)}%`;
    console.log(this.left,this.top)

   }

   pr = 0
   movebutton(){
    if(this.pr == 0){
      this.pr=300
    }
    else{
      this.pr = 0
    }
   }
  


}
