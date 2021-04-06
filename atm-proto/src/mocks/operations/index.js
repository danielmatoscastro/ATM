export const operations = [
  { name: 'Saque', path: '/saque', frequency: 1000 },
  { name: 'Saldo', path: '/saldo', frequency: 999 },
  { name: 'Transferência', path: '/transferencia', frequency: 998 },
  {
    name: 'Pagar boleto bancário',
    path: '/pagar-cartao-de-credito',
    frequency: 3,
  },
  {
    name: 'Fatura do cartão de crédito',
    path: '/fatura-do-cartao-de-credito',
    frequency: 0,
  },
  {
    name: 'Recarga de celular',
    path: '/recarga-de-celular',
    frequency: 4,
  },
  {
    name: 'Investimentos',
    path: '/investimentos',
    frequency: 1,
  },
  {
    name: 'Depósito',
    path: '/deposito',
    frequency: 6,
  },
  {
    name: 'Empréstimo',
    path: '/emprestimo',
    frequency: 5,
  },
];

export default operations;
