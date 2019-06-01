import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabMensagem',
  templateUrl: 'tabMensagem.page.html',
  styleUrls: ['tabMensagem.page.scss']
})
export class TabMensagemPage implements OnInit{

 mensagens: any = [];
 constructor() {}
 ngOnInit() {
   this.mensagens = data;
 }
 
}

const data = [
{
 id: '1',
 status: 'Indeferido',
 mensagem: 'Seu problema em Avenida Abílio Machado foi indeferido.'
},
{
 id: '2',
 status: 'Em Andamento',
 mensagem: 'A resolução do seu problema em Avenida João Pinheiro está em andamento.'
},
{
 id: '3',
 status: 'Resolvido',
 mensagem: 'Seu problema em Avenida Dom Pedro II foi resolvido com sucesso! + 25 moedas.'
},
{
 id: '4',
 status: 'Indeferido',
 mensagem: 'Seu problema em Avenida Waldir Soeiro Emrich foi indeferido.'
},
{
 id: '5',
 status: 'Em Andamento',
 mensagem: 'A resolução do seu problema em Avenida Francisco Sales está em andamento.'
},
{
 id: '6',
 status: 'Resolvido',
 mensagem: 'Seu problema em Avenida Olinto Meireles foi resolvido com sucesso! + 50 moedas.'
},
{
 id: '7',
 status: 'Indeferido',
 mensagem: 'Seu problema em Avenida dos Andradas foi indeferido.'
},
{
 id: '8',
 status: 'Em Andamento',
 mensagem: 'A resolução do seu problema em Avenida do Contorno está em andamento.'
},
{
 id: '9',
 status: 'Resolvido',
 mensagem: 'Seu problema em Avenida Carandaí foi resolvido com sucesso! + 15 moedas.'
},
{
 id: '10',
 status: 'Indeferido',
 mensagem: 'Seu problema em Avenida Presidente Antônio Carlos foi indeferido.'
},
{
 id: '11',
 status: 'Em Andamento',
 mensagem: 'A resolução do seu problema em Avenida Álvares Cabral está em andamento.'
},
{
 id: '12',
 status: 'Resolvido',
 mensagem: 'Seu problema em Avenida Professor Mário Werneck foi resolvido com sucesso! + 75 moedas.'
},
{
 id: '13',
 status: 'Indeferido',
 mensagem: 'Seu problema em Avenida Augusto de Lima foi indeferido.'
},
{
 id: '14',
 status: 'Em Andamento',
 mensagem: 'A resolução do seu problema em Avenida Portugal está em andamento.'
},
{
 id: '15',
 status: 'Resolvido',
 mensagem: 'Seu problema em Avenida Amazonas foi resolvido com sucesso! + 5 moedas.'
}
];
