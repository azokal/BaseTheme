/**
 * Nav
 */

var BaseThemeNav = function(){
    var _this = this;

    console.log('-> Nav');

    // Selectors
    _this.$cont = $('#nav');

    // Methods
    _this.init();
};


/**
 * Init
 * @return {[type]} [description]
 */
BaseThemeNav.prototype.init = function(){
    var _this = this;

    // Events
    _this.initEvents();

};


/**
 * Init events
 * @return {[type]} [description]
 */
BaseThemeNav.prototype.initEvents = function(){
    var _this = this;

    BaseTheme.$window.on('resize', debounce($.proxy(_this.resize, _this), 50, false));
};


/**
 * Destroy events
 * @return {[type]} [description]
 */
BaseThemeNav.prototype.destroyEvents = function(){
    var _this = this;


    BaseTheme.$window.off('resize', debounce($.proxy(_this.resize, _this), 50, false));
};


/**
 * Destroy
 * @return {[type]} [description]
 */
BaseThemeNav.prototype.destroy = function(){
    var _this = this;

    // Events
    _this.destroyEvents();

};


/**
 * Window resize callback
 * @return {[type]} [description]
 */
BaseThemeNav.prototype.resize = function(){
    var _this = this;

    console.log('Nav - resize');

};
