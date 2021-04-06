function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Vini',
  sobrenome: 'Oliveira',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Vini', 'Oliveira');
pessoa.exibirNome();

export { pessoa };
