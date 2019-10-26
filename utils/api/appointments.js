import axios from '../../core/axios';

export default {
  get: () => axios.get('/appointments'),
  remove: id => axios.delete('/appointments/' + id),
};
