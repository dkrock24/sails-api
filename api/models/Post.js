/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title : { type : 'string'},
    content : { type : 'text'},
    _user : {
      model : 'user',
      columnName : 'user_id',
      required:true
    },
    _category : {
      model : 'category',
      required : true,
      columnName : 'category_id'
    }
  },

};

