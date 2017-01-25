import Ember from 'ember';

export default Ember.Component.extend({
  user: {
    name: null,
    password: null
  },
  user_error_login: {
      status: false,
      message: 'Sorry password or login is incorrect('
  },
  findedUser: null,
  store: Ember.inject.service(), //this we must do only for access DS from component
  actions: {
    login() {
      var user = this.get('user'), // Get user object
        _store = this.get('store'),
        findedUser = this.get('users').filter(
                    (item) => item.get('name') === user.name && item.get('password') === user.password);
        if(typeof findedUser[0] !== "undefined") {
            this.set('findedUser', findedUser[0]);
        }else {
            this.set('user_error_login.status', true);
        }
    },
    logout() {
        this.set('findedUser', null);
    }
  }
});
