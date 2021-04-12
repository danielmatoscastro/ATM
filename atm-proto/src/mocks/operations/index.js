import withdraw from 'imgs/withdraw.png';
import receipt from 'imgs/receipt.png';
import sendMoney from 'imgs/sendMoney.png';

export const doOperationById = [
  (userAccount, payload, users) => {
    const currentAmmount = parseFloat(userAccount.ammount.toString().replaceAll('.', ''));
    const value = parseFloat(payload.value);
    users.setUserAmmount(userAccount.id, currentAmmount - value);
  },
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
  () => {},
];

export const operations = [
  {
    id: 0,
    name: 'Saque',
    path: '/saque',
    frequency: 1000,
    img: withdraw,
    doOperation: doOperationById[0],
  },
  {
    id: 1,
    name: 'Saldo',
    path: '/saldo',
    frequency: 999,
    img: receipt,
    doOperation: doOperationById[1],
  },
  {
    id: 2,
    name: 'Transferência',
    path: '/transferencia',
    frequency: 998,
    img: sendMoney,
    doOperation: doOperationById[2],
  },
  {
    id: 3,
    name: 'Pagar boleto bancário',
    path: '/pagar-boleto-bancario',
    frequency: 3,
    doOperation: doOperationById[3],
  },
  {
    id: 4,
    name: 'Fatura do cartão de crédito',
    path: '/fatura-do-cartao-de-credito',
    frequency: 0,
    doOperation: doOperationById[4],
  },
  {
    id: 5,
    name: 'Recarga de celular',
    path: '/recarga-de-celular',
    frequency: 4,
    doOperation: doOperationById[5],
  },
  {
    id: 6,
    name: 'Investimentos',
    path: '/investimentos',
    frequency: 1,
    doOperation: doOperationById[6],
  },
  {
    id: 7,
    name: 'Depósito',
    path: '/deposito',
    frequency: 6,
    doOperation: doOperationById[7],
  },
  {
    id: 8,
    name: 'Empréstimo',
    path: '/emprestimo',
    frequency: 5,
    doOperation: doOperationById[8],
  },
];

export const operationsIds = {
  SAQUE: 0,
  SALDO: 1,
  TRANSFERENCIA: 2,
  PAGAR_BOLETO: 3,
  FATURA_CARTAO: 4,
  RECARGA: 5,
  INVESTIMENTOS: 6,
  DEPOSITO: 7,
  EMPRESTIMO: 8,
};

export default operations;
