import web3 from './web3';
import Chat from './build/Chat.json';

console.log(web3);

const instance = new web3.eth.Contract(
  JSON.parse(Chat.interface),
  '0x16c622969Ad067E81F83EDBfb09E6813cE2E945A'
);

instance.methods.bounty().call()
  .then(console.log);

export default instance;