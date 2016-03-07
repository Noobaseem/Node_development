/**
 *  This part of code runs on the client side only. 
 */
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

/**
 *  This part of code runs on the server side only. 
 */
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
