import web3 from './web3';
import Chat from './build/Chat.json';

const instance = new web3.eth.Contract(
  JSON.parse(Chat.interface),
  '0x106034043d73AD3C02bA0b47eA15E18A7ba3E765'
);

export default instance;