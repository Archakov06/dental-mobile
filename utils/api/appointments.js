import axios from '../../core/axios';

export default {
  get: () => axios.get('/appointments'),
  remove: id => axios.delete('/appointments/' + id),
  add: values => axios.post('/appointments', values)
};
