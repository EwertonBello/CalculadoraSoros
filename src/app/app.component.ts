import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
	public investimento: number = 0;  
	public payout: number = 0;  
	public soros: number = 100;  
	public niveis: number = 4;  
	public resultados: string = '';  
	private valor: number;


	calcular()
	{
		this.valor = this.investimento
    this.resultados = ''
		for (let i = 0; i < this.niveis; i++) 
		{
			this.valor+=((this.valor*(this.payout/100))*(this.soros/100))
			this.resultados+=this.valor.toFixed(2)+'\n'
		}
	}
}

