import axios from '../../core/axios';

export default {
  get: () => axios.get('/patients'),
  add: values => axios.post('/patients', values),
  show: id => axios.get('/patients/' + id),
};
