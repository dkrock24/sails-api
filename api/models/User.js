/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    firstname: { type: 'string' },

    lastname: { type: 'string' },

    email: { type: 'string' },

    password: { type: 'string' },

    posts : {
      collection : 'post',
      via : '_user'
    }

  },

};

