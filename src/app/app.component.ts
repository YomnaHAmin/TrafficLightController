import { Component, Input, OnInit } from '@angular/core';
// import { tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @Input() lat;
  @Input() lng;

  @Input() green1: number;
  @Input() green2: number;
  @Input() green3: number;
  @Input() green4: number;

  red1;
  red2;
  red3;
  red4;

  isGreen1 = true;  
  isGreen2 = false;  
  isGreen3 = false;  
  isGreen4 = false;  

  isYellow1 = false;
  isYellow2 = false;
  isYellow3 = false;
  isYellow4 = false;

  @Input() light1;
  @Input() light2;
  @Input() light3;
  @Input() light4;
  
  displayCounter = false;

  // constructor(private chngdtctrf : ChangeDetectorRef){}

  ngOnInit(){
    this.lat = 30.0697954;
    this.lng = 31.2884195;
  }

  changeLocation(){
    console.log(this.lat);
    console.log(this.lng);
    this.lat = Number(this.lat);
    this.lng = Number(this.lng);
  }

  endTraffic1(){
    this.light1 = this.red1;
    this.light2 = this.green2;
    this.red2 = this.green3 + this.green4 + this.green1 + 9;    
    this.isGreen1 = false;
    this.isGreen2 = true;
    this.isYellow1 = false;    
  }
  endTraffic2(){
    this.light2 = this.red2;
    this.light3 = this.green3;
    this.red3 = this.green4 + this.green1 + this.green2 + 9;      
    this.isGreen2 = false;
    this.isGreen3 = true;
    this.isYellow2 = false;    
  }
  endTraffic3(){
    this.light3 = this.red3;
    this.light4 = this.green4;
    this.red4 = this.green1 + this.green2 + this.green3 + 9;      
    this.isGreen3 = false;
    this.isGreen4 = true;
    this.isYellow3 = false;
  }
  count(traffic: number){
    this.light1 --;
    this.light2 --;
    this.light3 --;
    this.light4 --;

    let keepCount = true;
    switch (traffic) {
    case 1: {
      if(this.light1 == 0){
        if(this.isYellow1){
          traffic = 2;
          this.endTraffic1();
        }else{
          this.isYellow1 = true;
          this.light1 +=3;
        } 
      }
      break;
    }
    case 2: {
      if(this.light2 == 0){
        if(this.isYellow2){
          traffic = 3;
          this.endTraffic2();
        }else{
          this.isYellow2 = true;
          this.light2 +=3;
        }
      }
      break;
    }
    case 3: {
      if(this.light3 == 0){
        if(this.isYellow3){
          traffic = 4;
          this.endTraffic3();
        }else{
          this.isYellow3 = true;
          this.light3 +=3;
        }      
      }
      break;
    }
    case 4:{
      if(this.light4 == 0){
        if(this.isYellow4){
          keepCount = false;
        }else{
          this.isYellow4 = true;
          this.light4 +=3;
        } 
      }
      break;
    }
    }
    if(keepCount){
      setTimeout(()=>{this.count(traffic);}, 1000);
    }
  }

  sleep(millisec){
    let now = new Date().getTime();
    while((new Date().getTime() - now) < millisec);
  }

  startCount(){
    this.isGreen1 = true;  
    this.isGreen2 = false;  
    this.isGreen3 = false;  
    this.isGreen4 = false;  

    this.isYellow1 = false;
    this.isYellow2 = false;
    this.isYellow3 = false;
    this.isYellow4 = false;


    this.green1 = Number(this.green1);
    this.green2 = Number(this.green2);
    this.green3 = Number(this.green3);
    this.green4 = Number(this.green4);

    this.displayCounter = true;
    // let timerOn;

    this.red2 = this.green1 + 3;
    this.red3 = this.green1 + this.green2 + 6;
    this.red4 = this.green1 + this.green2 + this.green3 + 9;
    this.red1 = this.green2 + this.green3 + this.green4 + 9;
    
    this.light1 = this.green1 + 1;
    this.light2 = this.red2 + 1;
    this.light3 = this.red3 + 1;
    this.light4 = this.red4 + 1;

    this.count(1);
    // this.count(2);
    // this.count(3);
    // this.count(4);

    // document.getElementById("t1").innerHTML = this.light1;
    // document.getElementById("t2").innerHTML = this.light2;
    // document.getElementById("t3").innerHTML = this.light3;
    // document.getElementById("t4").innerHTML = this.light4;    

    /* let Traffic1 = setInterval(()=>{this.count();}, 1000);
    timerOn = true;

    while(timerOn){
      if(this.light1 == 0){
        this.light1 = this.red1;
        this.light2 = this.green2;
        this.red2 = this.green3 + this.green4 + this.green1;    
        this.isGreen1 = false;
        this.isGreen2 = true;

        clearInterval(Traffic1);
        timerOn = false;
      }
    }

    let Traffic2 = setInterval(()=>{this.count();}, 1000);
    timerOn = true;

    while(timerOn){
      if(this.light2 == 0){
        this.light2 = this.red2;
        this.light3 = this.green3;
        this.red3 = this.green4 + this.green1 + this.green2;      
        this.isGreen2 = false;
        this.isGreen3 = true;

        clearInterval(Traffic2);
        timerOn = false;
      }
    }

    let Traffic3 = setInterval(()=>{this.count();}, 1000);
    timerOn = true;

    while(timerOn){
      if(this.light3 == 0){
        this.light3 = this.red3;
        this.light4 = this.green4;
        this.red4 = this.green1 + this.green2 + this.green3;      
        this.isGreen3 = false;
        this.isGreen4 = true;
        
        clearInterval(Traffic3);
        timerOn = false;
      }
    }

    let Traffic4 = setInterval(()=>{this.count();}, 1000);
    timerOn = true;

    while(timerOn){
      if(this.light4 == 0){
        /* this.light2 = this.red2;
        this.light3 = this.green3;
        this.red3 = this.green4 + this.green1 + this.green2;      
        this.isGreen2 = false;
        this.isGreen3 = true;
 
        clearInterval(Traffic4);
        timerOn = false;
      }
    }

 */
  
  // for(this.light1; this.light1 > 0; this.light1--){
  //     // setTimeout(()=>{alert("Traffic 1 = " + this.light1);},1000);
  //     document.getElementById("t1").innerHTML = this.light1;      
  //     this.sleep(1000);

  //     this.light2 --;
  //     document.getElementById("t2").innerHTML = this.light2;
          
  //     this.light3 --;
  //     document.getElementById("t3").innerHTML = this.light3;
          
  //     this.light4 --;
  //     document.getElementById("t4").innerHTML = this.light4;

  //     // this.chngdtctrf.markForCheck();    
  //   }
    
  //   this.light1 = this.red1;
  //   this.light2 = this.green2;
  //   this.red2 = this.green3 + this.green4 + this.green1;    
  //   this.isGreen1 = false;
  //   this.isGreen2 = true;
    
  //   for(this.light2; this.light2 > 0; this.light2--){
  //     // setTimeout(()=>{},1000);      
  //     document.getElementById("t2").innerHTML = this.light2;
  //     this.sleep(1000);
      
  //     this.light1 --;
  //     document.getElementById("t1").innerHTML = this.light1;

  //     this.light3 --;
  //     document.getElementById("t3").innerHTML = this.light3;
          
  //     this.light4 --;
  //     document.getElementById("t4").innerHTML = this.light4;
          
  //   }

  //   this.light2 = this.red2;
  //   this.light3 = this.green3;
  //   this.red3 = this.green4 + this.green1 + this.green2;      
  //   this.isGreen2 = false;
  //   this.isGreen3 = true;
    
  //   for(this.light3; this.light3 > 0; this.light3--){
  //     // setTimeout(()=>{},1000);      
  //     this.sleep(1000);
  //     this.light1 --;    
  //     this.light2 --;    
  //     this.light4 --;    
  //   }
    
  //   this.light3 = this.red3;
  //   this.light4 = this.green4;
  //   this.red4 = this.green1 + this.green2 + this.green3;      
  //   this.isGreen3 = false;
  //   this.isGreen4 = true;
    
  //   for(this.light4; this.light4 > 0; this.light4--){
  //     // setTimeout(()=>{},1000);      
  //     this.sleep(1000);
  //     this.light1 --;    
  //     this.light2 --;    
  //     this.light3 --;    
  //   }
 
  }

}
