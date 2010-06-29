MooModel.Validations = new Class({
  errors: function(){
    this.errors = new MooModel.Errors(this);
    return this.errors;
  },

  valid: function(){
    this.errors.clear();
    this._run_validate_callbacks();
    return this.errors.empty();
  },

  _run_validate_callbacks: function(){
    var object = this;
    validations = object.constructor.validations;
    $each(validations, function(i){
      switch(i.type){
        case 'presence': (new MooModel.Validations.Presence(object)).validate(i);
        break;
        case 'number': console.log('num');
        break;
      }
    })
  },

  invalid: function(){
    !this.valid();
  }
});