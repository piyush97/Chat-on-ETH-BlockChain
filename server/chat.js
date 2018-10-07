import web3 from './web3';
import Chat from './build/Chat.json';

console.log(web3);

const instance = new web3.eth.Contract(
  JSON.parse(Chat.interface),
  '0x106034043d73AD3C02bA0b47eA15E18A7ba3E765'
);

instance.methods.bounty().call()
  .then(console.log);

export default instance;