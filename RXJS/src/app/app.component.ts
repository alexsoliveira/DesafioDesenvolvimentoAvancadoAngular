import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  
  title = 'RXJS';

  minhaPromise(nome: string) : Promise<string>{
    return new Promise((resolve, reject) => {
      if(nome === 'Alex'){
        setTimeout(() =>{
          resolve('Seja bem vindo ' + nome);
        }, 5000);
      }
      else{
        reject('Ops! Você não é o Alex');
      }
    })
  }

  ngOnInit(): void {
    // this.minhaPromise('Alex')
    //   .then(result => console.log(result));

    this.minhaPromise('José')
      .then(result => console.log(result))
      .catch(erro => console.log(erro));
  }

}
