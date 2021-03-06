import $ from "jquery";
import TweenMax from "TweenMax";
import isMobile from "isMobile";
import log from "loglevel";
import {Utils} from "utils/utils";
import {polyfills} from "utils/polyfills";
import {gaTrackErrors} from "utils/gaTrackErrors";
import {Nav} from "common/nav";
import {Router} from "router";
import {GraphicLoader} from "graphicLoader";
import {ClassFactory} from "class-factory";

/**
 * Set max log level (most verbose) 0 ---> 5
 * @see https://github.com/pimterry/loglevel
 */
if (temp.devMode && true === temp.devMode) {
    log.setLevel(0);
} else {
    log.setLevel(5);
}

/**
 * Set default Tween ease
 */
TweenLite.defaultEase = Expo.easeOut;

/**
 * Log credits
 */
// Utils.logCredits(
//     'BaseTheme',
//     '#fff',
//     [
//         { name:'Rezo Zero', website:'www.rezo-zero.com' }
//     ],
//     [
//         { name:'roadiz', website:'www.roadiz.io' },
//         { name:'GSAP', website:'www.greensock.com' }
//     ],
//     '#000'
// );

/*
 * Declare polyfills
 */
polyfills();

/**
 * Tracks erros with Analytics
 */
gaTrackErrors();

/*
 * Define vars
 */
const $body = $('body');
const dataHome = $body[0].getAttribute('data-is-home');
const isHome = (dataHome == '1');

/*
 * isMobile Test
 */
let deviceMobile = (isMobile.any !== false);
if(deviceMobile) Utils.addClass($body[0],'is-mobile');
else Utils.addClass($body[0],'is-desktop');

/*
 * IE Test
 */
if(navigator.userAgent.indexOf('MSIE') >= 0 ||
    navigator.userAgent.indexOf('Trident') >= 0){
    Utils.addClass($body[0],'ie-browser');
}

/**
 * Launch router
 */
const router = new Router(
    {
        homeHasClass: false,
        ajaxEnabled: true,
        lazyloadEnabled: true,
        pageClass: 'page-container'
    },
    new ClassFactory(),
    // temp namespace is defined in your Resources/views/base.twig.html
    temp.baseUrl,
    new GraphicLoader(),
    new Nav()
);
router.initEvents();
router.boot($('.page-container').eq(0), 'static', isHome);

