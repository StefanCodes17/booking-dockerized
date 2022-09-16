import api from '../../services/api';

export default {
  state: {
    user: null,
  },
  actions: {
    async loadUser({ state }) {
      const { data } = await api.get('/users/me');
      state.user = data.user;
    },
  },

  getters: {
    user: (state) => state.user,
    isAdmin: (state) => state.user && state.user.roles.some((role) => role.name === 'admin'),
  },
  namespaced: true,
};
