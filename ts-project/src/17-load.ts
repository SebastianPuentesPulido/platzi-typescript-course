import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'pepe',
    role: 'customer'
  },
  {
    username: 'jose',
    role: 'seller'
  },
  {
    username: 'sebastian',
    role: 'seller'
  },
];

const rta = _.groupBy(data,(item)=> item.role);
console.log(rta);

const mixed = 1 + '1';
