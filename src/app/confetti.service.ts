import { Injectable } from '@angular/core';
import confetti from 'canvas-confetti';

/*
    Shows confetti animations, just for fun.
    See: https://www.kirilv.com/canvas-confetti/
*/
@Injectable({
    providedIn: 'root'
})
export class ConfettiService {

    constructor() { }

    public canon(): void {
        confetti({
            angle: this.randomInRange(55, 125),
            spread: this.randomInRange(50, 70),
            particleCount: this.randomInRange(50, 100),
            origin: { y: 0.6 }
        });
    }

    private randomInRange(min:any, max:any) {
        return Math.random() * (max - min) + min;
    }
}