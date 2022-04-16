import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  blocks = ['', '', '', '', '', '', '', '', ''];
  queu: boolean = true;
  isChecked = false;
  isGameOver = false;
  winner = '';
  newGame(i:number) {
    this.blocks = ['', '', '', '', '', '', '', '', ''];
    if(i == 1){
      setTimeout(() => {
        this.isGameOver = false;
      }, 10000);
    }else
      this.isGameOver = false;
    
  }
  checking(i: number) {

    if (this.blocks[i] == '') {
      this.blocks[i] = this.queu ? 'X' : '0';

      this.queu = !this.queu;
    } else {
      this.isGameOver = true;
      this.newGame(1);
    }
    if (
      (this.blocks[0] == 'X' &&
        this.blocks[1] == 'X' &&
        this.blocks[2] == 'X') ||
      (this.blocks[3] == 'X' &&
        this.blocks[4] == 'X' &&
        this.blocks[5] == 'X') ||
      (this.blocks[6] == 'X' &&
        this.blocks[7] == 'X' &&
        this.blocks[8] == 'X') ||
      (this.blocks[0] == 'X' &&
        this.blocks[3] == 'X' &&
        this.blocks[6] == 'X') ||
      (this.blocks[1] == 'X' &&
        this.blocks[4] == 'X' &&
        this.blocks[7] == 'X') ||
      (this.blocks[2] == 'X' &&
        this.blocks[5] == 'X' &&
        this.blocks[8] == 'X') ||
      (this.blocks[0] == 'X' &&
        this.blocks[4] == 'X' &&
        this.blocks[8] == 'X') ||
      (this.blocks[2] == 'X' && this.blocks[4] == 'X' && this.blocks[6] == 'X')
    ) {
      this.isGameOver = true;
      this.winner = 'X';
      this.newGame(1);
    } else if (
      (this.blocks[0] == '0' &&
        this.blocks[1] == '0' &&
        this.blocks[2] == '0') ||
      (this.blocks[3] == '0' &&
        this.blocks[4] == '0' &&
        this.blocks[5] == '0') ||
      (this.blocks[6] == '0' &&
        this.blocks[7] == '0' &&
        this.blocks[8] == '0') ||
      (this.blocks[0] == '0' &&
        this.blocks[3] == '0' &&
        this.blocks[6] == '0') ||
      (this.blocks[1] == '0' &&
        this.blocks[4] == '0' &&
        this.blocks[7] == '0') ||
      (this.blocks[2] == '0' &&
        this.blocks[5] == '0' &&
        this.blocks[8] == '0') ||
      (this.blocks[0] == '0' &&
        this.blocks[4] == '0' &&
        this.blocks[8] == '0') ||
      (this.blocks[2] == '0' && this.blocks[4] == '0' && this.blocks[6] == '0')
    ) {
      this.isGameOver = true;
      this.winner = '0';
      this.newGame(1);
    }
  }
}
