// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });





body,html {
    width: 100%;
    margin: 0;
    padding: 0
}

html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    color: #fff;
    font-weight: 400
}

h1,h2,h3,h4,h5,h6 {
    margin: 0
}

blockquote {
    padding: 0;
    margin: 0
}

button {
    cursor: pointer;
    border: 0;
    background: 0 0;
    padding: 0
}

button:focus {
    outline: 0
}

a img {
    border: 0
}

a {
    text-decoration: none;
    -webkit-text-decoration-skip: objects
}

.object {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.clr {
    clear: both
}

.ul-reset {
    margin: 0;
    padding: 0
}

.ul-reset li {
    list-style-type: none
}

.h-reset h1,.h-reset h2,.h-reset h3,.h-reset h4,.h-reset p {
    margin: 0
}

.w-reset {
    max-width: 100%;
    width: 100%
}

.h-reset {
    height: auto
}

.block {
    display: block
}

.inline_block {
    display: inline-block
}

.none {
    display: none
}

.ov-hidden {
    overflow: hidden
}

.ov-visible {
    overflow: visible
}

.ov-o-hidden {
    opacity: 0;
    visibility: hidden
}

.ov-o-visible {
    opacity: 1;
    visibility: visible
}

input,select,textarea {
    outline: 0
}

input,textarea {
    outline: 0;
    -webkit-appearance: none;
    border-radius: 0
}

select {
    outline: 0;
    border-radius: 0
}

button,input,select,textarea {
    font: inherit;
    margin: 0
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
    outline: 1px dotted ButtonText
}

blockquote {
    padding: 0;
    margin: 0
}

button {
    cursor: pointer;
    border: 0;
    background: 0 0;
    padding: 0
}

button:focus {
    outline: 0
}

.center {
    text-align: center
}

.left {
    text-align: left
}

.upper {
    text-transform: uppercase
}

.lower {
    text-transform: lowercase
}

.case {
    text-transform: normal
}

.nocase {
    text-transform: none
}

.italic {
    font-style: italic
}

.hyphenate {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-hyphens: auto;
    hyphens: auto
}

.pull-left {
    float: left
}

.pull-right {
    float: right
}

.pull-none {
    float: none
}

.prel {
    position: relative
}

.pabs {
    position: absolute
}

.pfix {
    position: fixed
}

.valign {
    position: relative;
    display: table
}

.valign.fit {
    width: 100%;
    height: 100%
}

.valign .middle {
    display: table-cell;
    vertical-align: middle
}

.bx {
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.fit {
    width: 100%;
    height: 100%
}

.grid .col-d-100 {
    width: 100%
}

.grid .col-d-100.abs-square {
    position: relative;
    padding-bottom: 100%
}

.grid .col-d-100.abs-square.half {
    padding-bottom: 50%
}

.grid .col-d-50 {
    width: 50%
}

.grid .col-d-50.abs-square {
    position: relative;
    padding-bottom: 50%
}

.grid .col-d-50.abs-square.half {
    padding-bottom: 25%
}

.grid .col-d-33 {
    width: 33.333333333333336%
}

.grid .col-d-33.abs-square {
    position: relative;
    padding-bottom: 33.333333333333336%
}

.grid .col-d-33.abs-square.half {
    padding-bottom: 16.666666666666668%
}

.grid .col-d-25 {
    width: 25%
}

.grid .col-d-25.abs-square {
    position: relative;
    padding-bottom: 25%
}

.grid .col-d-25.abs-square.half {
    padding-bottom: 12.5%
}

.grid .col-d-20 {
    width: 20%
}

.grid .col-d-20.abs-square {
    position: relative;
    padding-bottom: 20%
}

.grid .col-d-20.abs-square.half {
    padding-bottom: 10%
}

.grid .col-d-16 {
    width: 16.666666666666668%
}

.grid .col-d-16.abs-square {
    position: relative;
    padding-bottom: 16.666666666666668%
}

.grid .col-d-16.abs-square.half {
    padding-bottom: 8.333333333333334%
}

.grid .col-d-14 {
    width: 14.285714285714286%
}

.grid .col-d-14.abs-square {
    position: relative;
    padding-bottom: 14.285714285714286%
}

.grid .col-d-14.abs-square.half {
    padding-bottom: 7.142857142857143%
}

.grid .col-d-12 {
    width: 12.5%
}

.grid .col-d-12.abs-square {
    position: relative;
    padding-bottom: 12.5%
}

.grid .col-d-12.abs-square.half {
    padding-bottom: 6.25%
}

.grid .col-d-11 {
    width: 11.11111111111111%
}

.grid .col-d-11.abs-square {
    position: relative;
    padding-bottom: 11.11111111111111%
}

.grid .col-d-11.abs-square.half {
    padding-bottom: 5.555555555555555%
}

.grid .col-d-10 {
    width: 10%
}

.grid .col-d-10.abs-square {
    position: relative;
    padding-bottom: 10%
}

.grid .col-d-10.abs-square.half {
    padding-bottom: 5%
}

@media(min-width: 720px) and (max-width:1024px) {
    .grid .col-t-100 {
        width:100%
    }

    .grid .col-t-100.abs-square {
        position: relative;
        padding-bottom: 100%
    }

    .grid .col-t-100.abs-square.half {
        padding-bottom: 50%
    }

    .grid .col-t-50 {
        width: 50%
    }

    .grid .col-t-50.abs-square {
        position: relative;
        padding-bottom: 50%
    }

    .grid .col-t-50.abs-square.half {
        padding-bottom: 25%
    }

    .grid .col-t-33 {
        width: 33.333333333333336%
    }

    .grid .col-t-33.abs-square {
        position: relative;
        padding-bottom: 33.333333333333336%
    }

    .grid .col-t-33.abs-square.half {
        padding-bottom: 16.666666666666668%
    }

    .grid .col-t-25 {
        width: 25%
    }

    .grid .col-t-25.abs-square {
        position: relative;
        padding-bottom: 25%
    }

    .grid .col-t-25.abs-square.half {
        padding-bottom: 12.5%
    }

    .grid .col-t-20 {
        width: 20%
    }

    .grid .col-t-20.abs-square {
        position: relative;
        padding-bottom: 20%
    }

    .grid .col-t-20.abs-square.half {
        padding-bottom: 10%
    }

    .grid .col-t-16 {
        width: 16.666666666666668%
    }

    .grid .col-t-16.abs-square {
        position: relative;
        padding-bottom: 16.666666666666668%
    }

    .grid .col-t-16.abs-square.half {
        padding-bottom: 8.333333333333334%
    }

    .grid .col-t-14 {
        width: 14.285714285714286%
    }

    .grid .col-t-14.abs-square {
        position: relative;
        padding-bottom: 14.285714285714286%
    }

    .grid .col-t-14.abs-square.half {
        padding-bottom: 7.142857142857143%
    }

    .grid .col-t-12 {
        width: 12.5%
    }

    .grid .col-t-12.abs-square {
        position: relative;
        padding-bottom: 12.5%
    }

    .grid .col-t-12.abs-square.half {
        padding-bottom: 6.25%
    }

    .grid .col-t-11 {
        width: 11.11111111111111%
    }

    .grid .col-t-11.abs-square {
        position: relative;
        padding-bottom: 11.11111111111111%
    }

    .grid .col-t-11.abs-square.half {
        padding-bottom: 5.555555555555555%
    }

    .grid .col-t-10 {
        width: 10%
    }

    .grid .col-t-10.abs-square {
        position: relative;
        padding-bottom: 10%
    }

    .grid .col-t-10.abs-square.half {
        padding-bottom: 5%
    }
}

@media(max-width: 719px) {
    .grid .col-m-100 {
        width:100%
    }

    .grid .col-m-100.abs-square {
        position: relative;
        padding-bottom: 100%
    }

    .grid .col-m-100.abs-square.half {
        padding-bottom: 50%
    }

    .grid .col-m-50 {
        width: 50%
    }

    .grid .col-m-50.abs-square {
        position: relative;
        padding-bottom: 50%
    }

    .grid .col-m-50.abs-square.half {
        padding-bottom: 25%
    }

    .grid .col-m-33 {
        width: 33.333333333333336%
    }

    .grid .col-m-33.abs-square {
        position: relative;
        padding-bottom: 33.333333333333336%
    }

    .grid .col-m-33.abs-square.half {
        padding-bottom: 16.666666666666668%
    }

    .grid .col-m-25 {
        width: 25%
    }

    .grid .col-m-25.abs-square {
        position: relative;
        padding-bottom: 25%
    }

    .grid .col-m-25.abs-square.half {
        padding-bottom: 12.5%
    }

    .grid .col-m-20 {
        width: 20%
    }

    .grid .col-m-20.abs-square {
        position: relative;
        padding-bottom: 20%
    }

    .grid .col-m-20.abs-square.half {
        padding-bottom: 10%
    }

    .grid .col-m-16 {
        width: 16.666666666666668%
    }

    .grid .col-m-16.abs-square {
        position: relative;
        padding-bottom: 16.666666666666668%
    }

    .grid .col-m-16.abs-square.half {
        padding-bottom: 8.333333333333334%
    }

    .grid .col-m-14 {
        width: 14.285714285714286%
    }

    .grid .col-m-14.abs-square {
        position: relative;
        padding-bottom: 14.285714285714286%
    }

    .grid .col-m-14.abs-square.half {
        padding-bottom: 7.142857142857143%
    }

    .grid .col-m-12 {
        width: 12.5%
    }

    .grid .col-m-12.abs-square {
        position: relative;
        padding-bottom: 12.5%
    }

    .grid .col-m-12.abs-square.half {
        padding-bottom: 6.25%
    }

    .grid .col-m-11 {
        width: 11.11111111111111%
    }

    .grid .col-m-11.abs-square {
        position: relative;
        padding-bottom: 11.11111111111111%
    }

    .grid .col-m-11.abs-square.half {
        padding-bottom: 5.555555555555555%
    }

    .grid .col-m-10 {
        width: 10%
    }

    .grid .col-m-10.abs-square {
        position: relative;
        padding-bottom: 10%
    }

    .grid .col-m-10.abs-square.half {
        padding-bottom: 5%
    }
}

.grid .offset-d-1 {
    padding: 5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.grid .offset-d-2 {
    padding: 2.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.grid .offset-d-3 {
    padding: 1.6666666666666667rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.grid .offset-d-4 {
    padding: 1.25rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.grid .offset-d-5 {
    padding: 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.grid .row--left {
    width: 100%;
    float: left
}

.grid .col {
    float: left;
    display: block
}

@font-face {
    font-family: HelveticaLTStd-Bold;
    src: url(../fonts/HelveticaLTStd-Bold.eot?#iefix) format('embedded-opentype'),url(../fonts/HelveticaLTStd-Bold.otf) format('opentype'),url(../fonts/HelveticaLTStd-Bold.woff) format('woff'),url(../fonts/HelveticaLTStd-Bold.ttf) format('truetype'),url(../fonts/HelveticaLTStd-Bold.svg#HelveticaLTStd-Bold) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: HelveticaLTStd-Roman;
    src: url(../fonts/HelveticaLTStd-Roman.eot?#iefix) format('embedded-opentype'),url(../fonts/HelveticaLTStd-Roman.otf) format('opentype'),url(../fonts/HelveticaLTStd-Roman.woff) format('woff'),url(../fonts/HelveticaLTStd-Roman.ttf) format('truetype'),url(../fonts/HelveticaLTStd-Roman.svg#HelveticaLTStd-Roman) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: Helvetica-Light;
    src: url(Helvetica-Light.eot);
    src: url(Helvetica-Light.eot?#iefix) format('embedded-opentype'),url(../fonts/Helvetica-Light.woff2) format('woff2'),url(../fonts/Helvetica-Light.woff) format('woff'),url(../fonts/Helvetica-Light.ttf) format('truetype'),url(../fonts/Helvetica-Light.svg#Helvetica-Light) format('svg');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: cofo sans;
    src: url(../fonts/cofo/CoFoSans-Bold.woff2) format('woff2'),url(../fonts/cofo/CoFoSans-Bold.woff) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: cofo sans;
    src: url(../fonts/cofo/CoFoSans-Regular.woff2) format('woff2'),url(../fonts/cofo/CoFoSans-Regular.woff) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap
}

@font-face {
    font-family: HelenPro;
    src: url('../fonts/Helen Pro Bold.eot');
    src: url('../fonts/Helen Pro Bold.eot?#iefix') format('embedded-opentype'),url('../fonts/Helen Pro Bold.woff') format('woff'),url('../fonts/Helen Pro Bold.ttf') format('truetype'),url('../fonts/Helen Pro Bold.svg#HelenPro-Bold') format('svg');
    font-style: normal;
    font-weight: 700;
    text-rendering:optimizeLegibility;font-display: swap
}

@font-face {
    font-family: HelenProRegular;
    src: url('../fonts/Helen Pro Regular.eot');
    src: url('../fonts/Helen Pro Regular.eot?#iefix') format('embedded-opentype'),url('../fonts/Helen Pro Regular.woff') format('woff'),url('../fonts/Helen Pro Regular.ttf') format('truetype'),url('../fonts/Helen Pro Regular.svg#HelenPro-Regular') format('svg');
    font-style: normal;
    font-weight: 400;
    text-rendering:optimizeLegibility;font-display: swap
}

body {
    font-family: helvetica lt std light,Arial,sans-serif;
    font-size: 14px
}

.section-offset {
    padding: 5.21vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 720px) and (max-width:1024px) {
    .section-offset {
        padding:50px 25px
    }
}

@media(max-width: 719px) {
    .section-offset {
        padding:25px
    }

    .section-offset.mobile-offset {
        padding-left: 50px;
        padding-right: 50px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.section-offset.pr0 {
    padding-right: 0
}

.section-offset.pb0 {
    padding-bottom: 0
}

.section-offset.pl0 {
    padding-left: 0
}

.section-offset.pr0 {
    padding-right: 0
}

.section-offset.pt0 {
    padding-top: 0!important
}

.section-offset.ptb0 {
    padding-top: 0;
    padding-bottom: 0
}

.section-offset.h100Center {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.content-offset {
    padding: 4.79vw 4.64vw 4.79vw 4.79vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .content-offset {
        padding:0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .content-offset {
        padding:25px
    }
}

.content-offset.p0 {
    padding: 0
}

.content-offset.padt0 {
    padding-top: 0
}

.content-offset.ptb0 {
    padding-top: 0;
    padding-bottom: 0
}

.content-offset.pr0 {
    padding-right: 0
}

.content-offset.pl {
    padding-left: 0
}

.content-offset.pr {
    padding-right: 0
}

.content-offset.pb0 {
    padding-bottom: 0
}

@media(max-width: 719px) {
    .content-offset.mobile-offset {
        padding-left:25px;
        padding-right: 25px
    }

    .content-offset.mobpt {
        padding-top: 25px
    }
}

.title-offset {
    padding-bottom: 2.08vw
}

@media(max-width: 719px) {
    .mobpt {
        padding-top:25px
    }
}

@media(max-width: 719px) {
    .mobile-offset {
        padding-left:25px!important;
        padding-right: 25px!important;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.text-col {
    padding: 2.6vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .text-col {
        padding:0
    }
}

@media(min-width: 1025px) {
    .text-col {
        padding:2vw
    }
}

@media(min-width: 1441px) {
    .text-col {
        padding:2.6vw
    }
}

.text-col.ptb {
    padding: 2.6vw 0
}

@media(max-width: 719px) {
    .text-col.ptb {
        padding:0
    }
}

.text-col.ptb0 {
    padding-top: 0;
    padding-bottom: 0
}

.text-col.p0 {
    padding: 0
}

.text-col.pt0 {
    padding-top: 0
}

.plr {
    padding: 0 2.6vw
}

@media(max-width: 1024px) {
    .plr {
        padding:0
    }
}

@media(min-width: 1025px) {
    .plr {
        padding:0 2vw
    }
}

@media(min-width: 1441px) {
    .plr {
        padding:0 2.6vw
    }
}

@media(min-width: 1025px) {
    .plr.pr0 {
        padding-right:0
    }
}

@media(min-width: 1025px) {
    .grid-title-box.abs-offset-right {
        right:2.6vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .tplr {
        padding-right:50px
    }
}

.section-tools {
    position: absolute;
    top: 60px;
    padding-left: 2.6vw;
    z-index: 2
}

@media(max-width: 1024px) {
    .section-tools {
        position:relative;
        top: inherit;
        padding-top: 30px;
        padding-bottom: 30px;
        padding-left: 0;
        opacity: 0
    }
}

.section-tools.white {
    color: #fff
}

.bckg-grey {
    background-color: #1a1a1a
}

.grey-bckg {
    background-color: #1d1d1d
}

.hidden {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    opacity: 0
}

.mtFix {
    margin-top: -1px
}

.p-t-100 {
    padding-top: 5.21vw
}

@media(max-width: 1024px) {
    .only_desktop {
        display:none!important
    }
}

@media(min-width: 1025px) {
    .only_mobile {
        display:none!important
    }
}

@media(max-width: 1024px) {
    section:first-child {
        padding-top:30px
    }
}

.about-us-tools {
    padding-left: 2.6vw
}

.white-bckg {
    background-color: #fff
}

.gr-bckg {
    background-color: #efefef
}

.content {
    overflow-y: hidden;
    overflow-x: hidden
}

::-moz-selection {
    background: #ff5b46;
    color: #fff
}

::selection {
    background: #ff5b46;
    color: #fff
}

::-moz-selection {
    background: #ff5b46;
    color: #fff
}

.animteBtnText .word {
    overflow: hidden
}

.rellax {
    -webkit-transition: -webkit-transform .1s cubic-bezier(0,0,.9,.99) 0s;
    transition: -webkit-transform .1s cubic-bezier(0,0,.9,.99) 0s;
    -o-transition: transform .1s cubic-bezier(0,0,.9,.99) 0s;
    transition: transform .1s cubic-bezier(0,0,.9,.99) 0s;
    transition: transform .1s cubic-bezier(0,0,.9,.99) 0s,-webkit-transform .1s cubic-bezier(0,0,.9,.99) 0s
}

.z-i-1 {
    z-index: 1
}

.z-i-2 {
    z-index: 2
}

.btn-shell {
    display: inline-block;
    padding: 30px 0;
    position: relative
}

@media(max-width: 719px) {
    .pull.mobile-offset {
        padding-left:25px;
        padding-right: 25px
    }
}

.responsive-img {
    width: 100%;
    text-align: center
}

.responsive-img.mt {
    margin-top: 10.63vw
}

.responsive-img.mb {
    margin-bottom: 7.81vw
}

.responsive-img img {
    max-width: 100%;
    height: auto
}

.fullAbs {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block
}

@media(max-width: 719px) {
    .hideOnMobile {
        display:none
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .hideOnDesktop {
        display:none
    }
}

@media(min-width: 1025px) {
    .hideOnDesktop {
        display:none
    }
}

.link-box {
    left: 15px;
    right: 15px;
    bottom: 15px;
    color: #aeacad;
    font-size: 12px;
    padding-left: 22px;
    background: rgba(0,0,0,.5);
    padding: 6px 15px;
    right: initial;
    border-radius: 100px;
    padding-left: 34px;
    bottom: 10px;
    left: 10px;
    -webkit-box-shadow: 6px 3px 11px 0 rgba(134,134,134,.25098039);
    box-shadow: 6px 3px 11px 0 rgba(134,134,134,.25098039);
    position: absolute;
    color: #fff;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    max-width: calc(100% - 60px);
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.link-box img {
    padding-right: 12px;
    position: absolute;
    left: 0;
    padding-left: 12px
}

.link-box .link-text {
    padding-left: 0;
    color: #fff
}

.pop-img-shadow {
    -webkit-transform: translateX(4%);
    -ms-transform: translateX(4%);
    transform: translateX(4%)
}

.progress {
    position: fixed;
    top: 0;
    height: 0;
    left: 0;
    width: 3px;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    background: #ff5b46;
    z-index: 8000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

@media(max-width: 1024px) {
    .progress {
        display:none
    }
}

html {
    overflow-x: hidden
}

::-webkit-scrollbar {
    width: 0;
    background: 0 0
}

@media(min-width: 1025px) {
    ::-webkit-scrollbar-thumb {
        background:red
    }
}

@media(min-width: 1025px) {
    body.bg .bg-col-d-71 {
        width:85%
    }
}

@media(min-width: 1025px) {
    .offset-5-per {
        padding-right:5%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-5-per {
        padding-right:5%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .pb135 {
        padding-bottom:30px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .pb135 {
        padding-bottom:50px
    }
}

@media(min-width: 1025px) {
    .pb135 {
        padding-bottom:7.03vw
    }
}

@media(min-width: 1920px) {
    .pb135 {
        padding-bottom:135px
    }
}

@media(min-width: 1025px) {
    .pb460 {
        padding-bottom:23.96vw
    }
}

@media(min-width: 1920px) {
    .pb460 {
        padding-bottom:460px
    }
}

.success-msg {
    font-size: 16px
}

@media(max-width: 1024px) {
    .pb50 {
        padding-bottom:25px
    }
}

@media(min-width: 1025px) {
    .pb50 {
        padding-bottom:50px
    }
}

.btn {
    display: inline-block;
    text-align: center;
    padding: 10px 25px;
    border-radius: 48px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .65s cubic-bezier(.25,.46,.45,.94);
    -o-transition: all .65s cubic-bezier(.25,.46,.45,.94);
    transition: all .65s cubic-bezier(.25,.46,.45,.94);
    color: #fff;
    opacity: .5;
    border: 1px solid #fff;
    font-size: 12px;
    line-height: 20px
}

.btn .word {
    vertical-align: middle
}

.btn span {
    display: inline-block
}

.btn.bigger {
    font-size: 16px;
    padding: 15px 40px
}

.btn.big {
    width: 294px
}

.btn.red {
    background: #ff5b46;
    border: 1px solid #ff5b46;
    color: #fff;
    opacity: 1
}

@media(max-width: 1024px) {
    .btn.red {
        background:#ff5842;
        border: 1px solid #ff5842;
        color: #fff;
        opacity: 1!important;
        font-size: 13px;
        letter-spacing: .5px;
        padding: 10px 20px
    }
}

.btn.red.tr:hover {
    background: 0 0;
    border: 1px solid #ff5b46!important;
    color: #ff5b46!important
}

.btn.red.white-h {
    min-width: 120px
}

.btn.red.white-h:hover {
    border: 1px solid #fff;
    color: #fff
}

.btn.red:hover {
    border: 1px solid #000;
    color: #000;
    background: 0 0
}

.btn.red.white_hover:hover {
    background: #fff;
    color: #ff5b46;
    border-color: #fff
}

.btn.white_trans {
    background: 0 0;
    border: 1px solid #fff
}

@media(min-width: 1025px) {
    .btn.black_trans {
        background:0 0;
        border: 1px solid #000;
        color: #000
    }

    .btn.black_trans:hover {
        background: #ff5b46;
        border: 1px solid #ff5b46;
        color: #fff;
        opacity: 1
    }
}

@media(max-width: 1024px) {
    .btn.black_trans {
        background:#ff5842;
        border: 1px solid #ff5842;
        color: #fff;
        opacity: 1!important;
        font-size: 13px;
        letter-spacing: .5px;
        padding: 10px 25px
    }
}

@media(max-width: 1024px) {
    .btn-box {
        padding-bottom:25px
    }
}

.btn-box.mt {
    margin-top: 30px
}

h1,h2,h3,h4,h5,h6,p {
    margin: 0
}

body.bg .inner-team .team-text-box .text.m.bigger {
    line-height: 1.5
}

@media(max-width: 1440px) {
    body.bg .inner-team .team-text-box .text.m.bigger {
        font-size:12px;
        line-height: 1.5
    }
}

@media(max-width: 719px) {
    body.bg .inner-team .team-text-box .text.m.bigger {
        font-size:14px;
        line-height: 1.8
    }
}

body.bg .title {
    font-family: HelenPro,sans-serif
}

body.bg .title.b.light {
    font-family: HelenPro,sans-serif
}

body.bg .title-team {
    font-family: HelenPro,sans-serif;
    padding-bottom: 15px;
    font-size: 2.3vw;
    line-height: 1
}

@media(max-width: 1440px) {
    body.bg .title-team {
        font-size:2.3vw;
        padding-bottom: 10px;
        line-height: 1
    }
}

@media(max-width: 719px) {
    body.bg .title-team {
        font-size:20px
    }
}

@media(max-width: 719px) {
    body.bg .title.nm {
        line-height:1.2;
        font-size: 29px
    }
}

@media(min-width: 1025px) {
    body.bg .title.nm {
        font-size:2.92vw
    }
}

@media(min-width: 1920px) {
    body.bg .title.nm {
        font-size:56px
    }
}

body.bg .title.m {
    line-height: 1.15
}

@media(max-width: 719px) {
    body.bg .title.en {
        font-size:44px
    }
}

@media(min-width: 1025px) {
    body.bg .title.b {
        margin-left:-.2vw
    }
}

@media(min-width: 1920px) {
    body.bg .title.b {
        margin-left:-4px
    }
}

@media(max-width: 719px) {
    body.bg .title.b {
        font-size:29px!important
    }
}

@media(max-width: 719px) {
    body.bg .title.sm {
        font-size:25px
    }
}

.title {
    font-family: helvetica lt std bold,sans-serif
}

@media(max-width: 1024px) {
    .title.large {
        font-size:45px;
        padding-bottom: 30px
    }
}

@media(min-width: 1025px) {
    .title.large {
        font-size:16.3vw;
        line-height: 1.01
    }
}

@media(min-width: 1920px) {
    .title.large {
        font-size:213px
    }
}

.title.c_anim.c_b strong span {
    color: #272727
}

.title.c_anim.c_b strong span.afterAnim {
    color: #ff5f3f
}

@media(min-width: 1025px) {
    .title.c_anim.c_b strong span.afterAnim:before {
        background:#ff5f3f
    }
}

@media(min-width: 1025px) {
    .title.c_anim.c_b strong span:before {
        background:0 0
    }
}

.title.c_b strong {
    position: relative;
    text-decoration: none;
    display: inline-block;
    color: #272727;
    font-weight: 700
}

.title.c_b strong a,.title.c_b strong span {
    display: inline-block
}

.title.c_b strong a:before,.title.c_b strong span:before {
    display: none
}

.title.c_b strong a i,.title.c_b strong span i {
    z-index: 1;
    position: relative;
    display: inline-block;
    font-style: normal
}

@media(min-width: 1025px) {
    .title.c_b strong a.anim-a:before,.title.c_b strong a:hover:before,.title.c_b strong span.anim-a:before,.title.c_b strong span:hover:before {
        -ms-transform:scaleX(0);
        transform: scaleX(0);
        -webkit-transform: scaleX(0);
        -ms-transform-origin: center right;
        transform-origin: center right;
        -webkit-transform-origin: center right
    }
}

.title.c_b strong a:before,.title.c_b strong span:before {
    display: none!important
}

@media(min-width: 1025px) {
    .title.c_b strong a:before,.title.c_b strong span:before {
        content:'';
        display: block;
        bottom: 5px;
        height: 4px;
        background: #ff5f3f;
        z-index: 0;
        -webkit-transition: height .35s ease-out;
        -o-transition: height .35s ease-out;
        transition: height .35s ease-out;
        width: 100%;
        -ms-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform: scaleX(1);
        position: absolute;
        left: 0;
        -webkit-transition: .6s -webkit-transform cubic-bezier(.19,1,.22,1);
        transition: .6s -webkit-transform cubic-bezier(.19,1,.22,1);
        -o-transition: .6s transform cubic-bezier(.19,1,.22,1);
        transition: .6s transform cubic-bezier(.19,1,.22,1);
        transition: .6s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
        -webkit-transition: .6s transform cubic-bezier(.19,1,.22,1);
        -ms-transform-origin: center left;
        transform-origin: center left;
        -webkit-transform-origin: center left
    }
}

.title.hen {
    line-height: 1.1
}

@media(max-width: 1024px) {
    .title.hen {
        font-size:12vw
    }
}

@media(min-width: 1025px) {
    .title.hen {
        font-size:8.75vw
    }
}

@media(min-width: 1920px) {
    .title.hen {
        font-size:168px
    }
}

.title.hen.c_r {
    color: #fb5642
}

.title.en {
    font-size: 115px;
    letter-spacing: 5px;
    line-height: 1.11
}

.title.en.mb {
    margin-bottom: 20px
}

.title.en.spb {
    padding-bottom: 2.08vw
}

@media(max-width: 1024px) {
    .title.en {
        font-size:38px;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.en {
        font-size:50px;
        letter-spacing: 3px
    }
}

@media(min-width: 1025px) {
    .title.en {
        font-size:6.04vw
    }
}

@media(min-width: 1025px) and (max-width:1300px) {
    .title.en {
        font-size:5.73vw
    }
}

@media(min-width: 1920px) {
    .title.en {
        font-size:116px
    }
}

.title.en strong {
    color: #ff5b46
}

.title.l {
    font-size: 102px;
    letter-spacing: 5px;
    line-height: 1.1;
    padding-bottom: 47px
}

.title.l strong {
    color: #ff5b46
}

@media(max-width: 1024px) {
    .title.l {
        font-size:36px;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.l {
        font-size:50px;
        letter-spacing: 0
    }
}

@media(min-width: 1025px) {
    .title.l {
        font-size:5.31vw;
        letter-spacing: 5px;
        line-height: 1.1;
        padding-bottom: 2.45vw
    }
}

@media(min-width: 1920px) {
    .title.l {
        padding-bottom:47px;
        font-size: 102px;
        letter-spacing: 5px
    }
}

.title.ls {
    font-size: 100px;
    letter-spacing: 5px;
    line-height: 1.1;
    padding-bottom: 47px
}

.title.ls strong {
    color: #ff5b46
}

@media(max-width: 1024px) {
    .title.ls {
        font-size:36px;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.ls {
        font-size:50px;
        letter-spacing: 0
    }
}

@media(min-width: 1025px) {
    .title.ls {
        font-size:5.21vw;
        letter-spacing: 5px;
        line-height: 1.1;
        padding-bottom: 2.45vw
    }
}

@media(min-width: 1920px) {
    .title.ls {
        padding-bottom:47px;
        font-size: 100px;
        letter-spacing: 5px
    }
}

.title.h {
    font-size: 87px;
    font-family: HelveticaLTStd-Bold,sans-serif;
    letter-spacing: 7px;
    line-height: 1.1;
    margin-left: -3px;
    padding-bottom: 3.7vw
}

.title.h .char {
    visibility: hidden
}

.title.h.pb0 {
    padding-bottom: 0
}

.title.h.bolder {
    font-weight: 700
}

.title.h.blh {
    line-height: 1.25;
    letter-spacing: 3px
}

@media(max-width: 1024px) {
    .title.h {
        font-size:40px;
        letter-spacing: 2px;
        padding-bottom: 25px;
        letter-spacing: 1px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.h {
        font-size:40px;
        letter-spacing: 5px;
        padding-bottom: 3.7vw
    }
}

@media(min-width: 1025px) {
    .title.h {
        font-size:4.53vw
    }
}

@media(min-width: 1920px) {
    .title.h {
        font-size:87px
    }
}

.title.h strong {
    color: #ff5b46;
    font-weight: 400
}

.title.b {
    font-size: 72px;
    letter-spacing: 3px;
    padding-bottom: 30px;
    font-family: HelveticaLTStd-Bold,sans-serif;
    line-height: 1.2
}

.title.b.pb30 {
    padding-bottom: 30px!important
}

.title.b.ffR {
    font-family: HelveticaLTStd-Roman,sans-serif!important;
    font-weight: 400!important;
    padding: 0 0 15.63vw!important
}

@media(max-width: 1024px) {
    .title.b.ffR {
        font-size:30px!important;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.b.ffR {
        font-size:50px!important;
        letter-spacing: 0
    }
}

@media(min-width: 1025px) {
    .title.b.ffR {
        font-size:3.75vw!important
    }
}

@media(min-width: 1920px) {
    .title.b.ffR {
        font-size:72px!important
    }
}

@media(max-width: 1024px) {
    .title.b {
        font-size:30px!important;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(max-width: 719px) {
    .title.b {
        font-size:27px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.b {
        font-size:50px;
        letter-spacing: 0
    }
}

.title.b.light {
    font-family: Helvetica-Light,sans-serif;
    font-weight: 200
}

.title.b.s {
    line-height: 1;
    padding-bottom: 25px
}

@media(max-width: 719px) {
    .title.b.s {
        padding-bottom:15px
    }
}

.title.b.mpb {
    padding-bottom: 2.08vw
}

@media(max-width: 719px) {
    .title.b.mpb {
        padding-bottom:30px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.b.mpb {
        padding-bottom:40px
    }
}

.title.b.bpb {
    padding-bottom: 3.65vw
}

@media(max-width: 719px) {
    .title.b.bpb {
        padding-bottom:50px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.b.bpb {
        padding-bottom:70px
    }
}

@media(min-width: 1025px) {
    .title.b {
        font-size:3.75vw
    }
}

@media(min-width: 1920px) {
    .title.b {
        font-size:72px
    }
}

.title.b strong {
    color: #ff5b46
}

.title.m {
    font-size: 62px
}

@media(max-width: 1024px) {
    .title.m {
        font-size:28px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.m {
        font-size:36px
    }
}

@media(min-width: 1025px) {
    .title.m {
        font-size:3.23vw
    }
}

@media(min-width: 1920px) {
    .title.m {
        font-size:62px
    }
}

.title.nm {
    font-size: 49px
}

@media(max-width: 1024px) {
    .title.nm {
        font-size:28px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.nm {
        font-size:36px
    }
}

@media(min-width: 1025px) {
    .title.nm {
        font-size:2.55vw
    }

    .title.nm.nm-48 {
        font-size: 2.55vw;
        padding-bottom: 1.56vw;
        letter-spacing: 0
    }
}

@media(min-width: 1920px) {
    .title.nm {
        font-size:49px
    }

    .title.nm.nm-48 {
        font-size: 48px;
        padding-bottom: 30px
    }
}

.title.nm strong {
    color: #ff5b46
}

.title.n {
    font-size: 36px;
    letter-spacing: 2px
}

@media(max-width: 719px) {
    .title.n {
        font-size:22px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.n {
        font-size:26px
    }
}

@media(min-width: 1025px) {
    .title.n {
        font-size:1.88vw
    }
}

@media(min-width: 1920px) {
    .title.n {
        font-size:36px
    }
}

.title.n strong {
    color: #fb5642;
    display: inline-block;
    position: relative
}

.title.n strong a {
    color: #fb5642;
    display: inline-block;
    position: relative
}

@media(min-width: 1025px) {
    .title.n strong a:after {
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        -webkit-transition: .6s -webkit-transform cubic-bezier(.19,1,.22,1);
        transition: .6s -webkit-transform cubic-bezier(.19,1,.22,1);
        -o-transition: .6s transform cubic-bezier(.19,1,.22,1);
        transition: .6s transform cubic-bezier(.19,1,.22,1);
        transition: .6s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
        -webkit-transition: .6s transform cubic-bezier(.19,1,.22,1);
        -ms-transform-origin: center left;
        transform-origin: center left;
        -webkit-transform-origin: center left;
        width: 100%;
        height: 2px;
        background-color: #ff5842;
        -ms-transform: scaleX(1);
        transform: scaleX(1);
        -webkit-transform: scaleX(1)
    }

    .title.n strong a.anim-a:after,.title.n strong a:hover:after {
        -ms-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform: scaleX(0);
        -ms-transform-origin: center right;
        transform-origin: center right;
        -webkit-transform-origin: center right
    }
}

.title.n a {
    display: inline-block;
    position: relative
}

.title.n a strong {
    color: #fb5642;
    display: inline-block;
    position: relative
}

@media(max-width: 1024px) {
    .title.n {
        padding-bottom:25px;
        font-size: 25px
    }
}

.title.n.pb {
    padding-bottom: 25px
}

@media(max-width: 1024px) {
    .title.n.bpb {
        padding-bottom:25px
    }
}

@media(min-width: 1025px) {
    .title.n.bpb {
        padding-bottom:5.21vw
    }
}

.title.ns {
    font-size: 32px;
    line-height: 1.2
}

@media(max-width: 719px) {
    .title.ns {
        font-size:22px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .title.ns {
        font-size:26px
    }
}

@media(min-width: 1025px) {
    .title.ns {
        font-size:1.67vw
    }
}

@media(min-width: 1920px) {
    .title.ns {
        font-size:32px
    }
}

@media(max-width: 1024px) {
    .title.ns {
        padding-bottom:25px;
        font-size: 25px
    }
}

.title.sm {
    font-size: 30px;
    letter-spacing: 3px;
    padding-bottom: 30px
}

@media(max-width: 1024px) {
    .title.sm {
        padding-bottom:25px
    }
}

@media(max-width: 1400px) {
    .title.sm {
        font-size:3.75vw;
        font-size: 23px;
        letter-spacing: 2px;
        padding-bottom: 25px
    }
}

@media(min-width: 1920px) {
    .title.sm {
        font-size:30px
    }
}

.title.t {
    font-size: 23px;
    font-family: HelveticaLTStd-Roman,sans-serif;
    line-height: 1.3;
    letter-spacing: 1px;
    font-weight: 400;
    padding-bottom: 30px
}

@media(max-width: 719px) {
    .title.t {
        font-size:18px
    }
}

@media(min-width: 1025px) {
    .title.t {
        font-size:18px;
        padding-bottom: 20px
    }
}

@media(min-width: 1281px) {
    .title.t {
        font-size:21px
    }
}

@media(min-width: 1441px) {
    .title.t {
        font-size:23px;
        padding-bottom: 30px
    }
}

.title.t.bpb {
    padding-bottom: 4.17vw
}

.title.t.mbB {
    margin-bottom: 3.8vw
}

.title.t.sht {
    font-family: helvetica lt std bold,sans-serif;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ff5842;
    letter-spacing: .4px
}

.title.tmns {
    font-size: 26px;
    font-family: HelveticaLTStd-Roman,sans-serif;
    line-height: 1.3;
    letter-spacing: 1px;
    font-weight: 700;
    padding-bottom: 10px
}

.title.tm {
    font-size: 23px;
    font-family: HelveticaLTStd-Roman,sans-serif;
    line-height: 1.3;
    letter-spacing: 1px;
    font-weight: 400;
    padding-bottom: 30px
}

@media(max-width: 719px) {
    .title.tm {
        font-size:18px
    }
}

@media(min-width: 1025px) {
    .title.tm {
        font-size:18px;
        padding-bottom: 20px
    }
}

@media(min-width: 1281px) {
    .title.tm {
        font-size:21px
    }
}

@media(min-width: 1441px) {
    .title.tm {
        font-size:23px;
        padding-bottom: 30px
    }
}

.title.tm.bpb {
    padding-bottom: 6.25vw
}

.title.tm.mbB {
    margin-bottom: 3.8vw
}

.title.bold {
    font-weight: 700
}

.title.pb0 {
    padding-bottom: 0
}

.title.t_pts {
    padding-top: 20px
}

.title.c_anim {
    color: #272727!important
}

.title.c_anim a {
    color: #272727!important
}

.title.c_anim a:after {
    background-color: transparent
}

.title.c_anim.c_w {
    color: #fff!important
}

.title.c_anim.c_w strong {
    color: #fff!important
}

.title.c_anim.c_w strong.afterAnim {
    color: #ff5b46!important
}

.title.c_anim strong {
    color: #272727!important
}

.title.c_anim strong.afterAnim {
    color: #ff5b46!important
}

.title.c_anim strong.afterAnim a {
    color: #fb5642
}

.title.c_anim strong.afterAnim a:after {
    background-color: #fb5642
}

body.bg .text-col-title-vertical.title {
    font-family: HelenPro,sans-serif;
    font-family: helvetica lt std bold,sans-serif;
    letter-spacing: 1px
}

body.bg .text-col-title-vertical.title strong {
    font-family: helvetica lt std bold,sans-serif
}

body.bg .anim-serv-txt .title.n strong {
    display: inline
}

@media(max-width: 1024px) {
    body.bg .title.large {
        font-size:45px;
        padding-bottom: 30px
    }
}

@media(min-width: 1025px) {
    body.bg .title.large {
        font-size:16.3vw;
        line-height: 1.01
    }
}

@media(min-width: 1920px) {
    body.bg .title.large {
        font-size:213px
    }
}

@media(min-width: 1025px) {
    body.bg .title.en {
        font-size:6.93vw;
        line-height: 1.01
    }

    body.bg .title.en.title-en-brickf {
        font-size: 4.95vw
    }
}

@media(min-width: 1920px) {
    body.bg .title.en {
        font-size:133px
    }

    body.bg .title.en.title-en-brickf {
        font-size: 95px
    }
}

@media(min-width: 1025px) {
    body.bg .title.b {
        font-size:4.22vw;
        line-height: 1.08
    }
}

@media(min-width: 1920px) {
    body.bg .title.b {
        font-size:81px
    }
}

body.bg .title.n {
    font-size: 36px
}

@media(max-width: 719px) {
    body.bg .title.n {
        font-size:21px;
        letter-spacing: 1.2px;
        line-height: 1.1
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    body.bg .title.n {
        font-size:26px
    }
}

@media(min-width: 1025px) {
    body.bg .title.n {
        font-size:1.98vw;
        line-height: 1.1
    }
}

@media(min-width: 1920px) {
    body.bg .title.n {
        font-size:38px
    }
}

@media(max-width: 719px) {
    body.bg .title.t {
        font-size:20px;
        letter-spacing: .5px;
        line-height: 1.1
    }
}

.sub_titile {
    font-family: helvetica lt std bold,sans-serif;
    font-size: 20px;
    color: #000;
    letter-spacing: 1.3px;
    padding-bottom: 4.9vw
}

@media(max-width: 1024px) {
    .sub_titile {
        padding-bottom:30px;
        font-size: 18px
    }
}

.sub_titile.thinner {
    font-size: 24px;
    font-family: helvetica lt std roman,sans-serif;
    font-weight: 400;
    padding-top: 25px;
    padding-bottom: 40px
}

.sub_titile.thinner.blh {
    font-size: 27px;
    color: #272727;
    line-height: 1.1
}

@media(max-width: 719px) {
    .sub_titile.thinner.blh {
        font-family:helvetica lt std roman,sans-serif;
        font-size: 13px;
        letter-spacing: .6px;
        line-height: 1.8
    }
}

.sub_titile.thinner.spt {
    padding-top: 15px
}

.sub_titile.thinner.full {
    max-width: 100%
}

@media(min-width: 1025px) {
    .sub_titile.thinner {
        font-size:19px
    }
}

@media(min-width: 1441px) {
    .sub_titile.thinner {
        font-size:22px
    }
}

@media(min-width: 1661px) {
    .sub_titile.thinner {
        font-size:24px
    }
}

@media(max-width: 1440px) {
    .sub_titile.thinner {
        padding-bottom:25px
    }
}

@media(max-width: 1024px) {
    .sub_titile.thinner {
        padding-bottom:30px;
        font-size: 18px
    }
}

body.bg .sub_titile {
    font-family: HelenProRegular,sans-serif
}

.text {
    font-family: helvetica lt std roman,sans-serif
}

.text a {
    text-decoration: none;
    color: #ff5b46
}

.text.bl {
    font-size: 24px;
    padding-bottom: 30px;
    line-height: 1.4
}

@media(max-width: 1440px) {
    .text.bl {
        font-size:21px
    }
}

.text.b {
    font-size: 18px;
    padding-bottom: 30px;
    line-height: 1.4
}

@media(max-width: 1440px) {
    .text.b {
        font-size:17px
    }
}

.text.n {
    font-size: 16px;
    letter-spacing: .3px;
    line-height: 1.5;
    padding-bottom: 30px
}

@media(max-width: 1380px) {
    .text.n {
        font-size:15px
    }
}

@media(max-width: 1280px) {
    .text.n {
        font-size:14px
    }
}

@media(max-width: 719px) {
    .text.n {
        padding-bottom:25px
    }
}

.text.n.gap {
    padding-bottom: 0;
    padding-top: 30px
}

@media(max-width: 1440px) {
    .text.n.gap {
        padding-bottom:0
    }
}

@media(max-width: 1024px) {
    .text.n.gap {
        padding-top:0;
        padding-bottom: 0
    }
}

.text.nm {
    font-size: 15px;
    letter-spacing: .3px;
    line-height: 1.5;
    padding-bottom: 30px;
    font-weight: 700;
    color: #fff
}

@media(max-width: 1380px) {
    .text.nm {
        font-size:15px
    }
}

@media(max-width: 1280px) {
    .text.nm {
        font-size:14px
    }
}

@media(max-width: 719px) {
    .text.nm {
        padding-bottom:25px
    }
}

.text.nm.fw-300 {
    font-weight: 300;
    color: #8b8b8b
}

.text.m {
    font-size: 14px;
    font-family: HelveticaLTStd-Roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .8px;
    padding-bottom: 30px;
    font-weight: 500
}

.text.m em,.text.m i {
    font-style: italic!important
}

.text.m u {
    position: relative;
    display: inline-block;
    text-decoration: none
}

.text.m u:before {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    -webkit-transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    -o-transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
    -webkit-transition: 1s transform cubic-bezier(.19,1,.22,1);
    -ms-transform-origin: center left;
    transform-origin: center left;
    -webkit-transform-origin: center left;
    width: 100%;
    height: 1px;
    background-color: #6b6b6b;
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform: scaleX(1)
}

.text.m a {
    position: relative;
    display: inline-block
}

.text.m a:hover:after {
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -ms-transform-origin: center right;
    transform-origin: center right;
    -webkit-transform-origin: center right
}

.text.m a:after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    -webkit-transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    -o-transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
    -webkit-transition: 1s transform cubic-bezier(.19,1,.22,1);
    -ms-transform-origin: center left;
    transform-origin: center left;
    -webkit-transform-origin: center left;
    width: 100%;
    height: 1px;
    background-color: #fe5b46;
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform: scaleX(1)
}

.text.m a.btn:after {
    display: none
}

.text.m.no-shd {
    text-shadow: 0 0 0 transparent
}

.text.m.bigger {
    font-size: 14px;
    line-height: 1.8
}

.text.m.pt {
    padding-top: 20px
}

.text.m.bpb {
    padding-bottom: 3.65vw
}

@media(max-width: 1024px) {
    .text.m.bpb {
        padding-bottom:30px
    }
}

@media(min-width: 1920px) {
    .text.m.bpb {
        padding-bottom:70px
    }
}

@media(max-width: 1024px) {
    .text.m.bbpb {
        padding-bottom:25px
    }
}

@media(min-width: 1025px) {
    .text.m.bbpb {
        padding-bottom:5.21vw
    }
}

.text.m._s {
    padding-bottom: 12px
}

@media(max-width: 1400px) {
    .text.m {
        font-size:13px;
        letter-spacing: .6px
    }
}

.text.m.it {
    font-style: italic
}

.text.m.slh {
    line-height: 1.5
}

.text.m i {
    font-family: HelveticaLTStd-Roman,sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700
}

.text.m strong {
    font-family: HelveticaLTStd-Bold,sans-serif;
    font-size: 15px
}

.text.m .t-red {
    color: #fe5b46
}

.text.s {
    font-size: 12px
}

.text.t {
    font-size: 10px;
    font-family: Helvetica-Light,sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    opacity: 1
}

.text.c_anim {
    color: #272727!important
}

.text.c_anim a {
    color: #272727!important
}

.text.c_anim a:after {
    background-color: transparent
}

.text.c_anim.c_w {
    color: #fff!important
}

.text.c_anim.c_w strong {
    color: #fff!important
}

.text.c_anim.c_w strong.afterAnim {
    color: #ff5b46!important
}

.text.c_anim strong {
    color: #272727!important
}

.text.c_anim strong.afterAnim {
    color: #ff5b46!important
}

.text.c_anim strong.afterAnim a {
    color: #fb5642
}

.text.c_anim strong.afterAnim a:after {
    background-color: #fb5642
}

.op_08 {
    opacity: .8
}

.op_07 {
    opacity: .7
}

.op_05 {
    opacity: .5
}

.op_04 {
    opacity: .4
}

.op_03 {
    opacity: .3
}

.op_03 {
    opacity: .3
}

.op_02 {
    opacity: .2
}

.op_01 {
    opacity: .1
}

.op_0 {
    opacity: 0
}

.c_w {
    color: #fff
}

.c_b {
    color: #272727
}

.c_g {
    color: #282524
}

.c_lg {
    color: #a8a8a8
}

.c_llg {
    color: #aaa
}

.c_mg {
    color: #434343
}

.c_lmg {
    color: #8f8f8f
}

.c_blue {
    color: #003768
}

.c_blue strong {
    color: #02aeef
}

.al_r {
    text-align: right
}

article iframe {
    max-width: 100%
}

@media(max-width: 1024px) {
    article iframe {
        width:100%;
        height: auto
    }
}

article .vWrapper {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0
}

article .vWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: none
}

article em {
    font-style: normal
}

article ol {
    padding: 0;
    margin: 0
}

article a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    hyphens: auto
}

article.black li,article.black p,article.black ul {
    color: #000
}

article p {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    padding-bottom: 25px;
    color: #6b6b6b
}

article p strong {
    color: #000;
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px
}

article p a {
    text-decoration: none;
    color: #ff5b46
}

article h1,article h1 strong {
    font-size: 62px
}

@media(min-width: 1025px) {
    article h1,article h1 strong {
        font-size:3.23vw
    }
}

@media(min-width: 1920px) {
    article h1,article h1 strong {
        font-size:62px
    }
}

article h2,article h2 strong {
    font-size: 36px;
    letter-spacing: 2px
}

@media(max-width: 1024px) {
    article h2,article h2 strong {
        font-size:25px
    }
}

article h3,article h3 strong {
    font-size: 30px;
    letter-spacing: 3px
}

@media(max-width: 1400px) {
    article h3,article h3 strong {
        font-size:3.75vw;
        font-size: 27px;
        letter-spacing: 2px
    }
}

@media(max-width: 719px) {
    article h3,article h3 strong {
        font-size:20px
    }
}

@media(min-width: 1920px) {
    article h3,article h3 strong {
        font-size:30px
    }
}

article h4,article h4 strong {
    font-size: 24px;
    line-height: 1.3;
    letter-spacing: 1px
}

@media(max-width: 719px) {
    article h4,article h4 strong {
        font-size:18px
    }
}

@media(min-width: 1025px) {
    article h4,article h4 strong {
        font-size:18px
    }
}

@media(min-width: 1281px) {
    article h4,article h4 strong {
        font-size:21px
    }
}

@media(min-width: 1441px) {
    article h4,article h4 strong {
        font-size:23px
    }
}

article h5,article h5 strong,article h6,article h6 strong {
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 1px
}

@media(max-width: 719px) {
    article h5,article h5 strong,article h6,article h6 strong {
        font-size:16px
    }
}

@media(min-width: 1025px) {
    article h5,article h5 strong,article h6,article h6 strong {
        font-size:16px
    }
}

@media(min-width: 1281px) {
    article h5,article h5 strong,article h6,article h6 strong {
        font-size:18px
    }
}

@media(min-width: 1441px) {
    article h5,article h5 strong,article h6,article h6 strong {
        font-size:18px
    }
}

article h1,article h1 strong,article h2,article h2 strong,article h3,article h3 strong,article h4,article h4 strong,article h5,article h5 strong,article h6,article h6 strong {
    line-height: 1.3
}

@media(max-width: 1024px) {
    article h1,article h1 strong,article h2,article h2 strong,article h3,article h3 strong,article h4,article h4 strong,article h5,article h5 strong,article h6,article h6 strong {
        padding-bottom:20px;
        font-family: helvetica lt std roman,sans-serif
    }
}

@media(min-width: 1025px) {
    article h1,article h1 strong,article h2,article h2 strong,article h3,article h3 strong,article h4,article h4 strong,article h5,article h5 strong,article h6,article h6 strong {
        padding-bottom:30px
    }
}

article ol,article ul {
    list-style: none;
    padding: 0 0 25px;
    margin: 0;
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    color: #6b6b6b
}

article ol h1,article ol h2,article ol h3,article ol h4,article ol h5,article ol h6,article ul h1,article ul h2,article ul h3,article ul h4,article ul h5,article ul h6 {
    padding: 0;
    margin: 0!important;
    color: #000
}

article li {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    color: #6b6b6b
}

article li a {
    text-decoration: none;
    color: #ff5b46
}

.text.m article em {
    font-style: normal
}

.text.m article ol {
    padding: 0;
    margin: 0
}

.text.m article a {
    overflow-wrap: break-word;
    word-wrap: break-word;
    -ms-word-break: break-all;
    word-break: break-all;
    word-break: break-word;
    -ms-hyphens: auto;
    hyphens: auto
}

.text.m article.black li,.text.m article.black p,.text.m article.black ul {
    color: #000
}

.text.m article p {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    padding-bottom: 25px;
    color: #6b6b6b
}

.text.m article p strong {
    color: #000;
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px
}

.text.m article p a {
    text-decoration: none;
    color: #ff5b46
}

.text.m article h1,.text.m article h1 strong {
    font-size: 62px
}

@media(min-width: 1025px) {
    .text.m article h1,.text.m article h1 strong {
        font-size:3.23vw
    }
}

@media(min-width: 1920px) {
    .text.m article h1,.text.m article h1 strong {
        font-size:62px
    }
}

.text.m article h2,.text.m article h2 strong {
    font-size: 36px;
    letter-spacing: 2px
}

@media(max-width: 1024px) {
    .text.m article h2,.text.m article h2 strong {
        font-size:25px
    }
}

.text.m article h3,.text.m article h3 strong {
    font-size: 30px;
    letter-spacing: 3px
}

@media(max-width: 1400px) {
    .text.m article h3,.text.m article h3 strong {
        font-size:3.75vw;
        font-size: 27px;
        letter-spacing: 2px
    }
}

@media(max-width: 719px) {
    .text.m article h3,.text.m article h3 strong {
        font-size:20px
    }
}

@media(min-width: 1920px) {
    .text.m article h3,.text.m article h3 strong {
        font-size:30px
    }
}

.text.m article h4,.text.m article h4 strong {
    font-size: 24px;
    line-height: 1.3;
    letter-spacing: 1px
}

@media(max-width: 719px) {
    .text.m article h4,.text.m article h4 strong {
        font-size:18px
    }
}

@media(min-width: 1025px) {
    .text.m article h4,.text.m article h4 strong {
        font-size:18px
    }
}

@media(min-width: 1281px) {
    .text.m article h4,.text.m article h4 strong {
        font-size:21px
    }
}

@media(min-width: 1441px) {
    .text.m article h4,.text.m article h4 strong {
        font-size:23px
    }
}

.text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 1px
}

@media(max-width: 719px) {
    .text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        font-size:16px
    }
}

@media(min-width: 1025px) {
    .text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        font-size:16px
    }
}

@media(min-width: 1281px) {
    .text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        font-size:18px
    }
}

@media(min-width: 1441px) {
    .text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        font-size:18px
    }
}

@media(max-width: 1024px) {
    .text.m article h1,.text.m article h1 strong,.text.m article h2,.text.m article h2 strong,.text.m article h3,.text.m article h3 strong,.text.m article h4,.text.m article h4 strong,.text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        padding-bottom:25px;
        font-family: helvetica lt std roman,sans-serif
    }
}

@media(min-width: 1025px) {
    .text.m article h1,.text.m article h1 strong,.text.m article h2,.text.m article h2 strong,.text.m article h3,.text.m article h3 strong,.text.m article h4,.text.m article h4 strong,.text.m article h5,.text.m article h5 strong,.text.m article h6,.text.m article h6 strong {
        padding-bottom:30px
    }
}

.text.m article ol,.text.m article ul {
    list-style: none;
    padding: 0 0 25px;
    margin: 0;
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    color: #6b6b6b
}

.text.m article ol h1,.text.m article ol h2,.text.m article ol h3,.text.m article ol h4,.text.m article ol h5,.text.m article ol h6,.text.m article ul h1,.text.m article ul h2,.text.m article ul h3,.text.m article ul h4,.text.m article ul h5,.text.m article ul h6 {
    padding: 0;
    margin: 0!important
}

.text.m article li {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.8;
    letter-spacing: .5px;
    color: #6b6b6b
}

.text.m article li a {
    text-decoration: none;
    color: #ff5b46
}

.text.m.l-sp-0 {
    letter-spacing: 0
}

.mauto {
    margin: auto
}

@media(max-width: 1024px) {
    .pb70 {
        padding-bottom:25px
    }
}

@media(min-width: 1025px) {
    .pb70 {
        padding-bottom:3.65vw
    }
}

@media(min-width: 1920px) {
    .pb70 {
        padding-bottom:70px
    }
}

.text.m .char.specSymbol {
    font-size: 70%;
    vertical-align: 4px
}

.wpMinus {
    word-spacing: -95px
}

.col {
    float: left
}

@media(max-width: 719px) {
    .col-m-30 {
        width:30%
    }
}

@media(max-width: 719px) {
    .col-m-50 {
        width:50%
    }
}

@media(max-width: 719px) {
    .col-m-70 {
        width:70%
    }
}

@media(max-width: 719px) {
    .col-m-75 {
        width:75%
    }
}

@media(max-width: 719px) {
    .col-m-80 {
        width:80%
    }
}

@media(max-width: 719px) {
    .col-m-90 {
        width:90%
    }
}

@media(max-width: 719px) {
    .col-m-100 {
        width:100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-25 {
        width:25%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-30 {
        width:30%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-32 {
        width:32%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-33 {
        width:33%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-35 {
        width:35%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-40 {
        width:40%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-54 {
        width:54%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-50 {
        width:50%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-46 {
        width:46%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-60 {
        width:60%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-65 {
        width:65%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-70 {
        width:70%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-80 {
        width:80%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-85 {
        width:85%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-100 {
        width:100%
    }
}

@media(min-width: 1025px) {
    .col-d-100 {
        width:100%
    }
}

@media(min-width: 1025px) {
    .col-d-89 {
        width:89%
    }
}

@media(min-width: 1025px) {
    .col-d-80 {
        width:80%
    }
}

@media(min-width: 1025px) {
    .col-d-75 {
        width:75%
    }
}

@media(min-width: 1025px) {
    .col-d-71 {
        width:71%
    }
}

@media(min-width: 1025px) {
    .col-d-70 {
        width:70%
    }
}

@media(min-width: 1025px) {
    .col-d-67 {
        width:67%
    }
}

@media(min-width: 1025px) {
    .col-d-66 {
        width:66.66%
    }
}

@media(min-width: 1025px) {
    .col-d-65 {
        width:65%
    }
}

@media(min-width: 1025px) {
    .col-d-63 {
        width:63%
    }
}

@media(min-width: 1025px) {
    .col-d-61 {
        width:61%
    }
}

@media(min-width: 1025px) {
    .col-d-72 {
        width:72%
    }
}

@media(min-width: 1025px) {
    body.bg .col-d-61 {
        width:65%
    }
}

@media(min-width: 1025px) {
    .col-d-605 {
        width:60.7%
    }
}

@media(min-width: 1025px) {
    .col-d-60 {
        width:60%
    }
}

@media(min-width: 1025px) {
    .col-d-57 {
        width:57%
    }
}

@media(min-width: 1025px) {
    .col-d-58 {
        width:58%
    }
}

@media(min-width: 1025px) {
    .col-d-55 {
        width:56%
    }
}

@media(min-width: 1025px) {
    .col-d-54 {
        width:54%
    }
}

@media(min-width: 1025px) {
    .col-d-50 {
        width:50%
    }
}

@media(min-width: 1025px) {
    .col-d-46 {
        width:46%
    }
}

@media(min-width: 1025px) {
    .col-d-42 {
        width:42%
    }
}

@media(min-width: 1025px) {
    .col-d-85 {
        width:85%
    }
}

@media(min-width: 1025px) {
    .d-offset-left-50 {
        margin-left:50%
    }
}

@media(min-width: 1025px) {
    .col-d-47 {
        width:47%
    }
}

@media(min-width: 1025px) {
    .col-d-45 {
        width:44%
    }
}

@media(min-width: 1025px) {
    .col-d-40 {
        width:40%
    }
}

@media(min-width: 1025px) {
    .col-d-38 {
        width:38%
    }
}

@media(min-width: 1025px) {
    .col-d-37 {
        width:37%
    }
}

@media(min-width: 1025px) {
    .col-d-35 {
        width:35%
    }
}

@media(min-width: 1025px) {
    .col-d-32 {
        width:31.66%
    }
}

@media(min-width: 1025px) {
    .col-d-33 {
        width:33.33%
    }
}

@media(min-width: 1025px) {
    .col-d-31 {
        width:31%
    }
}

@media(min-width: 1025px) {
    .col-d-30 {
        width:30%
    }
}

@media(min-width: 1025px) {
    .col-d-29 {
        width:29%
    }
}

@media(min-width: 1025px) {
    .col-d-28 {
        width:28%
    }
}

@media(min-width: 1025px) {
    .col-d-25 {
        width:25%
    }
}

@media(min-width: 1025px) {
    .col-d-20-m-l {
        margin-left:20%
    }
}

.header-logo {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    padding: 40px
}

.header-logo.parallaxMove {
    position: fixed
}

@media(max-width: 719px) {
    .header-logo {
        top:20px;
        left: 10px;
        padding: 0;
        margin: 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .header-logo {
        margin:14px 15px;
        padding: 0
    }
}

.header-logo:hover a {
    -webkit-animation: none;
    animation: none
}

.header-logo a {
    display: inline-block;
    position: relative;
    width: 35px;
    padding-bottom: 100%;
    vertical-align: middle;
    overflow: hidden;
    -webkit-animation: wave 9s infinite cubic-bezier(.39,.58,.57,1);
    animation: wave 9s infinite cubic-bezier(.39,.58,.57,1);
    animation-delay: 8s;
    -webkit-animation-delay: 8s
}

@media(min-width: 1025px) {
    .header-logo a {
        width:50px
    }
}

.header-logo svg {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0
}

.header-logo a,.header-logo span {
    display: inline-block
}

.header-logo a svg path,.header-logo span svg path {
    fill: #fff;
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

.light .header-logo svg path {
    fill: #fff
}

.dark .header-logo svg path {
    fill: #000
}

.burger-box {
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 10001;
    font-size: 10px;
    letter-spacing: 4px
}

.lang-box {
    position: fixed;
    top: 53px;
    right: 93px;
    z-index: 10001;
    font-size: 10px;
    letter-spacing: 3px;
    color: #fff
}

@media(max-width: 1024px) {
    .lang-box {
        top:28px;
        right: 60px
    }
}

.privacy-policy {
    position: absolute;
    bottom: 20px;
    left: 50%;
    margin: auto;
    -webkit-transform: translateX(-42%);
    -ms-transform: translateX(-42%);
    transform: translateX(-42%);
    font-size: 10px;
    font-family: helvetica lt std light,Arial,sans-serif;
    letter-spacing: 1px;
    z-index: 2
}

@media(max-width: 719px) {
    .privacy-policy {
        width:100%;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        left: 0;
        right: 0;
        text-align: center
    }
}

.privacy-policy a {
    display: inline-block;
    color: rgba(255,255,255,.5);
    padding: 15px
}

body.dark .lang-box {
    color: #000
}

.copyright-box {
    position: fixed;
    bottom: 0;
    left: 40px;
    color: #fff;
    z-index: 1001;
    -webkit-transition: color .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: color .35s cubic-bezier(0,-.04,1,1.08);
    transition: color .35s cubic-bezier(0,-.04,1,1.08)
}

@media(max-width: 1024px) {
    .copyright-box {
        display:none
    }
}

.copyright-box .copyright {
    font-size: 9px;
    font-family: Arial,sans-serif;
    letter-spacing: 2px
}

.light .copyright-box {
    color: #fff
}

.dark .copyright-box {
    color: #000
}

.social-icons svg {
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

.social-icons svg path {
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

.social-icons.colorfull {
    display: inline-block
}

.social-icons.colorfull .social-icon {
    opacity: 1;
    padding-right: 12px;
    padding-left: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
    cursor: pointer!important
}

.social-icons.colorfull .social-icon svg {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2)
}

.social-icons.colorfull .social-icon.fb path {
    fill: #093fc6
}

.social-icons.colorfull .social-icon.tw path {
    fill: #000
}

.social-icons.colorfull .social-icon.in path {
    fill: #ff4c23
}

.social-icons.colorfull .social-icon.be path {
    fill: #001ed7
}

.social-icons.colorfull .social-icon.be svg {
    -webkit-transform: scale(1.9) translateX(3px) translateY(-1px);
    -ms-transform: scale(1.9) translateX(3px) translateY(-1px);
    transform: scale(1.9) translateX(3px) translateY(-1px)
}

.social-icons.colorfull .social-icon:hover svg {
    -webkit-transform: rotateY(-180deg) scale(1.2);
    transform: rotateY(-180deg) scale(1.2)
}

.social-icons.colorfull .social-icon:hover.be svg {
    -webkit-transform: rotateY(-180deg) scale(1.9);
    transform: rotateY(-180deg) scale(1.9)
}

.social-icons-box {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 2001
}

@media(max-width: 1024px) {
    .social-icons-box {
        display:none
    }
}

.social-icons-box .social-icon {
    display: block;
    padding: 10px 0;
    text-align: center
}

.social-icon {
    display: inline-block;
    opacity: .31;
    -webkit-transition: opacity .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: opacity .35s cubic-bezier(0,-.04,1,1.08);
    transition: opacity .35s cubic-bezier(0,-.04,1,1.08)
}

.social-icon:hover {
    opacity: 1
}

.social-icon:hover svg {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg)
}

.dark .social-icon svg path {
    fill: #000
}

@media(max-height: 700px) {
    #awwwards {
        top:29%!important
    }
}

@media(max-width: 1024px) {
    #awwwards {
        top:50%!important
    }
}

.get-in-touch-box {
    top: 64%;
    position: fixed;
    right: 40px;
    z-index: 2001;
    font-size: 10px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    letter-spacing: 3px;
    -webkit-transition: color .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: color .35s cubic-bezier(0,-.04,1,1.08);
    transition: color .35s cubic-bezier(0,-.04,1,1.08);
    color: #fff
}

.get-in-touch-box .get-in-touch-icon {
    position: absolute;
    top: -35px;
    opacity: .3;
    left: -2px
}

@media(max-width: 1024px) {
    .get-in-touch-box {
        display:none
    }
}

.get-in-touch-box svg {
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

body.bg .get-in-touch-box {
    letter-spacing: 2px
}

.dark .get-in-touch-box {
    color: #000
}

.dark .get-in-touch-text:before {
    background: #000
}

.get-in-touch-text {
    overflow: hidden;
    position: relative;
    cursor: pointer
}

.get-in-touch-text:before {
    position: absolute;
    content: '';
    height: 100%;
    background: #fff;
    width: 1px;
    right: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -100%;
    -webkit-transition: .8s all cubic-bezier(.46,.03,.52,.96);
    -o-transition: .8s all cubic-bezier(.46,.03,.52,.96);
    transition: .8s all cubic-bezier(.46,.03,.52,.96);
    opacity: .5
}

.get-in-touch-text:hover:before {
    top: 100%
}

.get-in-touch-text a {
    color: inherit
}

.ie .get-in-touch-box {
    top: 50%
}

.ie .get-in-touch-box .vTextLR {
    -webkit-transform: translateY(-50%) rotate(-180deg);
    -ms-transform: translateY(-50%) rotate(-180deg);
    transform: translateY(-50%) rotate(-180deg)
}

.dark .get-in-touch-box {
    color: #000
}

.dark .get-in-touch-box svg path {
    stroke: #000
}

.burger-box {
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 10001;
    font-size: 10px;
    letter-spacing: 4px
}

.burger-box .burger-text {
    opacity: .8
}

.line {
    position: fixed;
    bottom: 0;
    top: 0;
    width: 1px;
    background: rgba(0,0,0,.03);
    z-index: 10;
    pointer-events: none
}

.line.anim-line {
    height: 0%
}

.line.anim-line.full {
    height: 100%
}

@media(max-width: 1024px) {
    .line {
        display:none
    }
}

.line.l1 {
    left: 10%
}

.line.l2 {
    left: 30%
}

.line.l3 {
    left: 50%
}

.line.l4 {
    left: 70%
}

.line.l5 {
    left: 90%
}

.scroll-down {
    position: fixed;
    bottom: 11px;
    left: calc(50% - 6px);
    z-index: 1001;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-size: 9px;
    letter-spacing: 9px;
    pointer-events: none
}

.scroll-down.scroll_up {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    bottom: 95px;
    display: block
}

.scroll-down.scroll_up .scroll-down-text.vTextLR {
    -webkit-transform: translateY(-73px) rotate(0);
    -ms-transform: translateY(-73px) rotate(0);
    transform: translateY(-73px) rotate(0)
}

@media(max-width: 1024px) {
    .scroll-down {
        display:none
    }
}

.scroll-down .scroll-down-text {
    margin-left: 1px;
    opacity: .5;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: fadeScroll;
    animation-name: fadeScroll;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out
}

.scroll-down .scroll-down-icon {
    display: inline-block;
    -webkit-transform: translateX(1px) translateY(-38px);
    -ms-transform: translateX(1px) translateY(-38px);
    transform: translateX(1px) translateY(-38px);
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: scroll;
    animation-name: scroll;
    -webkit-animation-timing-function: cubic-bezier(.4,0,1,1);
    animation-timing-function: cubic-bezier(.4,0,1,1)
}

.scroll-down .stroke-1 {
    stroke: #fff;
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08);
    stroke-width: 1px
}

.scroll-down .stroke-2 {
    stroke: #fff;
    stroke-dasharray: 7;
    opacity: .4;
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

.scroll-down .stroke-3 {
    stroke: #fff;
    fill: #fff;
    -webkit-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    -o-transition: all .35s cubic-bezier(0,-.04,1,1.08);
    transition: all .35s cubic-bezier(0,-.04,1,1.08)
}

body.bg .scroll-down {
    letter-spacing: 6px
}

@-webkit-keyframes scroll {
    0% {
        opacity: 0
    }

    5% {
        opacity: 1;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }

    20% {
        opacity: 1
    }

    25% {
        -webkit-transform: translateX(1px) translateY(0);
        transform: translateX(1px) translateY(0)
    }

    35% {
        opacity: 0;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }

    100% {
        opacity: 0;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }
}

@keyframes scroll {
    0% {
        opacity: 0
    }

    5% {
        opacity: 1;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }

    20% {
        opacity: 1
    }

    25% {
        -webkit-transform: translateX(1px) translateY(0);
        transform: translateX(1px) translateY(0)
    }

    35% {
        opacity: 0;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }

    100% {
        opacity: 0;
        -webkit-transform: translateX(1px) translateY(-38px);
        transform: translateX(1px) translateY(-38px)
    }
}

@-webkit-keyframes fadeScroll {
    0% {
        opacity: 0
    }

    20% {
        opacity: .5
    }

    100% {
        opacity: 0
    }
}

@keyframes fadeScroll {
    0% {
        opacity: 0
    }

    20% {
        opacity: .5
    }

    100% {
        opacity: 0
    }
}

.dark .scroll-down .scroll-down-text {
    opacity: .5;
    color: #000
}

.dark .scroll-down .stroke-1 {
    stroke: #000
}

.dark .scroll-down .stroke-2 {
    stroke: #000;
    stroke-dasharray: 7;
    opacity: .4
}

.dark .scroll-down .stroke-3 {
    stroke: #000;
    fill: #000
}

@-webkit-keyframes wave {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }

    37% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    40% {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg)
    }

    42% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    44% {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg)
    }

    49% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    60% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes wave {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%
    }

    37% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    40% {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg)
    }

    42% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    44% {
        -webkit-transform: rotate(50deg);
        transform: rotate(50deg)
    }

    49% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    50% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    60% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@-webkit-keyframes wave2 {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    40% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    60% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes wave2 {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    20% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    40% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    60% {
        -webkit-transform: rotate(15deg);
        transform: rotate(15deg)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

#contact-us-2 {
    fill: #000;
    stroke: transparent
}

#contact-us-2.active {
    stroke: red;
    fill: red
}

#contact-us-3 {
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    fill: #000;
    stroke: transparent
}

#contact-us-3.active {
    stroke: red;
    fill: red
}

#contact-us-4 {
    -webkit-transform-origin: top;
    -ms-transform-origin: top;
    transform-origin: top;
    fill: #000;
    stroke: transparent
}

#contact-us-4.active {
    stroke: red;
    fill: red
}

.m100vh {
    min-height: 100vh;
    height: auto
}

@media(max-width: 1024px) {
    .m100vh {
        min-height:auto;
        min-height: 100vh
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .m100vh {
        min-height:700px
    }
}

@media(max-width: 719px) {
    .m100vh.auto {
        min-height:auto
    }
}

@media(max-width: 719px) {
    .mobile-bckg {
        background:0 0!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .t50vh {
        min-height:auto;
        min-height: 50vh
    }
}

.h100vh {
    height: 100vh
}

@media(max-width: 1024px) {
    .h100vh {
        min-height:auto
    }
}

.w45vw {
    width: 45vw
}

@media(max-width: 719px) {
    .w45vw {
        width:80vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .w45vw {
        width:50vw
    }
}

.w50vw {
    width: 50vw
}

.w100 {
    width: 100%
}

.w100vw {
    width: 100vw
}

.h100 {
    height: 100%
}

.mh100 {
    min-height: 100%
}

.responsive {
    max-width: 100%;
    height: auto
}

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.flexVertical {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.flexCenter {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.selfFlexEnd {
    -ms-flex-item-align: end;
    align-self: flex-end
}

.vTextLR {
    -webkit-writing-mode: vertical-lr;
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    -webkit-transform: translateY(-73px) rotate(-180deg);
    -ms-transform: translateY(-73px) rotate(-180deg);
    transform: translateY(-73px) rotate(-180deg)
}

.cover {
    background-size: cover;
    background-position: center
}

.cf:after {
    content: "";
    display: table;
    clear: both
}

.bckg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%
}

.wb {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    hyphens: auto
}

.equalHeight.swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.op_04 {
    opacity: .3
}

.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1
}

.swiper-container-no-flexbox .swiper-slide {
    float: left
}

.swiper-container-vertical>.swiper-wrapper {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    -webkit-box-sizing: content-box;
    box-sizing: content-box
}

.swiper-container-android .swiper-slide,.swiper-wrapper {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

.swiper-container-multirow>.swiper-wrapper {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.swiper-container-free-mode>.swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto
}

.swiper-slide {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    -o-transition-property: transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform
}

.swiper-invisible-blank-slide {
    visibility: hidden
}

.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide {
    height: auto
}

.swiper-container-autoheight .swiper-wrapper {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-transition-property: height,-webkit-transform;
    transition-property: height,-webkit-transform;
    -o-transition-property: transform,height;
    -webkit-transition-property: height,-webkit-transform;
    transition-property: height,-webkit-transform;
    transition-property: transform,height;
    transition-property: transform,height,-webkit-transform;
    transition-property: transform,height,-webkit-transform
}

.swiper-container-3d {
    -webkit-perspective: 1200px;
    perspective: 1200px
}

.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d
}

.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10
}

.swiper-container-3d .swiper-slide-shadow-left {
    background-image: -webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(right,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))
}

.swiper-container-3d .swiper-slide-shadow-right {
    background-image: -webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))
}

.swiper-container-3d .swiper-slide-shadow-top {
    background-image: -webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(bottom,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))
}

.swiper-container-3d .swiper-slide-shadow-bottom {
    background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: -o-linear-gradient(top,rgba(0,0,0,.5),rgba(0,0,0,0));
    background-image: linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))
}

.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper {
    -ms-touch-action: pan-y;
    touch-action: pan-y
}

.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper {
    -ms-touch-action: pan-x;
    touch-action: pan-x
}

.swiper-button-next,.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat
}

.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled {
    opacity: .35;
    cursor: auto;
    pointer-events: none
}

.swiper-button-prev,.swiper-container-rtl .swiper-button-next {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTAsMjJMMjIsMGwyLjEsMi4xTDQuMiwyMmwxOS45LDE5LjlMMjIsNDRMMCwyMkwwLDIyTDAsMjJ6JyBmaWxsPScjMDA3YWZmJy8+PC9zdmc+);
    left: 10px;
    right: auto
}

.swiper-button-next,.swiper-container-rtl .swiper-button-prev {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTI3LDIyTDI3LDIyTDUsNDRsLTIuMS0yLjFMMjIuOCwyMkwyLjksMi4xTDUsMEwyNywyMkwyNywyMnonIGZpbGw9JyMwMDdhZmYnLz48L3N2Zz4=);
    right: 10px;
    left: auto
}

.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTAsMjJMMjIsMGwyLjEsMi4xTDQuMiwyMmwxOS45LDE5LjlMMjIsNDRMMCwyMkwwLDIyTDAsMjJ6JyBmaWxsPScjZmZmZmZmJy8+PC9zdmc+)
}

.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTI3LDIyTDI3LDIyTDUsNDRsLTIuMS0yLjFMMjIuOCwyMkwyLjksMi4xTDUsMEwyNywyMkwyNywyMnonIGZpbGw9JyNmZmZmZmYnLz48L3N2Zz4=)
}

.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTAsMjJMMjIsMGwyLjEsMi4xTDQuMiwyMmwxOS45LDE5LjlMMjIsNDRMMCwyMkwwLDIyTDAsMjJ6JyBmaWxsPScjMDAwMDAwJy8+PC9zdmc+)
}

.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNyA0NCc+PHBhdGggZD0nTTI3LDIyTDI3LDIyTDUsNDRsLTIuMS0yLjFMMjIuOCwyMkwyLjksMi4xTDUsMEwyNywyMkwyNywyMnonIGZpbGw9JyMwMDAwMDAnLz48L3N2Zz4=)
}

.swiper-button-lock {
    display: none
}

.swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: .3s opacity;
    -o-transition: .3s opacity;
    transition: .3s opacity;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 10
}

.swiper-pagination.swiper-pagination-hidden {
    opacity: 0
}

.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%
}

.swiper-pagination-bullets-dynamic {
    overflow: hidden;
    font-size: 0
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transform: scale(.33);
    -ms-transform: scale(.33);
    transform: scale(.33);
    position: relative
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
    -webkit-transform: scale(.66);
    -ms-transform: scale(.66);
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
    -webkit-transform: scale(.33);
    -ms-transform: scale(.33);
    transform: scale(.33)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
    -webkit-transform: scale(.66);
    -ms-transform: scale(.66);
    transform: scale(.66)
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
    -webkit-transform: scale(.33);
    -ms-transform: scale(.33);
    transform: scale(.33)
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2
}

button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff
}

.swiper-container-vertical>.swiper-pagination-bullets {
    right: 10px;
    top: 50%;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0)
}

.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 6px 0;
    display: block
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 8px
}

.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    display: inline-block;
    -webkit-transition: .2s top,.2s -webkit-transform;
    transition: .2s top,.2s -webkit-transform;
    -o-transition: .2s transform,.2s top;
    -webkit-transition: .2s transform,.2s top;
    transition: .2s transform,.2s top;
    transition: .2s transform,.2s top,.2s -webkit-transform
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 4px
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    white-space: nowrap
}

.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transition: .2s left,.2s -webkit-transform;
    transition: .2s left,.2s -webkit-transform;
    -o-transition: .2s transform,.2s left;
    -webkit-transition: .2s transform,.2s left;
    transition: .2s transform,.2s left;
    transition: .2s transform,.2s left,.2s -webkit-transform
}

.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
    -webkit-transition: .2s right,.2s -webkit-transform;
    transition: .2s right,.2s -webkit-transform;
    -o-transition: .2s transform,.2s right;
    -webkit-transition: .2s transform,.2s right;
    transition: .2s transform,.2s right;
    transition: .2s transform,.2s right,.2s -webkit-transform
}

.swiper-pagination-progressbar {
    background: rgba(0,0,0,.25);
    position: absolute
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -ms-transform-origin: left top;
    transform-origin: left top
}

.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    -webkit-transform-origin: right top;
    -ms-transform-origin: right top;
    transform-origin: right top
}

.swiper-container-horizontal>.swiper-pagination-progressbar {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0
}

.swiper-container-vertical>.swiper-pagination-progressbar {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0
}

.swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff
}

.swiper-pagination-progressbar.swiper-pagination-white {
    background: rgba(255,255,255,.25)
}

.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill {
    background: #fff
}

.swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000
}

.swiper-pagination-progressbar.swiper-pagination-black {
    background: rgba(0,0,0,.25)
}

.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill {
    background: #000
}

.swiper-pagination-lock {
    display: none
}

.swiper-scrollbar {
    border-radius: 10px;
    position: relative;
    -ms-touch-action: none;
    background: rgba(0,0,0,.1)
}

.swiper-container-horizontal>.swiper-scrollbar {
    position: absolute;
    left: 1%;
    bottom: 3px;
    z-index: 50;
    height: 5px;
    width: 98%
}

.swiper-container-vertical>.swiper-scrollbar {
    position: absolute;
    right: 3px;
    top: 1%;
    z-index: 50;
    width: 5px;
    height: 98%
}

.swiper-scrollbar-drag {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
    left: 0;
    top: 0
}

.swiper-scrollbar-cursor-drag {
    cursor: move
}

.swiper-scrollbar-lock {
    display: none
}

.swiper-zoom-container {
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center
}

.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg {
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: contain;
    object-fit: contain
}

.swiper-slide-zoomed {
    cursor: move
}

.swiper-lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    -webkit-transform-origin: 50%;
    -ms-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-animation: swiper-preloader-spin 1s steps(12,end) infinite;
    animation: swiper-preloader-spin 1s steps(12,end) infinite
}

.swiper-lazy-preloader:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyM2YzZjNmMnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+);
    background-position: 50%;
    background-size: 100%;
    background-repeat: no-repeat
}

.swiper-lazy-preloader-white:after {
    background-image: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTIwIDEyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+PGRlZnM+PGxpbmUgaWQ9J2wnIHgxPSc2MCcgeDI9JzYwJyB5MT0nNycgeTI9JzI3JyBzdHJva2U9JyNmZmYnIHN0cm9rZS13aWR0aD0nMTEnIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcvPjwvZGVmcz48Zz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDMwIDYwLDYwKScvPjx1c2UgeGxpbms6aHJlZj0nI2wnIG9wYWNpdHk9Jy4yNycgdHJhbnNmb3JtPSdyb3RhdGUoNjAgNjAsNjApJy8+PHVzZSB4bGluazpocmVmPScjbCcgb3BhY2l0eT0nLjI3JyB0cmFuc2Zvcm09J3JvdGF0ZSg5MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDEyMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMjcnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuMzcnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNDYnIHRyYW5zZm9ybT0ncm90YXRlKDIxMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNTYnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNjYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuNzUnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA2MCw2MCknLz48dXNlIHhsaW5rOmhyZWY9JyNsJyBvcGFjaXR5PScuODUnIHRyYW5zZm9ybT0ncm90YXRlKDMzMCA2MCw2MCknLz48L2c+PC9zdmc+)
}

@-webkit-keyframes swiper-preloader-spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes swiper-preloader-spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000
}

.swiper-container-fade.swiper-container-free-mode .swiper-slide {
    -webkit-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out
}

.swiper-container-fade .swiper-slide {
    pointer-events: none;
    -webkit-transition-property: opacity;
    -o-transition-property: opacity;
    transition-property: opacity
}

.swiper-container-fade .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-cube {
    overflow: visible
}

.swiper-container-cube .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1;
    visibility: hidden;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    width: 100%;
    height: 100%
}

.swiper-container-cube .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-cube.swiper-container-rtl .swiper-slide {
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0
}

.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev {
    pointer-events: auto;
    visibility: visible
}

.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.swiper-container-cube .swiper-cube-shadow {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: .6;
    -webkit-filter: blur(50px);
    filter: blur(50px);
    z-index: 0
}

.swiper-container-flip {
    overflow: visible
}

.swiper-container-flip .swiper-slide {
    pointer-events: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    z-index: 1
}

.swiper-container-flip .swiper-slide .swiper-slide {
    pointer-events: none
}

.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active {
    pointer-events: auto
}

.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top {
    z-index: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.swiper-container-coverflow .swiper-wrapper {
    -ms-perspective: 1200px
}

@media(max-width: 1024px) {
    .dd-box {
        margin:0 0 20px
    }
}

@media(min-width: 1025px) {
    .dd-box {
        margin:20px
    }
}

.dd-box.open .dd-title {
    background: #000;
    color: #fff
}

.dd-box.open .dd-t-2 {
    color: #fff
}

.dd-box .dd-text.open {
    height: auto
}

.dd-box .dd-text {
    overflow: hidden;
    height: 0
}

@media(max-width: 1280px) {
    .dd-box .dd-text .text {
        font-size:16px!important
    }
}

@media(max-width: 1024px) {
    .dd-box .dd-text .text {
        font-size:14px!important
    }
}

.dd-box .dd-text .dd-text-box {
    padding: 5.21vw;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #f4f4f4
}

@media(max-width: 719px) {
    .dd-box .dd-text .dd-text-box {
        padding:25px
    }
}

.dd-title {
    padding: 1.98vw 5.21vw 1.56vw;
    border: 2px solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .dd-title {
        padding:25px
    }
}

.dd-title .dd-t-1 {
    font-size: 2.71vw;
    font-family: helvetica lt std bold,sans-serif;
    font-weight: 700
}

@media(max-width: 719px) {
    .dd-title .dd-t-1 {
        font-size:24px;
        padding-bottom: 10px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .dd-title .dd-t-1 {
        font-size:30px;
        padding-bottom: 10px
    }
}

@media(min-width: 1920px) {
    .dd-title .dd-t-1 {
        font-size:52px
    }
}

.dd-title .dd-t-1 strong {
    text-decoration: none;
    color: #ff5b46
}

.dd-title .dd-t-2 {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    color: #272727;
    opacity: .7
}

@media screen and (orientation: landscape) and (max-width:1024px) and (max-width:1024px) {
    #luxy {
        display:none!important
    }

    .rotate-screen {
        display: block!important
    }
}

.rotate-screen {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    background: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    display: none
}

@media(min-width: 1025px) {
    .rotate-screen {
        display:none!important
    }
}

.rotate-screen img {
    max-width: 250px;
    display: block;
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: auto
}

@media(min-width: 1025px) {
    .rotate-screen img {
        display:none
    }
}

body.menuIsOpen,html.menuIsOpen {
    position: relative!important
}

@media(max-width: 1024px) {
    body.menuIsOpen,html.menuIsOpen {
        height:100%!important;
        overflow: hidden!important;
        position: static!important
    }
}

.menu {
    background: rgba(201,201,201,.9);
    top: 0;
    z-index: 9997;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    height: 100%!important;
    min-height: 100%
}

@media(max-width: 1024px) {
    .menu {
        position:absolute;
        height: 100%!important
    }
}

@media(min-width: 1025px) {
    .menu {
        position:fixed
    }
}

.menu.menuIsOpen {
    overflow: auto;
    overflow-x: hidden
}

@media(max-width: 1024px) {
    .menu.menuIsOpen {
        top:0;
        bottom: 0;
        position: fixed;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        height: 100%
    }
}

.menu-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.menu-container-box {
    text-align: center;
    display: block
}

@media(max-width: 1024px) {
    .menu-container-box {
        padding:50px 35
    }
}

.menu-container-wrap {
    display: inline-block;
    text-align: left
}

.menu-link-box {
    color: #b3b3b3;
    font-size: 2.5vw;
    opacity: 0
}

@media(min-width: 1920px) {
    .menu-link-box {
        font-size:48px
    }
}

@media(max-width: 1024px) {
    .menu-link-box {
        font-size:6.5vw;
        letter-spacing: 0
    }
}

body.bg .menu-link {
    font-family: HelenPro,sans-serif
}

.menu-link {
    display: inline-block;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-perspective-origin: center;
    perspective-origin: center;
    font-size: 3.75vw;
    font-family: helvetica lt std bold,sans-serif;
    color: #fff;
    line-height: 1.8;
    font-weight: 700;
    letter-spacing: 4px
}

.menu-link a {
    -webkit-transition: all .6s cubic-bezier(.25,.46,.45,.94);
    -o-transition: all .6s cubic-bezier(.25,.46,.45,.94);
    transition: all .6s cubic-bezier(.25,.46,.45,.94)
}

.menu-link a:hover {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center
}

.menu-link .btn.red:hover {
    background: #ff5b46;
    border: 1px solid #ff5b46;
    color: #fff
}

.menu-link:hover {
    color: #fe5e4a
}

.menu-link:hover a {
    color: #fe5e4a
}

@media(max-width: 1024px) {
    .menu-link {
        font-size:8.75vw;
        letter-spacing: 1px
    }
}

@media(min-width: 1920px) {
    .menu-link {
        font-size:72px
    }
}

.menu-link a {
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    vertical-align: middle;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-item-align: center;
    align-self: center
}

.menu-link .word {
    padding-right: 5px
}

@media(min-width: 1025px) {
    .menu-link .word {
        padding-right:15px
    }
}

.menu-link.smaller {
    font-size: 2.5vw;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: inline-block
}

@media(max-width: 1024px) {
    .menu-link.smaller {
        font-size:6.5vw
    }
}

@media(min-width: 1920px) {
    .menu-link.smaller {
        font-size:48px
    }
}

.menu-link.active a {
    color: #fe5e4a
}

.text-b-b {
    display: block;
    padding-right: 30px
}

.text-b {
    display: inline-block;
    -ms-flex-item-align: center;
    align-self: center;
    margin-top: 12px
}

@media(max-width: 1024px) {
    .text-b {
        display:none!important
    }
}

.menu-privacy-policy-links {
    font-family: Arial,sans-serif;
    text-align: left;
    font-size: 12px;
    letter-spacing: 1.5px;
    -webkit-transform: translateY(1.5vw);
    -ms-transform: translateY(1.5vw);
    transform: translateY(1.5vw)
}

.menu-privacy-policy-links a {
    padding-right: 29px;
    color: rgba(253,88,76,.7);
    display: inline-block;
    line-height: 1.2;
    -webkit-transition: color .6s cubic-bezier(.25,.46,.45,.94);
    -o-transition: color .6s cubic-bezier(.25,.46,.45,.94);
    transition: color .6s cubic-bezier(.25,.46,.45,.94)
}

@media(max-width: 1024px) {
    .menu-privacy-policy-links a {
        padding-top:10px;
        padding-bottom: 10px
    }
}

.menu-privacy-policy-links a:hover {
    color: #fff
}

.menu-privacy-policy-links a:last-child {
    padding-right: 0
}

@media(max-width: 1024px) {
    body {
        overflow-x:hidden
    }
}

.burger-menu {
    position: fixed!important;
    top: 43px;
    right: 25px;
    z-index: 9999;
    width: 120px;
    height: 120px;
    top: 0;
    right: 0;
    overflow: visible!important;
    cursor: pointer
}

@media(max-width: 1024px) {
    .burger-menu {
        top:14px;
        right: 3px;
        width: 40px;
        height: 40px
    }
}

.burger-menu .ham {
    -webkit-tap-highlight-color: transparent;
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s;
    transition: transform .4s,-webkit-transform .4s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: visible;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.burger-menu .ham.menuIsOpen .line {
    stroke: #fe5e4a!important
}

.burger-menu .hamRotate.menuIsOpen {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg)
}

.burger-menu .hamRotate180.menuIsOpen {
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(180deg);
    -ms-transform: translateX(-50%) translateY(-50%) rotate(180deg);
    transform: translateX(-50%) translateY(-50%) rotate(180deg)
}

.burger-menu .line {
    fill: none;
    -webkit-transition: stroke-dasharray .4s,stroke-dashoffset .4s;
    -o-transition: stroke-dasharray .4s,stroke-dashoffset .4s;
    transition: stroke-dasharray .4s,stroke-dashoffset .4s;
    stroke: #fff;
    stroke-width: 5.5;
    stroke-linecap: round
}

@media(max-width: 1024px) {
    .burger-menu .line {
        display:block
    }
}

.burger-menu .ham1 .top {
    stroke-dasharray: 40 139
}

.burger-menu .ham1 .bottom {
    stroke-dasharray: 40 180
}

.burger-menu .ham1.menuIsOpen .top {
    stroke-dashoffset: -98px
}

.burger-menu .ham1.menuIsOpen .bottom {
    stroke-dashoffset: -138px
}

body.dark .burger-menu .line {
    stroke: #000
}

.lg-sub-html,.lg-toolbar {
    background-color: rgba(0,0,0,.45)
}

@font-face {
    font-family: lg;
    src: url(../fonts/lg.eot?n1z373);
    src: url(../fonts/lg.eot?#iefixn1z373) format("embedded-opentype"),url(../fonts/lg.woff?n1z373) format("woff"),url(../fonts/lg.ttf?n1z373) format("truetype"),url(../fonts/lg.svg?n1z373#lg) format("svg");
    font-weight: 400;
    font-style: normal
}

.lg-icon {
    font-family: lg;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

.lg-actions .lg-next,.lg-actions .lg-prev {
    background-color: rgba(0,0,0,.45);
    border-radius: 2px;
    color: #999;
    cursor: pointer;
    display: block;
    font-size: 22px;
    margin-top: -10px;
    padding: 8px 10px 9px;
    position: absolute;
    top: 50%;
    z-index: 1080;
    border: none;
    outline: 0
}

.lg-actions .lg-next.disabled,.lg-actions .lg-prev.disabled {
    pointer-events: none;
    opacity: .5
}

.lg-actions .lg-next:hover,.lg-actions .lg-prev:hover {
    color: #fff
}

.lg-actions .lg-next {
    right: 20px
}

.lg-actions .lg-next:before {
    content: "\e095"
}

.lg-actions .lg-prev {
    left: 20px
}

.lg-actions .lg-prev:after {
    content: "\e094"
}

@-webkit-keyframes lg-right-end {
    0%,100% {
        left: 0
    }

    50% {
        left: -30px
    }
}

@keyframes lg-right-end {
    0%,100% {
        left: 0
    }

    50% {
        left: -30px
    }
}

@-webkit-keyframes lg-left-end {
    0%,100% {
        left: 0
    }

    50% {
        left: 30px
    }
}

@keyframes lg-left-end {
    0%,100% {
        left: 0
    }

    50% {
        left: 30px
    }
}

.lg-outer.lg-right-end .lg-object {
    -webkit-animation: lg-right-end .3s;
    animation: lg-right-end .3s;
    position: relative
}

.lg-outer.lg-left-end .lg-object {
    -webkit-animation: lg-left-end .3s;
    animation: lg-left-end .3s;
    position: relative
}

.lg-toolbar {
    z-index: 1082;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}

.lg-toolbar .lg-icon {
    color: #999;
    cursor: pointer;
    float: right;
    font-size: 24px;
    height: 47px;
    line-height: 27px;
    padding: 10px 0;
    text-align: center;
    width: 50px;
    text-decoration: none!important;
    outline: 0;
    -webkit-transition: color .2s linear;
    -o-transition: color .2s linear;
    -webkit-transition: color .2s linear;
    -o-transition: color .2s linear;
    transition: color .2s linear
}

.lg-toolbar .lg-icon:hover {
    color: #fff
}

.lg-toolbar .lg-close:after {
    content: "\e070"
}

.lg-toolbar .lg-download:after {
    content: "\e0f2"
}

.lg-sub-html {
    bottom: 0;
    color: #eee;
    font-size: 16px;
    left: 0;
    padding: 10px 40px;
    position: fixed;
    right: 0;
    text-align: center;
    z-index: 1080
}

.lg-sub-html h4 {
    margin: 0;
    font-size: 13px;
    font-weight: 700
}

.lg-sub-html p {
    font-size: 12px;
    margin: 5px 0 0
}

#lg-counter {
    color: #999;
    display: inline-block;
    font-size: 16px;
    padding-left: 20px;
    padding-top: 12px;
    vertical-align: middle
}

.lg-next,.lg-prev,.lg-toolbar {
    opacity: 1;
    -webkit-transition: -webkit-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;
    -o-transition: -o-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;
    -webkit-transition: opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear,-webkit-transform .35s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear,-webkit-transform .35s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;
    transition: transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;
    transition: transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear,-webkit-transform .35s cubic-bezier(0,0,.25,1) 0s
}

.lg-hide-items .lg-prev {
    opacity: 0;
    -webkit-transform: translate3d(-10px,0,0);
    transform: translate3d(-10px,0,0)
}

.lg-hide-items .lg-next {
    opacity: 0;
    -webkit-transform: translate3d(10px,0,0);
    transform: translate3d(10px,0,0)
}

.lg-hide-items .lg-toolbar {
    opacity: 0;
    -webkit-transform: translate3d(0,-10px,0);
    transform: translate3d(0,-10px,0)
}

body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-object {
    -webkit-transform: scale3d(.5,.5,.5);
    transform: scale3d(.5,.5,.5);
    opacity: 0;
    -webkit-transition: -webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;
    -o-transition: -o-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;
    -webkit-transition: opacity 250ms cubic-bezier(0,0,.25,1),-webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s!important;
    transition: opacity 250ms cubic-bezier(0,0,.25,1),-webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s!important;
    -o-transition: transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;
    transition: transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;
    transition: transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1),-webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s!important;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item.lg-complete .lg-object {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-outer .lg-thumb-outer {
    background-color: #0d0a0a;
    bottom: 0;
    position: absolute;
    width: 100%;
    z-index: 1080;
    max-height: 350px;
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0);
    -webkit-transition: -webkit-transform .25s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: -o-transform .25s cubic-bezier(0,0,.25,1) 0s;
    transition: -webkit-transform .25s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform .25s cubic-bezier(0,0,.25,1) 0s;
    transition: transform .25s cubic-bezier(0,0,.25,1) 0s;
    transition: transform .25s cubic-bezier(0,0,.25,1) 0s,-webkit-transform .25s cubic-bezier(0,0,.25,1) 0s
}

.lg-outer .lg-thumb-outer.lg-grab .lg-thumb-item {
    cursor: -webkit-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
}

.lg-outer .lg-thumb-outer.lg-grabbing .lg-thumb-item {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
    cursor: grabbing
}

.lg-outer .lg-thumb-outer.lg-dragging .lg-thumb {
    -webkit-transition-duration: 0s!important;
    -o-transition-duration: 0s!important;
    transition-duration: 0s!important
}

.lg-outer.lg-thumb-open .lg-thumb-outer {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

.lg-outer .lg-thumb {
    padding: 10px 0;
    height: 100%;
    margin-bottom: -5px
}

.lg-outer .lg-thumb-item {
    cursor: pointer;
    float: left;
    overflow: hidden;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 4px;
    margin-bottom: 5px
}

@media(min-width: 1025px) {
    .lg-outer .lg-thumb-item {
        -webkit-transition:border-color .25s ease;
        -o-transition: border-color .25s ease;
        transition: border-color .25s ease
    }
}

.lg-outer .lg-thumb-item.active,.lg-outer .lg-thumb-item:hover {
    border-color: #a90707
}

.lg-outer .lg-thumb-item img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.lg-outer.lg-has-thumb .lg-item {
    padding-bottom: 120px
}

.lg-outer.lg-can-toggle .lg-item {
    padding-bottom: 0
}

.lg-outer.lg-pull-caption-up .lg-sub-html {
    -webkit-transition: bottom .25s ease;
    -o-transition: bottom .25s ease;
    -webkit-transition: bottom .25s ease;
    -o-transition: bottom .25s ease;
    transition: bottom .25s ease
}

.lg-outer.lg-pull-caption-up.lg-thumb-open .lg-sub-html {
    bottom: 100px
}

.lg-outer .lg-toogle-thumb {
    background-color: #0d0a0a;
    border-radius: 2px 2px 0 0;
    color: #999;
    cursor: pointer;
    font-size: 24px;
    height: 39px;
    line-height: 27px;
    padding: 5px 0;
    position: absolute;
    right: 20px;
    text-align: center;
    top: -39px;
    width: 50px
}

.lg-outer .lg-toogle-thumb:hover,.lg-outer.lg-dropdown-active #lg-share {
    color: #fff
}

.lg-outer .lg-toogle-thumb:after {
    content: "\e1ff"
}

.lg-outer .lg-video-cont {
    display: inline-block;
    vertical-align: middle;
    max-width: 1140px;
    max-height: 100%;
    width: 100%;
    padding: 0 5px
}

.lg-outer .lg-video {
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    position: relative
}

.lg-outer .lg-video .lg-object {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%!important;
    height: 100%!important
}

.lg-outer .lg-video .lg-video-play {
    width: 84px;
    height: 59px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -42px;
    margin-top: -30px;
    z-index: 1080;
    cursor: pointer
}

.lg-outer .lg-has-vimeo .lg-video-play {
    background: url(../images/gallery/vimeo-play.png) no-repeat
}

.lg-outer .lg-has-vimeo:hover .lg-video-play {
    background: url(../images/gallery/vimeo-play.png) 0 -58px no-repeat
}

.lg-outer .lg-has-html5 .lg-video-play {
    background: url(../images/gallery/video-play.png) no-repeat;
    height: 64px;
    margin-left: -32px;
    margin-top: -32px;
    width: 64px;
    opacity: .8
}

.lg-outer .lg-has-html5:hover .lg-video-play {
    opacity: 1
}

.lg-outer .lg-has-youtube .lg-video-play {
    background: url(../images/gallery/youtube-play.png) no-repeat
}

.lg-outer .lg-has-youtube:hover .lg-video-play {
    background: url(../images/gallery/youtube-play.png) 0 -60px no-repeat
}

.lg-outer .lg-video-object {
    width: 100%!important;
    height: 100%!important;
    position: absolute;
    top: 0;
    left: 0
}

.lg-outer .lg-has-video .lg-video-object {
    visibility: hidden
}

.lg-outer .lg-has-video.lg-video-playing .lg-object,.lg-outer .lg-has-video.lg-video-playing .lg-video-play {
    display: none
}

.lg-outer .lg-has-video.lg-video-playing .lg-video-object {
    visibility: visible
}

.lg-progress-bar {
    background-color: #333;
    height: 5px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1083;
    opacity: 0;
    -webkit-transition: opacity 80ms ease 0s;
    -o-transition: opacity 80ms ease 0s;
    transition: opacity 80ms ease 0s
}

.lg-progress-bar .lg-progress {
    background-color: #a90707;
    height: 5px;
    width: 0
}

.lg-progress-bar.lg-start .lg-progress {
    width: 100%
}

.lg-show-autoplay .lg-progress-bar {
    opacity: 1
}

.lg-autoplay-button:after {
    content: "\e01d"
}

.lg-show-autoplay .lg-autoplay-button:after {
    content: "\e01a"
}

.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-image,.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-img-wrap {
    -webkit-transition-duration: 0s;
    -o-transition-duration: 0s;
    transition-duration: 0s
}

.lg-outer.lg-use-transition-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap {
    -webkit-transition: -webkit-transform .3s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: -o-transform .3s cubic-bezier(0,0,.25,1) 0s;
    transition: -webkit-transform .3s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform .3s cubic-bezier(0,0,.25,1) 0s;
    transition: transform .3s cubic-bezier(0,0,.25,1) 0s;
    transition: transform .3s cubic-bezier(0,0,.25,1) 0s,-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s
}

.lg-outer.lg-use-left-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap {
    -webkit-transition: left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;
    transition: left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s
}

.lg-outer .lg-item.lg-complete.lg-zoomable .lg-img-wrap {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.lg-outer .lg-item.lg-complete.lg-zoomable .lg-image {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    -webkit-transition: -webkit-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;
    -o-transition: -o-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;
    -webkit-transition: opacity .15s,-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s!important;
    transition: opacity .15s,-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s!important;
    -o-transition: transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;
    transition: transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;
    transition: transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s,-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s!important;
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

#lg-zoom-in:after {
    content: "\e311"
}

#lg-actual-size {
    font-size: 20px
}

#lg-actual-size:after {
    content: "\e033"
}

#lg-zoom-out {
    opacity: .5;
    pointer-events: none
}

#lg-zoom-out:after {
    content: "\e312"
}

.lg-zoomed #lg-zoom-out {
    opacity: 1;
    pointer-events: auto
}

.lg-outer .lg-pager-outer {
    bottom: 60px;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 1080;
    height: 10px
}

.lg-outer .lg-pager-outer.lg-pager-hover .lg-pager-cont {
    overflow: visible
}

.lg-outer .lg-pager-cont {
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    position: relative;
    vertical-align: top;
    margin: 0 5px
}

.lg-outer .lg-pager-cont:hover .lg-pager-thumb-cont {
    opacity: 1;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0)
}

.lg-outer .lg-pager-cont.lg-pager-active .lg-pager {
    -webkit-box-shadow: 0 0 0 2px #fff inset;
    box-shadow: 0 0 0 2px #fff inset
}

.lg-outer .lg-pager-thumb-cont {
    background-color: #fff;
    color: #fff;
    bottom: 100%;
    height: 83px;
    left: 0;
    margin-bottom: 20px;
    margin-left: -60px;
    opacity: 0;
    padding: 5px;
    position: absolute;
    width: 120px;
    border-radius: 3px;
    -webkit-transition: opacity .15s ease 0s,-webkit-transform .15s ease 0s;
    -o-transition: opacity .15s ease 0s,-o-transform .15s ease 0s;
    -webkit-transition: opacity .15s ease 0s,-webkit-transform .15s ease 0s;
    transition: opacity .15s ease 0s,-webkit-transform .15s ease 0s;
    -o-transition: opacity .15s ease 0s,transform .15s ease 0s;
    transition: opacity .15s ease 0s,transform .15s ease 0s;
    transition: opacity .15s ease 0s,transform .15s ease 0s,-webkit-transform .15s ease 0s;
    -webkit-transform: translate3d(0,5px,0);
    transform: translate3d(0,5px,0)
}

.lg-outer .lg-pager-thumb-cont img {
    width: 100%;
    height: 100%
}

.lg-outer .lg-pager {
    background-color: rgba(255,255,255,.5);
    border-radius: 50%;
    -webkit-box-shadow: 0 0 0 8px rgba(255,255,255,.7) inset;
    box-shadow: 0 0 0 8px rgba(255,255,255,.7) inset;
    display: block;
    height: 12px;
    -webkit-transition: box-shadow .3s ease 0s;
    -o-transition: box-shadow .3s ease 0s;
    -webkit-transition: -webkit-box-shadow .3s ease 0s;
    transition: -webkit-box-shadow .3s ease 0s;
    transition: box-shadow .3s ease 0s;
    transition: box-shadow .3s ease 0s,-webkit-box-shadow .3s ease 0s;
    width: 12px
}

.lg-outer .lg-pager:focus,.lg-outer .lg-pager:hover {
    -webkit-box-shadow: 0 0 0 8px #fff inset;
    box-shadow: 0 0 0 8px #fff inset
}

.lg-outer .lg-caret {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px dashed;
    bottom: -10px;
    display: inline-block;
    height: 0;
    left: 50%;
    margin-left: -5px;
    position: absolute;
    vertical-align: middle;
    width: 0
}

.lg-fullscreen:after {
    content: "\e20c"
}

.lg-fullscreen-on .lg-fullscreen:after {
    content: "\e20d"
}

.lg-outer #lg-dropdown-overlay {
    background-color: rgba(0,0,0,.25);
    bottom: 0;
    cursor: default;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1081;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: visibility 0s linear .18s,opacity .18s linear 0s;
    -o-transition: visibility 0s linear .18s,opacity .18s linear 0s;
    -webkit-transition: visibility 0s linear .18s,opacity .18s linear 0s;
    -o-transition: visibility 0s linear .18s,opacity .18s linear 0s;
    transition: visibility 0s linear .18s,opacity .18s linear 0s
}

.lg-outer.lg-dropdown-active #lg-dropdown-overlay,.lg-outer.lg-dropdown-active .lg-dropdown {
    -webkit-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    -ms-transform: translate3d(0,0,0);
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1;
    visibility: visible
}

.lg-outer .lg-dropdown {
    background-color: #fff;
    border-radius: 2px;
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 10px 0;
    position: absolute;
    right: 0;
    text-align: left;
    top: 50px;
    opacity: 0;
    visibility: hidden;
    -ms-transform: translate3d(0,5px,0);
    -webkit-transform: translate3d(0,5px,0);
    transform: translate3d(0,5px,0);
    -webkit-transition: -webkit-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;
    -o-transition: -o-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;
    -webkit-transition: visibility 0s linear .5s,opacity .18s linear 0s,-webkit-transform .18s linear 0s;
    transition: visibility 0s linear .5s,opacity .18s linear 0s,-webkit-transform .18s linear 0s;
    -o-transition: transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;
    transition: transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;
    transition: transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s,-webkit-transform .18s linear 0s
}

.lg-outer .lg-dropdown:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    position: absolute;
    border: 8px solid transparent;
    border-bottom-color: #fff;
    right: 16px;
    top: -16px
}

.lg-outer .lg-dropdown>li:last-child {
    margin-bottom: 0
}

.lg-outer .lg-dropdown>li:hover .lg-icon,.lg-outer .lg-dropdown>li:hover a {
    color: #333
}

.lg-outer .lg-dropdown a {
    color: #333;
    display: block;
    white-space: pre;
    padding: 4px 12px;
    font-family: open sans,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 12px
}

.lg-outer .lg-dropdown a:hover {
    background-color: rgba(0,0,0,.07)
}

.lg-outer .lg-dropdown .lg-dropdown-text {
    display: inline-block;
    line-height: 1;
    margin-top: -3px;
    vertical-align: middle
}

.lg-outer .lg-dropdown .lg-icon {
    color: #333;
    display: inline-block;
    float: none;
    font-size: 20px;
    height: auto;
    line-height: 1;
    margin-right: 8px;
    padding: 0;
    vertical-align: middle;
    width: auto
}

.lg-outer,.lg-outer .lg,.lg-outer .lg-inner {
    width: 100%;
    height: 100%
}

.lg-outer #lg-share {
    position: relative
}

.lg-outer #lg-share:after {
    content: "\e80d"
}

.lg-outer #lg-share-facebook .lg-icon {
    color: #3b5998
}

.lg-outer #lg-share-facebook .lg-icon:after {
    content: "\e901"
}

.lg-outer #lg-share-twitter .lg-icon {
    color: #00aced
}

.lg-outer #lg-share-twitter .lg-icon:after {
    content: "\e904"
}

.lg-outer #lg-share-googleplus .lg-icon {
    color: #dd4b39
}

.lg-outer #lg-share-googleplus .lg-icon:after {
    content: "\e902"
}

.lg-outer #lg-share-pinterest .lg-icon {
    color: #cb2027
}

.lg-outer #lg-share-pinterest .lg-icon:after {
    content: "\e903"
}

.lg-group:after {
    content: "";
    display: table;
    clear: both
}

.lg-outer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    text-align: left;
    opacity: 0;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    transition: opacity .15s ease 0s
}

.lg-outer * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.lg-outer.lg-visible {
    opacity: 1
}

.lg-outer.lg-css3 .lg-item.lg-current,.lg-outer.lg-css3 .lg-item.lg-next-slide,.lg-outer.lg-css3 .lg-item.lg-prev-slide {
    -webkit-transition-duration: inherit!important;
    -o-transition-duration: inherit!important;
    transition-duration: inherit!important;
    -webkit-transition-timing-function: inherit!important;
    -o-transition-timing-function: inherit!important;
    transition-timing-function: inherit!important
}

.lg-outer.lg-css3.lg-dragging .lg-item.lg-current,.lg-outer.lg-css3.lg-dragging .lg-item.lg-next-slide,.lg-outer.lg-css3.lg-dragging .lg-item.lg-prev-slide {
    -webkit-transition-duration: 0s!important;
    -o-transition-duration: 0s!important;
    transition-duration: 0s!important;
    opacity: 1
}

.lg-outer.lg-grab img.lg-object {
    cursor: -webkit-grab;
    cursor: -o-grab;
    cursor: -ms-grab;
    cursor: grab
}

.lg-outer.lg-grabbing img.lg-object {
    cursor: move;
    cursor: -webkit-grabbing;
    cursor: -o-grabbing;
    cursor: -ms-grabbing;
    cursor: grabbing
}

.lg-outer .lg {
    position: relative;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    max-height: 100%
}

.lg-outer .lg-inner {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap
}

.lg-outer .lg-item {
    background: url(../images/gallery/loading.gif) center center no-repeat;
    display: none!important
}

.lg-outer.lg-css .lg-current,.lg-outer.lg-css3 .lg-current,.lg-outer.lg-css3 .lg-next-slide,.lg-outer.lg-css3 .lg-prev-slide {
    display: inline-block!important
}

.lg-outer .lg-img-wrap,.lg-outer .lg-item {
    display: inline-block;
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%
}

.lg-outer .lg-img-wrap:before,.lg-outer .lg-item:before {
    content: "";
    display: inline-block;
    height: 50%;
    width: 1px;
    margin-right: -1px
}

.lg-outer .lg-img-wrap {
    position: absolute;
    padding: 0 5px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0
}

.lg-outer .lg-item.lg-complete {
    background-image: none
}

.lg-outer .lg-item.lg-current {
    z-index: 1060
}

.lg-outer .lg-image {
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    width: auto!important;
    height: auto!important
}

.lg-outer.lg-show-after-load .lg-item .lg-object,.lg-outer.lg-show-after-load .lg-item .lg-video-play {
    opacity: 0;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    transition: opacity .15s ease 0s
}

.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-object,.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-video-play {
    opacity: 1
}

.lg-outer .lg-empty-html,.lg-outer.lg-hide-download #lg-download {
    display: none
}

.lg-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1040;
    background-color: #000;
    opacity: 0;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    -webkit-transition: opacity .15s ease 0s;
    -o-transition: opacity .15s ease 0s;
    transition: opacity .15s ease 0s
}

.lg-backdrop.in {
    opacity: 1
}

.lg-css3.lg-no-trans .lg-current,.lg-css3.lg-no-trans .lg-next-slide,.lg-css3.lg-no-trans .lg-prev-slide {
    -webkit-transition: none 0s ease 0s!important;
    -o-transition: none 0s ease 0s!important;
    transition: none 0s ease 0s!important
}

.lg-css3.lg-use-css3 .lg-item,.lg-css3.lg-use-left .lg-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.lg-css3.lg-fade .lg-item {
    opacity: 0
}

.lg-css3.lg-fade .lg-item.lg-current {
    opacity: 1
}

.lg-css3.lg-fade .lg-item.lg-current,.lg-css3.lg-fade .lg-item.lg-next-slide,.lg-css3.lg-fade .lg-item.lg-prev-slide {
    -webkit-transition: opacity .1s ease 0s;
    -o-transition: opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s;
    -o-transition: opacity .1s ease 0s;
    transition: opacity .1s ease 0s
}

.lg-css3.lg-slide.lg-use-css3 .lg-item {
    opacity: 0
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide {
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide.lg-use-left .lg-item {
    opacity: 0;
    position: absolute;
    left: 0
}

.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide {
    left: -100%
}

.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide {
    left: 100%
}

.lg-css3.lg-slide.lg-use-left .lg-item.lg-current {
    left: 0;
    opacity: 1
}

.lg-css3.lg-slide.lg-use-left .lg-item.lg-current,.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide {
    -webkit-transition: left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s
}

.lg-css3.lg-zoom-in .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-in .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(1.3,1.3,1.3);
    transform: scale3d(1.3,1.3,1.3)
}

.lg-css3.lg-zoom-in .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-in .lg-item.lg-current,.lg-css3.lg-zoom-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-in .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-zoom-in-big .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-in-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-big .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(2,2,2);
    transform: scale3d(2,2,2)
}

.lg-css3.lg-zoom-in-big .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-in-big .lg-item.lg-current,.lg-css3.lg-zoom-in-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-big .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-zoom-out .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-out .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(.7,.7,.7);
    transform: scale3d(.7,.7,.7)
}

.lg-css3.lg-zoom-out .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-out .lg-item.lg-current,.lg-css3.lg-zoom-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-out .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-zoom-out-big .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-out-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-big .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(0,0,0);
    transform: scale3d(0,0,0)
}

.lg-css3.lg-zoom-out-big .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-out-big .lg-item.lg-current,.lg-css3.lg-zoom-out-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-big .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-zoom-out-in .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-out-in .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(0,0,0);
    transform: scale3d(0,0,0)
}

.lg-css3.lg-zoom-out-in .lg-item.lg-next-slide {
    -webkit-transform: scale3d(2,2,2);
    transform: scale3d(2,2,2)
}

.lg-css3.lg-zoom-out-in .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-out-in .lg-item.lg-current,.lg-css3.lg-zoom-out-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-in .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-zoom-in-out .lg-item {
    opacity: 0
}

.lg-css3.lg-zoom-in-out .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(2,2,2);
    transform: scale3d(2,2,2)
}

.lg-css3.lg-zoom-in-out .lg-item.lg-next-slide {
    -webkit-transform: scale3d(0,0,0);
    transform: scale3d(0,0,0)
}

.lg-css3.lg-zoom-in-out .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-zoom-in-out .lg-item.lg-current,.lg-css3.lg-zoom-in-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-out .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-soft-zoom .lg-item {
    opacity: 0
}

.lg-css3.lg-soft-zoom .lg-item.lg-prev-slide {
    -webkit-transform: scale3d(1.1,1.1,1.1);
    transform: scale3d(1.1,1.1,1.1)
}

.lg-css3.lg-soft-zoom .lg-item.lg-next-slide {
    -webkit-transform: scale3d(.9,.9,.9);
    transform: scale3d(.9,.9,.9)
}

.lg-css3.lg-soft-zoom .lg-item.lg-current {
    -webkit-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1);
    opacity: 1
}

.lg-css3.lg-soft-zoom .lg-item.lg-current,.lg-css3.lg-soft-zoom .lg-item.lg-next-slide,.lg-css3.lg-soft-zoom .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-scale-up .lg-item {
    opacity: 0
}

.lg-css3.lg-scale-up .lg-item.lg-next-slide,.lg-css3.lg-scale-up .lg-item.lg-prev-slide {
    -ms-transform: scale3d(.8,.8,.8) translate3d(0,10%,0);
    -webkit-transform: scale3d(.8,.8,.8) translate3d(0,10%,0);
    transform: scale3d(.8,.8,.8) translate3d(0,10%,0)
}

.lg-css3.lg-scale-up .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-scale-up .lg-item.lg-current,.lg-css3.lg-scale-up .lg-item.lg-next-slide,.lg-css3.lg-scale-up .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(-100%,0,0);
    -webkit-transform: scale3d(0,0,0) translate3d(-100%,0,0);
    transform: scale3d(0,0,0) translate3d(-100%,0,0)
}

.lg-css3.lg-slide-circular .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(100%,0,0);
    -webkit-transform: scale3d(0,0,0) translate3d(100%,0,0);
    transform: scale3d(0,0,0) translate3d(100%,0,0)
}

.lg-css3.lg-slide-circular .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular .lg-item.lg-current,.lg-css3.lg-slide-circular .lg-item.lg-next-slide,.lg-css3.lg-slide-circular .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular-up .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular-up .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(-100%,-100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(-100%,-100%,0);
    transform: scale3d(0,0,0) translate3d(-100%,-100%,0)
}

.lg-css3.lg-slide-circular-up .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(100%,-100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(100%,-100%,0);
    transform: scale3d(0,0,0) translate3d(100%,-100%,0)
}

.lg-css3.lg-slide-circular-up .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular-up .lg-item.lg-current,.lg-css3.lg-slide-circular-up .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-up .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular-down .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular-down .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(-100%,100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(-100%,100%,0);
    transform: scale3d(0,0,0) translate3d(-100%,100%,0)
}

.lg-css3.lg-slide-circular-down .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(100%,100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(100%,100%,0);
    transform: scale3d(0,0,0) translate3d(100%,100%,0)
}

.lg-css3.lg-slide-circular-down .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular-down .lg-item.lg-current,.lg-css3.lg-slide-circular-down .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-down .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular-vertical .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular-vertical .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(0,-100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(0,-100%,0);
    transform: scale3d(0,0,0) translate3d(0,-100%,0)
}

.lg-css3.lg-slide-circular-vertical .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(0,100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(0,100%,0);
    transform: scale3d(0,0,0) translate3d(0,100%,0)
}

.lg-css3.lg-slide-circular-vertical .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular-vertical .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular-vertical-left .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(-100%,-100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(-100%,-100%,0);
    transform: scale3d(0,0,0) translate3d(-100%,-100%,0)
}

.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(-100%,100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(-100%,100%,0);
    transform: scale3d(0,0,0) translate3d(-100%,100%,0)
}

.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-circular-vertical-down .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-prev-slide {
    -ms-transform: scale3d(0,0,0) translate3d(100%,-100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(100%,-100%,0);
    transform: scale3d(0,0,0) translate3d(100%,-100%,0)
}

.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-next-slide {
    -ms-transform: scale3d(0,0,0) translate3d(100%,100%,0);
    -webkit-transform: scale3d(0,0,0) translate3d(100%,100%,0);
    transform: scale3d(0,0,0) translate3d(100%,100%,0)
}

.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    -webkit-transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-vertical .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-vertical .lg-item.lg-prev-slide {
    -webkit-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0)
}

.lg-css3.lg-slide-vertical .lg-item.lg-next-slide {
    -webkit-transform: translate3d(0,100%,0);
    transform: translate3d(0,100%,0)
}

.lg-css3.lg-slide-vertical .lg-item.lg-current {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-vertical .lg-item.lg-current,.lg-css3.lg-slide-vertical .lg-item.lg-next-slide,.lg-css3.lg-slide-vertical .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-vertical-growth .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-vertical-growth .lg-item.lg-prev-slide {
    -ms-transform: scale3d(.5,.5,.5) translate3d(0,-150%,0);
    -webkit-transform: scale3d(.5,.5,.5) translate3d(0,-150%,0);
    transform: scale3d(.5,.5,.5) translate3d(0,-150%,0)
}

.lg-css3.lg-slide-vertical-growth .lg-item.lg-next-slide {
    -ms-transform: scale3d(.5,.5,.5) translate3d(0,150%,0);
    -webkit-transform: scale3d(.5,.5,.5) translate3d(0,150%,0);
    transform: scale3d(.5,.5,.5) translate3d(0,150%,0)
}

.lg-css3.lg-slide-vertical-growth .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-vertical-growth .lg-item.lg-current,.lg-css3.lg-slide-vertical-growth .lg-item.lg-next-slide,.lg-css3.lg-slide-vertical-growth .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-only .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-only .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only .lg-item.lg-prev-slide {
    -ms-transform: skew(10deg,0deg);
    -webkit-transform: skew(10deg,0deg);
    transform: skew(10deg,0deg)
}

.lg-css3.lg-slide-skew-only .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg);
    -webkit-transform: skew(0deg,0deg);
    transform: skew(0deg,0deg);
    opacity: 1
}

.lg-css3.lg-slide-skew-only .lg-item.lg-current,.lg-css3.lg-slide-skew-only .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-only-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-only-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(-10deg,0deg);
    -webkit-transform: skew(-10deg,0deg);
    transform: skew(-10deg,0deg)
}

.lg-css3.lg-slide-skew-only-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg);
    -webkit-transform: skew(0deg,0deg);
    transform: skew(0deg,0deg);
    opacity: 1
}

.lg-css3.lg-slide-skew-only-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-only-y .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-only-y .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,10deg);
    -webkit-transform: skew(0deg,10deg);
    transform: skew(0deg,10deg)
}

.lg-css3.lg-slide-skew-only-y .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg);
    -webkit-transform: skew(0deg,0deg);
    transform: skew(0deg,0deg);
    opacity: 1
}

.lg-css3.lg-slide-skew-only-y .lg-item.lg-current,.lg-css3.lg-slide-skew-only-y .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-only-y-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,-10deg);
    -webkit-transform: skew(0deg,-10deg);
    transform: skew(0deg,-10deg)
}

.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg);
    -webkit-transform: skew(0deg,0deg);
    transform: skew(0deg,0deg);
    opacity: 1
}

.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew .lg-item.lg-prev-slide {
    -ms-transform: skew(20deg,0deg) translate3d(-100%,0,0);
    -webkit-transform: skew(20deg,0deg) translate3d(-100%,0,0);
    transform: skew(20deg,0deg) translate3d(-100%,0,0)
}

.lg-css3.lg-slide-skew .lg-item.lg-next-slide {
    -ms-transform: skew(20deg,0deg) translate3d(100%,0,0);
    -webkit-transform: skew(20deg,0deg) translate3d(100%,0,0);
    transform: skew(20deg,0deg) translate3d(100%,0,0)
}

.lg-css3.lg-slide-skew .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew .lg-item.lg-current,.lg-css3.lg-slide-skew .lg-item.lg-next-slide,.lg-css3.lg-slide-skew .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(-20deg,0deg) translate3d(-100%,0,0);
    -webkit-transform: skew(-20deg,0deg) translate3d(-100%,0,0);
    transform: skew(-20deg,0deg) translate3d(-100%,0,0)
}

.lg-css3.lg-slide-skew-rev .lg-item.lg-next-slide {
    -ms-transform: skew(-20deg,0deg) translate3d(100%,0,0);
    -webkit-transform: skew(-20deg,0deg) translate3d(100%,0,0);
    transform: skew(-20deg,0deg) translate3d(100%,0,0)
}

.lg-css3.lg-slide-skew-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-cross .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-cross .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,60deg) translate3d(-100%,0,0);
    -webkit-transform: skew(0deg,60deg) translate3d(-100%,0,0);
    transform: skew(0deg,60deg) translate3d(-100%,0,0)
}

.lg-css3.lg-slide-skew-cross .lg-item.lg-next-slide {
    -ms-transform: skew(0deg,60deg) translate3d(100%,0,0);
    -webkit-transform: skew(0deg,60deg) translate3d(100%,0,0);
    transform: skew(0deg,60deg) translate3d(100%,0,0)
}

.lg-css3.lg-slide-skew-cross .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-cross .lg-item.lg-current,.lg-css3.lg-slide-skew-cross .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-cross .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-cross-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,-60deg) translate3d(-100%,0,0);
    -webkit-transform: skew(0deg,-60deg) translate3d(-100%,0,0);
    transform: skew(0deg,-60deg) translate3d(-100%,0,0)
}

.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-next-slide {
    -ms-transform: skew(0deg,-60deg) translate3d(100%,0,0);
    -webkit-transform: skew(0deg,-60deg) translate3d(100%,0,0);
    transform: skew(0deg,-60deg) translate3d(100%,0,0)
}

.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-ver .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-ver .lg-item.lg-prev-slide {
    -ms-transform: skew(60deg,0deg) translate3d(0,-100%,0);
    -webkit-transform: skew(60deg,0deg) translate3d(0,-100%,0);
    transform: skew(60deg,0deg) translate3d(0,-100%,0)
}

.lg-css3.lg-slide-skew-ver .lg-item.lg-next-slide {
    -ms-transform: skew(60deg,0deg) translate3d(0,100%,0);
    -webkit-transform: skew(60deg,0deg) translate3d(0,100%,0);
    transform: skew(60deg,0deg) translate3d(0,100%,0)
}

.lg-css3.lg-slide-skew-ver .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-ver .lg-item.lg-current,.lg-css3.lg-slide-skew-ver .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-ver-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(-60deg,0deg) translate3d(0,-100%,0);
    -webkit-transform: skew(-60deg,0deg) translate3d(0,-100%,0);
    transform: skew(-60deg,0deg) translate3d(0,-100%,0)
}

.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-next-slide {
    -ms-transform: skew(-60deg,0deg) translate3d(0,100%,0);
    -webkit-transform: skew(-60deg,0deg) translate3d(0,100%,0);
    transform: skew(-60deg,0deg) translate3d(0,100%,0)
}

.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-ver-cross .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,20deg) translate3d(0,-100%,0);
    -webkit-transform: skew(0deg,20deg) translate3d(0,-100%,0);
    transform: skew(0deg,20deg) translate3d(0,-100%,0)
}

.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-next-slide {
    -ms-transform: skew(0deg,20deg) translate3d(0,100%,0);
    -webkit-transform: skew(0deg,20deg) translate3d(0,100%,0);
    transform: skew(0deg,20deg) translate3d(0,100%,0)
}

.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-slide-skew-ver-cross-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-prev-slide {
    -ms-transform: skew(0deg,-20deg) translate3d(0,-100%,0);
    -webkit-transform: skew(0deg,-20deg) translate3d(0,-100%,0);
    transform: skew(0deg,-20deg) translate3d(0,-100%,0)
}

.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-next-slide {
    -ms-transform: skew(0deg,-20deg) translate3d(0,100%,0);
    -webkit-transform: skew(0deg,-20deg) translate3d(0,100%,0);
    transform: skew(0deg,-20deg) translate3d(0,100%,0)
}

.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-current {
    -ms-transform: skew(0deg,0deg) translate3d(0,0,0);
    -webkit-transform: skew(0deg,0deg) translate3d(0,0,0);
    transform: skew(0deg,0deg) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-lollipop .lg-item {
    opacity: 0
}

.lg-css3.lg-lollipop .lg-item.lg-prev-slide {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0)
}

.lg-css3.lg-lollipop .lg-item.lg-next-slide {
    -ms-transform: translate3d(0,0,0) scale(.5);
    -webkit-transform: translate3d(0,0,0) scale(.5);
    transform: translate3d(0,0,0) scale(.5)
}

.lg-css3.lg-lollipop .lg-item.lg-current {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-lollipop .lg-item.lg-current,.lg-css3.lg-lollipop .lg-item.lg-next-slide,.lg-css3.lg-lollipop .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-lollipop-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-lollipop-rev .lg-item.lg-prev-slide {
    -ms-transform: translate3d(0,0,0) scale(.5);
    -webkit-transform: translate3d(0,0,0) scale(.5);
    transform: translate3d(0,0,0) scale(.5)
}

.lg-css3.lg-lollipop-rev .lg-item.lg-next-slide {
    -webkit-transform: translate3d(100%,0,0);
    transform: translate3d(100%,0,0)
}

.lg-css3.lg-lollipop-rev .lg-item.lg-current {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-lollipop-rev .lg-item.lg-current,.lg-css3.lg-lollipop-rev .lg-item.lg-next-slide,.lg-css3.lg-lollipop-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-rotate .lg-item {
    opacity: 0
}

.lg-css3.lg-rotate .lg-item.lg-prev-slide {
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg)
}

.lg-css3.lg-rotate .lg-item.lg-next-slide {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
}

.lg-css3.lg-rotate .lg-item.lg-current {
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1
}

.lg-css3.lg-rotate .lg-item.lg-current,.lg-css3.lg-rotate .lg-item.lg-next-slide,.lg-css3.lg-rotate .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-rotate-rev .lg-item {
    opacity: 0
}

.lg-css3.lg-rotate-rev .lg-item.lg-prev-slide {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg)
}

.lg-css3.lg-rotate-rev .lg-item.lg-next-slide {
    -ms-transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg)
}

.lg-css3.lg-rotate-rev .lg-item.lg-current {
    -ms-transform: rotate(0);
    -webkit-transform: rotate(0);
    transform: rotate(0);
    opacity: 1
}

.lg-css3.lg-rotate-rev .lg-item.lg-current,.lg-css3.lg-rotate-rev .lg-item.lg-next-slide,.lg-css3.lg-rotate-rev .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-css3.lg-tube .lg-item {
    opacity: 0
}

.lg-css3.lg-tube .lg-item.lg-prev-slide {
    -ms-transform: scale3d(1,0,1) translate3d(-100%,0,0);
    -webkit-transform: scale3d(1,0,1) translate3d(-100%,0,0);
    transform: scale3d(1,0,1) translate3d(-100%,0,0)
}

.lg-css3.lg-tube .lg-item.lg-next-slide {
    -ms-transform: scale3d(1,0,1) translate3d(100%,0,0);
    -webkit-transform: scale3d(1,0,1) translate3d(100%,0,0);
    transform: scale3d(1,0,1) translate3d(100%,0,0)
}

.lg-css3.lg-tube .lg-item.lg-current {
    -ms-transform: scale3d(1,1,1) translate3d(0,0,0);
    -webkit-transform: scale3d(1,1,1) translate3d(0,0,0);
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1
}

.lg-css3.lg-tube .lg-item.lg-current,.lg-css3.lg-tube .lg-item.lg-next-slide,.lg-css3.lg-tube .lg-item.lg-prev-slide {
    -webkit-transition: -webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -o-transition: -o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    -webkit-transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    transition: opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s;
    -o-transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;
    transition: transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s,-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s
}

.lg-thumb-outer.lg-grab {
    display: none
}

#lg-share {
    display: none
}

#lg-download {
    display: none
}

#lg-share {
    display: none!important
}

.lg-sub-html {
    display: none
}

.lg-progress-bar .lg-progress {
    background-color: rgba(255,255,255,.23)
}

.popup-slide.video {
    position: relative
}

.popup-slide.video:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: url(../images/icons/play-icon2.svg) no-repeat center;
    -webkit-transition: -webkit-transform .5s cubic-bezier(.39,.58,.57,1);
    transition: -webkit-transform .5s cubic-bezier(.39,.58,.57,1);
    -o-transition: transform .5s cubic-bezier(.39,.58,.57,1);
    transition: transform .5s cubic-bezier(.39,.58,.57,1);
    transition: transform .5s cubic-bezier(.39,.58,.57,1),-webkit-transform .5s cubic-bezier(.39,.58,.57,1);
    z-index: 1
}

.popup-slide.video:hover:before {
    -webkit-transform: scale(1.075);
    -ms-transform: scale(1.075);
    transform: scale(1.075)
}

.gallery_btn_pad {
    padding: 0 0 4.38vw
}

@media(max-width: 1024px) {
    .gallery_btn_pad {
        padding-bottom:9.21vw
    }
}

#lg-actual-size,#lg-counter,#lg-zoom-in,#lg-zoom-out,.lg-autoplay-button.lg-icon,.lg-fullscreen.lg-icon {
    display: none!important
}

.hidden-gallery-image {
    display: none
}

.lg-thumb-outer {
    display: none
}

.lg-outer {
    z-index: 9999
}

.lg-toolbar .lg-icon {
    line-height: 47px
}

.article-img-box {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 1025px) {
    .article-img-box {
        padding-left:30px!important;
        padding-right: 30px!important
    }
}

.article-img-box .swiper-button-next {
    background-image: none;
    right: 24px;
    left: auto;
    width: 38px;
    height: 26px;
    background-size: 90px 12px;
    font-family: lg;
    font-size: 23px;
    font-weight: 200
}

@media(max-width: 719px) {
    .article-img-box .swiper-button-next {
        right:10px
    }
}

.article-img-box .swiper-button-next:before {
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    content: "\e095"
}

.article-img-box .swiper-button-prev {
    background-image: none;
    left: 24px;
    right: auto;
    width: 38px;
    height: 26px;
    background-size: 90px 12px;
    font-family: lg;
    font-size: 23px;
    font-weight: 200
}

@media(max-width: 719px) {
    .article-img-box .swiper-button-prev {
        left:10px
    }
}

.article-img-box .swiper-button-prev:before {
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    content: "\e094"
}

.swiper-container-news {
    cursor: -webkit-grab;
    cursor: grab
}

.swiper-slide img {
    line-height: 0
}

@media(max-width: 1024px) {
    .article-img-box {
        width:100%
    }
}

@media(max-width: 1024px) {
    .article-box {
        width:100%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block
    }
}

.swiper-container.swiper-container-news .swiper-button-prev {
    -webkit-transition: .5s -webkit-transform ease-out;
    transition: .5s -webkit-transform ease-out;
    -o-transition: .5s transform ease-out;
    transition: .5s transform ease-out;
    transition: .5s transform ease-out,.5s -webkit-transform ease-out
}

.swiper-container.swiper-container-news .swiper-button-prev:hover {
    -webkit-transform: translateX(-7px);
    -ms-transform: translateX(-7px);
    transform: translateX(-7px)
}

.swiper-container.swiper-container-news .swiper-button-next {
    -webkit-transition: .5s -webkit-transform ease-out;
    transition: .5s -webkit-transform ease-out;
    -o-transition: .5s transform ease-out;
    transition: .5s transform ease-out;
    transition: .5s transform ease-out,.5s -webkit-transform ease-out
}

.swiper-container.swiper-container-news .swiper-button-next:hover {
    -webkit-transform: translateX(7px);
    -ms-transform: translateX(7px);
    transform: translateX(7px)
}

.swiper-container.swiper-container-news .swiper-button-disabled {
    display: none
}

.swiper-container.swiper-container-news.swiper-container-horizontal .swiper-button-disabled {
    display: block
}

.map-outer-container {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 500px
}

@media(min-width: 1025px) {
    .map-outer-container {
        padding-left:3.13vw
    }
}

@media(max-width: 719px) {
    .map-outer-container {
        height:300px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .map-outer-container {
        height:500px
    }
}

.map-outer-container.second {
    padding-left: 0;
    padding-right: 0
}

@media(min-width: 1025px) {
    .map-outer-container.second {
        padding-right:3.13vw
    }
}

.map-container {
    min-height: 500px;
    min-width: 100%;
    position: relative
}

@media(max-width: 719px) {
    .map-container {
        min-height:300px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .map-container {
        min-height:500px
    }
}

.map-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0
}

.map {
    height: 500px;
    width: 100%
}

@media(max-width: 719px) {
    .map {
        height:300px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .map {
        height:500px
    }
}

html {
    overflow-x: hidden
}

body {
    background: #fff
}

@media(min-width: 1025px) {
    body.allowCursor {
        cursor:url(../images/icons/custom-drag.png),auto!important
    }
}

.cursor {
    opacity: 0
}

@media(min-width: 1025px) {
    .circle-cursor--outer.hover-menu {
        mix-blend-mode:screen
    }

    .circle-cursor {
        position: fixed;
        left: 0;
        top: 0;
        pointer-events: none;
        border-radius: 50%
    }

    .cursor-in {
        position: absolute;
        width: 15px;
        height: 15px;
        background: #fe5b46;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
        -ms-transform: translateX(-50%) translateY(-50%) scale(1);
        transform: translateX(-50%) translateY(-50%) scale(1);
        border-radius: 50%
    }

    .cursor-in.magnit {
        width: 55px;
        height: 55px;
        border: 2px solid #fe5b46;
        background: 0 0;
        -webkit-transform: translateX(-49%) translateY(-52%) scale(1.3);
        -ms-transform: translateX(-49%) translateY(-52%) scale(1.3);
        transform: translateX(-49%) translateY(-52%) scale(1.3)
    }

    .cursor-in.wave:before {
        background: #fe5b46;
        position: absolute;
        opacity: 1;
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        -webkit-animation: waveCircle 2s linear;
        animation: waveCircle 2s linear;
        margin-top: 2px;
        margin-left: 2px
    }

    .cursor-in.wave:after {
        background: #fe5b46;
        position: absolute;
        opacity: 1;
        content: "";
        display: block;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        -webkit-animation: waveCircle2 3s .5s linear;
        animation: waveCircle2 3s .5s linear;
        margin-top: 2px;
        margin-left: 2px
    }

    .circle-cursor--outer {
        width: 100px;
        height: 100px;
        z-index: 12000;
        opacity: 1;
        top: -50px;
        left: -50px;
        mix-blend-mode: unset
    }

    .circle-cursor--outer.mixBlend .cursor-in {
        -webkit-transform: translateX(-50%) translateY(-50%) scale(3);
        -ms-transform: translateX(-50%) translateY(-50%) scale(3);
        transform: translateX(-50%) translateY(-50%) scale(3);
        transition: opacity .7s cubic-bezier(.25,.45,.45,1),transform .7s cubic-bezier(.25,.45,.45,1),-webkit-transform .7s cubic-bezier(.25,.45,.45,1)
    }

    .circle-cursor--outer.no-blend {
        mix-blend-mode: unset
    }

    .circle-cursor--outer.hover-btn {
        width: 8px;
        height: 8px;
        left: -4px;
        top: -4px;
        background: #fe5b46;
        border: 1px solid #fe5b46
    }

    .circle-cursor--outer .cursor-in {
        background: #fe5b46
    }

    .circle-cursor--outer .prev-cursor-arr {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 2.5px 5px 2.5px 0;
        border-color: transparent #fe5b46 transparent transparent;
        position: absolute;
        top: 50%;
        left: 30%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        will-change: transform;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        opacity: 0
    }

    .circle-cursor--outer .next-cursor-arr {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 2.5px 0 2.5px 5px;
        border-color: transparent transparent transparent #fe5b46;
        position: absolute;
        top: 50%;
        right: 30%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        opacity: 0
    }

    .circle-cursor--inner {
        width: 32px;
        height: 32px;
        left: 0;
        top: 0;
        z-index: 12000
    }
}

.prev-click-cursor {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid #fe5b46;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    opacity: 0
}

.prev-click-cursor img {
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(.8);
    -ms-transform: translateX(-50%) translateY(-50%) scale(.8);
    transform: translateX(-50%) translateY(-50%) scale(.8);
    left: 50%
}

.next-click-cursor {
    position: absolute;
    top: 50%;
    right: 50%;
    border: 1px solid #fe5b46;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    -webkit-transform: translateY(-50%) translateX(50%);
    -ms-transform: translateY(-50%) translateX(50%);
    transform: translateY(-50%) translateX(50%);
    opacity: 0
}

.next-click-cursor img {
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(.8);
    -ms-transform: translateX(-50%) translateY(-50%) scale(.8);
    transform: translateX(-50%) translateY(-50%) scale(.8);
    right: 20%
}

.hover-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    -webkit-transition: opacity .7s cubic-bezier(.39,.58,.57,1),-webkit-transform .7s ease-out;
    transition: opacity .7s cubic-bezier(.39,.58,.57,1),-webkit-transform .7s ease-out;
    -o-transition: opacity .7s cubic-bezier(.39,.58,.57,1),transform .7s ease-out;
    transition: opacity .7s cubic-bezier(.39,.58,.57,1),transform .7s ease-out;
    transition: opacity .7s cubic-bezier(.39,.58,.57,1),transform .7s ease-out,-webkit-transform .7s ease-out;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(1.3);
    -ms-transform: translateX(-50%) translateY(-50%) scale(1.3);
    transform: translateX(-50%) translateY(-50%) scale(1.3)
}

.hover-circle .parallaxMoveCircle {
    width: 75px;
    height: 75px;
    border: 1px solid #000;
    border-radius: 50%
}

@-webkit-keyframes waveCircle {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1
    }

    100% {
        -webkit-transform: scale(6.5);
        transform: scale(6.5);
        opacity: 0
    }
}

@keyframes waveCircle {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1
    }

    100% {
        -webkit-transform: scale(6.5);
        transform: scale(6.5);
        opacity: 0
    }
}

@-webkit-keyframes waveCircle2 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1
    }

    100% {
        -webkit-transform: scale(10.5);
        transform: scale(10.5);
        opacity: 0
    }
}

@keyframes waveCircle2 {
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 1
    }

    100% {
        -webkit-transform: scale(10.5);
        transform: scale(10.5);
        opacity: 0
    }
}

@-webkit-keyframes moveLeftArrow {
    0% {
        left: 30%
    }

    100% {
        left: 33%
    }
}

@keyframes moveLeftArrow {
    0% {
        left: 30%
    }

    100% {
        left: 33%
    }
}

@-webkit-keyframes moveRightArrow {
    0% {
        left: 30%
    }

    100% {
        right: 33%
    }
}

@keyframes moveRightArrow {
    0% {
        left: 30%
    }

    100% {
        right: 33%
    }
}

.sticked-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%
}

.cursor-in.close {
    background: 0 0
}

.cursor-in.close .cursor-in-img {
    display: block
}

.drag-thumbs-slider {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 380px;
    padding-top: 220px;
    padding-bottom: 220px
}

@media(max-width: 1440px) {
    .drag-thumbs-slider {
        padding-top:150px;
        padding-bottom: 150px
    }
}

.drag-thumbs-slider .casestudy-link-box-txt {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 14px;
    margin-left: 80px
}

@media(max-width: 1440px) {
    .drag-thumbs-slider .casestudy-link-box-txt {
        margin-left:40px
    }
}

.drag-thumbs-slider img {
    display: block;
    width: 100%;
    height: auto
}

.drag-thumbs-slider .slider {
    position: relative;
    height: 100%;
    width: 100%;
    cursor: e-resize
}

.drag-thumbs-slider .slider.is-grabbing {
    cursor: e-resize
}

.drag-thumbs-slider .slider__inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh
}

.drag-thumbs-slider .slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    width: 370px;
    height: 370px
}

@media(max-width: 1440px) {
    .drag-thumbs-slider .slide {
        width:330px;
        height: 330px
    }
}

.drag-thumbs-slider .slide .social-feed-slide-box {
    width: 290px;
    height: 290px;
    color: #000;
    margin-left: 80px
}

@media(max-width: 1440px) {
    .drag-thumbs-slider .slide .social-feed-slide-box {
        margin-left:40px
    }
}

.drag-thumbs-slider .slide .social-feed-slide-box .text {
    padding-top: 20px
}

.drag-thumbs-slider .slide .social-feed-slide-box .btn-box {
    margin-top: 10px
}

.drag-thumbs-slider .slide__bg {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 290px;
    height: 290px;
    margin-left: 80px
}

@media(max-width: 1440px) {
    .drag-thumbs-slider .slide__bg {
        margin-left:40px
    }
}

.drag-thumbs-slider .slide__title {
    position: relative;
    color: #fff;
    font-size: calc(4rem);
    font-weight: 400;
    z-index: 2
}

.slide-box {
    position: relative;
    width: 100%;
    height: 100%
}

#deviceSvgAnimation {
    background-color: #fff;
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1
}

#preloader {
    width: 90px;
    height: 90px;
    display: block;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1
}

.preloader .preloader-box {
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    width: 90px;
    height: 90px;
    top: 50%;
    left: 50%
}

#screenrotation {
    background-color: #fff;
    width: 30%;
    height: 100%;
    display: block;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1;
    margin: auto
}

#frostPreloader {
    width: 100%;
    height: 100%;
    display: block;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1
}

#hamburgerAnimation {
    width: 55px;
    height: 55px;
    display: block;
    overflow: hidden;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    text-align: center;
    opacity: 1;
    -webkit-tap-highlight-color: transparent;
    -webkit-transition: -webkit-transform .4s;
    transition: -webkit-transform .4s;
    -o-transition: transform .4s;
    transition: transform .4s;
    transition: transform .4s,-webkit-transform .4s;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: visible;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

#hamburgerAnimation path {
    stroke: #fff!important;
    fill: #fff!important
}

#hamburgerAnimation svg {
    -webkit-transform: scale(1)!important;
    -ms-transform: scale(1)!important;
    transform: scale(1)!important;
    -webkit-transition: -webkit-transform .4s linear;
    transition: -webkit-transform .4s linear;
    -o-transition: transform .4s linear;
    transition: transform .4s linear;
    transition: transform .4s linear,-webkit-transform .4s linear
}

#hamburgerAnimation:hover svg {
    -webkit-transform: scale(1.15)!important;
    -ms-transform: scale(1.15)!important;
    transform: scale(1.15)!important
}

body.dark #hamburgerAnimation path {
    stroke: #000!important;
    fill: #000!important
}

body.light #hamburgerAnimation path {
    stroke: #fff!important;
    fill: #fff!important
}

::-webkit-input-placeholder {
    color: #b2b2b2
}

:-ms-input-placeholder {
    color: #b2b2b2
}

::-moz-placeholder {
    color: #b2b2b2
}

::-ms-input-placeholder {
    color: #b2b2b2
}

::placeholder {
    color: #b2b2b2
}

.field {
    font-size: 18px;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 33px 0 17px 2px;
    line-height: 20px;
    border-bottom: 1px solid #fdded9;
    display: block;
    width: 100%;
    color: #6b6b6b;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 719px) {
    .field {
        padding:15px 0 15px 2px;
        line-height: 17px;
        font-size: 16px
    }
}

@media(min-width: 1025px) {
    .field {
        padding:15px 0 15px 2px;
        line-height: 17px;
        font-size: 16px
    }
}

@media(min-width: 1281px) {
    .field {
        padding:33px 0 17px 2px;
        line-height: 20px;
        font-size: 18px
    }
}

.recapcha-outer-box {
    margin: 40px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

textarea#msg {
    min-height: 160px
}

@media(max-width: 719px) {
    .form-o-b {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 1024px) {
    .form-btn-box {
        padding-top:25px
    }
}

@media(min-width: 1661px) {
    .form-btn-box {
        padding-left:25px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .recaptcha-container {
        -webkit-transform:scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        margin-left: -26px
    }
}

@media(min-width: 1025px) {
    .recaptcha-container {
        -webkit-transform:scale(.6);
        -ms-transform: scale(.6);
        transform: scale(.6);
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        margin-left: -40px
    }
}

@media(min-width: 1281px) {
    .recaptcha-container {
        -webkit-transform:scale(.7);
        -ms-transform: scale(.7);
        transform: scale(.7);
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        margin-left: -40px
    }
}

@media(min-width: 1441px) {
    .recaptcha-container {
        -webkit-transform:scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
        margin-left: -26px
    }
}

@media(min-width: 1661px) {
    .recaptcha-container {
        -webkit-transform:scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        margin-left: 0
    }
}

textarea {
    resize: none
}

.field-group {
    position: relative
}

.error-field {
    position: absolute;
    top: 8px;
    color: #fe5b46;
    font-size: 11px;
    right: 0
}

.r-f-b {
    padding-top: 20px
}

.r-f-b.error .error-field {
    left: 0;
    top: -15px;
    right: inherit
}

.awards-slider-conatiner {
    overflow: visible
}

@media(max-width: 719px) {
    .awards-slider-conatiner {
        width:85%
    }
}

@media(max-width: 1024px) {
    .awards-slider-conatiner {
        width:100%;
        float: left
    }
}

#awards-slider {
    width: auto
}

body.bg .awards-slider-text .title.en {
    font-family: helvetica lt std bold,sans-serif
}

.awards-slider-text {
    position: relative;
    padding-left: 23.98vw
}

@media(max-width: 1024px) {
    .awards-slider-text {
        width:80%;
        margin: auto;
        margin-left: 43%;
        margin-left: 0;
        text-align: right;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        float: left;
        width: 18vw;
        vertical-align: middle;
        padding: 0;
        height: 100%;
        font-size: 51.85vw;
        -webkit-transform: translateY(-29vw);
        -ms-transform: translateY(-29vw);
        transform: translateY(-29vw)
    }

    .awards-slider-text .awards-slider-title {
        font-size: 35px;
        padding-bottom: 10px
    }

    .awards-slider-text .awards-slider-title.title {
        font-family: helvetica lt std bold,sans-serif
    }

    .awards-slider-text .text {
        padding-right: 10px
    }
}

@media(max-width: 719px) {
    .awards-slider-text {
        width:21vw!important
    }
}

.awards-slider-title {
    font-size: 120px;
    font-weight: 700;
    opacity: .1;
    -webkit-transition: opacity .6s cubic-bezier(.39,.58,.57,1);
    -o-transition: opacity .6s cubic-bezier(.39,.58,.57,1);
    transition: opacity .6s cubic-bezier(.39,.58,.57,1)
}

.awards-slider-p {
    -webkit-transition: opacity .6s cubic-bezier(.39,.58,.57,1);
    -o-transition: opacity .6s cubic-bezier(.39,.58,.57,1);
    transition: opacity .6s cubic-bezier(.39,.58,.57,1);
    padding-right: 9.21vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 18px!important
}

@media(max-width: 1440px) {
    .awards-slider-p {
        font-size:15px!important
    }
}

@media(max-width: 719px) {
    .awards-slider-p {
        font-size:14px!important
    }
}

.swiper-slide-active .awards-slider-p {
    opacity: .3;
    font-size: 18px
}

.swiper-slide-active .awards-slider-title {
    opacity: 1
}

.swiper-slide-active .title-intro {
    opacity: 1
}

@media(max-width: 720px) {
    .anim-first-slide .title-intro.title.en {
        font-size:43px;
        padding-bottom: 0
    }
}

@media(max-width: 720px) {
    .anim-first-slide .title-intro.title.t {
        font-size:13px
    }
}

.title-intro {
    opacity: 1;
    -webkit-transition: opacity .6s cubic-bezier(0,-.04,1,1.08);
    -o-transition: opacity .6s cubic-bezier(0,-.04,1,1.08);
    transition: opacity .6s cubic-bezier(0,-.04,1,1.08)
}

.awards-years-slide-t-line {
    background: #313131;
    height: 1px;
    width: 0%;
    margin-left: 6.25vw;
    margin-bottom: 40px
}

@media(max-width: 719px) {
    .awards-years-slide-t-line {
        margin-bottom:15px
    }
}

@media(max-width: 1024px) {
    .awards-years-slide-t-line {
        display:none
    }
}

.awards-slider-image-box {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left: -16%;
    width: 33.07vw
}

.awards-slider-image-box img {
    max-width: 100%
}

@media(max-width: 1024px) {
    .awards-slider-image-box {
        left:0;
        width: 70vw
    }
}

.awards-slider-wrapper {
    float: left;
    width: 100%
}

@media(max-width: 1024px) {
    .awards-years-slide-t-awards {
        -webkit-transform:translateX(-15px);
        -ms-transform: translateX(-15px);
        transform: translateX(-15px);
        width: 100vw
    }
}

.awards-years-slide-t-awards .awards-logos {
    padding-left: 6.25vw;
    padding-right: 0;
    display: block;
    width: auto;
    text-align: left;
    padding-top: 40px;
    max-width: 33.28vw;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 100%
}

@media(max-width: 1024px) {
    .awards-years-slide-t-awards .awards-logos {
        margin-left:0;
        padding-left: 0
    }
}

@media(max-width: 719px) {
    .awards-years-slide-t-awards .awards-logos {
        padding-top:15px
    }
}

.awards-years-slide-t-awards .awards-logo {
    width: auto;
    display: table;
    vertical-align: middle;
    padding-right: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 0;
    width: auto!important;
    line-height: 1;
    -ms-flex-wrap: initial;
    flex-wrap: initial
}

@media(max-width: 1024px) {
    .awards-years-slide-t-awards .awards-logo {
        padding-right:15px;
        padding-left: 15px
    }
}

.awards-years-slide-t-awards .awards-logo img {
    display: table-cell;
    max-height: 47px;
    width: auto;
    display: inline-block;
    padding-right: 0
}

.awards-years-slide-t-awards .awards-logo .awards-count {
    display: table-cell;
    padding-right: 0;
    font-size: 20px;
    display: inline-block;
    width: auto;
    min-width: 0;
    padding-right: 15px
}

@media(max-width: 1024px) {
    #swipeYearSlider {
        background:0 0;
        border: transparent;
        padding-left: 0;
        width: auto;
        min-width: 0;
        padding-right: 0;
        color: #ff5842
    }
}

.awards-slider-slider-years {
    float: left;
    height: 100vh;
    padding-right: 8.69vw
}

@media(max-width: 1024px) {
    .awards-slider-slider-years {
        -webkit-transform:translateX(-100vw);
        -ms-transform: translateX(-100vw);
        transform: translateX(-100vw);
        width: 200vw;
        z-index: 12;
        padding-right: 8.69vw;
        position: relative
    }

    .awards-slider-slider-years .content-grid {
        padding: 0!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-slider-years {
        height:100vh!important;
        min-height: 680px;
        position: absolute!important;
        left: 0;
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0)
    }
}

@media(max-width: 1024px) {
    .years-shell.section-team {
        overflow-x:hidden!important;
        overflow-y: hidden!important
    }
}

.awards-years-slider.swiper-container {
    height: 100vh;
    margin: 0
}

@media(max-width: 1024px) {
    .awards-years-slider.swiper-container {
        width:200vw
    }
}

.years-shell.section-team {
    cursor: e-resize
}

@media(max-width: 1024px) {
    .years-shell.section-team {
        overflow-x:schiddenroll!important;
        overflow-y: hidden!important
    }

    .years-shell.section-team .content-offset {
        min-height: 100vh;
        width: 83vw
    }
}

@media(max-width: 720px) {
    .years-shell.section-team {
        min-height:680px!important;
        height: 680px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .years-shell.section-team {
        height:100vh!important;
        min-height: 975px!important
    }
}

@media(min-width: 1025px) {
    .years-shell.section-team {
        min-height:800px!important;
        height: 800px
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .years-shell.section-team {
        min-height:900px!important;
        height: 900px
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .years-shell.section-team {
        height:975px!important;
        min-height: 975px!important
    }
}

@media(min-width: 1441px) {
    .years-shell.section-team {
        min-height:975px!important;
        height: 975px!important
    }
}

.years-shell.section-team .swiper-slide-prev:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

@media(max-width: 719px) {
    .awards-slider-slider-years {
        height:100vh!important;
        min-height: 680px
    }
}

@media(max-width: 1024px) {
    .awards-years-slider {
        height:100vh!important;
        min-height: 680px
    }
}

@media(max-width: 719px) {
    .awards-years-slider {
        height:100vh!important
    }
}

@media(max-width: 720px) {
    .years-shell-inner {
        min-height:680px!important;
        height: 100vh!important;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

@media(min-width: 1025px) {
    .years-shell-inner {
        min-height:800px!important
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .years-shell-inner {
        min-height:900px!important
    }
}

@media(min-width: 1441px) {
    .years-shell-inner {
        min-height:975px!important;
        height: 975px!important
    }
}

@media(max-width: 1024px) {
    .years-shell-inner {
        width:200vw!important
    }
}

.awards-years-slide-t-txt a {
    color: #ff5b46
}

.years-shell.section-team {
    overflow: hidden
}

@media(max-width: 719px) {
    .years-shell.section-team {
        height:100vh!important;
        min-height: 680px!important
    }
}

.awards-years-slide-t-txt {
    font-size: 18px;
    padding-left: 6.25vw;
    max-width: 33.28vw;
    text-align: left;
    line-height: 1.5;
    opacity: 0;
    -webkit-transition: .65s opacity ease-out;
    -o-transition: .65s opacity ease-out;
    transition: .65s opacity ease-out
}

@media(max-width: 1024px) {
    .awards-years-slide-t-txt {
        font-size:12px!important;
        padding-right: 50px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        max-width: 100vw;
        font-size: 11px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-years-slide-t-txt {
        font-size:16px!important
    }
}

@media(max-width: 1024px) {
    .years-shell-inner .section-tools {
        display:none
    }
}

.awards-years-slide.swiper-slide-active .awards-years-slide-t-txt {
    opacity: 1
}

.anim-awards-txt:last-child {
    display: none
}

@media(max-width: 1024px) {
    .awards-section-outer-container {
        z-index:100!important
    }
}

.awards-section-outer-container.m100vh {
    max-height: 100vh;
    height: auto
}

@media(max-width: 1024px) {
    .awards-section-outer-container .years-shell .ds {
        z-index:200;
        width: 100vw
    }
}

.awards-slider-line {
    position: absolute;
    right: 7.92vw;
    top: 50%;
    z-index: 1;
    opacity: .1
}

.awards-logos {
    overflow: hidden;
    padding: 1.3vw 2.6vw 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(min-width: 1025px) {
    .awards-logos img {
        padding-right:3vw
    }
}

@media(max-width: 1440px) {
    .awards-logos img {
        padding-right:3vw
    }
}

@media(max-width: 1024px) {
    .awards-logos img {
        padding-right:30px
    }
}

@media(max-width: 719px) {
    .awards-logos .awards-logo {
        width:38px
    }
}

.awards-logo {
    display: inline-block;
    vertical-align: middle;
    line-height: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    float: left;
    padding: 10px 0
}

@media(min-width: 1025px) {
    .awards-logo {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }
}

@media(max-width: 1024px) {
    .awards-logo {
        float:left;
        padding: 0;
        width: 50px;
        margin-right: 10px;
        height: 35px;
        margin-bottom: 15px;
        display: block
    }

    .awards-logo img {
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain
    }

    .awards-logo .awards-count {
        display: none!important
    }
}

.translate-arrow-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width: 719px) {
    .translate-arrow-box {
        margin-top:0!important
    }
}

#awards-slider {
    margin-bottom: 5.21vw
}

#awards-slider .swiper-pagination {
    bottom: -100px;
    left: 0;
    width: 100%;
    right: 56%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
    left: inherit
}

@media(max-width: 1024px) {
    #awards-slider .swiper-pagination {
        display:none;
        bottom: -77px;
        width: 90%;
        right: 0;
        left: 0;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        margin: auto
    }
}

@media(max-width: 1024px) {
    #awards-slider {
        padding-bottom:0
    }
}

#awards-slider .swiper-pagination-bullet {
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: 0 0;
    position: relative;
    display: inline-block;
    padding-right: 8px;
    border-radius: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    padding-left: 8px
}

#awards-slider .swiper-pagination-bullet.next strong,#awards-slider .swiper-pagination-bullet.prev strong {
    background: rgba(255,255,255,.7);
    -webkit-transform: translateX(-50%) translateY(-50%) scale(1.5);
    -ms-transform: translateX(-50%) translateY(-50%) scale(1.5);
    transform: translateX(-50%) translateY(-50%) scale(1.5);
    -webkit-transition: background .6s ease-in-out,border .6s ease-in-out,-webkit-transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,-webkit-transform .6s ease-in-out;
    -o-transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out,-webkit-transform .6s ease-in-out
}

#awards-slider .swiper-pagination-bullet.nextAfter strong,#awards-slider .swiper-pagination-bullet.prevBefore strong {
    background: rgba(255,255,255,.4);
    -webkit-transform: translateX(-50%) translateY(-50%) scale(1.2);
    -ms-transform: translateX(-50%) translateY(-50%) scale(1.2);
    transform: translateX(-50%) translateY(-50%) scale(1.2);
    -webkit-transition: background .6s ease-in-out,border .6s ease-in-out,-webkit-transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,-webkit-transform .6s ease-in-out;
    -o-transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out;
    transition: background .6s ease-in-out,border .6s ease-in-out,transform .6s ease-in-out,-webkit-transform .6s ease-in-out
}

@media(max-width: 1024px) {
    #awards-slider .swiper-pagination-bullet {
        margin-bottom:10px
    }
}

#awards-slider .swiper-pagination-bullet strong {
    background: rgba(255,255,255,.2);
    border: 1px solid #1a1a1a;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: background .5s ease-in,border .5s ease-in,-webkit-transform .5s ease-in;
    transition: background .5s ease-in,border .5s ease-in,-webkit-transform .5s ease-in;
    -o-transition: background .5s ease-in,border .5s ease-in,transform .5s ease-in;
    transition: background .5s ease-in,border .5s ease-in,transform .5s ease-in;
    transition: background .5s ease-in,border .5s ease-in,transform .5s ease-in,-webkit-transform .5s ease-in
}

#awards-slider .swiper-pagination-bullet:hover strong {
    background: #fff;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(2.5);
    -ms-transform: translateX(-50%) translateY(-50%) scale(2.5);
    transform: translateX(-50%) translateY(-50%) scale(2.5);
    -webkit-transition: background 1s ease-in-out,border 1s ease-in-out,-webkit-transform 1s ease-in-out;
    transition: background 1s ease-in-out,border 1s ease-in-out,-webkit-transform 1s ease-in-out;
    -o-transition: background 1s ease-in-out,border 1s ease-in-out,transform 1s ease-in-out;
    transition: background 1s ease-in-out,border 1s ease-in-out,transform 1s ease-in-out;
    transition: background 1s ease-in-out,border 1s ease-in-out,transform 1s ease-in-out,-webkit-transform 1s ease-in-out
}

#awards-slider .swiper-pagination-bullet:hover i {
    opacity: .2
}

#awards-slider .swiper-pagination-bullet i {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    top: -28px;
    display: inline-block;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
    font-weight: 700;
    -webkit-transition: opacity .6s cubic-bezier(.4,0,1,1),-webkit-transform .6s ease-out;
    transition: opacity .6s cubic-bezier(.4,0,1,1),-webkit-transform .6s ease-out;
    -o-transition: opacity .6s cubic-bezier(.4,0,1,1),transform .6s ease-out;
    transition: opacity .6s cubic-bezier(.4,0,1,1),transform .6s ease-out;
    transition: opacity .6s cubic-bezier(.4,0,1,1),transform .6s ease-out,-webkit-transform .6s ease-out
}

#awards-slider .swiper-pagination-bullet:last-child:after {
    display: none
}

#awards-slider .swiper-pagination-bullet:after {
    content: '';
    width: 8px;
    height: 1px;
    display: inline-block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-bottom: 1px solid #3d3d3d
}

#awards-slider .swiper-pagination-bullet-active {
    color: #fff;
    background: 0 0
}

#awards-slider .swiper-pagination-bullet-active:hover strong {
    background: #f25b48!important;
    border-color: #f25b48!important
}

#awards-slider .swiper-pagination-bullet-active strong {
    background: #f25b48!important;
    border-color: #f25b48!important
}

#awards-slider .swiper-pagination-bullet-active i {
    opacity: 1
}

.awards-count {
    font-size: 30px;
    opacity: .2;
    color: #fff;
    vertical-align: middle;
    display: table-cell;
    padding-right: 15px;
    font-family: Helvetica-Light,sans-serif;
    font-weight: 300
}

@media(min-width: 1025px) {
    .awards-count {
        vertical-align:middle;
        display: inline-block;
        line-height: 1
    }
}

@media(max-width: 1400px) {
    .awards-count {
        padding-left:10px;
        padding-right: 10px;
        font-size: 20px
    }
}

@media(max-width: 1280px) {
    .awards-count {
        padding-left:10px;
        padding-right: 10px
    }
}

@media(max-width: 1024px) {
    .awards-count {
        font-size:40px;
        padding-left: 5px;
        padding-right: 5px
    }
}

.home-slider .content-offset.hero {
    padding-bottom: 0;
    padding-top: 10vw
}

@media(max-width: 719px) {
    .home-slider .content-offset.hero {
        padding-bottom:0;
        padding-top: 0
    }
}

.home-slider .content-offset.hero .section-offset {
    padding-top: 0;
    padding-bottom: 0;
    position: relative
}

@media(max-width: 719px) {
    .home-slider .content-offset.hero .section-offset {
        padding:50px 50px 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .home-slider .content-offset.hero .section-offset {
        padding:25px 25px 0
    }
}

.home-slider .content-offset.hero .about-us-tools {
    bottom: 0;
    top: inherit
}

.home-slider .content-offset.hero .about-us-tools .text.t {
    font-size: 12px;
    letter-spacing: 1px;
    opacity: .8
}

.home-slider .content-offset.hero .description-icon {
    opacity: 1
}

.home-slider .home-slider-box-inner .section-offset.flexVertical {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    padding-top: 0;
    padding-bottom: 0;
    padding-top: 11vw;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

@media(max-width: 719px) {
    .home-slider .home-slider-box-inner .section-offset.flexVertical {
        -webkit-box-align:start;
        -ms-flex-align: start;
        align-items: flex-start;
        padding-top: 0;
        padding-bottom: 0;
        padding-top: 130px;
        padding-left: 3px;
        width: 100%;
        margin-left: 0;
        padding-left: 25px;
        padding-right: 25px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .home-slider .home-slider-box-inner .section-offset.flexVertical {
        margin-left:0;
        width: 100%
    }

    .home-slider .home-slider-box-inner .section-offset.flexVertical .content-offset {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 70%;
        padding-top: 90px
    }
}

.home-slider .home-slider-box-inner .content-offset {
    padding-top: 1vw
}

@media(max-width: 719px) {
    .home-slider .home-slider-box-inner .content-offset {
        width:100%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 25px;
        padding-right: 25px
    }

    .home-slider .home-slider-box-inner .content-offset .title.m {
        font-size: 35px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .home-slider .home-slider-box-inner .content-offset {
        width:100%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .home-slider .home-slider-box-inner .content-offset .title.m {
        font-size: 50px
    }
}

@media(min-width: 1025px) {
    .home-slider .home-slider-box-inner .title.m {
        font-size:4.43vw
    }
}

@media(min-width: 1920px) {
    .home-slider .home-slider-box-inner .title.m {
        font-size:85px
    }
}

body.bg #awards-slider .title.t {
    font-family: HelveticaLTStd-Roman,sans-serif
}

@media(min-width: 1025px) {
    body.bg #awards-slider .title.t {
        font-size:16px!important
    }
}

@media(max-width: 719px) {
    body.bg .home-slider .home-slider-box-inner .content-offset {
        padding-right:0
    }
}

@media(min-width: 1025px) and (min-width:1025px) {
    body.bg .home-slider .home-slider-box-inner .content-offset .title.m {
        font-size:4.74vw;
        line-height: 1.15;
        letter-spacing: 3.2
    }
}

@media(min-width: 1025px) and (min-width:1920px) {
    body.bg .home-slider .home-slider-box-inner .content-offset .title.m {
        font-size:91px
    }
}

@media(max-width: 719px) {
    body.bg .home-slider .home-slider-box-inner .content-offset .title.m {
        font-size:35px
    }
}

.awards-logos-box {
    position: relative;
    bottom: 4.69vw;
    position: absolute;
    z-index: 1;
    left: 10vw
}

@media(max-width: 1400px) {
    .awards-logos-box {
        bottom:1.69vw
    }
}

@media(max-width: 1380px) {
    .awards-logos-box.desktop_only .awards-logo img {
        max-height:44px
    }
}

@media(max-width: 1024px) {
    .awards-logos-box {
        display:none!important
    }

    .awards-logos-box.mobile_only {
        left: 0;
        display: block!important;
        overflow: hidden;
        width: 100vw!important;
        -webkit-transform: translateY(-5vw);
        -ms-transform: translateY(-5vw);
        transform: translateY(-5vw)
    }

    .awards-logos-box.mobile_only .awards-logos {
        display: block;
        padding: 20px;
        height: 91px;
        width: 3000px;
        position: relative
    }

    .awards-logos-box.mobile_only .awards-logos .awards-logo {
        display: block;
        width: auto;
        height: auto;
        margin-right: 0;
        margin: auto;
        float: none;
        left: 0;
        right: 0
    }

    .awards-logos-box.mobile_only .awards-logos .awards-logo.show {
        display: block;
        float: left
    }

    .awards-logos-box.mobile_only .awards-logos .awards-logo img {
        width: auto;
        height: auto;
        display: inline-block;
        vertical-align: middle;
        max-height: 47px
    }

    .awards-logos-box.mobile_only .awards-logos .awards-logo .awards-count {
        display: inline-block;
        height: auto;
        line-height: 20px;
        padding-right: 0;
        vertical-align: middle
    }
}

@media(max-width: 1024px) and (max-width:1024px) {
    .awards-logos-box.mobile_only .awards-logos .awards-logo .awards-count {
        font-size:30px
    }
}

@media(min-width: 1025px) {
    #awards-slider .title.t {
        font-size:18px!important;
        margin-bottom: 0!important
    }
}

@media(min-width: 1025px) {
    body.bg .title.t {
        line-height:1.25
    }
}

@media(max-width: 1024px) {
    .awa-1 {
        -webkit-transform:translateY(-5vw);
        -ms-transform: translateY(-5vw);
        transform: translateY(-5vw)
    }
}

@media(max-width: 719px) {
    .awards-slider-slide .title.t {
        font-size:12px
    }
}

.awards-slider-slide:first-child {
    width: 41.38vw;
    float: left
}

@media(max-width: 1024px) {
    .awards-slider-slide:first-child {
        width:80vw
    }
}

@media(max-width: 719px) {
    .awards-slider-slide .content-grid {
        padding-right:0!important
    }

    .awards-slider-slide .content-grid .text.m {
        font-size: 12px
    }

    .awards-slider-slide .content-grid .anim-first-slide .title-intro.title.t {
        font-size: 13px;
        max-width: 80%;
        padding-bottom: 0
    }
}

@media(max-width: 1024px) {
    .awards-slider-slide .content-grid {
        min-height:680px;
        height: 100vh!important
    }

    .awards-slider-slide .content-grid .text-col {
        min-height: 680px;
        height: 100vh!important
    }

    .awards-slider-slide .content-grid .text-col .awards-years-slider {
        min-height: 680px;
        height: 100vh!important;
        background: #ff0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-slide .col-t-40 {
        padding-right:5%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    body.bg .blog-section .swiper-slide .title.b.day {
        font-size:60px!important;
        line-height: .7;
        display: inline-block;
        padding-bottom: 0
    }
}

@media(max-width: 719px) {
    body.bg .article-date .day.title.b {
        font-size:60px!important;
        line-height: .7;
        display: inline-block;
        padding-bottom: 0
    }
}

@media(max-width: 719px) {
    body.bg .blog-section .swiper-slide .title.b .date {
        font-size:60px!important;
        line-height: .8
    }
}

body.bg .social-feed-slide-box .title.m {
    letter-spacing: 0
}

@media(min-width: 1025px) {
    body.bg .social-feed-slide-box .title.m {
        font-size:2.75vw;
        padding-bottom: 0;
        line-height: 1.15
    }
}

@media(min-width: 1920px) {
    body.bg .social-feed-slide-box .title.m {
        font-size:45px
    }
}

@media(max-width: 719px) {
    body.bg .awards-slider-slide .content-grid .anim-first-slide .title-intro.title.t {
        line-height:1.5
    }
}

@media(max-width: 719px) {
    body.bg .anim-first-slide .title-intro.title.en {
        font-size:45px
    }
}

@media(max-width: 719px) {
    body.bg .anim-awards-txt {
        line-height:1.4
    }
}

@media(max-width: 719px) {
    body.bg .contact-info .t1 {
        line-height:1.4
    }
}

@media(max-width: 719px) {
    body.bg .about-img-txt {
        padding-top:14px!important;
        line-height: 1.2!important;
        letter-spacing: 1px!important;
        font-weight: 500!important;
        font-family: HelenPro,sans-serif!important
    }
}

.award-box {
    font-family: helvetica lt std roman,sans-serif
}

@media(max-width: 719px) {
    .award-box .award-item-text {
        display:none
    }
}

@media(max-width: 719px) {
    .home-mobile-news-slide .title.t {
        font-size:23px!important
    }
}

.award-item {
    padding-bottom: 40px
}

@media(max-width: 1440px) {
    .award-item {
        padding-bottom:20px
    }
}

@media(max-width: 1024px) {
    .award-item {
        padding-bottom:0
    }
}

.award-item:last-child {
    padding-bottom: 0
}

.award-item-title {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 11px;
    opacity: .9;
    letter-spacing: .7px
}

@media(max-width: 1024px) {
    .award-item-title {
        font-size:16px
    }
}

.award-item-text {
    font-size: 14px;
    letter-spacing: .8px;
    line-height: 1.3;
    padding-bottom: 13px;
    font-weight: 400;
    color: #4a4a4a;
    opacity: 1;
    text-shadow: 0 0 0 #4a4a4a
}

@media(max-width: 1440px) {
    .award-item-text {
        font-size:13px;
        padding-bottom: 6px
    }
}

.award-item-text {
    font-size: 14px;
    opacity: .7;
    letter-spacing: .7px;
    line-height: 1.3;
    padding-bottom: 13px
}

.award-item-text a {
    color: #ff5842;
    font-weight: 500;
    opacity: .8;
    -webkit-transition: opacity .4s cubic-bezier(0,0,.2,1);
    -o-transition: opacity .4s cubic-bezier(0,0,.2,1);
    transition: opacity .4s cubic-bezier(0,0,.2,1)
}

.award-item-text a:hover {
    opacity: 1
}

.awards-slider-line {
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
    width: 9.52vw
}

@media(max-width: 1024px) {
    .awards-slider-line {
        width:70px;
        right: -1.08vw;
        top: 50%
    }
}

.casestudy-awards-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 12.7vw 3.5vw
}

@media(max-width: 1440px) {
    .casestudy-awards-box {
        padding-left:12vw;
        padding-right: 12vw
    }
}

@media(max-width: 719px) {
    .casestudy-awards-box {
        padding:0 25px 30px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-awards-box {
        padding:0 50px 30px
    }
}

.casestudy-awards-box .casestudy-awards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.casestudy-awards-box .casestudy-awards-item {
    text-align: center;
    padding-right: 70px;
    padding-bottom: 10px
}

@media(max-width: 1024px) {
    .casestudy-awards-box .casestudy-awards-item {
        padding-right:20px
    }
}

.casestudy-awards-box .casestudy-awards-icon {
    opacity: .9
}

.casestudy-awards-box .casestudy-awards-title {
    font-size: 13px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.5;
    letter-spacing: .8px;
    font-weight: 500;
    text-transform: capitalize;
    opacity: .6
}

@media(max-width: 1024px) {
    .casestudy-awards-box .casestudy-awards-title {
        display:none
    }
}

.casestudy-awards-box .casestudy-awards-sub-title {
    font-size: 11px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.5;
    letter-spacing: .8px;
    font-weight: 500;
    text-transform: capitalize;
    opacity: .2
}

@media(max-width: 1280px) {
    .casestudy-awards-box .casestudy-awards-sub-title {
        max-width:150px;
        margin: auto
    }
}

@media(max-width: 1024px) {
    .casestudy-awards-box .casestudy-awards-sub-title {
        display:none
    }
}

.case-study-hero-slider.home-slider .home-slider-box-inner .content-offset {
    width: 100%
}

.case-study-hero-slider.home-slider .home-slider-box-inner .section-offset {
    margin-left: 0
}

.awards-slider-line-moving {
    display: block;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: arrow-slider-scroll cubic-bezier(.39,.58,.57,1) infinite;
    animation: arrow-slider-scroll cubic-bezier(.39,.58,.57,1) infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    height: 2px;
    width: 100%;
    background: #fff
}

.awards-slider-line-moving.anim {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: arrow-scroll 10s ease-out infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.mobile-slider-navigation-item.swiper-slide {
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: 0 0;
    position: relative;
    display: inline-block;
    padding-right: 15px;
    border-radius: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
    padding-left: 15px;
    width: 8px;
    height: 8px
}

.mobile-slider-navigation-item.swiper-slide.swiper-slide-active {
    color: #fff;
    background: 0 0
}

.mobile-slider-navigation-item.swiper-slide.swiper-slide-active:hover strong {
    background: #f25b48;
    border-color: #f25b48
}

.mobile-slider-navigation-item.swiper-slide.swiper-slide-active strong {
    background: #f25b48;
    border-color: #f25b48
}

.mobile-slider-navigation-item.swiper-slide.swiper-slide-active i {
    opacity: 1
}

.mobile-slider-navigation-item.swiper-slide:last-child:after {
    display: none
}

.mobile-slider-navigation-item.swiper-slide:after {
    content: '';
    width: 8px;
    height: 1px;
    display: inline-block;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: -5px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-bottom: 1px solid #3d3d3d
}

.mobile-slider-navigation-item.swiper-slide strong {
    background: rgba(255,255,255,.2);
    border: 1px solid #1a1a1a;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: background 2s ease-out,border .4s ease-out,-webkit-transform 2s ease-out;
    transition: background 2s ease-out,border .4s ease-out,-webkit-transform 2s ease-out;
    -o-transition: background 2s ease-out,border .4s ease-out,transform 2s ease-out;
    transition: background 2s ease-out,border .4s ease-out,transform 2s ease-out;
    transition: background 2s ease-out,border .4s ease-out,transform 2s ease-out,-webkit-transform 2s ease-out
}

.mobile-slider-navigation-item.swiper-slide i {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    top: -28px;
    display: inline-block;
    position: absolute;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0;
    font-weight: 700;
    -webkit-transition: opacity .4s ease-out;
    -o-transition: opacity .4s ease-out;
    transition: opacity .4s ease-out
}

.mobile-slider-navigation {
    width: 145px;
    margin: auto;
    position: relative
}

div#drag-4 {
    width: 50px;
    border-radius: 50%;
    height: 50px;
    -ms-touch-action: none;
    touch-action: none;
    background: url(../images/icons/drag.svg) no-repeat 9px center;
    border: 2px solid #fff;
    background-size: auto;
    color: transparent
}

.drag-container {
    width: 300px;
    margin-bottom: 50px;
    margin-top: 50px;
    -ms-touch-action: none;
    touch-action: none;
    position: relative;
    margin-left: auto;
    margin-right: auto
}

@media(min-width: 1025px) {
    .drag-container {
        display:none;
        margin-bottom: 0
    }
}

.dashed-border {
    position: absolute;
    top: 50%;
    height: 2px;
    width: 300px;
    left: 0;
    right: 0;
    margin: auto;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.dashed-border rect {
    fill: #303030
}

@media(max-width: 1024px) {
    .awards-slider-line {
        display:none
    }
}

.awards-slider-wrapper.drag-container {
    width: auto;
    z-index: 100;
    display: block;
    width: 4000px;
    height: 100vh;
    margin: 0
}

@media(max-width: 1024px) {
    .awards-slider-wrapper.drag-container {
        -ms-touch-action:auto;
        touch-action: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%
    }

    .awards-slider-wrapper.drag-container .awards-slider-slide {
        -ms-flex-item-align: center;
        align-self: center;
        -ms-flex-item-align: start;
        align-self: flex-start;
        padding-top: 13vw
    }

    .awards-slider-wrapper.drag-container .awards-slider-slide {
        width: 100%;
        overflow: hidden
    }
}

.swiper-container.awards-years-slide {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto
}

.awards-years-slider.swiper-container {
    height: 100vh
}

.awards-slider-slider-years {
    float: left;
    height: 100vh;
    position: relative;
    z-index: 2000
}

@media(min-width: 1025px) {
    .awards-slider-slider-years {
        min-height:800px;
        height: 800px
    }

    .awards-slider-slider-years .content-grid {
        min-height: 800px;
        height: 800px;
        width: auto;
        display: inline-block
    }

    .awards-slider-slider-years .content-grid .text-col {
        min-height: 800px;
        height: 800px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content
    }

    .awards-slider-slider-years .content-grid .text-col .awards-years-slider {
        height: 800px
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .awards-slider-slider-years .content-grid {
        min-height:900px;
        height: 900px
    }

    .awards-slider-slider-years .content-grid .text-col {
        min-height: 900px;
        height: 900px
    }

    .awards-slider-slider-years .content-grid .text-col .awards-years-slider {
        height: 900px
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .awards-slider-slider-years {
        min-height:900px!important;
        height: 900px
    }
}

@media(min-width: 1441px) {
    .awards-slider-slider-years {
        min-height:975px
    }

    .awards-slider-slider-years .content-grid {
        min-height: 975px
    }

    .awards-slider-slider-years .content-grid .text-col {
        min-height: 975px
    }

    .awards-slider-slider-years .content-grid .text-col .awards-years-slider {
        height: 975px
    }
}

@media(max-width: 1024px) {
    .awa-t1 {
        -webkit-transform:translateY(-18vw);
        -ms-transform: translateY(-18vw);
        transform: translateY(-18vw)
    }
}

.swiper-slide.awards-years-slide {
    text-align: center;
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width: 1024px) {
    .swiper-slide.awards-years-slide {
        height:100vh!important;
        min-height: 680px;
        z-index: 2;
        position: relative
    }
}

.awards-section-outer-container {
    width: 51.56vw;
    float: left
}

@media(max-width: 1024px) {
    .awards-section-outer-container {
        width:84vw;
        min-height: 640px
    }
}

@media(max-width: 1024px) {
    .drag-nav-prev {
        display:none
    }
}

@media(max-width: 1024px) {
    .drag-nav-next {
        display:none
    }
}

.awards-slider-text {
    padding: 0;
    height: 100vh;
    font-size: 18.85vw;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    float: left
}

@media(min-width: 1025px) {
    .awards-slider-text {
        height:800px
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .awards-slider-text {
        height:900px
    }
}

@media(min-width: 1441px) {
    .awards-slider-text {
        height:975px
    }
}

@media(max-width: 1024px) {
    .awards-slider-text {
        padding:0;
        height: 100%;
        font-size: 51.85vw;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        float: left;
        vertical-align: middle;
        width: 100vw!important;
        text-align: right;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-text {
        width:100vw!important
    }
}

.awards-slider-text .title.en {
    font-size: 18.85vw!important;
    color: #2d2d2d;
    opacity: 1;
    font-family: helvetica lt std bold,sans-serif
}

@media(max-width: 1024px) {
    .awards-slider-text .title.en {
        font-size:68vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-text .title.en {
        font-size:50vw!important
    }
}

.awards-years-slideÑ€-wrapper.swiper-wrapper {
    display: inline-block;
    width: auto
}

@media(max-width: 719px) {
    .awards-years-slideÑ€-wrapper.swiper-wrapper {
        width:100vw
    }
}

@media(max-width: 1024px) {
    .awards-years-slideÑ€-wrapper.swiper-wrapper {
        display:inline-block;
        width: 100vw;
        webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column
    }
}

.awards-years-slide-t-year {
    font-size: 18.85vw;
    color: #2d2d2d;
    opacity: 1;
    font-weight: 700;
    float: left;
    -webkit-transition: .45s color ease-out;
    -o-transition: .45s color ease-out;
    transition: .45s color ease-out;
    font-family: HelenPro,sans-serif;
    font-family: helvetica lt std bold,sans-serif
}

@media(max-width: 1024px) {
    .awards-years-slide-t-year {
        height:auto;
        text-align: left;
        float: none;
        font-size: 68vw;
        width: 100vw;
        margin-top: 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-years-slide-t-year {
        font-size:50vw
    }
}

.awards-years-slide-t-info {
    float: left
}

@media(max-width: 1024px) {
    .awards-years-slide-t-info {
        width:90vw;
        min-height: 58vw
    }
}

.awards-years-slide-t-txt {
    font-size: 18px
}

.awards-years-slide-text {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%
}

@media(max-width: 1024px) {
    .awards-years-slide-text {
        -webkit-box-align:start;
        -ms-flex-align: start;
        align-items: flex-start;
        width: 100vw;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        height: 100vh;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

.swiper-slide.awards-years-slide.swiper-slide-active .awards-years-slide-t-year {
    color: #ff5b46
}

.del-line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100vh;
    float: left;
    position: relative;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 4.69vw;
    margin-right: 4.69vw
}

@media(max-width: 1024px) {
    .del-line {
        margin-right:4.69vw;
        margin-left: 4.69vw;
        display: block
    }
}

@media(min-width: 1025px) {
    .del-line {
        height:800px
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .del-line {
        height:900px
    }
}

@media(min-width: 1441px) {
    .del-line {
        height:975px
    }
}

.del-line:before {
    content: '';
    width: 8vw;
    height: 1px;
    background: #313131
}

.awards-slider-slider-years .swiper-button-next {
    -webkit-transition: .5s all linear;
    -o-transition: .5s all linear;
    transition: .5s all linear;
    right: auto;
    left: 36.5%;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    top: 73%;
    background: url(../images/icons/next.svg) no-repeat center
}

@media(max-width: 1024px) {
    .awards-slider-slider-years .swiper-button-next {
        left:109vw;
        top: 89%;
        z-index: 10
    }
}

@media(min-width: 1024px) {
    .awards-slider-slider-years .swiper-button-next {
        left:23%
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .awards-slider-slider-years .swiper-button-next {
        left:48%;
        top: 64%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-slider-years .swiper-button-next {
        left:61%
    }
}

@media screen and (min-device-width: 1025px) and (max-device-width:1366px) {
    .awards-slider-slider-years .swiper-button-next {
        left:36%
    }
}

@media(min-width: 1025px) {
    .awards-slider-slider-years .swiper-button-next:hover {
        top:74%
    }
}

.awards-slider-slider-years .swiper-button-prev {
    -webkit-transition: .5s all linear;
    -o-transition: .5s all linear;
    transition: .5s all linear;
    left: 36.5%;
    right: auto;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    top: 24%;
    background: url(../images/icons/prev.svg) no-repeat center
}

@media(max-width: 1024px) {
    .awards-slider-slider-years .swiper-button-prev {
        left:109vw;
        -webkit-transform: translateY(0)!important;
        -ms-transform: translateY(0)!important;
        transform: translateY(0)!important;
        top: 7%;
        z-index: 10
    }
}

@media(min-width: 1024px) {
    .awards-slider-slider-years .swiper-button-prev {
        left:23%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .awards-slider-slider-years .swiper-button-prev {
        left:120vw
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .awards-slider-slider-years .swiper-button-prev {
        left:61%
    }
}

@media screen and (min-device-width: 1025px) and (max-device-width:1366px) {
    .awards-slider-slider-years .swiper-button-prev {
        left:36%
    }
}

@media(min-width: 1025px) {
    .awards-slider-slider-years .swiper-button-prev:hover {
        top:23%
    }
}

.awards-slider-slider-years .swiper-button-next,.awards-slider-slider-years .swiper-button-prev {
    width: 70px;
    height: 70px
}

.date {
    padding-bottom: 30px
}

.date time {
    line-height: 0
}

body.bg time .title.b {
    line-height: .9
}

@media(min-width: 720px) and (max-width:1024px) {
    .blog-section .col-d-t-50 {
        padding-right:25px;
        padding-bottom: 25px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

body.bg .title.t {
    font-family: helenProRegular
}

@media(max-width: 1024px) {
    .blog-section {
        overflow:hidden
    }

    .blog-section .swiper-wrapper {
        -ms-flex-wrap: inherit;
        flex-wrap: inherit;
        -webkit-perspective: 2000px;
        perspective: 2000px
    }

    .blog-section .swiper-container {
        overflow: visible
    }

    .blog-section .swiper-slide {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        -o-transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out,.6s -webkit-transform ease-in-out;
        position: relative
    }

    .blog-section .swiper-slide .title.day {
        font-size: 55px
    }

    .blog-section .swiper-slide .title.b {
        font-size: 50px
    }

    .blog-section .swiper-slide .about-mobile-arrows {
        position: absolute;
        top: 20px;
        left: -15px;
        right: -15px;
        display: none
    }

    .blog-section .swiper-slide:first-child .about-mobile-left-arrow {
        opacity: .3;
        -webkit-animation: none;
        animation: none
    }

    .blog-section .swiper-slide:last-child .about-mobile-right-arrow {
        opacity: .3;
        -webkit-animation: none;
        animation: none
    }

    .blog-section .swiper-slide .about-mobile-left-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        opacity: 0
    }

    .blog-section .swiper-slide .about-mobile-right-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        float: right;
        opacity: 0
    }

    .blog-section .swiper-slide-active {
        opacity: 1
    }

    .blog-section .swiper-slide-active .about-mobile-left-arrow {
        opacity: 1
    }

    .blog-section .swiper-slide-active .about-mobile-right-arrow {
        opacity: 1
    }

    .blog-section .title.t.c_b {
        padding: 40px 0
    }

    .blog-section .about-mobile-left-arrow {
        background-image: url(../images/icons/left-arrow-slider.svg)
    }

    .blog-section .about-mobile-right-arrow {
        background-image: url(../images/icons/right-arrow-slider.svg)
    }
}

@media(max-width: 1024px) and (max-width:719px) {
    .blog-section .swiper-slide {
        padding-left:25px!important
    }
}

@media(max-width: 1024px) and (min-width:720px) and (max-width:1024px) {
    .blog-section .swiper-slide .title.day {
        top:65px
    }
}

@media(max-width: 1024px) and (max-width:719px) {
    .blog-section .swiper-slide .text.n {
        font-size:12px
    }
}

@media(max-width: 1024px) and (max-width:719px) {
    .blog-section .swiper-slide .title.b {
        font-size:40px
    }
}

@media(max-width: 1024px) and (min-width:720px) and (max-width:1024px) {
    .blog-section .swiper-slide .about-mobile-arrows {
        top:32px
    }
}

@media(max-width: 1024px) and (max-width:719px) {
    .blog-section .swiper-slide .about-mobile-arrows {
        left:-15px;
        right: -15px
    }
}

.home-mobile-news-slide {
    color: #000
}

.home-mobile-news-slide .day {
    -webkit-transition: color .4s ease-out;
    -o-transition: color .4s ease-out;
    transition: color .4s ease-out;
    color: #ccc;
    opacity: 1!important
}

.home-mobile-news-slide:hover .day {
    color: #fe5b46
}

@media(min-width: 1025px) {
    .social-feed-slide {
        height:20vw;
        width: 20vw
    }
}

#social-feed-slider {
    padding-bottom: 8.33vw
}

#social-feed-slider.drag-nav {
    padding-bottom: 10.21vw;
    padding-top: 5.21vw
}

@media(max-width: 719px) {
    #social-feed-slider.drag-nav {
        padding-bottom:100px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #social-feed-slider.drag-nav {
        padding-bottom:10vw
    }
}

.social-feed-slide {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.social-feed-slide .bckg-overlay {
    margin: auto;
    -webkit-transition: -webkit-transform 1s ease-out;
    transition: -webkit-transform 1s ease-out;
    -o-transition: transform 1s ease-out;
    transition: transform 1s ease-out;
    transition: transform 1s ease-out,-webkit-transform 1s ease-out;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    will-change: transform;
    -webkit-box-shadow: 10px 15px 50px 0 #d5d5d5;
    box-shadow: 10px 15px 50px 0 #d5d5d5
}

.social-feed-slide .social-feed-slide-box {
    width: 100%;
    height: 100%;
    padding: 2.6vw
}

@media(max-width: 1440px) {
    .social-feed-slide .social-feed-slide-box {
        padding:0 2vw
    }
}

.social-feed-slide .social-feed-slide-inner-box {
    position: absolute;
    display: block;
    top: 2.6vw;
    bottom: 2.6vw;
    left: 2.6vw;
    right: 2.6vw;
    color: #000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

@media(max-width: 1440px) {
    .social-feed-slide .social-feed-slide-inner-box {
        top:2vw;
        bottom: 2vw;
        left: 2vw;
        right: 2vw;
        margin: auto
    }
}

@media(max-width: 719px) {
    .social-feed-slide .social-feed-slide-inner-box .text.m {
        font-size:12px;
        line-height: 1.5
    }

    .social-feed-slide .social-feed-slide-inner-box .social-icons.colorfull .social-icon {
        padding-left: 0!important;
        padding-top: 5px!important
    }
}

.social-feed-text {
    bottom: 15px;
    left: 40px;
    z-index: 2;
    color: #fff;
    font-size: 11px;
    letter-spacing: .5px;
    font-family: helvetica lt std roman,sans-serif
}

.social-feed-text.facebook:before {
    content: '';
    position: absolute;
    left: -25px;
    background: url(../images/icons/facebook_o.svg) no-repeat center 0;
    width: 13px;
    height: 15px;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.social-feed-text.instagram:before {
    content: '';
    position: absolute;
    left: -25px;
    background: url(../images/icons/pinterest_o.svg) no-repeat center 0;
    width: 13px;
    height: 15px;
    display: block;
    top: 67%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.social-feed-text.behance:before {
    content: '';
    position: absolute;
    left: -25px;
    background: url(../images/icons/behance_o.svg) no-repeat center 0;
    width: 17px;
    height: 10px;
    display: block;
    top: 57%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.social-feed-text.twitter:before {
    content: '';
    position: absolute;
    left: -25px;
    background: url(../images/icons/twitter_o.svg) no-repeat center 0;
    width: 18px;
    height: 15px;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

@media(min-width: 1025px) {
    .social-feed-slider-conatiner {
        -webkit-transform:translateX(-10%);
        -ms-transform: translateX(-10%);
        transform: translateX(-10%);
        overflow: visible
    }
}

span.find-us {
    font-size: 17px
}

@media(max-width: 719px) {
    span.find-us {
        display:none
    }
}

@media(max-width: 719px) {
    .social-feed-slide {
        width:69vw!important;
        height: 69vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .social-feed-slide {
        width:50vw!important;
        height: 50vw
    }
}

@media(min-width: 1025px) {
    .social-feed-slide {
        width:33.33vw!important;
        height: 33.33vw
    }
}

@media(min-width: 1281px) {
    .social-feed-slide {
        width:25vw!important;
        height: 25vw
    }
}

@media(min-width: 1661px) {
    .social-feed-slide {
        width:20vw!important;
        height: 20vw
    }
}

.blog-section {
    overflow: hidden
}

@media(min-width: 720px) and (max-width:1024px) {
    .blog-section .col-t-50 {
        padding-right:5%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .social-feed-slide .social-feed-slide-box {
        padding:25px
    }
}

@media(min-width: 1025px) {
    body.bg .social-feed-slide-box .title.b {
        font-size:3.23vw
    }
}

@media(min-width: 1920px) {
    body.bg .social-feed-slide-box .title.b {
        font-size:62px
    }
}

@media(max-width: 719px) {
    .social-feed-slide .social-feed-slide-inner-box {
        left:25px;
        right: 25px;
        top: 25px;
        bottom: 25px
    }
}

@media(min-width: 1025px) {
    .social-feed-slide .social-feed-slide-inner-box.text {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

@media(max-width: 719px) {
    .social-feed-slide .social-feed-slide-inner-box.text {
        left:25px;
        right: 25px;
        top: 50%;
        bottom: inherit;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .social-feed-slide .social-feed-slide-inner-box.text {
        top:50%;
        bottom: inherit;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

.soc-box {
    cursor: default!important
}

.social-feed-slider-conatiner.swiper-container {
    cursor: default!important
}

.social-feed-slide .casestudy-link-box-txt {
    position: absolute;
    bottom: 0;
    left: 2.6vw;
    font-size: 14px
}

@media(max-width: 1440px) {
    .social-feed-slide .casestudy-link-box-txt {
        bottom:-2px;
        left: 2.1vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .social-feed-slide .casestudy-link-box-txt {
        bottom:-20px;
        left: 2.1vw
    }
}

@media(max-width: 719px) {
    .social-feed-slide .casestudy-link-box-txt {
        font-size:12px;
        left: 25px;
        bottom: 0
    }
}

#social-feed-slider.drag-nav .social-feed-slider-conatiner {
    overflow: visible
}

#social-feed-slider.drag-nav .social-feed-slider-conatiner .social-feed-slide .bckg-overlay {
    background-size: cover;
    -webkit-box-shadow: 10px 15px 50px 0 #d5d5d5;
    box-shadow: 10px 15px 50px 0 #d5d5d5
}

#social-feed-slider.drag-nav .social-feed-slider-conatiner .title.m.s {
    padding-bottom: 1.56vw;
    line-height: 1
}

@media(max-width: 1440px) {
    #social-feed-slider.drag-nav .social-feed-slider-conatiner .title.m.s {
        padding-top:1.56vw
    }
}

@media(max-width: 719px) {
    #social-feed-slider.drag-nav .social-feed-slider-conatiner .title.m.s {
        padding-bottom:3vw
    }
}

#social-feed-slider.drag-nav .social-feed-slider-conatiner .text.m._s {
    padding-bottom: .63vw
}

@media(max-width: 1800px) {
    #social-feed-slider.drag-nav .social-feed-slider-conatiner .text.m._s .text.n {
        font-size:13px
    }
}

@media(max-width: 719px) {
    #social-feed-slider.drag-nav .social-feed-slider-conatiner .text.m._s {
        padding-bottom:3vw
    }
}

#social-feed-slider.drag-nav .social-feed-slider-conatiner .btn-box.mt {
    margin-top: .78vw
}

@media(max-width: 719px) {
    #social-feed-slider.drag-nav .social-feed-slider-conatiner .btn-box.mt .btn {
        padding:11px 20px
    }
}

body.bg #social-feed-slider.drag-nav .social-feed-slider-conatiner .title.m.s {
    padding-bottom: 15px
}

.contact-section {
    overflow: hidden
}

.contact-section .content-offset {
    height: auto
}

@media(min-width: 1025px) {
    .contact-section .content-offset {
        height:100%
    }
}

.contact-section .section-tools {
    opacity: 1
}

@media(max-width: 1024px) {
    .contact-section .section-tools {
        display:none
    }

    .contact-section .section-tools .description-msg {
        opacity: 0
    }
}

@media(min-width: 1025px) {
    .contact-section .section-tools {
        width:auto;
        top: 0;
        right: 4.79vw;
        left: 4.79vw
    }
}

.contact-section .section-tools .text.m {
    padding-right: 0
}

@media(max-width: 1024px) {
    .content-info-box {
        padding-bottom:25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .content-info-box {
        padding-right:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .content-info-box {
        padding-right:0
    }
}

@media(max-width: 1400px) {
    .contact-info {
        padding-top:30px
    }
}

.contact-info .t1 {
    opacity: .2;
    color: #fff;
    font-size: 12px;
    line-height: 2;
    max-width: 85%;
    display: inherit;
    letter-spacing: 1px
}

.contact-info .t1.op_0 {
    opacity: 0
}

@media(max-width: 1024px) {
    .contact-info .t1 {
        max-width:100%
    }
}

.contact-info .t1 a {
    color: #fff
}

.contact-info .t2 {
    padding: 38px 0;
    font-size: 18px;
    padding-left: 39px;
    letter-spacing: 1px;
    position: relative;
    opacity: 1
}

.contact-info .t2.op_0 {
    opacity: 0
}

@media(max-width: 1024px) {
    .contact-info .t2 {
        display:inline-block
    }
}

.contact-info .t2:before {
    content: '';
    left: 10px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: url(../images/icons/phone.svg);
    width: 14px;
    height: 14px;
    display: block;
    position: absolute;
    opacity: .5
}

.contact-info .t2 a {
    color: #fff
}

.contact-info .t3 {
    opacity: .2;
    color: #fff;
    font-size: 14px;
    line-height: 2;
    max-width: 85%;
    display: inherit;
    letter-spacing: 1px;
    display: inline-block;
    position: relative
}

.contact-info .t3.op_0 {
    opacity: 0
}

.contact-info .t3:hover:after {
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -ms-transform-origin: center right;
    transform-origin: center right;
    -webkit-transform-origin: center right
}

.contact-info .t3:after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    -webkit-transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    -o-transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
    -webkit-transition: 1s transform cubic-bezier(.19,1,.22,1);
    -ms-transform-origin: center left;
    transform-origin: center left;
    -webkit-transform-origin: center left;
    width: 100%;
    height: 1px;
    background-color: #fff;
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform: scaleX(1)
}

.contact-info .t3 a {
    color: #fff
}

.contact-info .t4 {
    color: #d14c3c;
    padding-top: 30px;
    font-size: 10px;
    opacity: .7;
    letter-spacing: .5px
}

.contact-info .t4.op_0 {
    opacity: 0
}

.contact-info a {
    color: #d14c3c
}

.contact-graphic {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    opacity: .67
}

@media(max-width: 719px) {
    .contact-graphic {
        left:0;
        right: 0;
        margin: auto;
        width: 200%;
        top: 64%;
        -webkit-transform: translateY(-50%) translateX(-33%);
        -ms-transform: translateY(-50%) translateX(-33%);
        transform: translateY(-50%) translateX(-33%)
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .contact-graphic {
        left:0;
        right: 0;
        margin: auto;
        -webkit-transform: translateY(-50%) translateX(-16%);
        -ms-transform: translateY(-50%) translateX(-16%);
        transform: translateY(-50%) translateX(-16%);
        width: 200%;
        top: 64%
    }
}

@media(max-width: 719px) {
    .contact-info .content-info-box {
        padding-bottom:70px
    }

    .contact-info .content-info-box .title.n {
        padding-bottom: 5px
    }

    .contact-info .content-info-box .t1 {
        opacity: .5!important
    }

    .contact-info .content-info-box .t2 {
        padding-top: 20px;
        padding-bottom: 20px
    }

    .contact-info .content-info-box .t4 {
        padding-top: 5px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .about-us .col-t-50 {
        padding-right:5%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.heart {
    width: 80px;
    height: 68px;
    position: relative;
    display: inline-block
}

@media(max-width: 719px) {
    .heart {
        width:50px;
        height: 49px
    }
}

@media(max-width: 719px) {
    body.bg .heart {
        width:45px
    }
}

.home-mobile-services-container .swiper-wrapper {
    -ms-flex-wrap: nowrap!important;
    flex-wrap: nowrap!important
}

@media(max-width: 1024px) {
    .home-mobile-services-wrapper .text-col-title-vertical.vTextLR {
        position:absolute;
        top: 0;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-73px) rotate(-180deg);
        -ms-transform: translateX(-50%) translateY(-73px) rotate(-180deg);
        transform: translateX(-50%) translateY(-73px) rotate(-180deg)
    }

    .home-mobile-services-wrapper .anim-serv-txt {
        padding-top: 111px
    }
}

@media(max-width: 1024px) {
    body.bg .about-us .home-mobile-services-container .swiper-slide .text-col-title-vertical .text-col-title-vertical {
        -webkit-transform:translateX(-50%) translateY(-38%) rotate(-180deg);
        -ms-transform: translateX(-50%) translateY(-38%) rotate(-180deg);
        transform: translateX(-50%) translateY(-38%) rotate(-180deg)
    }
}

@media(max-width: 719px) {
    body.bg .about-us .home-mobile-services-container .swiper-slide .text-col-title-vertical {
        text-align:initial;
        min-height: 300px
    }
}

@media(max-width: 1024px) {
    .about-us .home-mobile-services-container {
        overflow:hidden
    }

    .about-us .home-mobile-services-container .text-col-title-vertical {
        min-height: 215px
    }

    .about-us .home-mobile-services-container .swiper-wrapper {
        -ms-flex-wrap: inherit;
        flex-wrap: inherit;
        -webkit-perspective: 2000px;
        perspective: 2000px;
        padding-top: 100px
    }

    .about-us .home-mobile-services-container .swiper-container {
        overflow: visible
    }

    .about-us .home-mobile-services-container .swiper-slide {
        padding-left: 4.79vw!important;
        padding-right: 4.79vw!important;
        opacity: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        -o-transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out,.6s -webkit-transform ease-in-out;
        position: relative
    }

    .about-us .home-mobile-services-container .swiper-slide .title.day {
        font-size: 55px
    }

    .about-us .home-mobile-services-container .swiper-slide .title.b {
        font-size: 50px
    }

    .about-us .home-mobile-services-container .swiper-slide .about-mobile-arrows {
        position: absolute;
        top: 20px;
        left: 30px;
        right: 30px
    }

    .about-us .home-mobile-services-container .swiper-slide .about-mobile-left-arrow {
        left: 0;
        float: left
    }

    .about-us .home-mobile-services-container .swiper-slide:first-child .about-mobile-left-arrow {
        opacity: .3;
        left: 0;
        float: left;
        -webkit-animation: none;
        animation: none
    }

    .about-us .home-mobile-services-container .swiper-slide:last-child .about-mobile-left-arrow {
        opacity: 1
    }

    .about-us .home-mobile-services-container .swiper-slide:last-child .about-mobile-right-arrow {
        opacity: .3;
        -webkit-animation: none;
        animation: none
    }

    .about-us .home-mobile-services-container .swiper-slide .about-mobile-left-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        opacity: 0;
        -webkit-animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1)
    }

    .about-us .home-mobile-services-container .swiper-slide .about-mobile-right-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        float: right;
        opacity: 0;
        -webkit-animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1)
    }

    .about-us .home-mobile-services-container .swiper-slide-active {
        opacity: 1
    }

    .about-us .home-mobile-services-container .swiper-slide-active .about-mobile-left-arrow {
        opacity: 1
    }

    .about-us .home-mobile-services-container .swiper-slide-active .about-mobile-right-arrow {
        opacity: 1
    }

    .about-us .home-mobile-services-container .title.t.c_b {
        padding: 40px 0
    }

    .about-us .home-mobile-services-container .about-mobile-left-arrow {
        background-image: url(../images/icons/left-arrow-slider.svg)
    }

    .about-us .home-mobile-services-container .about-mobile-right-arrow {
        background-image: url(../images/icons/right-arrow-slider.svg)
    }
}

@media(max-width: 1024px) and (max-width:1024px) {
    .about-us .home-mobile-services-container .swiper-slide {
        -webkit-box-align:start;
        -ms-flex-align: start;
        align-items: flex-start
    }

    .about-us .home-mobile-services-container .swiper-slide .text-col-title-vertical {
        min-height: 240px;
        -webkit-transform: translateX(-50%) translateY(-44%) rotate(-180deg);
        -ms-transform: translateX(-50%) translateY(-44%) rotate(-180deg);
        transform: translateX(-50%) translateY(-44%) rotate(-180deg)
    }

    .about-us .home-mobile-services-container .swiper-slide .anim-serv-txt {
        padding-top: 140px
    }
}

@media(max-width: 1024px) and (min-width:720px) and (max-width:1024px) {
    .about-us .home-mobile-services-container .swiper-slide .title.day {
        top:65px
    }
}

@media(max-width: 1024px) and (min-width:720px) and (max-width:1024px) {
    .about-us .home-mobile-services-container .swiper-slide .about-mobile-arrows {
        top:32px
    }
}

@media(max-width: 719px) {
    .about-us .home-mobile-services-container .text-col-img img {
        max-width:140%;
        -webkit-transform: translateX(-20%);
        -ms-transform: translateX(-20%);
        transform: translateX(-20%)
    }

    .about-us .home-mobile-services-container .home-mobile-services-wrapper {
        margin-left: -25px
    }

    .about-us .home-mobile-services-container .swiper-slide {
        padding-left: 50px!important;
        padding-right: 0!important;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .about-us .home-mobile-services-container .swiper-slide .text {
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 1024px) {
    body.bg .swiper-slide .anim-serv-txt {
        padding-top:200px
    }

    body.bg .about-us .home-mobile-services-container .swiper-slide .anim-serv-txt {
        padding-top: 200px
    }
}

@media(max-width: 1024px) {
    .home-mobile-news-slide.swiper-slide {
        display:block;
        padding-top: 20px
    }
}

.facts-slider {
    width: 100%;
    height: 100%
}

@media(min-width: 720px) and (max-width:1024px) {
    #section-team.section-team-home.section-team .title.b {
        font-size:50px!important
    }
}

@media(max-width: 719px) {
    .section-team-home.section-team .content-offset {
        width:100vw
    }
}

@-webkit-keyframes swipeYM {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes swipeYM {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes swipeY {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes swipeY {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

.ballon-team-member-1 {
    position: absolute;
    font-size: 12px;
    padding: 15px 19px;
    top: 5.21vw;
    right: 38.28vw;
    border-radius: 50px;
    z-index: 2
}

@media(max-width: 1024px) {
    .ballon-team-member-1 {
        display:none
    }
}

.ballon-team-member-1:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    background-image: url(../images/icons/ballon-team-member.png);
    background-repeat: no-repeat;
    height: 100%;
    top: 3px;
    background-size: auto
}

.ballon-team-member-1:after {
    content: '';
    display: block;
    position: absolute;
    right: 31px;
    width: 11px;
    height: 11px;
    background: #fff;
    border-radius: 50%;
    opacity: .3;
    top: 54px
}

.ballon-team-member-1 i {
    opacity: .5;
    padding-left: 8px
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    #hero-slider {
        min-height:0
    }
}

.home-slider {
    overflow: hidden;
    max-height: 100vh
}

@media(max-width: 1024px) {
    .home-slider {
        min-height:100vh
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .home-slider {
        max-height:100%
    }

    .home-slider.m100vh {
        min-height: 0
    }
}

@media(max-width: 1024px) {
    .home-slider .home-slider-box-outer {
        min-height:100vh
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .home-slider .home-slider-box-outer.m100vh {
        min-height:0
    }
}

@media(max-width: 1024px) {
    .home-slider .home-slider-box-inner {
        min-height:100vh
    }

    .home-slider .home-slider-box-inner .section-wrap {
        min-height: 100%
    }

    .home-slider .home-slider-box-inner .section-offset {
        height: 100vh;
        -webkit-box-align: baseline;
        -ms-flex-align: baseline;
        align-items: baseline;
        width: 89%;
        margin-left: 6%;
        padding-top: 20vh;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .home-slider .home-slider-box-inner .section-offset {
        width:90%;
        margin-left: 5%
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .home-slider .home-slider-box-inner.m100vh {
        min-height:700px
    }
}

@media(max-width: 1024px) {
    .home-slider #hero-slider {
        min-height:100vh
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .home-slider #hero-slider {
        min-height:700px
    }
}

@media(max-width: 1024px) {
    .home-slider .hero-slide {
        min-height:100vh
    }

    .home-slider .hero-slide img {
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-width: none;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        -o-object-position: right;
        object-position: right
    }
}

.home-slider.case-study-hero-slider .hero-slider-bckg {
    background-position: center 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

.home-slider.case-study-hero-slider .slider-title {
    font-weight: 700
}

@media(min-width: 480px) and (max-width:1024px) {
    .home-slider.case-study-hero-slider .slider-title {
        font-size:50px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .home-slider.case-study-hero-slider .slider-title {
        font-size:60px!important
    }
}

.home-slider.case-study-hero-slider .slider-txt {
    color: #fff;
    position: relative;
    padding-top: 2.08vw;
    padding-bottom: 2.08vw
}

.home-slider.case-study-hero-slider .slider-txt.c_b {
    color: #000
}

@media(max-width: 719px) {
    .home-slider.case-study-hero-slider .slider-txt {
        padding-top:20px;
        padding-bottom: 20px
    }
}

.hero-slide img {
    max-width: 100%
}

.bckg-blue {
    background-color: #61bcd6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

.facts-slider-num {
    font-size: 0!important
}

.facts-slider-num .awards-c {
    font-size: 13.18vw
}

@media(max-width: 1024px) {
    .facts-slider-num .awards-c {
        font-size:120px
    }
}

.facts-slider-num sup {
    display: inline-block;
    letter-spacing: 0;
    font-size: 120px!important;
    -webkit-transform: translateY(-120px) translateX(-10px);
    -ms-transform: translateY(-120px) translateX(-10px);
    transform: translateY(-120px) translateX(-10px)
}

@media(max-width: 1440px) {
    .facts-slider-num sup {
        font-size:80px!important;
        -webkit-transform: translateY(-80px) translateX(-10px);
        -ms-transform: translateY(-80px) translateX(-10px);
        transform: translateY(-80px) translateX(-10px)
    }
}

@media(max-width: 1024px) {
    .facts-slider-num sup {
        -webkit-transform:translateY(-31px) translateX(-1px);
        -ms-transform: translateY(-31px) translateX(-1px);
        transform: translateY(-31px) translateX(-1px);
        font-size: 49px!important
    }
}

@media(max-width: 719px) {
    .facts-slider-num sup {
        -webkit-transform:translateY(-67px) translateX(10px);
        -ms-transform: translateY(-67px) translateX(10px);
        transform: translateY(-67px) translateX(10px);
        font-size: 30px!important
    }
}

.bckg-gr {
    background-color: #bfbab8;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

.bckg-red {
    background-color: #ea9596;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

.home-slider-item-box {
    height: 100%
}

.home-slider-item-box {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%
}

#hero-slider #controllsSlider {
    position: absolute;
    bottom: 3.91vw;
    left: 12.55vw;
    width: auto;
    right: inherit;
    z-index: 2
}

@media(max-width: 1024px) {
    #hero-slider #controllsSlider {
        -webkit-transform:rotate(90deg) translateX(-100%);
        -ms-transform: rotate(90deg) translateX(-100%);
        transform: rotate(90deg) translateX(-100%);
        -webkit-transform-origin: bottom left;
        -ms-transform-origin: bottom left;
        transform-origin: bottom left;
        left: 25px;
        bottom: 30px
    }
}

.casestudy-inner-page-bckg.casestudy-inner-page {
    background-size: cover;
    background-position: 100% 70%
}

.casestudy-inner-page-bckg.casestudy-inner-page.opticlasa {
    background-position: 100% 50%
}

.casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .content-offset {
    padding: 4.79vw 4.64vw 4.79vw 4.79vw
}

@media(max-width: 719px) {
    .casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .content-offset {
        padding:0;
        padding-top: 25px;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .content-offset {
        padding:4.79vw 4.64vw 4.79vw 4.79vw
    }
}

.casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .title.en {
    padding-bottom: 3.13vw
}

.casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .text {
    max-width: 600px
}

.casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .casestudy-box {
    max-width: 100%
}

.casestudy-inner-page-bckg.casestudy-inner-page.casestudy-inner-page-bckg-bigger .casestudy-box-text {
    max-width: 100%
}

.casestudy-inner-page-bckg.casestudy-inner-page .content-offset {
    padding-bottom: 0;
    padding-top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudies-box {
    width: 100%
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text.c_g {
    color: #fff;
    padding-bottom: 0
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text.c_g p:last-child {
    padding-bottom: 0
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text {
    max-width: 520px
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text.wider {
    max-width: 540px
}

.casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text .sub_titile.thinner {
    color: #fff
}

body.bg .casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text.wider {
    max-width: 100%
}

#hero-slider #controllsSlider .btn.selected {
    border: 1px solid rgba(255,255,255,.50196078)
}

#hero-slider #controllsSlider .btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid transparent;
    background-color: transparent;
    width: 37.5px;
    height: 37.5px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: opacity .5s ease-out,-webkit-transform .5s ease-out;
    transition: opacity .5s ease-out,-webkit-transform .5s ease-out;
    -o-transition: opacity .5s ease-out,transform .5s ease-out;
    transition: opacity .5s ease-out,transform .5s ease-out;
    transition: opacity .5s ease-out,transform .5s ease-out,-webkit-transform .5s ease-out;
    opacity: 1;
    position: relative;
    padding: 0
}

#hero-slider #controllsSlider .btn:hover .point {
    opacity: .6;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2)
}

#hero-slider #controllsSlider .btn .point {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    margin: auto;
    opacity: .3;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
    transition: opacity .5s ease-out
}

#hero-slider #controllsSlider .btn .draw-circle-svg {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(-80deg);
    -ms-transform: translateX(-50%) rotate(-80deg);
    transform: translateX(-50%) rotate(-80deg)
}

#hero-slider #controllsSlider .btn circle {
    stroke-width: 6px;
    stroke: #fff;
    stroke-dasharray: 628.3185307179587;
    stroke-dashoffset: 628.3185307179587;
    -webkit-animation: inherit;
    animation: inherit;
    opacity: 0
}

.translate-arrow {
    display: inline-block;
    margin-left: 23px
}

.translate-arrow img {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: arrow-scroll-less 10s ease infinite;
    animation: arrow-scroll-less 10s ease infinite
}

@-webkit-keyframes arrow-scroll-less {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    66% {
        -webkit-transform: translateX(40px);
        transform: translateX(40px)
    }

    99% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes arrow-scroll-less {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    66% {
        -webkit-transform: translateX(40px);
        transform: translateX(40px)
    }

    99% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

.hero-slider-video {
    max-width: none;
    height: auto;
    width: auto;
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 0;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
    max-width: 150%;
    -o-object-fit: cover;
    object-fit: cover;
    width: 103%;
    height: 100%;
    opacity: 0
}

@media(min-width: 720px) and (max-width:1024px) {
    .hero-slider-video {
        -o-object-position:center 100%;
        object-position: center 100%
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .hero-slider-video {
        -o-object-position:100% 100%;
        object-position: 100% 100%
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .hero-slider-video {
        -o-object-position:100% center;
        object-position: 100% center
    }
}

@media only screen and (orientation: landscape) {
    .hero-slider-video {
        -webkit-transform:translateY(-50%) translateX(0);
        -ms-transform: translateY(-50%) translateX(0);
        transform: translateY(-50%) translateX(0)
    }
}

.home-slider-item-box:nth-child(2) .word5:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 7px;
    left: 0;
    height: 4px;
    background: #fff;
    width: 0%;
    margin: auto;
    -webkit-transition: width .2s cubic-bezier(.25,.46,.45,.94);
    -o-transition: width .2s cubic-bezier(.25,.46,.45,.94);
    transition: width .2s cubic-bezier(.25,.46,.45,.94)
}

@media(max-width: 1024px) {
    .home-slider-item-box:nth-child(2) .word5:before {
        bottom:0
    }
}

.home-slider-item-box.anim .word:before {
    width: 100%
}

.home-slider-bckg-img.m {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center 73%;
    opacity: 0
}

@media(max-width: 719px) {
    .home-slider-bckg-img.m {
        background-position:100% center
    }
}

.home-slider-bckg-img.m.frost {
    -webkit-transform: translateY(-65px) translateX(60px);
    -ms-transform: translateY(-65px) translateX(60px);
    transform: translateY(-65px) translateX(60px)
}

@media(max-width: 1024px) {
    .home-slider-bckg-img.m.diecrew {
        background-position:-137% 7%;
        -webkit-transform: scale(1.2);
        -ms-transform: scale(1.2);
        transform: scale(1.2)
    }
}

.hero-slider-img {
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center 100%;
    opacity: 0
}

.hero-slider-img.middle {
    background-position: 100% 31%
}

.anim-awards-sub-t.op_0 {
    opacity: 0
}

#hero-slider #controllsSlider .btn .draw-circle-svg {
    opacity: 0
}

#hero-slider #controllsSlider .homeSliderBtn-box.selected .btn .draw-circle-svg {
    opacity: 1
}

.homeSliderBtn-box {
    position: relative;
    display: inline-block
}

.homeSliderBtn-box.selected:after {
    content: '';
    display: inline-block;
    border: 1px solid rgba(255,255,255,.36);
    background-color: transparent;
    width: 36.5px;
    height: 36.5px;
    border-radius: 50%;
    top: -1px;
    left: -1px;
    position: absolute
}

@media(min-width: 1025px) {
    .homeSliderBtn-box {
        margin-right:40px
    }
}

.casestudy-box img {
    max-width: 100%
}

.casestudy-box img.mw70 {
    max-width: 70%
}

.case-study-slider {
    width: 100%;
    height: 100%
}

.facts-slider .swiper-slide {
    width: 200px;
    padding-right: 50px
}

@media(max-width: 1024px) {
    .facts-slider .swiper-slide {
        padding-right:100px
    }
}

@media(max-width: 719px) {
    .facts-slider .swiper-slide {
        padding-right:25px;
        width: 240px
    }
}

@media(min-width: 1025px) and (max-width:1366px) {
    .facts-slider .swiper-slide {
        width:350px;
        padding-right: 50px
    }
}

.casestudies-col.align-self {
    -ms-flex-item-align: start;
    align-self: flex-start
}

.fast-facts-section {
    background: #efefef
}

.fast-facts-section .facts-slider-title {
    font-size: 72px;
    color: #000;
    font-size: 3.75vw;
    font-weight: 700
}

@media(min-width: 1920px) {
    .fast-facts-section .facts-slider-title {
        font-size:72px
    }
}

@media(max-width: 1024px) {
    .fast-facts-section .facts-slider-title {
        font-size:11.75vw;
        margin-bottom: 30px
    }
}

.fast-facts-section .facts-slider {
    overflow: visible;
    cursor: e-resize!important
}

.fast-facts-section .facts-slider .swiper-slide .facts-slider-slide-box {
    padding: 6.25vw 0
}

.fast-facts-section .facts-slider .swiper-slide:nth-child(even) .facts-slider-num {
    color: #000
}

.fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
    color: #ff4723;
    font-weight: 700;
    letter-spacing: 5px;
    line-height: 1.11;
    font-family: HelveticaLTStd-Bold,sans-serif
}

.fast-facts-section .facts-slider .swiper-slide .facts-slider-num sup {
    font-size: 60%
}

@media(max-width: 1024px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
        font-size:47px;
        letter-spacing: 0;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
        font-size:85px;
        letter-spacing: 3px
    }
}

@media(max-width: 719px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
        padding-bottom:0
    }
}

@media(min-width: 1025px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
        font-size:6.25vw
    }
}

@media(min-width: 1920px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-num {
        font-size:120px
    }
}

.fast-facts-section .facts-slider .swiper-slide .facts-slider-text {
    font-size: 24px;
    color: #272727
}

@media(max-width: 1024px) {
    .fast-facts-section .facts-slider .swiper-slide .facts-slider-text {
        font-size:18px
    }
}

@media(max-width: 1024px) {
    .fast-facts-section .section-offset {
        padding:0
    }

    .fast-facts-section .section-offset .facts-slider-box {
        width: 100%;
        overflow: hidden
    }

    .fast-facts-section .section-offset .facts-slider-box .facts-slider-title {
        padding: 50px 25px;
        margin-bottom: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .fast-facts-section .section-offset .facts-slider-box .facts-slider-outer-box {
        padding: 50px 25px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;
        overflow-x: scroll;
        padding-top: 0
    }
}

@media(max-width: 719px) {
    .fast-facts-section .section-offset .facts-slider-box .facts-slider-title {
        padding-left:50px!important;
        padding-right: 50px!important
    }

    .fast-facts-section .section-offset .facts-slider-box .facts-slider-outer-box {
        padding-left: 50px!important;
        padding-right: 0!important
    }
}

@media(max-width: 1024px) {
    .homepage-hero-slider {
        -webkit-box-sizing:border-box;
        box-sizing: border-box
    }

    .homepage-hero-slider .home-slider-box-inner .section-offset.flexVertical {
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy {
        min-height:100vh
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy .bckg-overlay {
        background-position:20% 100%
    }

    .highlighted-casestudy .bckg-overlay:before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: '';
        background: #000;
        opacity: .2
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy .section-wrap {
        min-height:100vh
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy .section-wrap-outer {
        min-height:100vh
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .highlighted-casestudy .section-wrap-outer {
        padding:25px
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy .section-wrap-inner {
        min-height:100vh
    }
}

@media(max-width: 1024px) {
    .highlighted-casestudy .highlighted-casestudy-text {
        padding-top:110px
    }
}

@media(max-width: 1024px) {
    .casestudies-grid-project .casestudies-col {
        padding:25px 0 0
    }

    .casestudies-grid-project .casestudies-col.pt0 {
        padding-top: 0
    }
}

.case-study-slider-img-box {
    -webkit-filter: drop-shadow(0 11px 21px rgba(115,115,115,.54));
    filter: drop-shadow(0 11px 21px rgba(115,115,115,.54))
}

.case-study-slider-img-box img {
    max-width: 100%
}

.highlighted-casestudy-tools {
    position: absolute;
    top: 60px
}

.description-msg {
    opacity: .8;
    color: #fff
}

.casestudy-inner-page-bckg .section-offset {
    -ms-flex-line-pack: center;
    align-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.case-study-slider-img-box-outer {
    position: relative;
    text-align: left;
    padding-top: 55px
}

.case-study-slider-img-box-outer .case-study-slider-img-box {
    position: relative;
    display: inline-block
}

@media(max-width: 1024px) {
    .casestudy-inner-page-bckg.casestudy-inner-page {
        position:relative;
        background-position: 50% 70%
    }

    .casestudy-inner-page-bckg.casestudy-inner-page:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0
    }

    .casestudy-inner-page-bckg.casestudy-inner-page.vereia-bckg {
        background-position: 0 70%
    }
}

.description-icon {
    opacity: .3
}

.description-icon .stroke {
    stroke: #fff
}

.description-icon .arrow {
    fill: #fff
}

.description-icon.dark .stroke {
    stroke: #000
}

.description-icon.dark .arrow {
    fill: #000
}

.description-icon {
    display: inline-block;
    -webkit-transform: translateY(14px);
    -ms-transform: translateY(14px);
    transform: translateY(14px)
}

.highlighted-casestudy-text {
    padding-top: 4.74vw
}

.highlighted-casestudy-text .casestudy-text {
    max-width: 500px;
    width: 80%
}

.highlighted-casestudy-awards {
    padding-top: 10.83vw
}

.highlighted-casestudy-awards .text {
    padding-bottom: 25px
}

.awards-box {
    padding: 25px 0 0
}

@media(max-width: 1024px) {
    .awards-box a,.awards-box span {
        margin-right:20px;
        width: 79px;
        height: 50px
    }

    .awards-box a img,.awards-box span img {
        width: 100%;
        height: 100%;
        -o-object-fit: contain;
        object-fit: contain;
        -o-object-position: center;
        object-position: center
    }
}

.awards-box a,.awards-box span {
    display: inline-block;
    vertical-align: middle;
    margin-right: 2.6vw
}

.casestudies-box {
    max-width: 1728px;
    margin: auto
}

.casestudies-box.full {
    max-width: 100%
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-box .content-grid:nth-child(even) {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .casestudies-box .content-grid:nth-child(odd) {
        padding: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .casestudies-box.mobile-offset {
        padding:0 25px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.casestudies-box .text-col {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end
}

.casestudies-box .text-col.ac {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-home .casestudies-box .content-grid:nth-child(even) {
        padding:0;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .casestudy-home .casestudies-box .text-col {
        padding-bottom:0
    }
}

@media(min-width: 1025px) {
    .casestudies-col:nth-child(odd) .pull {
        float:right;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: right
    }

    .casestudies-col:nth-child(odd) .pull.left {
        float: left;
        text-align: left
    }

    .casestudies-col:nth-child(even) .pull {
        float: left;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: left
    }
}

@media(max-width: 1024px) {
    .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col:nth-child(odd) {
        -webkit-box-ordinal-group:3;
        -ms-flex-order: 2;
        order: 2
    }

    .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col:nth-child(even) {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col.mobOrder_1 {
        -webkit-box-ordinal-group: 2!important;
        -ms-flex-order: 1!important;
        order: 1!important
    }

    .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col.mobOrder_2 {
        -webkit-box-ordinal-group: 3!important;
        -ms-flex-order: 2!important;
        order: 2!important
    }

    .casestudies-grid .casestudies-grid-project.forbid-flip:nth-child(odd) .casestudies-col:nth-child(odd) {
        -webkit-box-ordinal-group: inherit;
        -ms-flex-order: inherit;
        order: inherit
    }

    .casestudies-grid .casestudies-grid-project.forbid-flip:nth-child(odd) .casestudies-col:nth-child(even) {
        -webkit-box-ordinal-group: inherit;
        -ms-flex-order: inherit;
        order: inherit
    }

    .casestudies-grid .casestudies-grid-project.text-col {
        padding: 4.6vw 0
    }

    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(odd) {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(even) {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(odd) {
        padding-right:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(odd).sw {
        padding-right: 0;
        padding-left: 25px
    }

    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(even) {
        padding-left: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(even).sw {
        padding-left: 0;
        padding-right: 25px
    }
}

.casestudy-3-col.casestudy-inner-page .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col:nth-child(odd) {
    -webkit-box-ordinal-group: inherit;
    -ms-flex-order: inherit;
    order: inherit
}

.casestudy-3-col.casestudy-inner-page .casestudies-grid .casestudies-grid-project:nth-child(odd) .casestudies-col:nth-child(even) {
    -webkit-box-ordinal-group: inherit;
    -ms-flex-order: inherit;
    order: inherit
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-grid-project {
        -webkit-box-align:center;
        -ms-flex-align: center;
        align-items: center
    }
}

@media(min-width: 1025px) {
    .casestudies-grid-project.text-col {
        padding:0!important;
        padding: 10.42vw 0 0!important
    }

    .casestudies-grid-project:first-child.text-col {
        padding: 0!important
    }
}

.casestudies-grid-project.parallaxMove {
    overflow: visible!important
}

.casestudy-box-text .sub_titile.thinner {
    padding: 0;
    padding-bottom: 40px
}

.casestudy-inner-page-bckg .casestudy-box-text .sub_titile.thinner {
    padding-top: 25px;
    padding-bottom: 40px
}

.casestudies-col-offset {
    padding: 3.65vw;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col-offset {
        padding:12px 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col-offset {
        padding-bottom:3.65vw;
        padding-top: 3.65vw
    }
}

@media(max-width: 719px) {
    .casestudies-col-offset {
        padding:0
    }
}

.casestudies-col-offset .pull-right {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: right
}

.casestudies-col-offset .casestudy-box.image-frame {
    line-height: 0
}

.casestudies-col-offset .casestudy-box.image-frame.shadow {
    -webkit-box-shadow: 0 0 54px 0 rgba(0,0,0,.32);
    box-shadow: 0 0 54px 0 rgba(0,0,0,.32)
}

.casestudies-col-offset .casestudy-box img {
    max-width: 100%
}

.casestudies-col-offset .casestudy-box-text {
    padding: 25px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.casestudies-col-offset .casestudy-box-text .title {
    max-width: 500px
}

@media(max-width: 1024px) {
    .casestudies-col-offset .casestudy-box-text {
        padding:25px 0
    }

    .casestudies-col-offset .casestudy-box-text .btn-shell {
        padding-top: 0;
        padding-right: 0;
        padding-bottom: 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col-offset .casestudy-box-text {
        padding:25px
    }
}

.casestudies-col-offset .casestudy-box-text .text {
    max-width: 500px;
    margin-left: auto
}

.love {
    vertical-align: middle
}

.love svg {
    display: inline-block;
    vertical-align: middle;
    -webkit-filter: drop-shadow(5px 5px 5px rgba(241,90,70,.82));
    filter: drop-shadow(0 2px 5px rgba(241,90,70,.52))
}

.text-col-title-vertical {
    z-index: 1;
    position: relative
}

@media(min-width: 1025px) {
    .text-col-title-vertical {
        text-align:left;
        margin-bottom: 90px;
        -webkit-transform: translateY(0) rotate(-180deg);
        -ms-transform: translateY(0) rotate(-180deg);
        transform: translateY(0) rotate(-180deg);
        min-height: 290px
    }
}

@media(min-width: 1025px) {
    body.bg .text-col-title-vertical {
        min-height:390px;
        letter-spacing: 2px
    }
}

.text-col-img {
    line-height: 0;
    padding: 4px 0 117px;
    max-height: 330px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .text-col-img {
        padding:0 0 25px
    }
}

.text-col-img img {
    max-width: 100%
}

@-webkit-keyframes heartbeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    3% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    6% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    9% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    12% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes heartbeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    3% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    6% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    9% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }

    12% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.heartbeat {
    -webkit-animation: heartbeat 8s cubic-bezier(.39,.58,.57,1) 1s infinite normal;
    animation: heartbeat 8s cubic-bezier(.39,.58,.57,1) 1s infinite normal;
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

@media(max-width: 719px) {
    .casestudies-col.col.col-d-50.col-t-50 {
        width:100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col.col.col-d-50.col-t-50 {
        width:49%
    }
}

.casestudies-single-image-box {
    width: 100%
}

.casestudies-single-image-box.no-dec {
    padding-top: 8.63vw
}

.casestudies-single-image-box.no-dec .casestudies-single-image {
    padding-left: 0;
    text-align: center
}

.bckg.text-bckg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: 44% 36%;
    background-repeat: no-repeat;
    background-size: auto;
    z-index: 0
}

@media(max-width: 1024px) {
    .bckg.text-bckg {
        background-size:contain
    }
}

@media(min-width: 1025px) {
    .bigPB {
        padding-bottom:26.04vw
    }
}

@media(min-width: 1920px) {
    .bigPB {
        padding-bottom:500px
    }
}

.casestudies-huge-title-box {
    width: 100%;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 1025px) {
    .casestudies-huge-title-box.bigPB {
        padding-bottom:26.04vw
    }
}

@media(min-width: 1920px) {
    .casestudies-huge-title-box.bigPB {
        padding-bottom:500px
    }
}

.casestudy-box {
    width: 100%
}

.casestudies.casestudy-inner-page .img .casestudy-box {
    text-align: center
}

.casestudies.casestudy-inner-page .casestudies-grid-project.two-col-text .casestudy-box-text {
    max-width: 520px
}

.casestudies.casestudy-inner-page .casestudies-grid-project.two-col-text .casestudy-box-text.wider {
    max-width: 540px
}

.casestudies.casestudy-inner-page .casestudies-grid-project {
    width: 100%
}

@media(min-width: 1025px) {
    .casestudies.casestudy-inner-page .casestudies-grid-project .img {
        min-height:650px
    }

    .casestudies.casestudy-inner-page .casestudies-grid-project .no-min-h {
        min-height: 0
    }
}

@media(max-width: 1440px) {
    .casestudies.casestudy-inner-page .casestudies-grid-project .img {
        min-height:450px
    }
}

@media(max-width: 1024px) {
    .casestudies.casestudy-inner-page .casestudies-grid-project .img {
        min-height:0
    }
}

.casestudies.casestudy-inner-page .casestudy-box {
    text-align: left
}

.casestudies.casestudy-inner-page .title.b {
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 0 0 0 #000
}

.casestudies.casestudy-inner-page .title.b.bigger {
    font-size: 3.75vw
}

@media(max-width: 1024px) {
    .casestudies.casestudy-inner-page .title.b.bigger {
        font-size:3.75vw
    }
}

@media(max-width: 1024px) {
    .casestudies.casestudy-inner-page .title.b {
        font-size:2.6vw
    }
}

.casestudies.casestudy-inner-page .casestudies-col-offset .casestudy-box-text .text {
    max-width: 540px;
    margin-left: 0
}

.casestudies.casestudy-inner-page .casestudies-col-offset .casestudy-box-text .text.full {
    max-width: 100%
}

.casestudies.casestudy-inner-page .casestudies-col-offset {
    width: 100%;
    text-align: center
}

.casestudies.casestudy-inner-page .casestudies-col-offset.img {
    padding-left: 0;
    padding-right: 0
}

.casestudies.casestudy-inner-page .casestudies-col-offset.img .casestudy-box {
    width: 100%;
    text-align: center
}

.casestudies.casestudy-inner-page .pull {
    width: 100%
}

.casestudies-huge-title {
    color: #000;
    padding-bottom: 50px
}

.casestudy-box-text {
    max-width: 540px;
    max-width: 600px
}

.casestudy-box-text.wider {
    max-width: 720px
}

.casestudy-box-text.full {
    max-width: 100%
}

.casestudy-box-text .sub_titile,.casestudy-box-text .text {
    max-width: 540px
}

.casestudy-box-text .sub_titile.full,.casestudy-box-text .text.full {
    max-width: 86%
}

@media(max-width: 719px) {
    .casestudy-box-text .sub_titile.full,.casestudy-box-text .text.full {
        max-width:100%
    }
}

.casestudy-box-text .title.en {
    padding-bottom: 3.65vw
}

.casestudies.casestudy-inner-page .casestudies-grid-project.bpt {
    padding-bottom: 10.42vw
}

.casestudies.casestudy-inner-page .casestudies-grid-project.two-col-text {
    padding: 25px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.casestudy-inner-page.two-col-bckg .section-offset {
    padding-top: 0;
    padding-bottom: 0
}

.casestudy-inner-page-bckg .text.m {
    text-shadow: 0 0 0 transparent
}

.casestudy-inner-page-bckg .title.b {
    text-shadow: 0 0 0 transparent!important
}

.casestudies-huge-sub-title {
    color: #cdcccc;
    font-size: 40px;
    padding-bottom: 50px
}

@media(max-width: 1024px) {
    .casestudies-huge-sub-title {
        font-size:25px;
        padding-bottom: 10px
    }
}

.casestudies-single-image-box {
    position: relative;
    padding-top: 8.63vw
}

@media(min-width: 1025px) {
    .casestudies-single-image-box .verticle-typewrite-text-box {
        position:absolute;
        top: inherit;
        bottom: 0;
        left: 0;
        text-align: center;
        width: auto;
        -webkit-transform: rotate(-90deg) translateY(47px) translateX(-22px);
        -ms-transform: rotate(-90deg) translateY(47px) translateX(-22px);
        transform: rotate(-90deg) translateY(47px) translateX(-22px);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0
    }
}

@media(max-width: 1024px) {
    .casestudies-single-image-box .verticle-typewrite-text-box .verticle-typewrite-text.text.m {
        padding-left:0
    }
}

@media(min-width: 1025px) {
    .casestudies-single-image-box .verticle-typewrite-text.text.m {
        top:80%;
        -webkit-transform: rotate(-90deg) translateX(0) translateY(-107%);
        -ms-transform: rotate(-90deg) translateX(0) translateY(-107%);
        transform: rotate(-90deg) translateX(0) translateY(-107%);
        top: inherit;
        -webkit-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
        min-height: 54px;
        bottom: 100%;
        -webkit-transform-origin: center;
        -ms-transform-origin: center;
        transform-origin: center;
        right: inherit;
        position: relative
    }
}

.casestudies-single-image-box .verticle-typewrite-text.text.m .anim-type-side-text {
    color: #000
}

.casestudies-single-image-box .verticle-typewrite-text.text.m .verticle-typewrite-icon {
    background-image: url(../images/icons/grey-arrow.png)
}

.casestudies-single-image-box .casestudies-single-image {
    padding-left: 130px;
    line-height: 0
}

.casestudies-single-image-box .casestudies-single-image img {
    max-width: 100%
}

@media(max-width: 1024px) {
    .casestudies-single-image-box .casestudies-single-image {
        padding-left:0
    }
}

@media(max-width: 1024px) {
    .casestudies-single-image-box {
        padding-left:0;
        padding: 0
    }

    .casestudies-single-image-box .verticle-typewrite-text.text.m {
        padding: 25px
    }

    .casestudies-single-image-box .verticle-typewrite-text.text.m .verticle-typewrite-icon {
        position: relative;
        width: 34px;
        height: 9px;
        display: inline-block;
        top: inherit;
        bottom: inherit;
        left: inherit;
        right: inherit;
        display: block;
        margin-bottom: 14px
    }

    .casestudies-single-image-box .verticle-typewrite-text.text.m .anim-type-side-text {
        position: relative
    }
}

.case-study-slider-desc-text {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.5;
    letter-spacing: .8px;
    padding-bottom: 30px;
    font-weight: 500;
    color: #000;
    opacity: .5;
    max-width: 292px
}

.case-study-slider-desc-icon {
    width: 50px;
    margin-top: 25px;
    margin-bottom: 10px;
    -webkit-transform: scaleY(-1) translateY(12px);
    -ms-transform: scaleY(-1) translateY(12px);
    transform: scaleY(-1) translateY(12px)
}

.case-study-slider-desc-icon img {
    max-width: 100%
}

.alaska-img-bottom-offset .casestudy-box-text ul {
    line-height: 1.4;
    letter-spacing: .8px;
    padding-bottom: 0;
    margin: 0;
    padding: 0
}

.case-study-slider-box {
    padding: 4.79vw 0
}

.case-study-slider-box.pt0 {
    padding-top: 0
}

.case-study-slider-img-box video {
    max-width: 100%
}

.casestudy-gallery {
    overflow: hidden
}

.casestudy-box video {
    -webkit-transform: scale(1.03);
    -ms-transform: scale(1.03);
    transform: scale(1.03);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    left: 0!important
}

.casestudy-box video.not-scaled {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

@media(max-width: 480px) {
    .casestudy-awards-section {
        display:none
    }
}

.case-study-slider .swiper-slide-active .case-study-slider-img-box {
    position: relative
}

.case-study-slider .swiper-slide {
    opacity: .7;
    -webkit-transition: opacity 1s linear;
    -o-transition: opacity 1s linear;
    transition: opacity 1s linear
}

.case-study-slider .swiper-slide.swiper-slide-active {
    opacity: 1
}

.case-study-slider.single .swiper-slide {
    opacity: 1!important
}

.case-study-slider.single .swiper-slide .swiper-lazy-preloader {
    display: none
}

.case-study-slider.single .swiper-slide .case-study-slider-img-box-outer {
    text-align: center
}

.case-study-slider {
    cursor: default!important
}

.case-study-slider .swiper-slide-active .case-study-slider-img-box {
    position: relative
}

.case-study-slider .swiper-slide-active .case-study-slider-img-box:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -115px;
    display: block;
    background: url(../images/icons/cases-study-slider-arrow-left.png) no-repeat center;
    width: 34px;
    height: 9px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.case-study-slider .swiper-slide-active .case-study-slider-img-box:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -115px;
    display: block;
    background: url(../images/icons/cases-study-slider-arrow-right.png) no-repeat center;
    width: 34px;
    height: 9px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.casestudy-awards-section {
    position: relative;
    color: #000
}

.casestudy-awards-section .casestudy-awards-section-box {
    position: relative;
    padding-top: 70px
}

.casestudy-awards-section .casestudy-awards-box {
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 9.9vw 3.5vw
}

.casestudy-awards-section .casestudy-awards .casestudy-awards-item {
    width: 25%;
    padding-right: 0;
    padding-bottom: 50px
}

.casestudy-awards-section .casestudy-awards .casestudy-awards-icon {
    opacity: 1;
    padding-bottom: 35px
}

.casestudy-awards-section .casestudy-awards .casestudy-awards-icon img {
    max-height: none
}

.casestudy-awards-section .casestudy-awards .casestudy-awards-title {
    opacity: .5;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0
}

.casestudy-awards-section .casestudy-awards .casestudy-awards-sub-title {
    opacity: .3;
    letter-spacing: .2px;
    font-weight: 700;
    letter-spacing: 0;
    font-size: 12px
}

.casestudy-after-awards-section.casestudy-inner-page .section-offset {
    padding-top: 0
}

.casestudy-after-awards-section.casestudy-inner-page .content-offset {
    padding-top: 0
}

.img-box-grid {
    text-align: center
}

.img-box-grid img {
    max-width: 100%
}

.casestudies.casestudy-inner-page .casestudy-box video {
    max-width: 100%;
    -webkit-clip-path: inset(1px 1px);
    clip-path: inset(1px 1px)
}

.casestudies.casestudy-inner-page .content-offset {
    padding-top: 0
}

.casestudies.casestudy-inner-page .content-offset.pt {
    padding-top: 4.79vw
}

.casestudies.casestudy-inner-page .content-offset.pb {
    padding-top: 4.79vw
}

.casestudies.casestudy-inner-page .casestudies-single-image-box {
    margin-top: 10.63vw;
    margin-bottom: 0;
    padding-top: 0
}

@media(max-width: 719px) {
    .casestudies.casestudy-inner-page .casestudies-single-image-box {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .casestudies.casestudy-inner-page .casestudies-single-image-box .verticle-typewrite-text-box {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .casestudies.casestudy-inner-page .casestudies-single-image-box .casestudies-single-image {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }
}

.casestudies.casestudy-inner-page.casestudy-inner-page-img .casestudies-grid-project {
    margin-top: 0!important
}

.casestudies.casestudy-inner-page .casestudies-huge-title-box {
    margin-top: 10.63vw;
    margin-bottom: 0
}

.casestudies.casestudy-inner-page .casestudies-huge-title-box.nmt {
    margin-top: 0
}

.casestudies.casestudy-inner-page .casestudies-grid-project.text-col {
    margin-top: 10.63vw;
    margin-bottom: 0;
    padding: 0!important
}

.casestudies.casestudy-inner-page .casestudies-grid-project.text-col.mt0 {
    margin-top: 0
}

.casestudies.casestudy-inner-page .casestudies-grid-project.text-col.mb {
    margin-bottom: 10.63vw
}

.casestudy-inner-page-img .casestudy-box {
    padding-bottom: 5.99vw
}

@media(max-width: 1024px) {
    .casestudy-inner-page-img .casestudies-grid-project .casestudies-col {
        padding:0
    }

    .casestudy-inner-page-img .casestudies-grid-project .casestudies-col.no-pt {
        padding-top: 25px
    }
}

.casestudy-inner-page-img .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(even) {
    -webkit-box-ordinal-group: inherit;
    -ms-flex-order: inherit;
    order: inherit
}

.casestudy-inner-page-img .casestudies-grid .casestudies-grid-project.text-col .casestudies-col:nth-child(odd) {
    -webkit-box-ordinal-group: inherit;
    -ms-flex-order: inherit;
    order: inherit
}

.casestudy-inner-page-img .images-with-dec {
    position: relative;
    max-width: 80%;
    margin: auto
}

@media(max-width: 719px) {
    .casestudy-inner-page-img .images-with-dec .img-with-decription-text-box {
        display:none
    }
}

@media(max-width: 719px) {
    .casestudy-inner-page-img .images-with-dec .img-with-decription-box {
        margin-bottom:30px!important
    }
}

@media(max-width: 719px) {
    .casestudy-inner-page-img .images-with-dec .img-with-decription {
        padding-top:0
    }
}

.case-study-slider-desc-box {
    padding-top: 20px;
    overflow: hidden
}

.case-study-slider-desc-box .case-study-slider-desc-icon {
    float: left;
    margin-right: 10px;
    text-align: left
}

.case-study-slider-desc-box .case-study-slider-desc-text {
    float: left;
    margin-top: 17px;
    text-align: left
}

.case-study-full-img-slider-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-size: cover;
    z-index: 1
}

@media(max-width: 1024px) {
    .case-study-full-img-slider-img {
        background-position:80% 50%;
        background-size: cover
    }
}

.section-case-study-full-img-slider .swiper-container {
    width: 100%;
    height: 100%
}

.section-case-study-full-img-slider .swiper-slide {
    background-position: center;
    background-size: cover;
    position: relative
}

.section-case-study-full-img-slider .swiper-slide.case-study-full-img-slide {
    min-height: 111vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(max-width: 1024px) {
    .section-case-study-full-img-slider .swiper-slide.case-study-full-img-slide {
        height:100vh;
        min-height: 640px;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end
    }
}

.section-case-study-full-img-slider .swiper-button-next {
    right: 10vw;
    background-image: url(../images/icons/white-arrow-slider-next.png);
    background-size: 34px 9px;
    width: 40px;
    height: 40px;
    z-index: 3
}

@media(max-width: 1024px) {
    .section-case-study-full-img-slider .swiper-button-next {
        right:2vw
    }
}

.section-case-study-full-img-slider .swiper-button-prev {
    left: 10vw;
    background-image: url(../images/icons/white-arrow-slider-prevt.png);
    background-size: 34px 9px;
    width: 40px;
    height: 40px;
    z-index: 3
}

@media(max-width: 1024px) {
    .section-case-study-full-img-slider .swiper-button-prev {
        left:2vw
    }
}

.section-case-study-full-img-slider .case-study-full-img-slider-text {
    z-index: 2;
    position: relative
}

@media(max-width: 1024px) {
    .section-case-study-full-img-slider .case-study-full-img-slider-text {
        padding:10vw 20vw
    }
}

@media(min-width: 1025px) {
    .section-case-study-full-img-slider .case-study-full-img-slider-text {
        padding:0 20vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .case-study-full-img-slider-text .title.b {
        font-size:50px!important
    }
}

.section-framed-text {
    height: 128vh;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    color: #000
}

@media(max-width: 1024px) {
    .section-framed-text {
        height:auto
    }
}

.section-framed-text .section-framed-inner-box {
    position: relative;
    height: 128vh;
    width: 100%;
    background: #f5f5f5
}

@media(max-width: 1024px) {
    .section-framed-text .section-framed-inner-box {
        min-height:0;
        height: auto
    }
}

.section-framed-text .section-framed-img {
    position: absolute;
    top: 0;
    left: 1.5%;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%
}

@media(max-width: 1024px) {
    .section-framed-text .section-framed-img {
        background:#fd5b46!important;
        left: 0
    }
}

.section-framed-text .section-framed-text {
    height: 128vh;
    width: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    color: #000
}

@media(max-width: 1024px) {
    .section-framed-text .section-framed-text {
        height:auto
    }
}

.section-framed-text .section-framed-text-outer {
    width: 26vw;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: auto;
    height: 100%
}

@media(max-width: 1024px) {
    .section-framed-text .section-framed-text-outer {
        padding:100px 25px;
        width: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .section-framed-text .section-framed-text-outer {
        padding:150px 50px
    }
}

.section-framed-text .section-framed-text-inner .section-framed-title {
    width: 100%;
    font-size: 3.35vw;
    padding-bottom: 50px
}

@media(max-width: 719px) {
    .section-framed-text .section-framed-text-inner .section-framed-title {
        font-size:30px
    }
}

@media(min-width: 1025px) {
    .section-framed-text .section-framed-text-inner .section-framed-txt {
        max-width:420px
    }
}

.case-study-slider-dark.full .case-study-slider-img-box {
    -webkit-filter: none;
    filter: none
}

.case-study-slider-dark.full .case-study-slider-img-box img {
    max-width: 100%!important
}

.sp_last_symbol div>.char:last-child {
    font-size: 2.45vw;
    vertical-align: super
}

.pt200 {
    padding-top: 10.42vw
}

.pb150 {
    padding-bottom: 7.81vw
}

@media(max-width: 1024px) {
    .title_pb0 .title {
        padding-bottom:0!important
    }

    .title_pb0 .section-framed-title {
        padding-bottom: 25px!important
    }
}

.casestudy-box-text .text.m a,.casestudy-box-text .text.m strong,.casestudy-box-text .text.m u {
    font-family: helvetica lt std bold,sans-serif;
    font-size: 15px;
    color: #fe5b46;
    text-shadow: none;
    position: relative
}

@media(max-width: 719px) {
    .casestudy-box video.king {
        -webkit-transform:scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3)
    }
}

@media(max-width: 719px) {
    .order1 {
        -webkit-box-ordinal-group:2!important;
        -ms-flex-order: 1!important;
        order: 1!important
    }
}

@media(max-width: 719px) {
    .order2 {
        -webkit-box-ordinal-group:3!important;
        -ms-flex-order: 2!important;
        order: 2!important
    }
}

.br-offset {
    padding: 28vw 0
}

@media(min-width: 720px) and (max-width:1024px) {
    .tandem-tablet-offset {
        padding-left:4.6vw!important;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .offset-outer-left {
        padding-left:5.21vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-outer-left {
        padding:50px 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-outer-right {
        padding:50px 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .offset-inner-left {
        padding-left:4.79vw
    }
}

@media(min-width: 1025px) {
    .offset-inner-right {
        padding-left:4.79vw;
        padding-right: 4.79vw;
        padding-top: 7.79vw;
        padding-bottom: 4.79vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-inner-right {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-inner-right {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .offset-right-right {
        padding-left:4.79vw;
        padding-right: 4.79vw;
        padding-top: 7.79vw;
        padding-bottom: 4.79vw;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .offset-right-right {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .p-r-2.casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset .plr {
        padding-left:25px;
        padding-right: 25px
    }
}

@media(max-width: 719px) {
    .p-r-2.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset {
        padding-bottom:0!important
    }
}

@media(max-width: 719px) {
    .p-r-1.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset {
        padding-bottom:0!important
    }

    .p-r-1.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset p:last-child {
        padding-bottom: 0
    }
}

@media(max-width: 719px) {
    .p-r-1.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col {
        padding:50px 25px
    }
}

@media(max-width: 719px) {
    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset {
        padding-bottom:0!important
    }

    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset .plr.img {
        padding-bottom: 0!important
    }

    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset .casestudy-box {
        line-height: 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset .content-offset {
        padding-bottom:0
    }

    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset .casestudy-box {
        line-height: 0
    }

    .casestudy-m-t.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset .casestudies-col:last-child {
        padding-left: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.h-a-t .casestudies-col.vila-yamboll-bg .plr {
    padding-right: 25px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 719px) {
    .p-r-2.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudies-col {
        padding:50px 0!important
    }

    .p-r-2.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudies-col p:last-child {
        padding-bottom: 0
    }
}

.casestudies-col-img-bckg {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 0!important
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col-img-bckg {
        height:100%;
        width: 50%!important
    }
}

@media(max-width: 719px) {
    .casestudies-col-img-bckg {
        height:360px;
        -webkit-box-ordinal-group: 3!important;
        -ms-flex-order: 2!important;
        order: 2!important
    }
}

@media(min-width: 1025px) {
    .min-height-bckg {
        min-height:35.21vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .min-height-bckg {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-col-txt-bck {
        width:50%!important;
        padding: 0!important
    }
}

@media(max-width: 719px) {
    .casestudies-col-txt-bck {
        padding:50px 25px!important;
        -webkit-box-ordinal-group: 2!important;
        -ms-flex-order: 1!important;
        order: 1!important
    }

    .casestudies-col-txt-bck .plr {
        padding-right: 0!important
    }
}

@media(max-width: 719px) {
    .rp-sec-2 .section-offset {
        padding-bottom:0!important
    }

    .rp-sec-2 .section-offset .content-offset .plr.img {
        padding-bottom: 0!important
    }

    .rp-sec-2 .section-offset .casestudy-box {
        line-height: 0
    }
}

.opticlasa-dd-img {
    padding-bottom: 5.99vw
}

@media(max-width: 1024px) {
    .casestudy-inner-page-bckg.casestudy-inner-page.opticlsa-bckg {
        background-position:65% 70%
    }
}

@media(max-width: 1024px) {
    .casestudy-inner-page-bckg.casestudy-inner-page.opticlasa-bckg-2 {
        background-position:10% 70%
    }
}

@media(min-width: 1025px) {
    .title.en.desktop-offset-rg {
        padding-bottom:4.17vw
    }
}

@media(max-width: 1024px) {
    .title.en.desktop-offset-rg {
        padding-bottom:30px
    }
}

.big-offset-bottom {
    padding-bottom: 7.81vw
}

@media(max-width: 719px) {
    .big-offset-bottom {
        padding-bottom:30px
    }
}

@media(min-width: 1025px) {
    .pad-top-des-130 {
        padding-top:6.77vw
    }
}

@media(min-width: 1920px) {
    .pad-top-des-130 {
        padding-top:130px
    }
}

@media(max-width: 1024px) {
    .fastmail-mobile-nobckg-img {
        background-image:none!important;
        background-color: #7bb9e8
    }
}

.about-us-tools {
    position: absolute;
    top: 45px;
    color: #000;
    padding-left: 2.6vw;
    z-index: 2
}

@media(max-width: 1024px) {
    .about-us-tools {
        position:relative;
        top: inherit;
        padding-left: 0;
        padding-top: 8px;
        padding-bottom: 30px;
        opacity: 0
    }
}

@media(max-width: 719px) {
    .about-us-tools.mobile-offset {
        padding-left:25px;
        padding-right: 25px
    }
}

.about-us-tools .description-msg {
    color: #b2b2b2;
    opacity: 1
}

.about-us-tools .description-msg .op_03 {
    opacity: 1
}

.about-us-tools .description-msg.text.t {
    font-weight: 400
}

.about-us-tools .description-icon .stroke {
    stroke: #000
}

.about-us-tools .description-icon .arrow {
    fill: #000
}

.about-us-tools.white {
    color: #fff
}

.about-us-tools.white .description-msg {
    color: #fff
}

.about-us-tools.white .description-icon .stroke {
    stroke: #fff
}

.about-us-tools.white .description-icon .arrow {
    fill: #fff
}

@media(min-device-width: 1020px) {
    .col-d-25.col-t-50.col-m-100.home-mobile-news-slide {
        width:25%!important
    }
}

.section-team {
    min-height: 113vh;
    margin-top: -1px;
    overflow: hidden;
    background: #1a1a1a
}

@media(max-width: 719px) {
    .section-team {
        min-height:100vh;
        overflow: hidden
    }

    .section-team .section-offset {
        padding: 0
    }

    .section-team .content-grid {
        padding: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }

    .section-team .section-tools {
        padding-left: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .section-team {
        min-height:100vh
    }

    .section-team .section-offset {
        min-height: 100vh
    }

    .section-team .content-offset {
        min-height: 100vh
    }
}

@media screen and (orientation: landscape) and (min-device-width:1020px) {
    .section-team {
        min-height:700px!important
    }

    .section-team .bckg-overlay {
        background-position: 43% 41%!important;
        background-size: cover!important
    }

    .section-team .section-offset {
        min-height: 700px!important;
        max-height: 0
    }

    .section-team .content-offset {
        min-height: 700px!important
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .section-team {
        min-height:700px!important
    }

    .section-team .bckg-overlay {
        background-position: 43% 41%!important;
        background-size: cover!important
    }

    .section-team .section-offset {
        min-height: 700px!important;
        max-height: 0
    }

    .section-team .content-offset {
        min-height: 700px!important
    }
}

.section-team .bckg-overlay {
    background-position: 100% 100%;
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0
}

@media(max-width: 719px) {
    .section-team .bckg-overlay {
        background-position:75% 100%;
        opacity: 1!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .section-team .bckg-overlay {
        opacity:1!important;
        background-position: 85% 100%
    }
}

@media(max-width: 1024px) {
    .section-team .content-offset {
        min-height:100vh;
        width: 83vw
    }

    .section-team .awards-logos-box {
        width: 100%;
        float: left
    }
}

.section-team .section-wrap {
    min-height: 100vh
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .section-team .section-wrap {
        min-height:700px!important
    }
}

@media(max-width: 1024px) {
    .awards-slider-conatiner {
        width:100%;
        float: left
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #section-team .title.b {
        font-size:65px
    }
}

.social-feed-slide.prevent {
    pointer-events: none
}

.section-video-content {
    position: relative;
    z-index: 2
}

.drag-social-feed {
    width: 10000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(min-width: 1025px) {
    .drag-social-feed {
        -ms-flex-wrap:wrap;
        flex-wrap: wrap
    }
}

@media(max-width: 1024px) {
    .drag-social-feed .social-feed-slide-inner-box {
        top:15px;
        bottom: 15px;
        left: 15px;
        right: 15px
    }
}

.drag-social-feed .social-feed-slide {
    width: 19.79vw!important;
    padding-bottom: 19.79vw;
    height: 0
}

@media(max-width: 719px) {
    .drag-social-feed .social-feed-slide {
        width:45vw!important;
        padding-bottom: 45vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-social-feed .social-feed-slide {
        width:30vw!important;
        padding-bottom: 30vw!important
    }
}

@media(min-width: 1025px) {
    .awards-logos-box.mobile_only {
        display:none
    }
}

.hand-video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 1%
}

.hand-video .vimeo-wrapper {
    position: absolute;
    overflow: hidden;
    width: 52.5vw;
    height: 64.69vw;
    margin: auto;
    top: 0;
    right: 0
}

@media(max-width: 1024px) {
    .hand-video .vimeo-wrapper {
        width:78.75vw;
        height: 97.03vw
    }
}

.hand-video .vimeo-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0
}

.casestudies-col .pull {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-perspective: 1000px;
    perspective: 1000px
}

.casestudies-col .pull .rotateXYZ-img {
    -webkit-transition: -webkit-transform .5s linear;
    transition: -webkit-transform .5s linear;
    -o-transition: transform .5s linear;
    transition: transform .5s linear;
    transition: transform .5s linear,-webkit-transform .5s linear;
    will-change: transform
}

.par-case-img-3 {
    z-index: 3;
    position: relative!important;
    overflow: visible!important;
    max-width: none!important
}

.par-case-img-2 {
    position: absolute!important;
    z-index: 2;
    overflow: visible!important;
    max-width: none!important
}

.par-case-img-1 {
    position: absolute!important;
    overflow: visible!important;
    max-width: none!important
}

@media(max-width: 1024px) {
    .awards-years-slide-t-awards {
        overflow:hidden;
        width: 72.08vw;
        width: 60vw;
        margin-left: 6.25vw;
        position: relative;
        border-left: 1px solid #1b1b1b
    }

    .awards-years-slide-t-awards .awards-logos {
        width: 2000px;
        max-width: none
    }

    .awards-years-slide-t-awards:before {
        content: '';
        display: block;
        width: 20px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 45px;
        z-index: 1;
        -webkit-box-shadow: 40px 0 6px #1b1b1b;
        box-shadow: 40px 0 6px #1b1b1b;
        -webkit-transform: translateX(-91px);
        -ms-transform: translateX(-91px);
        transform: translateX(-91px)
    }

    .awards-years-slide-t-awards:after {
        content: '';
        display: block;
        width: 20px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 20px;
        z-index: 1;
        -webkit-box-shadow: 30px 0 10px #1b1b1b;
        box-shadow: 30px 0 10px #1b1b1b
    }
}

.description-msg .stroke {
    stroke-width: .5
}

.case-study-hero-slider .btn.red:hover {
    color: #000;
    border-color: rgba(0,0,0,.5);
    background: 0 0
}

.case-study-hero-slider .btn.red.bl:hover {
    color: #000;
    border-color: #000
}

.casestudy-gallery {
    position: relative;
    width: 35.36vw;
    height: 34.17vw;
    -webkit-box-shadow: 20px 33px 70px 17px #d5d5d5;
    box-shadow: 20px 33px 70px 17px #d5d5d5
}

@media(max-width: 719px) {
    .casestudy-gallery {
        width:85vw;
        height: 85vw;
        margin: auto;
        overflow: hidden;
        -webkit-box-shadow: 11px 11px 40px 5px #d5d5d5;
        box-shadow: 11px 11px 40px 5px #d5d5d5
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-gallery {
        margin:auto
    }
}

.casestudy-gallery .casestudy-gallery-item {
    opacity: 0;
    position: absolute;
    width: 35.36vw;
    height: 34.17vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}

@media(max-width: 719px) {
    .casestudy-gallery .casestudy-gallery-item {
        width:90vw;
        height: 86.9711vw;
        top: -2vw;
        max-width: none!important;
        left: -2vw
    }
}

.casestudy-gallery .casestudy-gallery-item.active {
    opacity: 1
}

.casestudy-home.casestudies {
    padding-bottom: 100px
}

@media(max-width: 719px) {
    .casestudy-home.casestudies {
        padding-bottom:50px
    }

    .casestudy-home.casestudies .casestudies-grid-project .casestudies-col {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .casestudy-home.casestudies .casestudies-grid-project .casestudies-col .casestudy-box-text {
        padding-bottom: 0
    }

    .casestudy-home.casestudies .casestudies-grid-project .casestudies-col.rellaxM {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        padding-top: 13px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .col-t-75.col-m-100.flex.flexVertical {
        width:100%;
        display: block
    }
}

@media(min-width: 1025px) {
    .casestudies-grid-project.parallaxMove .title.b .char.specSymbol {
        font-size:65%;
        vertical-align: super
    }
}

.home-slider-item-box .title.b .char.specSymbol {
    font-size: 65%;
    vertical-align: super
}

@media(max-width: 1024px) {
    .swiper-slide.awards-years-slide.swiper-slide-active .awards-years-slide-t-awards.op_0 {
        opacity:1!important
    }
}

.item-reveal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 200px;
    margin: 5px;
    cursor: pointer;
    border-radius: 2px;
    -webkit-box-shadow: 0 5px 5px rgba(0,0,0,.02),inset 0 0 0 1px rgba(0,0,0,.07);
    box-shadow: 0 5px 5px rgba(0,0,0,.02),inset 0 0 0 1px rgba(0,0,0,.07);
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.item-reveal:hover circle,.item-reveal:hover image {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1)
}

.item-reveal image {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: -webkit-transform .2s cubic-bezier(.25,.46,.45,.94);
    -o-transition: transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: transform .2s cubic-bezier(.25,.46,.45,.94),-webkit-transform .2s cubic-bezier(.25,.46,.45,.94)
}

.item-reveal svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.item-reveal circle {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: -webkit-transform .2s cubic-bezier(.25,.46,.45,.94);
    -o-transition: transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: transform .2s cubic-bezier(.25,.46,.45,.94);
    transition: transform .2s cubic-bezier(.25,.46,.45,.94),-webkit-transform .2s cubic-bezier(.25,.46,.45,.94)
}

@media(min-width: 1025px) {
    body.bg .contact-info .col-d-25 {
        width:26%
    }

    body.bg .contact-info .col-d-25.hidden-col {
        width: 24%
    }
}

@media(min-width: 1025px) {
    .home-mobile-services-slide {
        width:25%!important
    }
}

.casestudy-box.fastmail-video {
    border-radius: 32px;
    overflow: hidden;
    width: auto
}

@media(max-width: 1024px) {
    .pull-fastmail {
        padding:0 15px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .pull-fastmail {
        padding:0 15px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.service-image-box {
    margin-left: -10vw
}

.service-image-box img {
    max-width: 80%
}

@media(max-width: 719px) {
    .service-image-box {
        padding:25vw 0 13vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .service-image-box {
        padding:15vw 0 10vw
    }
}

.padd-bx {
    padding-bottom: 6.51vw
}

.brand-text {
    padding-left: 3.13vw;
    padding-top: 4.17vw
}

.brand-text .title {
    padding-bottom: 20px
}

.brand-text .text {
    padding-bottom: 4.17vw
}

@media(max-width: 1024px) {
    .brand-text .text {
        padding-bottom:25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .brand-text .col-t-33 {
        padding-right:20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .brand-text {
        padding-left:25px;
        padding-right: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .service-image-box img {
        max-width:100%
    }
}

.msg {
    font-size: 51px;
    line-height: 1;
    display: inline-block;
    padding: 2px 14px 13px 12px;
    font-style: italic;
    -webkit-transform: translateY(-11px);
    -ms-transform: translateY(-11px);
    transform: translateY(-11px);
    letter-spacing: 3px;
    position: relative;
    margin-left: 10px
}

@media(max-width: 1024px) {
    .msg {
        font-size:30px;
        letter-spacing: 0;
        margin-top: 0;
        padding-bottom: 5px;
        -webkit-transform: translateY(2px);
        -ms-transform: translateY(2px);
        transform: translateY(2px);
        margin-left: 0
    }
}

.msg.label {
    background: #fe5b46;
    -webkit-box-shadow: 3px 3px 15px 0 #fe5b46;
    box-shadow: 3px 3px 15px 0 #fe5b46;
    color: #fff
}

.msg.label.grey {
    background: #ccc;
    -webkit-box-shadow: 3px 3px 15px 0 rgba(204,204,204,.48);
    box-shadow: 3px 3px 15px 0 rgba(204,204,204,.48)
}

.msg.label.grey:after {
    border-color: transparent transparent transparent #ccc
}

.msg.label:after {
    content: '';
    position: absolute;
    bottom: -17px;
    right: 34px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 4px 16px;
    border-color: transparent transparent transparent #fe5b46;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

@media(max-width: 1024px) {
    .msg {
        font-size:36px;
        letter-spacing: 0;
        margin-top: 18px
    }
}

@media(max-width: 1024px) {
    .msg {
        font-size:30px;
        letter-spacing: 0;
        margin-top: 0;
        padding-bottom: 5px;
        -webkit-transform: translateY(4px);
        -ms-transform: translateY(4px);
        transform: translateY(4px);
        margin-left: 0
    }
}

@media(min-width: 1025px) {
    .msg {
        padding:2px 14px 7px 12px;
        margin-top: 23px
    }
}

@media(min-width: 1281px) {
    .msg {
        margin-top:0;
        padding: 2px 14px 7px 12px
    }
}

@media(min-width: 1025px) {
    .msg {
        font-size:2.86vw
    }
}

@media(min-width: 1920px) {
    .msg {
        font-size:55px
    }
}

.brands-box {
    padding-top: 3.13vw;
    padding-bottom: 3.13vw;
    padding-left: 3.13vw;
    background: #fbfbfb
}

.brands-box .brands-box-inner {
    background: #fbfbfb;
    padding-top: 2.6vw
}

@media(max-width: 1024px) {
    .brands-box .brands-box-inner {
        padding-top:30px;
        padding-left: 10px;
        padding-right: 10px
    }
}

.brands-box .brands-title {
    color: #fd8a81;
    font-size: 12px
}

.brands-box .brand-inner-box {
    overflow: hidden;
    padding-bottom: 2.6vw;
    padding-top: .78vw
}

@media(max-width: 719px) {
    .brands-box .brand-inner-box {
        padding-bottom:20px;
        padding-top: 20px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .brands-box .brand-inner-box {
        padding-bottom:30px;
        padding-top: 20px
    }
}

.brands-box .brand {
    float: left;
    padding-right: 4.17vw;
    padding-bottom: .52vw
}

@media(max-width: 719px) {
    .brands-box .brand {
        padding-right:20px;
        padding-bottom: 10px
    }
}

.brands-box img {
    height: 4.69vw
}

@media(max-width: 719px) {
    .brands-box img {
        height:50px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .brands-box img {
        height:70px
    }
}

@media(min-width: 1661px) {
    .brands-box img {
        height:90px
    }
}

.transX20 {
    float: left
}

@media(min-width: 1025px) {
    .transX20 {
        -webkit-transform:translateX(20px);
        -ms-transform: translateX(20px);
        transform: translateX(20px)
    }
}

@media(max-width: 1024px) {
    .transX20 {
        overflow:hidden
    }

    .transX20 .responsive {
        max-width: 165%;
        height: auto
    }
}

.anim-type-big-msg strong span:before {
    display: none!important
}

@media(max-width: 719px) {
    .scroll-video-content {
        padding-right:0!important
    }

    .scroll-video-content .title.b {
        font-size: 27px!important;
        letter-spacing: 0;
        padding-bottom: 20px
    }

    .scroll-video-content .sub_titile.thinner {
        font-size: 14px;
        padding-top: 0;
        padding-bottom: 0;
        min-height: 75px;
        line-height: 1.3
    }

    .scroll-video-content .text.m {
        max-width: 100%!important;
        font-size: 12px;
        letter-spacing: .6px;
        line-height: 1.5
    }

    .scroll-video-content .text.m ul {
        line-height: 1.5!important;
        font-size: 14px!important;
        padding-top: 25px
    }

    .scroll-video-content .anim_s_txt_2 {
        padding-top: 0!important
    }

    .scroll-video-content .mobile-offset {
        padding-right: 0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .videoscroll-slider-wrap-box {
        padding:50px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    body.bg .videoscroll-slider-box {
        letter-spacing:2px;
        font-size: 3vw
    }
}

@media(min-width: 1920px) {
    body.bg .videoscroll-slider-box {
        font-size:55px
    }
}

body.bg .brand-text .title.sm {
    font-family: HelenProRegular,sans-serif
}

body.bg .anim-type-msg {
    font-family: HelenProRegular,sans-serif
}

body.bg .msg.label.grey span {
    -webkit-transform: translateY(4px);
    -ms-transform: translateY(4px);
    transform: translateY(4px);
    display: inline-block
}

@media(min-width: 1025px) {
    body.bg #afterSticky .title.en {
        font-size:3.39vw;
        letter-spacing: 2px
    }
}

@media(min-width: 1920px) {
    body.bg #afterSticky .title.en {
        font-size:65px
    }
}

@media(min-width: 1025px) {
    body.bg #afterSticky .title.en {
        font-size:6.25vw
    }
}

@media(min-width: 1920px) {
    body.bg #afterSticky .title.en {
        font-size:120px
    }
}

@media(min-width: 1025px) {
    body.bg .title.en.title_en_n {
        font-size:6.25vw;
        padding-bottom: 25px
    }
}

@media(min-width: 1920px) {
    body.bg .title.en.title_en_n {
        font-size:120px;
        padding-bottom: 25px
    }
}

@media(min-width: 1025px) {
    body.bg .title.t.title_t_n {
        padding-bottom:4.17vw
    }
}

@media(min-width: 1920px) {
    body.bg .title.t.title_t_n {
        padding-bottom:80px
    }
}

.draggable-services {
    -ms-touch-action: none;
    touch-action: none
}

@media(min-width: 1024px) and (max-width:1025px) {
    #scrollVideo {
        display:none!important
    }
}

@media(min-width: 1024px) and (max-width:1025px) {
    .scroll-video-content .anim_s_sub_t.title {
        opacity:1!important
    }

    .scroll-video-content .anim_s_txt.video-m-t {
        opacity: 1!important
    }

    .scroll-video-content .anim_s_txt.scroll-btn-box {
        opacity: 1!important
    }
}

@media(min-width: 1024px) and (max-width:1025px) {
    .video-container {
        height:auto!important
    }
}

@media(min-width: 1025px) {
    .scroll-video-content {
        width:100%!important;
        margin-right: 0!important
    }
}

@media(max-width: 1024px) {
    .about-img-box {
        text-align:center
    }
}

.about-col {
    padding-bottom: 16.41vw;
    position: relative;
    z-index: 2
}

@media(max-width: 1024px) {
    .about-col {
        padding-bottom:0
    }
}

@media(min-width: 1025px) {
    .about-img {
        text-align:right
    }
}

.about-img img {
    max-width: 100%;
    max-height: 100%
}

@media(min-width: 1024px) and (max-width:1025px) {
    .about-img img {
        max-height:408px
    }
}

@media(min-width: 1025px) {
    .about-img {
        position:absolute;
        top: 0;
        right: 10.27vw;
        width: 50.63vw;
        height: 63.85vw
    }
}

.about-verticle-section {
    padding-top: 6.6vw
}

.about-vericle-text-mobile {
    -webkit-transform: translateY(-.9vw);
    -ms-transform: translateY(-.9vw);
    transform: translateY(-.9vw)
}

.drag-section-offset {
    width: 49.64vw
}

@media(max-width: 719px) {
    .drag-section-offset {
        width:100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-offset {
        width:64vw
    }
}

@media(max-width: 719px) {
    .drag-section-intro {
        width:100vw
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .drag-section-intro {
        min-height:900px
    }
}

@media(max-width: 1024px) {
    .drag-section {
        overflow-x:auto;
        width: auto
    }
}

.drag-navigation-nav-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10vw;
    z-index: 1015;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.drag-navigation-nav-next {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 90vw;
    width: 10vw;
    z-index: 1015;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.drag-nav-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 10vw;
    z-index: 15;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.drag-nav-next {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 76vw;
    width: 40vw;
    z-index: 15;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none
}

@media(min-width: 1024px) and (min-width:1366px) {
    .drag-nav-next {
        left:92vw;
        width: 12vw
    }
}

.years-shell-inner {
    z-index: 9!important;
    cursor: default!important
}

@media(max-width: 719px) {
    .years-shell-inner {
        padding-left:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.years-shell-inner .btn,.years-shell-inner a {
    pointer-events: all
}

.years-shell .ds {
    position: relative;
    z-index: 12;
    pointer-events: none
}

.years-shell .ds .btn,.years-shell .ds .swiper-button-next,.years-shell .ds .swiper-button-prev,.years-shell .ds a,.years-shell .ds button {
    pointer-events: all
}

.years-shell .ds.awards-logos-box {
    position: absolute;
    z-index: 12;
    pointer-events: none
}

.years-shell .ds.awards-logos-box .btn,.years-shell .ds.awards-logos-box a,.years-shell .ds.awards-logos-box button {
    pointer-events: all
}

.anim-long-sectoin .dh {
    position: relative;
    z-index: 12;
    pointer-events: none
}

.anim-long-sectoin .dh .btn,.anim-long-sectoin .dh a,.anim-long-sectoin .dh button {
    pointer-events: all
}

.drag-section-wrap {
    width: 40000px
}

.drag-section-intro {
    background-color: #1d1d1d;
    min-height: 100vh
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .drag-section-intro {
        min-height:900px
    }
}

.drag-section-intro .drag-section-offset {
    background-size: cover;
    background-position: center 100%
}

.drag-section-img-text-box {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .drag-section-img-text-box {
        min-height:900px
    }
}

.drag-section-text-box {
    -ms-flex-item-align: center;
    align-self: center;
    margin-top: 0
}

@media(min-width: 1025px) {
    .drag-section-text-box {
        padding-right:0!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-text-box {
        padding-right:100px!important
    }
}

@media(max-width: 719px) {
    .drag-section-text-box {
        width:88vw
    }
}

.drag-section-img-text-box.vertical .drag-section-img {
    padding-top: 0;
    padding-bottom: 0
}

@media(max-width: 719px) {
    .drag-section-img-text-box.vertical .drag-section-img {
        padding-bottom:0
    }
}

.drag-section-img-text-box.vertical .drag-section-img img {
    height: 34.64vw
}

@media(max-width: 719px) {
    .drag-section-img-text-box.vertical .drag-section-img img {
        height:69.27vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img-text-box.vertical .drag-section-img img {
        height:103.91vw
    }
}

.drag-section-img-text-box.vertical .drag-section-img-box {
    -ms-flex-item-align: inherit;
    align-self: inherit
}

.drag-section-img-text-box.vertical .drag-section-text p {
    padding-bottom: 0
}

.drag-section-img-text-box.middle .drag-section-img-desc {
    padding-left: 3.39vw;
    padding-top: 0;
    padding-bottom: 3.39vw
}

@media(max-width: 719px) {
    .drag-section-img-text-box.middle .drag-section-img-desc {
        padding-left:50px;
        padding-bottom: 35px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img-text-box.middle .drag-section-img-desc {
        padding-left:50px;
        padding-bottom: 50px
    }
}

.drag-offset {
    padding: 3.39vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 2.39vw;
    padding-bottom: 2.39vw
}

.drag-offset.bpt {
    padding-top: 5.21vw!important
}

.drag-offset.pb0 {
    padding-bottom: 0
}

@media(max-width: 719px) {
    .drag-offset {
        padding:30px;
        padding-left: 50px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-offset {
        padding:50px
    }
}

.drag-section-text {
    max-width: 17.19vw;
    min-width: 250px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.drag-section-text .text.b {
    padding-bottom: 4.17vw
}

.drag-section-text .text.m {
    padding-bottom: 3.65vw
}

.drag-section-img-box {
    -ms-flex-item-align: end;
    align-self: flex-end
}

.drag-section-img-box .drag-for-more.text.m.bigger {
    padding: 1.82vw 0;
    text-align: center;
    padding-left: 11.2vw;
    display: inline-block
}

.anim-img-2 .parallax-drag-box {
    width: 42.71vw;
    height: 28.44vw
}

@media(max-width: 719px) {
    .anim-img-2 .parallax-drag-box {
        width:120.315vw;
        height: 80.57vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-img-2 .parallax-drag-box {
        width:148.44vw;
        height: 99.53vw
    }
}

.drag-section-img .responsive {
    width: 49.48vw;
    height: 33.18vw;
    position: absolute;
    max-width: none
}

@media(max-width: 719px) {
    .drag-section-img .responsive {
        width:120.315vw;
        height: 80.57vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img .responsive {
        width:148.44vw;
        height: 99.53vw
    }
}

.drag-section-img .responsive.horizontal {
    width: 42.34vw;
    height: 28.23vw
}

.drag-section-img .responsive.horizontal.horizontal2 {
    height: 37.29vw!important;
    width: 35.05vw!important
}

@media(max-width: 719px) {
    .drag-section-img .responsive.horizontal.horizontal2 {
        height:111.87vw!important;
        width: 105.15vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img .responsive.horizontal.horizontal2 {
        height:111.88vw!important;
        width: 105.16vw!important
    }
}

.drag-section-img .responsive.vertical {
    width: 36.04vw!important;
    height: 35vw!important
}

@media(max-width: 719px) {
    .drag-section-img .responsive.vertical {
        height:87.5vw!important;
        width: 90.01vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img .responsive.vertical {
        height:105vw!important;
        width: 108.13vw!important
    }
}

.drag-section-img .responsive.vertical.vertical2 {
    height: 34.11vw!important;
    width: 51.25vw!important
}

@media(max-width: 719px) {
    .drag-section-img .responsive.vertical.vertical2 {
        height:102.345vw!important;
        width: 153.75vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-img .responsive.vertical.vertical2 {
        height:102.34vw!important;
        width: 153.75vw!important
    }
}

.anim-drag-sec-2-img-1 .parallax-drag-box {
    height: 35vw!important;
    width: 29.27vw!important
}

@media(max-width: 719px) {
    .anim-drag-sec-2-img-1 .parallax-drag-box {
        height:87.5vw!important;
        width: 90.01vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-2-img-1 .parallax-drag-box {
        height:105vw!important;
        width: 108.13vw!important
    }
}

.anim-drag-sec-2-img-1 .parallax-drag-box img {
    width: 36.04vw!important;
    height: 35vw!important
}

@media(max-width: 719px) {
    .anim-drag-sec-2.c2 .parallax-drag-box {
        height:102.345vw!important;
        width: 153.75vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-2.c2 .parallax-drag-box {
        height:102.34vw!important;
        width: 153.75vw!important
    }
}

.anim-drag-sec-3 .parallax-drag-box {
    width: 42.34vw;
    height: 28.23vw
}

.anim-drag-sec-3 .parallax-drag-box img {
    width: 49.11vw!important;
    height: 32.97vw!important
}

.anim-drag-sec-3-img-1 .parallax-drag-box {
    width: 42.34vw;
    height: 28.23vw
}

@media(max-width: 719px) {
    .anim-drag-sec-3-img-1 .parallax-drag-box {
        width:147.345vw!important;
        height: 98.91vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-3-img-1 .parallax-drag-box {
        width:147.34vw!important;
        height: 98.91vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-3-img-1 .parallax-drag-box {
        height:111.88vw!important;
        width: 105.16vw!important
    }
}

.anim-drag-sec-3-img-1 .parallax-drag-box img {
    width: 49.11vw!important;
    height: 32.97vw!important
}

@media(max-width: 719px) {
    .anim-drag-sec-3-img-1 .parallax-drag-box img {
        width:147.345vw!important;
        height: 98.91vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-3-img-1 .parallax-drag-box img {
        width:147.34vw!important;
        height: 98.91vw!important
    }
}

@media(max-width: 719px) {
    .drag-image-5.drag-section-img.anim-drag-sec-3-img-1 .parallax-drag-box {
        height:111.87vw!important;
        width: 105.15vw!important
    }
}

.anim-drag-sec-2-img-1 .parallax-drag-box {
    height: 28.44vw!important;
    width: 42.71vw!important
}

@media(max-width: 719px) {
    .anim-drag-sec-2-img-1 .parallax-drag-box {
        height:87.5vw!important;
        width: 90.01vw!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .anim-drag-sec-2-img-1 .parallax-drag-box {
        height:105vw!important;
        width: 108.13vw!important
    }
}

.anim-drag-sec-2-img-1 .parallax-drag-box img {
    width: 49.11vw!important;
    height: 32.97vw!important
}

.drag-section-img-desc {
    overflow: hidden;
    display: table;
    vertical-align: middle;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-top: 2.39vw;
    padding-left: 3.39vw
}

@media(max-width: 719px) {
    .drag-section-img-desc {
        padding-left:50px;
        padding-top: 25px
    }
}

.drag-section-img-desc.pb {
    padding-bottom: 40px
}

.drag-section-img-desc .arrow.down {
    background-position: 0 9px
}

.drag-section-img-desc .arrow.down.up {
    -webkit-transform: scale(1,-1);
    -ms-transform: scale(1,-1);
    transform: scale(1,-1);
    -webkit-transform-origin: 50% 29%;
    -ms-transform-origin: 50% 29%;
    transform-origin: 50% 29%;
    background-position: 0 5px;
    position: relative;
    height: 27px;
    display: inline-block;
    vertical-align: top
}

.drag-section-img-desc .t-box {
    display: inline-block;
    vertical-align: middle;
    opacity: .4;
    text-shadow: 0 0 0 #282524
}

.drag-section-img-desc .t-box .t {
    width: 260px;
    display: inline-block;
    line-height: 20px;
    font-family: helvetica lt std roman,sans-serif
}

.arrow {
    display: table-cell;
    width: 70px;
    height: 12px;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-position: 0 0
}

.arrow.up {
    background-image: url(../images/icons/up-angle-arrow.png)
}

.arrow.down {
    background-image: url(../images/icons/down-angle-arrow.png);
    background-position: center 5px
}

.arrow.right {
    background-image: url(../images/icons/right-arrow.png);
    background-position: center
}

.arrow.right.grey {
    background-image: url(../images/icons/right-arrow-grey.png)
}

#drag-1,#drag-2 {
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    transform: translate(0,0);
    cursor: default!important
}

#drag-1 {
    z-index: 1014!important
}

.scoll-for-more {
    position: absolute;
    bottom: 0
}

@media(max-width: 1024px) {
    .scoll-for-more {
        padding-bottom:60px
    }
}

.scoll-for-more.plr {
    padding: 4.79vw 2.6vw!important;
    opacity: 1
}

@media(max-width: 1024px) {
    .scoll-for-more.plr {
        padding:4.79vw 25px 50px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .scoll-for-more.plr {
        margin-left:0;
        padding-left: 0!important;
        padding-right: 0!important
    }
}

@media(max-width: 719px) {
    .scoll-for-more.plr {
        padding-left:25px!important
    }
}

.scoll-for-more.plr .text {
    opacity: 1;
    padding: 0
}

@media(max-width: 1024px) {
    .scoll-for-more.plr .text span {
        padding-bottom:25px;
        padding-right: 20px
    }

    .scoll-for-more.plr .text .btn {
        margin-left: 0
    }
}

.scoll-for-more .arrow-box {
    display: table-cell;
    vertical-align: middle;
    overflow: hidden
}

.scoll-for-more .arrow {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: arrow-scroll 6s ease-out infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.scoll-for-more .text {
    padding-bottom: 0;
    display: table-cell;
    padding-left: 10px;
    letter-spacing: .5px;
    opacity: .5
}

@media(max-width: 719px) {
    .scoll-for-more.plr {
        margin-left:0;
        padding-left: 25px!important;
        padding-right: 0!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .scoll-for-more.plr {
        margin-left:0;
        padding-left: 50px!important;
        padding-right: 0!important
    }
}

.drag-for-more .arrow-box {
    display: table-cell;
    vertical-align: middle;
    overflow: hidden
}

.drag-for-more span {
    display: table-cell;
    vertical-align: middle
}

.drag-for-more .arrow {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation: arrow-scroll 6s ease-out infinite;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

@-webkit-keyframes arrow-scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    50% {
        -webkit-transform: translateX(90px);
        transform: translateX(90px)
    }

    50.1% {
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px)
    }

    100% {
        -webkit-transform: translateX(90px);
        transform: translateX(90px)
    }
}

@keyframes arrow-scroll {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    50% {
        -webkit-transform: translateX(90px);
        transform: translateX(90px)
    }

    50.1% {
        -webkit-transform: translateX(-20px);
        transform: translateX(-20px)
    }

    100% {
        -webkit-transform: translateX(90px);
        transform: translateX(90px)
    }
}

.fs-container-box {
    background-size: cover;
    background-position: 0 50%
}

#typedtext strong {
    color: #fff
}

#typedtext strong.active {
    animation: blink-caret .8s infinite;
    -webkit-animation: blink-caret .8s infinite
}

.typewrite {
    background-color: #e06757;
    min-height: 100vh
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .typewrite {
        min-height:700px
    }
}

.typewrite.white #typedtext2 {
    color: #fff
}

.typewrite.white .typewrite-text-col-1,.typewrite.white .typewrite-text-col-2 {
    color: #fff!important
}

@media(max-width: 400px) {
    .typewrite.typewriteCaseStudy {
        padding-bottom:40px
    }
}

.typewrite.typewriteCaseStudy #typedtext2 {
    padding: 3.65vw
}

@media(min-width: 720px) and (max-width:1024px) {
    .typewrite.typewriteCaseStudy #typedtext2 {
        padding:0
    }
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy #typedtext2 {
        padding:0
    }
}

.typewrite.typewriteCaseStudy #typedtext2 .Typewriter__wrapper {
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy #typedtext2 .Typewriter__wrapper {
        font-size:38px
    }
}

.typewrite.typewriteCaseStudy #typedtext2 .Typewriter__wrapper strong {
    color: #fff
}

.typewrite.typewriteCaseStudy #typedtext2 .Typewriter__cursor {
    color: #fff;
    font-size: 5vw;
    vertical-align: 18px
}

@media(max-width: 1440px) {
    .typewrite.typewriteCaseStudy #typedtext2 .Typewriter__cursor {
        vertical-align:13px
    }
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy #typedtext2 .Typewriter__cursor {
        font-size:35px;
        vertical-align: 6px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .typewrite.typewriteCaseStudy #typedtext2 .Typewriter__cursor {
        font-size:69px;
        vertical-align: -3px
    }
}

.typewrite.typewriteCaseStudy .typewrite-text-box {
    padding: 4.79vw 4.64vw 4.79vw 4.79vw;
    padding-top: 0
}

@media(min-width: 720px) and (max-width:1024px) {
    .typewrite.typewriteCaseStudy .typewrite-text-box {
        padding:0
    }
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy .typewrite-text-box {
        padding:0;
        overflow: hidden;
        padding-bottom: 25px
    }
}

.typewrite.typewriteCaseStudy .typewrite-text-col-1 {
    padding: 3.65vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 9%;
    padding-top: 0;
    opacity: .5;
    color: #000
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy .typewrite-text-col-1 {
        padding:30px 0 0
    }
}

.typewrite.typewriteCaseStudy .typewrite-text-col-2 {
    padding: 3.65vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-right: 9%;
    padding-top: 0;
    opacity: .5;
    color: #000
}

@media(max-width: 719px) {
    .typewrite.typewriteCaseStudy .typewrite-text-col-2 {
        padding:30px 0 0
    }
}

@media(max-width: 1024px) {
    .typewrite .section-wrap {
        display:block
    }

    .typewrite .section-offset {
        display: block
    }
}

@-webkit-keyframes blink-caret {
    from,to {
        color: transparent
    }

    50% {
        color: #fff
    }
}

@keyframes blink-caret {
    from,to {
        color: transparent
    }

    50% {
        color: #fff
    }
}

.drag-nums-num {
    font-size: 25.25vw;
    font-family: helvetica lt std bold,sans-serif;
    font-weight: 700;
    line-height: 1;
    color: #ff5842
}

@media(max-width: 1024px) {
    .drag-nums-num {
        font-size:57.25vw
    }
}

.drag-nums {
    background: #1a1a1a;
    height: 500vh;
    position: relative;
    overflow: hidden
}

@media(max-width: 1024px) {
    .drag-nums {
        height:100vh;
        min-height: 100vh;
        overflow: hidden;
        width: 100vw
    }
}

.drag-nums-row-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(min-width: 1025px) {
    .drag-nums-row-box {
        width:40000px
    }
}

@media(max-width: 1024px) {
    .drag-nums-row-box {
        width:40000px
    }
}

@media(min-width: 1025px) {
    .drag-nums-row {
        padding:0 50px
    }
}

@media(max-width: 1024px) {
    .drag-nums-row {
        height:50vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .drag-nums-row .drag-nums-row-box {
        -ms-flex-line-pack: center;
        align-content: center
    }
}

.drag-nums-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.drag-nums-box:nth-child(even) .drag-nums-num,.drag-nums-box:nth-child(even) .drag-nums-text {
    color: #505050
}

.drag-nums-text {
    font-size: 2.19vw;
    font-family: helvetica lt std bold,sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
    padding-left: .5vw;
    padding-right: 5.21vw
}

@media(max-width: 719px) {
    .drag-nums-text {
        font-size:16px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-nums-text {
        font-size:20px;
        letter-spacing: 1px
    }
}

@media(min-width: 1025px) {
    body.bg .b-gallery-5.col-d-50 {
        width:55%!important
    }
}

@media(max-width: 719px) {
    body .date time .title.b {
        font-size:60px!important
    }
}

@media(max-width: 719px) {
    body .msg {
        padding-bottom:0
    }

    body .msg span {
        -webkit-transform: translateY(-2px)!important;
        -ms-transform: translateY(-2px)!important;
        transform: translateY(-2px)!important
    }
}

@media(max-width: 719px) {
    body #afterSticky .title.b {
        font-family:Helvetica-Light,sans-serif
    }

    body #afterSticky .title.en {
        font-size: 41px
    }
}

@media(max-width: 719px) {
    body .drag-nums-text {
        letter-spacing:1.5px
    }
}

@media(max-width: 719px) {
    body .porfolio-img-box .social-feed-slide-box .title.m {
        padding-bottom:0;
        line-height: 1
    }
}

@media(max-width: 719px) {
    body .scroll-video-content .title.b {
        font-size:35px!important
    }

    body .scroll-video-content .title.b strong {
        display: block
    }
}

.drag-nums-wrap {
    height: 100vh
}

@media(max-width: 1024px) {
    .drag-nums-wrap {
        -webkit-transform:scale(-1) rotate(90deg) translateX(0);
        -ms-transform: scale(-1) rotate(90deg) translateX(0);
        transform: scale(-1) rotate(90deg) translateX(0);
        width: 100vh;
        height: 100vw;
        min-height: 0;
        -webkit-transform-origin: 50vh 50vh;
        -ms-transform-origin: 50vh 50vh;
        transform-origin: 50vh 50vh;
        overflow: hidden
    }
}

@media(min-width: 1025px) {
    .drag-nums-wrap {
        -webkit-transform-origin:inherit;
        -ms-transform-origin: inherit;
        transform-origin: inherit
    }
}

.drag-nums-row {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(min-width: 1025px) {
    .drag-nums-row {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 50vh
    }
}

@media(max-width: 1024px) {
    .drag-nums-row {
        display:block;
        height: 50vw
    }
}

@media(min-width: 1020px) {
    .awards-logos-box.mobile_only {
        display:none
    }
}

@media screen and (orientation: portrait) and (min-device-width:1020px) {
    .awards-logos-box.mobile_only {
        display:none!important
    }
}

#typedtext {
    position: absolute;
    top: 4.79vw;
    right: 4.79vw;
    left: 4.79vw;
    bottom: 4.79vw
}

@media(max-width: 719px) {
    #typedtext {
        top:20vw;
        font-size: 10.42vw;
        right: 25px;
        left: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #typedtext {
        top:20vw;
        font-size: 7.81vw;
        width: 70%
    }
}

@media(max-width: 1024px) {
    #typedtext {
        color:#323232
    }
}

.blinking-img-box {
    line-height: 0
}

@media(min-width: 600px) {
    .blinking-img-box {
        min-height:480px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .blinking-img-box {
        min-height:580px!important
    }
}

@media(min-width: 1200px) {
    .blinking-img-box {
        min-height:680px!important
    }
}

@media(max-width: 1024px) {
    .blinking-img-box {
        position:relative;
        right: 0;
        float: right;
        width: 100%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        min-height: 400px;
        margin-right: -50px;
        padding: 80px 0
    }
}

@media(max-width: 1024px) {
    .blinking-img-box {
        margin-right:0;
        padding: 80px 0 120px;
        float: none
    }
}

@media(min-width: 1025px) {
    .blinking-img-box {
        position:absolute;
        top: 0;
        right: 0;
        text-align: right;
        float: right;
        max-width: 100%;
        height: 100%
    }
}

.img-box-blink-1 {
    position: absolute;
    line-height: 0
}

@media(min-width: 1025px) {
    .img-box-blink-1 {
        right:38.02vw;
        top: 9.69vw;
        width: 12.55vw;
        height: 12.55vw
    }

    .img-box-blink-1 img {
        width: 12.55vw;
        height: 12.55vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-1 {
        top:5.69vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-1 {
        top:5.69vw;
        right: inherit;
        left: -4vw;
        width: calc(12.55vw *2);
        height: calc(12.55vw *2)
    }

    .img-box-blink-1 img {
        width: calc(12.55vw *2);
        height: calc(12.55vw *2)
    }
}

.img-box-blink-1 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-2 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-2 {
        right:29.11vw;
        top: 9.69vw;
        width: 8.02vw;
        height: 6.3vw
    }

    .img-box-blink-2 img {
        width: 8.02vw;
        height: 6.3vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-2 {
        top:5.69vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-2 {
        top:5.32vw;
        right: 13.46vw;
        width: calc(8.02vw *2);
        height: calc(6.3vw *2)
    }

    .img-box-blink-2 img {
        width: calc(8.02vw *2);
        height: calc(6.3vw *2)
    }
}

.img-box-blink-2 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-3 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-3 {
        right:44.64vw;
        top: 22.97vw;
        width: 10.42vw;
        height: 9.58vw
    }

    .img-box-blink-3 img {
        width: 10.42vw;
        height: 9.58vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-3 {
        top:18.97vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-3 {
        top:33.97vw;
        right: inherit;
        left: 3vw;
        width: calc(10.42vw *2);
        height: calc(9.58vw *2)
    }

    .img-box-blink-3 img {
        width: calc(10.42vw *2);
        height: calc(9.58vw *2)
    }
}

.img-box-blink-3 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-4 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-4 {
        right:44vw;
        top: 23.02vw
    }

    .img-box-blink-4 img {
        width: 5.99vw;
        height: 5.94vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-4 {
        top:19.02vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-4 {
        top:5.32vw;
        right: inherit;
        left: 42vw;
        width: calc(5.99vw *2);
        height: calc(5.94vw *2)
    }

    .img-box-blink-4 img {
        width: calc(5.99vw *2);
        height: calc(5.94vw *2)
    }
}

.img-box-blink-4 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-5 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-5 {
        right:28.13vw;
        top: 32.55vw;
        width: 10.94vw;
        height: 11.15vw
    }

    .img-box-blink-5 img {
        width: 10.94vw;
        height: 11.15vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-5 {
        top:28.55vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-5 {
        top:20.55vw;
        right: inherit;
        left: 27vw;
        width: calc(10.94vw *2);
        height: calc(11.15vw *2)
    }

    .img-box-blink-5 img {
        width: calc(10.94vw *2);
        height: calc(11.15vw *2)
    }
}

.img-box-blink-5 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-6 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-6 {
        right:6.46vw;
        top: 22.45vw;
        width: 11.41vw;
        height: 11.41vw
    }

    .img-box-blink-6 img {
        width: 11.41vw;
        height: 11.41vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-6 {
        top:18.45vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-6 {
        top:31.45vw;
        right: 11.46vw;
        width: calc(11.41vw *2);
        height: calc(11.41vw *2)
    }

    .img-box-blink-6 img {
        width: calc(11.41vw *2);
        height: calc(11.41vw *2)
    }
}

.img-box-blink-6 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-7 {
    line-height: 0;
    position: absolute
}

@media(min-width: 1025px) {
    .img-box-blink-7 {
        right:0;
        top: 9.32vw;
        width: 8.75vw;
        height: 11.61vw
    }

    .img-box-blink-7 img {
        width: 8.75vw;
        height: 11.61vw
    }
}

@media(max-width: 1440px) {
    .img-box-blink-7 {
        top:5.32vw
    }
}

@media(max-width: 1024px) {
    .img-box-blink-7 {
        top:5.32vw;
        right: -25px;
        width: calc(8.75vw *2);
        height: calc(11.61vw *2)
    }

    .img-box-blink-7 img {
        width: calc(8.75vw *2);
        height: calc(11.61vw *2)
    }
}

.img-box-blink-7 img {
    position: absolute;
    top: 0;
    left: 0
}

.img-box-blink-container img {
    opacity: 0
}

.img-box-blink-container img.active {
    opacity: 1
}

.grey_symbol {
    color: #dbdbdb
}

.about-img-txt.text.m {
    font-weight: 600
}

.about-img-txt.text.m i {
    display: block;
    font-size: 12px;
    opacity: .5;
    font-weight: 600;
    font-style: italic
}

@media(max-width: 1024px) {
    .about-hidden-mobile .plr {
        max-width:50%
    }
}

@media(max-width: 1024px) {
    .about-verticle-section.flex {
        display:block;
        overflow: hidden;
        width: 100%
    }
}

.about-img {
    z-index: 1
}

@media(max-width: 1024px) {
    .about-img {
        position:absolute;
        top: 55vh;
        width: 75%;
        right: 0
    }

    .about-img img {
        max-width: 100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .about-img {
        top:15vh;
        width: 51%
    }
}

@media(max-width: 719px) {
    .about-img {
        left:0;
        position: absolute;
        top: 55vh;
        width: 88%;
        right: 0
    }
}

@media(max-width: 1024px) {
    .second-col {
        padding-top:80vw
    }
}

@media(max-width: 719px) {
    .second-col {
        padding-top:135vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .second-col {
        width:100%;
        padding-right: 57%;
        padding-bottom: 21vw;
        padding-top: 0
    }
}

@media(max-width: 719px) {
    body.bg .second-col {
        padding-top:155vw
    }
}

@media(max-width: 719px) {
    body.bg .about-img {
        top:70vh
    }
}

@media(max-width: 719px) {
    body.bg .anim-quote-box .title.b {
        font-size:29px!important
    }
}

@media(max-width: 719px) {
    body.bg .typewrite .text.m.bigger {
        font-size:13px
    }
}

@media(max-width: 719px) {
    body.bg #typedtext {
        font-size:11.42vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .btn-box.btn-box-tab {
        width:100%;
        float: left;
        padding-right: 50%
    }
}

@media(max-width: 1024px) {
    .about-us {
        overflow:hidden
    }

    .about-us .swiper-wrapper {
        -ms-flex-wrap: inherit;
        flex-wrap: inherit;
        -webkit-perspective: 2000px;
        perspective: 2000px
    }

    .about-us .swiper-container {
        overflow: visible
    }

    .about-us .swiper-slide {
        padding-left: 12.79vw!important;
        opacity: .5;
        -webkit-transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        -o-transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out,.6s -webkit-transform ease-in-out;
        position: relative
    }

    .about-us .swiper-slide .about-mobile-arrows {
        position: absolute;
        top: 42px;
        left: -15px;
        right: calc(-12.79vw - 15px)
    }

    .about-us .swiper-slide .about-mobile-left-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        opacity: 0;
        -webkit-transition: .3s opacity ease-in-out;
        -o-transition: .3s opacity ease-in-out;
        transition: .3s opacity ease-in-out;
        -webkit-animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1)
    }

    .about-us .swiper-slide .about-mobile-right-arrow {
        width: 50px;
        height: 30px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0 center;
        float: right;
        opacity: 0;
        -webkit-transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s -webkit-transform ease-in-out;
        -o-transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out;
        transition: .3s opacity ease-in-out,.6s transform ease-in-out,.6s -webkit-transform ease-in-out;
        -webkit-transition-delay: .3s;
        -o-transition-delay: .3s;
        transition-delay: .3s;
        -webkit-animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1)
    }

    .about-us .swiper-slide-active {
        opacity: 1
    }

    .about-us .swiper-slide-active .about-mobile-left-arrow {
        opacity: 1
    }

    .about-us .swiper-slide-active .about-mobile-right-arrow {
        opacity: 1
    }

    .about-us .title.t.c_b {
        padding: 40px 0
    }

    .about-us .about-mobile-left-arrow {
        background-image: url(../images/icons/left-arrow-slider.svg)
    }

    .about-us .about-mobile-right-arrow {
        background-image: url(../images/icons/right-arrow-slider.svg)
    }
}

@media(max-width: 1024px) and (min-width:720px) and (max-width:1024px) {
    .about-us .swiper-slide .about-mobile-arrows {
        top:52px
    }
}

@media(max-width: 1024px) and (max-width:719px) {
    .about-us .title.t.c_b {
        padding:25px 0
    }
}

.verticle-typewrite-icon {
    width: 34px;
    height: 9px;
    display: inline-block
}

@media(min-width: 1025px) {
    .verticle-typewrite-icon {
        background-image:url(../images/icons/verticle-text-arrow.png);
        position: absolute;
        top: 17px;
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        left: -46px
    }
}

@media(max-width: 1024px) {
    .verticle-typewrite-icon {
        background-image:url(../images/icons/down-angle-arrow-black.png);
        width: 60px;
        height: 28px;
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;
        left: calc(4.79vw + 25px)
    }
}

@media(max-width: 719px) {
    .verticle-typewrite-icon {
        left:50px
    }
}

@media(min-width: 1025px) {
    .verticle-typewrite-text-box {
        position:absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        width: 0
    }
}

.verticle-typewrite-text.text.m {
    line-height: 1.3;
    width: 290px
}

@media(min-width: 1025px) {
    .verticle-typewrite-text.text.m {
        -webkit-transform:rotate(-90deg) translateX(20%) translateY(-107%);
        -ms-transform: rotate(-90deg) translateX(20%) translateY(-107%);
        transform: rotate(-90deg) translateX(20%) translateY(-107%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        position: absolute;
        top: 50%;
        margin: auto;
        padding-bottom: 0;
        text-align: left
    }
}

@media(max-width: 1400px) {
    .verticle-typewrite-text.text.m {
        -webkit-transform:rotate(-90deg) translateX(20%) translateY(-210%);
        -ms-transform: rotate(-90deg) translateX(20%) translateY(-210%);
        transform: rotate(-90deg) translateX(20%) translateY(-210%)
    }
}

@media(max-width: 1024px) {
    .verticle-typewrite-text.text.m {
        padding:4.79vw;
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        padding-left: calc(4.79vw + 92px);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: auto;
        max-width: 400px;
        color: #323232
    }
}

.setImage {
    opacity: 0
}

.setImage.loaded {
    opacity: 1
}

.drag-section {
    cursor: default!important
}

.drag-section .btn:hover,.drag-section a:hover {
    cursor: pointer
}

.blink-text-1.text.b {
    width: 20.99vw;
    position: absolute;
    right: 17.6vw;
    top: 23.23vw;
    font-size: .94vw;
    line-height: 1.4;
    opacity: .7;
    text-align: left
}

@media(max-width: 1440px) {
    .blink-text-1.text.b {
        top:14.23vw;
        font-size: 15px
    }
}

@media(max-width: 1024px) {
    .blink-text-1.text.b {
        top:inherit;
        font-size: 15px;
        bottom: 20vw;
        right: 0;
        left: 0;
        width: auto
    }
}

@media(min-width: 400px) {
    .blink-text-1.text.b {
        bottom:10vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .blink-text-1.text.b {
        bottom:-8vw;
        right: 0;
        left: 50px
    }
}

.blink-text-2.text.m {
    width: 20.99vw;
    position: absolute;
    right: 5.94vw;
    top: 36.41vw;
    opacity: .4;
    text-align: left;
    line-height: 1.8;
    font-size: .73vw
}

@media(max-width: 1440px) {
    .blink-text-2.text.m {
        width:24vw;
        right: 3.94vw;
        top: 31.41vw;
        line-height: 1.6;
        font-size: 13px
    }
}

@media(max-width: 719px) {
    .blink-text-2.text.m {
        width:auto;
        right: 0;
        top: 68.41vw;
        left: 0
    }
}

.parallax-drag-box {
    overflow: hidden;
    position: relative;
    line-height: 0
}

@media(min-width: 380px) {
    .anim-blink-gallery {
        width:calc(100% + 50px)
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .b-gallery .about-us-tools {
        padding-left:50px;
        padding-right: 50px
    }

    .b-gallery .title-offset {
        position: relative
    }

    .b-gallery .b-gallery-2 {
        padding: 0
    }

    .b-gallery .anim-blink-gallery {
        width: calc(100% + 50px);
        padding-left: 0;
        padding-right: 0
    }

    .b-gallery .b-gallery-4 {
        position: relative
    }

    .b-gallery .b-gallery-5 {
        padding-left: 50px;
        padding-right: 50px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .b-gallery-6 {
        padding-left:25px;
        padding-right: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .blink-text-1 {
        padding-left:25px;
        padding-right: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.b-gallery-4 {
    width: 100%
}

.col-d-100.service-image-box-wrap {
    width: 130%
}

.images-with-dec {
    text-align: center
}

.images-with-dec .img-with-decription {
    padding-bottom: 2.6vw;
    display: inline-block;
    margin: auto;
    text-align: left
}

.images-with-dec .img-with-decription-box {
    display: inline-block;
    margin-bottom: 2.6vw
}

.images-with-dec .img-with-decription-box img {
    -webkit-filter: drop-shadow(0 0 16px rgba(0,0,0,.41));
    filter: drop-shadow(0 0 16px rgba(0,0,0,.41));
    max-width: 100%
}

.images-with-dec .img-with-decription-box.no-shadow img {
    -webkit-filter: none;
    filter: none
}

.images-with-dec .img-with-decription-text-box {
    font-size: 14px;
    color: #aaa;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 3.13vw 0;
    width: auto;
    margin-top: 0
}

@media(max-width: 1024px) {
    .images-with-dec .img-with-decription-text-box {
        display:none
    }
}

.images-with-dec .down .img-with-decription-icon {
    padding-right: 20px
}

.images-with-dec .down .img-with-decription-text {
    max-width: 255px
}

.images-with-dec .up .img-with-decription-text-box {
    margin-top: 0
}

.images-with-dec .up .img-with-decription-icon {
    padding-right: 20px
}

.images-with-dec .up .img-with-decription-text {
    max-width: 255px
}

.images-with-dec .left-down {
    position: relative
}

.images-with-dec .left-down .img-with-decription-text-box {
    position: absolute;
    left: -87px;
    bottom: 2.6vw;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    width: 270px;
    line-height: 1.4
}

.images-with-dec .left-down .img-with-decription-icon {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 0
}

.images-with-dec .left-down .img-with-decription-text {
    position: absolute;
    top: 0;
    bottom: 0;
    padding-left: 23px
}

.images-with-dec .left-up {
    position: relative
}

.images-with-dec .left-up .img-with-decription-text-box {
    position: absolute;
    left: -87px;
    top: 370px;
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    width: 370px;
    line-height: 1.4
}

.images-with-dec .left-up .img-with-decription-box {
    display: inline-block;
    margin-bottom: 2.6vw
}

.images-with-dec .left-up .img-with-decription-text {
    position: absolute;
    padding-right: 61px;
    left: 0;
    right: 0
}

.images-with-dec .left-up .img-with-decription-icon {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    -webkit-transform-origin: left;
    -ms-transform-origin: left;
    transform-origin: left;
    position: absolute;
    right: 0;
    top: 6px;
    bottom: 0
}

@media(min-width: 720px) and (max-width:1024px) {
    .inner-blog-section .about-col .col-d-100 {
        margin-left:50%
    }

    .inner-blog-section .about-img-anim {
        left: 0;
        top: 22vh;
        width: 30%
    }
}

body.bg .grid-text .title.n {
    font-family: HelenProRegular,sans-serif
}

@media(min-width: 1025px) {
    body.bg .inner-blog-section .about-col .title.b {
        font-size:4.22vw;
        letter-spacing: 2px
    }

    body.bg .inner-blog-section .title.b {
        font-size: 4.22vw;
        letter-spacing: 2px
    }
}

@media(min-width: 1920px) {
    body.bg .inner-blog-section .about-col .title.b {
        font-size:81px
    }

    body.bg .inner-blog-section .title.b {
        font-size: 81px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .drag-section-offset .about-us-tools {
        padding-left:25px
    }
}

@media(min-width: 1020px) and (max-width:1025px) {
    .scroll-video-section.m100vh {
        min-height:950px
    }
}

@media(min-width: 1020px) and (max-width:1025px) {
    #typedtext {
        top:0;
        font-size: 5.81vw;
        width: 80%
    }
}

@media(min-width: 1020px) and (max-width:1025px) {
    .blinking-img-box {
        min-height:660px!important
    }
}

@media(min-width: 1020px) and (max-width:1025px) {
    .about-hidden-mobile {
        width:30%!important
    }
}

@media(min-width: 1020px) and (max-width:1025px) {
    .about-vericle-text-mobile {
        width:70%!important
    }
}

@media(min-width: 1025px) and (max-width:1366px) {
    .gallery-blink-section {
        min-height:800px
    }
}

@media(min-width: 1025px) and (max-width:1366px) {
    .gallery-blink-section-inner {
        min-height:800px
    }
}

#scrollVideoBox {
    position: relative;
    z-index: 2000
}

@media(min-width: 1025px) {
    #scrollVideoBox {
        height:100%
    }
}

@media(min-width: 1920px) {
    #scrollVideoBox {
        min-height:0;
        height: auto
    }
}

.video-services {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 1
}

.video-container {
    width: 100%;
    position: sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
    background: #171717
}

.video-container .section-wrap {
    position: relative;
    z-index: 2001;
    overflow: hidden;
    height: 100%
}

.video-container #scrollVideo {
    position: absolute;
    z-index: 1
}

@media(max-width: 1024px) {
    .video-container {
        height:auto
    }
}

.scroll-video-navigation-box {
    position: absolute;
    bottom: 25px;
    left: 150px;
    right: 150px;
    text-align: center;
    height: 150px
}

@media(max-width: 1024px) {
    .scroll-video-navigation-box {
        display:none
    }
}

.text.n.gap.op_05 {
    color: #a8a8a8;
    font-family: helvetica lt std light,sans-serif;
    max-width: 90%;
    font-weight: 500;
    opacity: 1;
    font-size: 14px
}

.scroll-video-content .text.m {
    color: #a8a8a8;
    font-family: helvetica lt std light,sans-serif;
    max-width: 90%;
    font-weight: 500
}

.scroll-video-content .text.m ul {
    padding: 0;
    margin: 0;
    list-style: none;
    color: #fff;
    font-size: 14px;
    padding-left: 24px;
    padding-top: 30px
}

@media(max-width: 1440px) {
    .scroll-video-content .text.m ul {
        font-size:13px
    }
}

.scroll-video-content .text.m ul li {
    padding-bottom: 6px;
    position: relative
}

.scroll-video-content .text.m ul li:before {
    content: '';
    display: inline-block;
    left: -23px;
    top: 7px;
    width: 4px;
    height: 4px;
    background-repeat: no-repeat;
    position: absolute;
    background: #fd5742;
    border-radius: 50%
}

@media(max-width: 1680px) {
    .scroll-video-content .title.b {
        font-size:3.2vw
    }
}

.anim_s_txt_2 {
    padding-top: 4.52vw!important
}

@media(max-width: 1024px) {
    .anim_s_txt_2 {
        margin-left:4%
    }
}

@media(max-width: 1380px) {
    .anim_s_txt_2 {
        padding-top:4.52vw!important
    }
}

@media(max-width: 1024px) {
    .anim_s_txt_2 {
        padding-top:0
    }
}

body.bg .anim_s_txt_2 {
    padding-top: .85vw!important
}

@media(max-width: 1380px) {
    body.bg .anim_s_txt_2 {
        padding-top:.85vw!important
    }
}

body.bg .anim_s_txt_2 .gap.text.n {
    padding-top: 0
}

@media(min-width: 1025px) {
    body.bg .scroll-video-content .title.b {
        font-size:3vw;
        letter-spacing: 1px
    }
}

@media(min-width: 1920px) {
    body.bg .scroll-video-content .title.b {
        font-size:55px
    }
}

@media(min-width: 1025px) {
    body.bg .scroll-video-content .col-d-31 {
        width:36%
    }

    body.bg .scroll-video-content .col-d-40 {
        width: 34%
    }
}

.scroll-btn-link {
    color: #fd5742;
    position: relative;
    margin-top: 15px;
    display: inline-block;
    overflow: hidden;
    padding-bottom: 0;
    font-size: 12px;
    font-family: helvetica lt std roman,sans-serif;
    font-weight: 600
}

@media(max-width: 1400px) {
    .scroll-btn-link {
        margin-top:0
    }
}

@media(max-width: 1024px) {
    .scroll-btn-link {
        margin-bottom:30px
    }
}

.scroll-btn-link:before {
    content: '';
    position: absolute;
    -webkit-transition: -webkit-transform .5s ease;
    transition: -webkit-transform .5s ease;
    -o-transition: transform .5s ease;
    transition: transform .5s ease;
    transition: transform .5s ease,-webkit-transform .5s ease;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 1px;
    background: #fd5742;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.scroll-btn-link:hover:before {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%)
}

@media(min-width: 1025px) {
    .scroll-video-content {
        opacity:0
    }

    .scroll-video-content.active {
        opacity: 1
    }
}

.scroll-video-navigation {
    position: relative;
    height: 100px;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    width: auto;
    display: inline-block;
    width: 895px
}

.scroll-video-progress {
    display: inline-block;
    font-size: 14px;
    letter-spacing: .5px;
    font-family: helvetica lt std bold,sans-serif;
    opacity: 1;
    font-weight: 700;
    z-index: 1;
    -webkit-transform: translateY(50px);
    -ms-transform: translateY(50px);
    transform: translateY(50px);
    position: relative
}

.scroll-video-progress.active {
    opacity: 1!important;
    z-index: 5
}

.scroll-video-progress.act {
    z-index: 5
}

.scroll-video-progress.dragDirection image {
    display: none!important
}

.scroll-video-progress-point {
    display: inline-block;
    min-width: 67px;
    position: relative;
    text-align: center
}

.scroll-video-progress-text {
    position: absolute;
    width: 200%;
    top: -55px;
    left: -50%;
    right: 0;
    cursor: pointer
}

.scroll-video-progress-text strong {
    color: #ff5842;
    font-weight: 700
}

.scroll-video-progress-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    margin: auto;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 50%
}

.next-service-slider {
    position: absolute;
    right: 4.9vw;
    top: 34px;
    -webkit-transition: -webkit-transform .5s linear;
    transition: -webkit-transform .5s linear;
    -o-transition: transform .5s linear;
    transition: transform .5s linear;
    transition: transform .5s linear,-webkit-transform .5s linear
}

@media(max-width: 1660px) {
    .next-service-slider {
        right:3.5vw
    }
}

@media(max-width: 1440px) {
    .next-service-slider {
        right:0
    }
}

@media(max-width: 1300px) {
    .next-service-slider {
        right:-3vw
    }
}

@media(max-width: 1200px) {
    .next-service-slider {
        right:-7vw
    }
}

.next-service-slider:hover {
    -webkit-transform: translateX(5px);
    -ms-transform: translateX(5px);
    transform: translateX(5px)
}

.next-service-slider svg polygon {
    fill: #ff5b46
}

.next-service-slider.disabled:hover {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.next-service-slider.disabled svg {
    opacity: .5
}

.next-service-slider.disabled svg polygon {
    fill: #fff
}

.prev-service-slider {
    position: absolute;
    left: 4.9vw;
    top: 34px;
    -webkit-transition: -webkit-transform .5s linear;
    transition: -webkit-transform .5s linear;
    -o-transition: transform .5s linear;
    transition: transform .5s linear;
    transition: transform .5s linear,-webkit-transform .5s linear
}

@media(max-width: 1660px) {
    .prev-service-slider {
        left:3.5vw
    }
}

@media(max-width: 1440px) {
    .prev-service-slider {
        left:0
    }
}

@media(max-width: 1300px) {
    .prev-service-slider {
        left:-3vw
    }
}

@media(max-width: 1200px) {
    .prev-service-slider {
        left:-7vw
    }
}

.prev-service-slider:hover {
    -webkit-transform: translateX(-5px);
    -ms-transform: translateX(-5px);
    transform: translateX(-5px)
}

.prev-service-slider svg polygon {
    fill: #ff5b46
}

.prev-service-slider.disabled:hover {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

.prev-service-slider.disabled svg {
    opacity: .5;
    -webkit-transition: opacity .4 linear;
    -o-transition: opacity .4 linear;
    transition: opacity .4 linear
}

.prev-service-slider.disabled svg polygon {
    fill: #fff
}

.scroll-video-progress-dashes {
    width: 200px;
    background: rgba(255,255,255,.2);
    height: 1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    opacity: 1;
    position: relative;
    margin-top: 8px
}

.scroll-video-progress-dashes .scroll-video-progress-dashes-active {
    position: absolute;
    width: 200px;
    background: #fe5b46;
    height: 1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.scroll-video-progress-dashes .scroll-video-progress-dashes-active.active {
    opacity: 1
}

.scroll-video-progress-dashes .scroll-video-progress-dashes-active.left {
    right: 0;
    left: inherit
}

.scroll-video-progress-dashes .scroll-video-progress-dashes-active.right {
    right: 0;
    left: inherit
}

@media(max-width: 1024px) {
    .scroll-video-content.hidden {
        display:block;
        visibility: visible;
        opacity: 1
    }
}

@media(min-width: 1025px) {
    .scroll-video-content.hidden {
        opacity:0;
        visibility: hidden;
        display: none
    }
}

@media(max-width: 1440px) and (min-width:1024px) {
    .scroll-video-content .col-d-30 {
        width:40%;
        padding-top: 30px
    }

    .scroll-video-content .col-d-40 {
        width: 40%
    }
}

@media(max-width: 719px) {
    .videoscroll-slider-box {
        padding-right:25px
    }
}

.swiper-slide-active .scroll-video-img .arrow-box {
    opacity: 1
}

@media(max-width: 1024px) {
    .scroll-video-img {
        text-align:center;
        padding-top: 25px;
        padding-bottom: 25px;
        position: relative
    }

    .scroll-video-img .arrow-box {
        opacity: 0;
        position: absolute;
        top: 50%;
        right: 0;
        width: 100%
    }

    .scroll-video-img .arrow-box .arrow.right {
        background-image: url(../images/icons/right-arrow-slider-white.svg);
        float: right;
        background-position: 100% center;
        opacity: .5;
        -webkit-animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeY 3s infinite cubic-bezier(.4,0,.2,1)
    }

    .scroll-video-img .arrow-box .arrow.left {
        background-image: url(../images/icons/left-arrow-slider-white.svg);
        float: left;
        background-position: 0 center;
        opacity: .5;
        -webkit-animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1);
        animation: swipeYM 3s infinite cubic-bezier(.4,0,.2,1)
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .scroll-video-img {
        padding-right:50px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .scroll-video-img {
        display:none
    }
}

@media(max-width: 1024px) {
    .video-container .section-offset {
        padding:0
    }
}

@media(max-width: 719px) {
    .video-container .scroll-video-content {
        padding:50px 25px 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 1024px) {
    .video-container .about-us-tools {
        padding:25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 1024px) {
    .video-m-t {
        margin:auto;
        float: none
    }
}

.morph-video-content {
    position: relative;
    z-index: 2
}

.morph-video {
    -webkit-transform: translate3d(0,2px,0);
    transform: translate3d(0,2px,0);
    z-index: 1
}

@media(min-width: 1025px) {
    .morph-video {
        position:absolute;
        width: 67%;
        right: -11%;
        top: 10vh
    }
}

@media(min-width: 1661px) {
    .morph-video {
        width:67%
    }
}

.morph-video .vimeo-wrapper {
    position: absolute;
    overflow: hidden;
    width: 38.85vw;
    height: 56.25vw;
    margin: auto;
    top: -5.79vw;
    right: 14.08vw
}

@media(max-width: 1024px) {
    .morph-video .vimeo-wrapper {
        position:relative;
        left: 0;
        left: -14vw;
        right: 0;
        margin: auto;
        width: 100vw;
        height: 97.5vw
    }
}

@media(max-width: 1024px) {
    .morph-video .vimeo-wrapper {
        left:-5vw
    }
}

.morph-video .vimeo-wrapper video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 101%;
    border: 0
}

@media(max-width: 1024px) {
    .morph-video .vimeo-wrapper video {
        height:104%
    }
}

.morph-video-box {
    overflow: hidden
}

.draw-circle-svg-3.prevent {
    pointer-events: none
}

.anim_s_txt_2 {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

#scrollVideo {
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto
}

@media(min-width: 1025px) {
    #scrollVideo {
        top:3.65vw
    }
}

@media(max-width: 1440px) {
    #scrollVideo {
        -webkit-transform:scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8)
    }
}

@media(max-width: 1400px) {
    #scrollVideo {
        -webkit-transform:scale(.7);
        -ms-transform: scale(.7);
        transform: scale(.7)
    }
}

.hidden-layer {
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none
}

@-webkit-keyframes float {
    0% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }

    50% {
        -webkit-transform: translatey(-10px) rotate(20deg);
        transform: translatey(-10px) rotate(20deg)
    }

    100% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }
}

@keyframes float {
    0% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }

    50% {
        -webkit-transform: translatey(-10px) rotate(20deg);
        transform: translatey(-10px) rotate(20deg)
    }

    100% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }
}

@-webkit-keyframes float2 {
    0% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }

    50% {
        -webkit-transform: translatey(10px) rotate(0);
        transform: translatey(10px) rotate(0)
    }

    100% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }
}

@keyframes float2 {
    0% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }

    50% {
        -webkit-transform: translatey(10px) rotate(0);
        transform: translatey(10px) rotate(0)
    }

    100% {
        -webkit-transform: translatey(0) rotate(0);
        transform: translatey(0) rotate(0)
    }
}

@-webkit-keyframes float3 {
    0% {
        -webkit-transform: translatex(0) rotate(0);
        transform: translatex(0) rotate(0)
    }

    50% {
        -webkit-transform: translatex(10px) rotate(0);
        transform: translatex(10px) rotate(0)
    }

    100% {
        -webkit-transform: translatex(0) rotate(0);
        transform: translatex(0) rotate(0)
    }
}

@keyframes float3 {
    0% {
        -webkit-transform: translatex(0) rotate(0);
        transform: translatex(0) rotate(0)
    }

    50% {
        -webkit-transform: translatex(10px) rotate(0);
        transform: translatex(10px) rotate(0)
    }

    100% {
        -webkit-transform: translatex(0) rotate(0);
        transform: translatex(0) rotate(0)
    }
}

.part-img {
    position: absolute;
    top: 0;
    right: 0
}

@media(max-width: 1024px) {
    .part-img {
        opacity:0
    }

    .part-img.part-img-1 {
        opacity: 1;
        right: 50%;
        max-width: 2%;
        top: 18%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-2 {
        opacity: 1;
        right: 40%;
        max-width: 7%;
        top: 15%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-4 {
        opacity: 1;
        right: 12%;
        max-width: 11%;
        top: 25%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-5 {
        opacity: 1;
        right: 17%;
        max-width: 6%;
        top: 34%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-6 {
        opacity: 1;
        right: 12%;
        max-width: 4%;
        top: 30%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-13 {
        opacity: 1;
        right: 12%;
        max-width: 5%;
        top: 51%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-19 {
        opacity: 1;
        right: 39%;
        max-width: 3%;
        top: 25%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-21 {
        opacity: 1;
        right: 17%;
        max-width: 2%;
        top: 19%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-24 {
        opacity: 1;
        right: 4%;
        max-width: 5%;
        top: 20%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-25 {
        opacity: 1;
        right: -1%;
        max-width: 8%;
        top: 13%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-26 {
        opacity: 1;
        right: 6%;
        max-width: 6%;
        top: 16%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-28 {
        opacity: 1;
        right: 7%;
        max-width: 17%;
        top: 55%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-31 {
        opacity: 1;
        right: 20%;
        max-width: 6%;
        top: 44%;
        -webkit-animation: float 8s ease-in-out infinite;
        animation: float 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }

    .part-img.part-img-33 {
        opacity: 1;
        right: -33%;
        max-width: 46%;
        top: 25%;
        -webkit-animation: float2 8s ease-in-out infinite;
        animation: float2 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }
}

@media(min-width: 1025px) {
    .part-img.part-img-1 {
        width:.36vw;
        height: .36vw;
        right: 35.16vw;
        top: 8.02vw
    }

    .part-img.part-img-2 {
        width: 1.77vw;
        height: 1.77vw;
        right: 33.33vw;
        top: 5.26vw
    }

    .part-img.part-img-3 {
        width: .73vw;
        height: .73vw;
        right: 29.06vw;
        top: 12.6vw
    }

    .part-img.part-img-4 {
        width: 3.39vw;
        height: 1.98vw;
        right: 20.83vw;
        top: 11.72vw
    }

    .part-img.part-img-5 {
        width: 1.93vw;
        height: 1.72vw;
        right: 22.4vw;
        top: 17.76vw
    }

    .part-img.part-img-6 {
        width: .94vw;
        height: .78vw;
        right: 21.93vw;
        top: 15.52vw
    }

    .part-img.part-img-7 {
        display: none
    }

    .part-img.part-img-8 {
        width: .26vw;
        height: .31vw;
        right: 17.24vw;
        top: 44.64vw
    }

    .part-img.part-img-9 {
        width: 1.72vw;
        height: 2.34vw;
        right: 18.7vw;
        top: 30.94vw
    }

    .part-img.part-img-10 {
        width: 1.46vw;
        height: 1.98vw;
        right: 11.04vw;
        top: 45.52vw
    }

    .part-img.part-img-11 {
        width: .42vw;
        height: .73vw;
        right: 5.63vw;
        top: 42.66vw
    }

    .part-img.part-img-12 {
        width: .47vw;
        height: .42vw;
        right: 16.15vw;
        top: 28.75vw
    }

    .part-img.part-img-13 {
        width: 1.25vw;
        height: 1.25vw;
        right: 15.1vw;
        top: 22.29vw
    }

    .part-img.part-img-14 {
        width: .99vw;
        height: 1.3vw;
        right: 14.79vw;
        top: 1.2vw
    }

    .part-img.part-img-15 {
        width: 1.77vw;
        height: 1.3vw;
        right: .47vw;
        top: 8.49vw
    }

    .part-img.part-img-16 {
        width: 1.61vw;
        height: 1.35vw;
        right: 5.05vw;
        top: 7.24vw
    }

    .part-img.part-img-17 {
        width: 1.25vw;
        height: .94vw;
        right: 7.14vw;
        top: 9.53vw
    }

    .part-img.part-img-18 {
        width: 1.51vw;
        height: 2.19vw;
        right: 13.54vw;
        top: 15.68vw
    }

    .part-img.part-img-19 {
        width: .47vw;
        height: .47vw;
        right: 15.83vw;
        top: 11.77vw
    }

    .part-img.part-img-20 {
        width: .52vw;
        height: .68vw;
        right: 4.84vw;
        top: 8.85vw
    }

    .part-img.part-img-21 {
        width: .47vw;
        height: .52vw;
        right: 17.86vw;
        top: 28.39vw
    }

    .part-img.part-img-22 {
        width: 2.08vw;
        height: 2.34vw;
        right: 7.24vw;
        top: 46.35vw
    }

    .part-img.part-img-23 {
        width: 1.51vw;
        height: 1.25vw;
        right: 19.17vw;
        top: 21.77vw
    }

    .part-img.part-img-24 {
        width: 1.46vw;
        height: 1.09vw;
        right: 12.81vw;
        top: 13.8vw
    }

    .part-img.part-img-25 {
        width: 2.29vw;
        height: 1.77vw;
        right: 11.15vw;
        top: 9.58vw
    }

    .part-img.part-img-26 {
        width: .57vw;
        height: .63vw;
        right: 12.71vw;
        top: 11.51vw
    }

    .part-img.part-img-27 {
        width: 1.82vw;
        height: 2.76vw;
        right: 7.76vw;
        top: 10.83vw
    }

    .part-img.part-img-28 {
        width: 4.84vw;
        height: 3.02vw;
        right: 15.94vw;
        top: 23.91vw
    }

    .part-img.part-img-29 {
        width: 1.15vw;
        height: .63vw;
        right: 9.53vw;
        top: 0
    }

    .part-img.part-img-30 {
        width: 2.08vw;
        height: 1.67vw;
        right: 2.81vw;
        top: 0
    }

    .part-img.part-img-31 {
        width: 1.51vw;
        height: 1.25vw;
        right: 19.22vw;
        top: 21.77vw
    }

    .part-img.part-img-32 {
        display: none
    }

    .part-img.part-img-33 {
        width: 15.73vw;
        height: 28.85vw;
        right: -2.6vw;
        top: 12.6vw;
        -webkit-animation: float3 8s ease-in-out infinite;
        animation: float3 8s ease-in-out infinite;
        -webkit-animation-delay: .5s;
        animation-delay: .5s
    }
}

.parallaxMove {
    overflow: hidden;
    position: relative
}

@media(max-width: 1024px) {
    .parallaxMove .about-us-tools {
        position:relative;
        z-index: 2
    }
}

.parallaxMove .col.col-d-100.c_b.title-offset.p-t-100 {
    position: relative;
    z-index: 2
}

.part-img-box {
    overflow: hidden
}

@media(max-width: 1024px) {
    .part-img-box {
        position:fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        z-index: 1
    }
}

.portfolio-box {
    color: #231f1e;
    margin-bottom: 5.21vw
}

.portfolio-box .porfolio-img-outer-box {
    overflow: hidden;
    -webkit-box-shadow: 10px 15px 50px 0 #d5d5d5;
    box-shadow: 10px 15px 50px 0 #d5d5d5;
    position: relative;
    width: 100%;
    padding-top: 100%
}

.portfolio-box .porfolio-img {
    -webkit-transform: scale(1)!important;
    -ms-transform: scale(1)!important;
    transform: scale(1)!important
}

.portfolio-box:hover .porfolio-img {
    -webkit-transform: scale(1.02)!important;
    -ms-transform: scale(1.02)!important;
    transform: scale(1.02)!important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.porfolio-outer-img-box {
    overflow: hidden
}

.porfolio-outer-img-box .porfolio-img {
    -webkit-transition: 1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important;
    -o-transition: 1s transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s transform cubic-bezier(.25,.46,.45,.94),1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important
}

.porfolio-img {
    -webkit-transition: 1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important;
    -o-transition: 1s transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s transform cubic-bezier(.25,.46,.45,.94)!important;
    transition: 1s transform cubic-bezier(.25,.46,.45,.94),1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important
}

@media(min-width: 1025px) {
    body.bg .social-feed-slide-box .title.m {
        font-size:2.75vw;
        padding-bottom: 1.2vw;
        line-height: 1.15
    }
}

@media(min-width: 1920px) {
    body.bg .social-feed-slide-box .title.m {
        font-size:53px;
        padding-bottom: 23px
    }
}

.porfolio-img-box {
    position: relative
}

@media(min-width: 1025px) {
    .porfolio-img-box.col-d-50 {
        padding-top:0;
        margin: 0;
        width: 100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .porfolio-img-box.col-t-50 {
        padding-top:0;
        margin: 0;
        width: 100%
    }
}

@media(max-width: 719px) {
    .porfolio-img-box.col-m-100 {
        padding-top:0;
        margin: 0;
        width: 100%
    }
}

.porfolio-img-box .porfolio-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    padding-top: 100%
}

.porfolio-img-box .title.sm {
    font-size: 18px;
    z-index: 1;
    position: relative;
    font-family: helvetica lt std roman,sans-serif;
    letter-spacing: .5px;
    padding-bottom: 10px;
    padding-top: 25px;
    font-weight: 600
}

@media(max-width: 719px) {
    .porfolio-img-box .title.sm {
        font-size:27px;
        letter-spacing: 0
    }
}

.porfolio-img-box .text.m.bigger {
    font-size: 13px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    letter-spacing: .6px;
    padding-bottom: 0;
    color: #a1a1a1;
    text-shadow: none
}

@media(max-width: 719px) {
    .porfolio-img-box .text.m.bigger {
        padding-top:15px
    }
}

.porfolio-img-box .social-feed-slide-box .title.m {
    padding-bottom: 1.2vw;
    line-height: 1.15
}

@media(min-width: 1025px) {
    .porfolio-img-box .social-feed-slide-box .title.m {
        font-size:2.75vw
    }
}

@media(min-width: 1920px) {
    .porfolio-img-box .social-feed-slide-box .title.m {
        font-size:53px
    }
}

@media(min-width: 1025px) {
    .porfolio-img-box .social-feed-slide-box .title.m.smaller {
        font-size:2.75vw
    }
}

@media(min-width: 1920px) {
    .porfolio-img-box .social-feed-slide-box .title.m.smaller {
        font-size:53px
    }
}

.porfolio-img-box .social-feed-slide-box .text.m._s {
    padding-bottom: 12px;
    font-size: 12px
}

.porfolio-img-box .social-feed-slide-box .text.m._s .text.n {
    font-size: 14px;
    padding-bottom: .26vw;
    display: block;
    color: #272727
}

.porfolio-img-box .social-feed-slide-box .btn-box {
    margin-top: .52vw
}

.casestudies-grid-project {
    width: 100%
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudies-grid-project .casestudies-col {
        -webkit-box-ordinal-group:inherit!important;
        -ms-flex-order: inherit!important;
        order: inherit!important
    }
}

.porfolio-text-box {
    float: left;
    padding: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative
}

@media(max-width: 719px) {
    .porfolio-text-box {
        text-align:right;
        width: 100%;
        padding: 30px 25px;
        text-align: left
    }
}

.porfolio-img-outer-box.tilt {
    -webkit-perspective: 1000px;
    perspective: 1000px
}

.porfolio-img-outer-box.tilt .js-tilt {
    -webkit-transition: 1s -webkit-transform ease-in-out;
    transition: 1s -webkit-transform ease-in-out;
    -o-transition: 1s transform ease-in-out;
    transition: 1s transform ease-in-out;
    transition: 1s transform ease-in-out,1s -webkit-transform ease-in-out
}

.portfolio-box:hover .porfolio-img-outer-box.tilt {
    -webkit-transform: scale(1)!important;
    -ms-transform: scale(1)!important;
    transform: scale(1)!important
}

.social-feed-slide .title.sm {
    font-size: 18px;
    z-index: 1;
    position: relative;
    font-family: helvetica lt std roman,sans-serif;
    letter-spacing: .5px;
    padding-bottom: 5px;
    font-weight: 600;
    width: 100%;
    display: block
}

@media(max-width: 1440px) {
    .social-feed-slide .title.sm {
        padding-left:2vw
    }
}

@media(max-width: 719px) {
    .social-feed-slide .title.sm {
        display:block;
        padding-top: 0
    }
}

.social-feed-slide .text.m.bigger {
    font-size: 13px;
    line-height: 1.5;
    position: relative;
    z-index: 1;
    letter-spacing: .6px;
    padding-bottom: 0;
    color: #a1a1a1;
    text-shadow: none;
    padding-top: 6px
}

@media(max-width: 1440px) {
    .social-feed-slide .text.m.bigger {
        padding-left:2vw
    }
}

.case-study-hero-slider .section-offset.dark .title {
    color: #000
}

.case-study-hero-slider .section-offset.dark .slider-txt {
    color: #9c9c9c
}

.case-study-hero-slider .section-offset.dark .white_trans {
    color: #9c9c9c;
    border: 1px solid #9c9c9c;
    opacity: .9
}

.case-study-hero-slider .section-offset.dark .white_trans:hover {
    background: #fe5b46;
    color: #fff;
    border: 1px solid #fe5b46
}

@media(max-width: 719px) {
    #portfolio-slider .home-slider-item-box {
        left:-25px;
        right: -25px;
        width: auto
    }
}

.frost-house {
    max-width: 100%;
    margin: auto
}

.frost-house .point-box {
    display: inline-block;
    position: absolute;
    -webkit-transition: -webkit-transform .6s ease;
    transition: -webkit-transform .6s ease;
    -o-transition: transform .6s ease;
    transition: transform .6s ease;
    transition: transform .6s ease,-webkit-transform .6s ease
}

.frost-house .point-box:after {
    content: '';
    position: absolute;
    top: 19px;
    height: 22px;
    background: #fe4032;
    width: 1px;
    left: 0;
    right: 0;
    margin: auto
}

.frost-house .point-box .point-title {
    background: #fe4032;
    color: #fff;
    padding: 4px 6px;
    border-radius: 4px;
    margin: auto;
    font-size: 9px;
    display: inline-block;
    font-weight: 600;
    font-family: Montserrat,sans-serif;
    letter-spacing: .5px;
    white-space: nowrap;
    text-transform: uppercase
}

.frost-house .point-box .point {
    width: 10px;
    height: 10px;
    background-color: #eb3b2e;
    border-radius: 50%;
    z-index: 8;
    margin-top: 22px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative
}

.frost-house .point-box .point:after {
    position: absolute;
    background: #eb3b2e;
    width: 30px;
    height: 30px;
    content: "";
    display: block;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: wave 3s 1.5s infinite linear;
    animation: wave 3s 1.5s infinite linear;
    right: -3px;
    margin: auto;
    top: 0;
    bottom: 0
}

.frost-house .pb1 {
    top: 9vw;
    left: 6vw
}

.frost-house .pb2 {
    top: 10vw;
    left: -1vw
}

.frost-house .pb3 {
    top: 7vw;
    left: 10.5vw
}

.frost-house .pb4 {
    top: 6.9vw;
    left: 1.2vw
}

.frost-house .pb5 {
    top: 8.5vw;
    left: 1.5vw
}

.frost-house .pb6 {
    top: 5.5vw;
    left: -.5vw
}

.frost-house .pb7 {
    top: 4vw;
    left: 1.5vw
}

.frost-house .pb8 {
    top: 6vw;
    left: 6vw
}

.frost-house .pb9 {
    top: 5vw;
    left: 14.5vw
}

.frost-house .pb10 {
    top: 4vw;
    left: 17.5vw
}

.frost-house .pb11 {
    top: 7vw;
    left: 18.3vw
}

.frost-house .pb12 {
    top: 1vw;
    left: 2.3vw
}

.frost-house .pb13 {
    top: 0;
    left: 6.3vw
}

.frost-house .pb14 {
    top: 1vw;
    left: 15vw
}

.frost-house .pb15 {
    top: 6vw;
    left: 15.3vw
}

.frost-house .level {
    text-align: center;
    position: relative
}

.frost-house .level-1 img {
    -webkit-transform: translateY(87px);
    -ms-transform: translateY(87px);
    transform: translateY(87px)
}

.frost-house .level-2 img {
    -webkit-transform: translateY(87px);
    -ms-transform: translateY(87px);
    transform: translateY(87px)
}

.frost-house img {
    max-width: 100%;
    margin: auto;
    display: block
}

.flex_al_end {
    -ms-flex-item-align: end;
    align-self: flex-end
}

.casestudy-img-icon-box {
    padding-top: 9.48vw
}

@media(max-width: 719px) {
    .casestudy-img-icon-box {
        text-align:center;
        padding-top: 20px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-img-icon-box {
        display:none
    }
}

.casestudy-img-icon-box img {
    max-width: 100%
}

.casestudy-img-icon-box .casestudy-img-icon-text {
    font-size: 14px;
    font-family: helvetica lt std roman,sans-serif;
    line-height: 1.5;
    letter-spacing: .8px;
    padding-bottom: 30px;
    font-weight: 500;
    color: #b6b6b6;
    max-width: 261px
}

.case-study-slider-dark {
    background: #2c2c2c
}

.case-study-slider-dark .swiper-button-next {
    right: 10vw;
    background-image: url(../images/icons/white-arrow-slider-next.png);
    background-size: 34px 9px;
    width: 40px;
    height: 40px
}

@media(max-width: 719px) {
    .case-study-slider-dark .swiper-button-next {
        right:0
    }
}

.case-study-slider-dark .swiper-button-prev {
    left: 10vw;
    background-image: url(../images/icons/white-arrow-slider-prevt.png);
    background-size: 34px 9px;
    width: 40px;
    height: 40px
}

@media(max-width: 719px) {
    .case-study-slider-dark .swiper-button-prev {
        left:0
    }
}

.case-study-slider-dark .case-study-slider-img-box-outer {
    padding: 5.21vw;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.case-study-slider-dark .case-study-slider-img-box-outer.center {
    text-align: center
}

.case-study-slider-dark .case-study-slider-img-box {
    padding: 4.79vw;
    position: relative
}

.case-study-slider-dark .case-study-slider-img-box img {
    max-width: 45%;
    display: block;
    margin: auto
}

.dark-slider {
    position: relative;
    background: #2c2c2c;
    padding-bottom: 0
}

.dark-slider .case-study-slider-box {
    padding: 4.79vw 0;
    padding-bottom: 0
}

.dark-slider .title {
    position: absolute;
    top: 8.79vw;
    left: 10.1vw;
    z-index: 3
}

.dark-slider .title sup {
    font-size: 1.4vw;
    -webkit-transform: translateY(-.5vw);
    -ms-transform: translateY(-.5vw);
    transform: translateY(-.5vw);
    display: inline-block
}

@media(max-width: 1024px) {
    .dark-slider .title sup {
        font-size:21px
    }
}

@media(max-width: 1024px) {
    .dark-slider .case-study-slider-box {
        padding-top:0
    }

    .dark-slider .title {
        position: relative;
        top: inherit;
        left: inherit;
        padding: 50px;
        padding-bottom: 25px
    }

    .dark-slider .case-study-slider-dark-img-dec {
        padding: 50px 0;
        display: none
    }
}

@media(max-width: 719px) {
    .dark-slider .title {
        padding:50px 25px
    }
}

.case-study-slider-dark-img-dec {
    font-weight: 100;
    font-size: 12px;
    letter-spacing: 7px;
    text-align: center;
    position: absolute;
    bottom: 84px;
    left: 0;
    right: 0
}

.faded-text {
    color: transparent
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img {
    position: relative
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .plr {
        padding-right:25px
    }

    .casestudy-inner-page.casestudy-inner-page-abs-right-img .plr.img {
        padding-right: 0;
        padding-bottom: 30px
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text {
    max-width: 600px
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text.wd {
    max-width: 100%
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .sub_titile,.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .text {
    max-width: 490px
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .sub_titile.full,.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .text.full {
    max-width: 100%
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .title {
    padding-bottom: 3.65vw
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text .title.cpb {
    padding-bottom: 40px
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset {
    padding-right: 0;
    padding-bottom: 0
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset {
        padding-bottom:25px;
        padding-top: 25px
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset.p0 {
    padding: 0
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset.ptb {
    padding-top: 0;
    padding-bottom: 0
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset {
        padding-right:0
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset {
    padding-right: 0
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset.pl0 {
    padding-left: 0
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset.pb0 {
    padding-bottom: 0
}

@media(min-width: 1025px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset .img {
        padding:0
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset .img .casestudy-box {
    text-align: right
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .content-offset .img .casestudy-box.r {
    text-align: right
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col {
        -webkit-box-ordinal-group:inherit!important;
        -ms-flex-order: inherit!important;
        order: inherit!important;
        width: 50%!important
    }

    .casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col.col-t-85 {
        width: 85%!important
    }

    .casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col .plr.img {
        padding-left: 50px;
        padding-right: 0!important;
        min-height: 50vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.casestudies-huge-title.hen {
    padding: 13.02vw 0 7.81vw
}

.casestudies-huge-title.hen.mixed {
    padding-top: 0;
    padding-bottom: 7.81vw
}

.casestudies-huge-title.hen.pt0 {
    padding-top: 0
}

.section-bckg-big-title {
    height: 115vh;
    background-size: cover;
    background-position: center
}

.section-bckg-big-title .section-wrap {
    min-height: 115vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.section-bckg-big-title .section-wrap .content-offset {
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img {
    position: relative
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-left-img .plr {
        padding-left:25px;
        padding-right: 25px
    }

    .casestudy-inner-page.casestudy-inner-page-abs-left-img .plr.img {
        padding-left: 0;
        padding-bottom: 30px!important
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text {
    max-width: 600px
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text.wd {
    max-width: 100%
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .sub_titile,.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .text {
    max-width: 490px
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .sub_titile.smaller,.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .text.smaller {
    max-width: 350px
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .sub_titile.full,.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .text.full {
    max-width: 100%
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudy-box-text .title.en {
    padding-bottom: 3.65vw
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset {
    padding-left: 0;
    padding-bottom: 0;
    padding-right: 0
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-left-img .section-offset {
        padding-bottom:25px;
        padding-top: 25px
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset {
    padding-left: 0;
    padding-right: 0
}

@media(max-width: 719px) {
    .casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset .plr {
        padding-left:25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset .mobOrder_2 .casestudy-box {
        padding-right:50px;
        padding-left: 20px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset .plr.img {
    padding: 0
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .content-offset .plr.img .casestudy-box {
    text-align: left
}

.casestudy-inner-page.casestudy-inner-page-abs-left-img .casestudies-box {
    max-width: none
}

@media(max-width: 719px) {
    .casestudies-grid-project .casestudies-col .img {
        padding-bottom:30px
    }
}

.casestudy-home .casestudies-grid-project:nth-child(odd) .casestudies-col:nth-child(even) .casestudies-col-offset {
    padding-right: 0
}

.casestudy-home .casestudies-grid-project:nth-child(even) .casestudies-col:nth-child(odd) .casestudies-col-offset {
    padding-left: 0
}

.abs-airplane-parallax {
    position: absolute;
    bottom: -6vw;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.abs-airplane-parallax img {
    width: 28.07vw;
    height: 16.3vw
}

.image-parallax-grid {
    position: relative;
    text-align: center;
    width: 100%;
    float: left
}

.image-parallax-grid .alaska-p-img-1 {
    display: block;
    margin: auto;
    width: 29.32vw;
    height: 52.08vw;
    opacity: 0
}

.image-parallax-grid .alaska-p-img-3 {
    position: absolute;
    right: -4vw;
    top: 20vw;
    width: 43.02vw;
    height: 37.4vw
}

.image-parallax-grid img.alaska-p-img-2 {
    position: absolute;
    top: 10vw;
    left: 0;
    width: 48.54vw;
    height: 38.39vw
}

.image-parallax-grid .alaska-p-img-4 {
    position: absolute;
    bottom: -11.95vw;
    left: 18.18vw;
    width: 30.36vw;
    height: 27.71vw
}

.img-backg-grid-alaska {
    position: absolute;
    bottom: 0;
    z-index: 1
}

@media(max-width: 719px) {
    .img-backg-grid-alaska {
        display:none
    }
}

.img-backg-grid-alaska img {
    width: 77.55vw;
    height: 41.72vw
}

.alaska-img-bottom-offset {
    padding-bottom: 27vw!important
}

.casestudy-navigation-wrap {
    width: 100%;
    overflow: hidden
}

.casestudy-navigation-wrap .casestudy-navigation-outer-box {
    width: 100%;
    background: pink
}

.casestudy-navigation-wrap .casestudy-navigation-inner-box {
    width: 10000px;
    margin: auto
}

.casestudy-navigation-wrap .casestudy-link-box {
    float: left
}

.casestudy-navigation-wrap .casestudy-link-box-outer {
    padding: 120px 40px
}

.casestudy-navigation-wrap .casestudy-link-box-img {
    line-height: 0
}

.casestudy-navigation-wrap .casestudy-link-box-img img {
    width: 15.1vw;
    height: 15.26vw
}

.casestudy-navigation-wrap .casestudy-link-box-txt {
    font-size: 14px;
    color: #6c6c6c;
    padding-top: 15px
}

.img-section {
    padding: 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 719px) {
    .img-section {
        padding:25px
    }
}

.mw62 {
    max-width: 62%
}

@media(max-width: 719px) {
    .mw62 {
        max-width:100%
    }
}

.section-long-bckg {
    background-repeat: no-repeat;
    background-color: #272727;
    background-size: contain;
    color: #fff
}

.section-long-bckg .anim-fade-box {
    margin-top: 33.33vw
}

.section-long-bckg .anim-fade-box .title.hen {
    padding-bottom: 5.21vw;
    color: #f5454c;
    font-size: 11.15vw
}

@media(max-width: 1024px) {
    .section-long-bckg .anim-fade-box .title.hen {
        font-size:12vw
    }
}

.section-long-bckg .anim-fade-box .text.m {
    color: #fff;
    text-shadow: none
}

.section-long-bckg .casestudy-box {
    text-align: left
}

.section-long-fullbckg {
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff
}

.section-long-fullbckg .anim-fade-box {
    overflow: hidden
}

.section-long-fullbckg .anim-fade-box .title.hen {
    padding-bottom: 11.21vw;
    color: #fff;
    font-size: 6.25vw
}

.section-long-fullbckg .anim-fade-box .title.hen strong {
    color: #b49363
}

@media(max-width: 1024px) {
    .section-long-fullbckg .anim-fade-box .title.hen {
        font-size:10vw
    }
}

.section-long-fullbckg .anim-fade-box .text.m {
    color: #fff;
    text-shadow: none
}

.section-long-fullbckg .casestudy-box {
    text-align: left
}

.section-long-fullbckg .casestudies-col {
    padding-bottom: 27vw
}

@media(max-width: 719px) {
    .section-long-fullbckg .casestudies-col {
        padding-bottom:0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .section-long-fullbckg .casestudies-col {
        padding-bottom:10vw
    }
}

.portfolio-slider-img {
    right: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center 100%;
    opacity: 0
}

#portfolio-slider #controllsSlider {
    position: absolute;
    bottom: 3.91vw;
    left: 12.55vw;
    width: auto;
    right: inherit;
    z-index: 2
}

#portfolio-slider #controllsSlider2 .btn .draw-circle-svg {
    opacity: 1
}

.portfolioSliderBtn-box {
    position: relative;
    display: inline-block
}

@media(min-width: 1025px) {
    .portfolioSliderBtn-box {
        margin-right:40px
    }
}

#portfolio-slider #controllsSlider2 .btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid transparent;
    background-color: transparent;
    width: 37.5px;
    height: 37.5px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: opacity .5s ease-out,-webkit-transform .5s ease-out;
    transition: opacity .5s ease-out,-webkit-transform .5s ease-out;
    -o-transition: opacity .5s ease-out,transform .5s ease-out;
    transition: opacity .5s ease-out,transform .5s ease-out;
    transition: opacity .5s ease-out,transform .5s ease-out,-webkit-transform .5s ease-out;
    opacity: 1;
    position: relative;
    padding: 0
}

#portfolio-slider #controllsSlider2 .btn .draw-circle-svg {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(-80deg);
    -ms-transform: translateX(-50%) rotate(-80deg);
    transform: translateX(-50%) rotate(-80deg)
}

#portfolio-slider #controllsSlider2 .btn .point {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    margin: auto;
    opacity: .3;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
    transition: opacity .5s ease-out
}

.portfolioSliderBtn-box.selected:after {
    content: '';
    display: inline-block;
    border: 1px solid rgba(255,255,255,.36);
    background-color: transparent;
    width: 36.5px;
    height: 36.5px;
    border-radius: 50%;
    top: -1px;
    left: -1px;
    position: absolute
}

#portfolio-slider #controllsSlider2 .btn circle {
    stroke-width: 6px;
    stroke: #fff;
    stroke-dasharray: 628.3185307179587;
    stroke-dashoffset: 628.3185307179587;
    -webkit-animation: inherit;
    animation: inherit;
    opacity: 0
}

#controllsSlider2 {
    position: absolute;
    bottom: 65px;
    left: 65px
}

@media(max-width: 1024px) {
    #controllsSlider2 {
        left:25px;
        bottom: 50px
    }
}

.portfolio-slider-bckg-img.m {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center 73%;
    opacity: 0
}

@media(min-width: 720px) and (max-width:1024px) {
    #portfolio-slider {
        min-height:50vh;
        position: relative
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #portfolio-slider .section-wrap.m100vh {
        min-height:50vh
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #portfolio-slider .slide.home-slider-item-box.m100vh {
        min-height:50vh;
        height: 50%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-inner-page-abs-right-img .casestudies-col.col.col-d-50.col-t-50 {
        -webkit-box-sizing:border-box;
        box-sizing: border-box
    }
}

.welch-main-img {
    position: absolute;
    right: 0;
    z-index: 1
}

@media(max-width: 719px) {
    .welch-main-img {
        height:auto;
        width: 80vw;
        top: 80vw
    }
}

@media(min-width: 600px) {
    .welch-main-img {
        top:60vw
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .welch-main-img {
        top:43vw;
        width: 65vw
    }
}

@media(min-width: 1025px) {
    .welch-main-img {
        width:62.19vw;
        height: 66.51vw;
        top: 0
    }
}

.home-slider.ov-visible {
    overflow: visible
}

@media(max-width: 719px) {
    .home-slider.ov-visible {
        height:100vh
    }
}

.welch-main-img-1.welch-main-img {
    width: 62.19vw;
    height: 47.29vw;
    top: 11vw
}

@media(max-width: 719px) {
    .welch-main-img-1.welch-main-img {
        top:80vw
    }
}

.welch-main-img-2.welch-main-img {
    width: 53.85vw;
    height: 66.51vw
}

@media(max-width: 719px) {
    .welch-main-img-2.welch-main-img {
        top:96vw
    }
}

.welch.casestudies.casestudy-inner-page .casestudies-grid-project .img .casestudies {
    line-height: 0
}

@media(max-width: 719px) {
    .welch.casestudies.casestudy-inner-page .casestudies-grid-project .img {
        padding-bottom:0
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .welch.casestudies.casestudy-inner-page .casestudies-grid-project .img {
        -webkit-box-align:end;
        -ms-flex-align: end;
        align-items: flex-end;
        position: absolute;
        bottom: 0
    }
}

@media(max-width: 719px) {
    .welch.casestudy-inner-page.casestudy-inner-page-abs-right-img .section-offset {
        padding-bottom:0
    }
}

.anim-portfolio-grid .portfolio-box {
    margin-bottom: 4.69vw
}

@media(min-width: 720px) and (max-width:1024px) {
    .t-m-offset-min {
        margin-right:-50px;
        width: calc(100% + 50px)
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .t-m-offset-plus {
        margin-right:50px
    }
}

@media(max-width: 719px) {
    .section-offset.pt50 {
        padding-top:50px
    }
}

@media(max-width: 719px) {
    .rvcc-img-trans {
        -webkit-transform:scale(1.3) translateX(-32%);
        -ms-transform: scale(1.3) translateX(-32%);
        transform: scale(1.3) translateX(-32%)
    }
}

@media(max-width: 719px) {
    .menada-pos-m {
        -webkit-transform:scale(1.3) translateY(10px);
        -ms-transform: scale(1.3) translateY(10px);
        transform: scale(1.3) translateY(10px);
        -webkit-transform-origin: 0;
        -ms-transform-origin: 0;
        transform-origin: 0;
        padding-top: 25px;
        padding-bottom: 25px
    }
}

@media(max-width: 719px) {
    .casestudies-grid-project .casestudies-col.order-2-mob {
        -webkit-box-ordinal-group:3!important;
        -ms-flex-order: 2!important;
        order: 2!important
    }
}

@media(max-width: 719px) {
    .abs-airplane-parallax.hideOnDesktop {
        bottom:inherit;
        top: 0
    }

    .abs-airplane-parallax.hideOnDesktop img {
        width: auto;
        height: auto;
        max-width: 130%
    }
}

@media(max-width: 719px) {
    .airplane-mob-offset {
        padding-top:32vw
    }
}

@media(max-width: 719px) {
    .vy-mob-pos {
        -webkit-transform:translateX(8%);
        -ms-transform: translateX(8%);
        transform: translateX(8%)
    }
}

.graphic-rvcc {
    padding-top: 21.88vw
}

.rvv-gr-offset {
    padding-top: 7.29vw
}

@media(min-width: 720px) and (max-width:1024px) {
    .rvcc-gr-bg-pos.casestudy-inner-page-bckg.casestudy-inner-page {
        background-position:23% 50%
    }
}

@media(max-width: 719px) {
    .rvcc-gr-bg-pos.casestudy-inner-page-bckg.casestudy-inner-page {
        background-position:0 50%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .gr-bg-pos {
        background-position:40% 50%
    }
}

@media(max-width: 719px) {
    .gr-bg-pos {
        background-position:40% 50%
    }
}

.call-to-action-box {
    background: #fb584b;
    color: #000;
    padding: 4.79vw 5.99vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.call-to-action-box .btn.whte_trans:hover {
    color: #fff!important;
    border-color: #000!important;
    background-color: #000!important
}

@media(max-width: 719px) {
    .call-to-action-box {
        padding:50px 25px;
        margin-bottom: 50px;
        margin-top: 50px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .call-to-action-box {
        padding:50px
    }
}

@media(min-width: 1025px) {
    .call-to-action-box .call-to-action-box-inner {
        max-width:80%
    }
}

.call-to-action-box .call-to-action-title {
    font-weight: 600;
    padding-bottom: 1.98vw
}

@media(max-width: 719px) {
    .call-to-action-box .call-to-action-title {
        padding-bottom:25px
    }
}

.call-to-action-box .call-to-action-title strong {
    color: #fff
}

.call-to-action-box .btn-box {
    padding-bottom: 0
}

.call-to-action-box .btn-box .btn {
    opacity: 1
}

.welch-vidoe {
    width: 35.52vw;
    height: 36.15vw;
    min-width: 0;
    max-width: 100%;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    position: absolute;
    right: 15vw;
    top: 5vw;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

@media(max-width: 1440px) {
    .welch-vidoe {
        width:53.28vw;
        height: 54.22vw;
        right: 5vw
    }
}

@media(max-width: 1024px) {
    .welch-vidoe {
        -webkit-transform:translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        left: 10vw;
        right: 10vw;
        width: 80vw;
        height: auto
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .welch-vidoe {
        top:35%
    }
}

@media(max-width: 1024px) {
    .mx80 {
        max-width:80%!important
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col.exeron-hand-layout {
    position: absolute!important;
    right: 0!important;
    width: 70%!important;
    z-index: 1!important;
    top: 14vw!important
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudies-col.exeron-hand-layout img {
    max-width: 77%
}

.social-feed-slide:hover .bckg-overlay {
    -webkit-transform: scale(1.02)!important;
    -ms-transform: scale(1.02)!important;
    transform: scale(1.02)!important;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.social-feed-slide .bckg-overlay {
    transition: 1s transform cubic-bezier(.25,.46,.45,.94),1s -webkit-transform cubic-bezier(.25,.46,.45,.94)!important
}

.social-feed-slide-inner-box {
    overflow: hidden
}

.casestudy-gallery.rotateXYZ-img.item svg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%
}

ul.text.m.text-m-list {
    line-height: 1.5
}

body.bg ul.text.m.text-m-list {
    line-height: 1.5;
    list-style: none;
    padding: 0;
    margin: 0;
    padding-bottom: 20px
}

body.bg ul.text.m.text-m-list li {
    padding-bottom: 11px
}

body.bg .casestudy-inner-page-bckg.casestudy-inner-page .casestudy-box-text.exeron-wider-box {
    max-width: 550px
}

@media(min-width: 1025px) {
    body.bg .vila-yamboll-bg .title.en {
        font-size:5vw;
        line-height: 1.01
    }
}

#caseStudySlider .swiper-button-next,#caseStudySlider .swiper-button-prev {
    position: absolute;
    top: 0;
    width: 15%;
    height: 100%;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
    bottom: 0;
    background-image: none!important;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

#caseStudySlider .swiper-button-prev,#caseStudySlider .swiper-container-rtl .swiper-button-next {
    left: 0;
    right: auto
}

#caseStudySlider .swiper-button-next,#caseStudySlider .swiper-container-rtl .swiper-button-prev {
    right: 0;
    left: auto
}

.case-study-popup-label {
    position: absolute;
    left: 15px;
    bottom: 20px;
    font-size: 11px;
    color: rgba(255,255,255,.38039216);
    font-weight: 100;
    font-family: helvetica lt std light,Arial,sans-serif;
    background: rgba(0,0,0,.27);
    border: 1px solid rgba(255,255,255,.19);
    padding: 5px 12px 5px 9px;
    border-radius: 43px;
    letter-spacing: .5px
}

.case-study-popup-label .popup-label-dots {
    margin-right: 4px;
    display: inline-block;
    height: 12px;
    vertical-align: 1px;
    opacity: .5
}

.case-study-popup-label .label-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #fff;
    display: inline-block
}

.case-study-popup-label .d0 {
    opacity: .1
}

.case-study-popup-label .d1 {
    opacity: .3
}

.case-study-popup-label .d2 {
    opacity: .6
}

.show-eye {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 2;
    background: rgba(237,102,80,.71);
    width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 50%
}

.grid-text-img .col-d-75 {
    width: 75%;
    padding-top: 25%;
    color: #000;
    position: relative
}

.grid-text-img .col-d-75 .title {
    position: absolute;
    left: 0;
    top: 0
}

.grid-text-img .col-m-100 {
    position: relative
}

.grid-text-img .col-m-100 .grid-img-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
}

@media(max-width: 719px) {
    .grid-text-img .col-m-100 {
        width:100%;
        padding-top: 100%
    }
}

.grid-text-img .col-t-50 {
    position: relative
}

.grid-text-img .col-t-50 .grid-img-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
}

@media(min-width: 720px) and (max-width:1024px) {
    .grid-text-img .col-t-50 {
        width:50%;
        padding-top: 50%
    }
}

.grid-text-img .col-d-25 {
    position: relative
}

.grid-text-img .col-d-25 .grid-img-box {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
}

@media(min-width: 1025px) {
    .grid-text-img .col-d-25 {
        width:25%;
        padding-top: 25%
    }
}

.grid-title-box.prel {
    position: absolute;
    top: 4.17vw;
    left: 2.6vw;
    right: 0;
    bottom: 0
}

@media(max-width: 719px) {
    .grid-text-img .col-i {
        margin-bottom:25px;
        margin-top: 25px
    }
}

@media(max-width: 719px) {
    .grid-text-img .col-d-75 {
        padding-top:0!important
    }

    .grid-text-img .col-d-75 .grid-title-box {
        position: relative;
        left: 0;
        right: 0
    }

    .grid-text-img .col-d-75 .grid-title-box .title {
        position: relative;
        left: 0;
        right: 0;
        padding: 25px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(max-width: 719px) {
    .grid-text-img .col-t {
        padding-top:0!important
    }

    .grid-text-img .col-t .grid-text-box {
        position: relative;
        padding: 25px
    }
}

@media(max-width: 719px) {
    .hide-m {
        display:none!important
    }
}

.grid-text-box {
    font-size: 12px;
    color: #c2bcbc;
    font-family: HelveticaLTStd-Roman,sans-serif!important;
    padding: 30px 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    letter-spacing: .8px;
    line-height: 1.7;
    z-index: 2
}

.grid-text-box.upper {
    text-transform: none
}

.grid-text-box.upper:before {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 11px;
    border-color: transparent transparent #fff transparent;
    position: absolute;
    left: 60px;
    top: -11px
}

@media(max-width: 719px) {
    .ubb-bck {
        background-position:40% 84%!important
    }
}

@media(max-width: 719px) {
    .ubb-bckg-2 {
        background-position:0 70%!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .tablet-left-offset {
        padding-left:25px!important;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.oinj-bckg {
    padding: 15vw 0 1vw
}

@media(max-width: 1024px) {
    .casestudy-inner-page-abs-left-img.casestudy-inner-page-bckg.oinj-bckg {
        background-position:21% 70%
    }
}

@media(max-width: 1024px) {
    .casestudy-inner-page.casestudy-inner-page-bckg.casestudy-inner-page-bckg-bigger.oinj-bckg-2 {
        background-position:85% 100%!important
    }
}

@media(min-width: 1025px) {
    .fw-img {
        margin-top:-6vw
    }
}

@media(max-width: 1024px) {
    .freez-game-abs-img {
        -webkit-box-ordinal-group:4;
        -ms-flex-order: 3;
        order: 3
    }

    .freez-game-abs-img img {
        position: relative;
        max-width: 100%
    }
}

@media(min-width: 1025px) {
    .freez-game-abs-img img {
        position:absolute;
        top: 10vw;
        right: 2vw;
        z-index: 1;
        max-width: 74.5%
    }
}

.freeze-text {
    z-index: 2;
    padding-bottom: 20vw
}

@media(max-width: 1024px) {
    .freeze-text {
        padding-top:0!important
    }
}

@media(max-width: 719px) {
    .frost-video-images {
        -webkit-transform:translateX(-25%);
        -ms-transform: translateX(-25%);
        transform: translateX(-25%);
        width: 200%;
        max-width: none
    }
}

@media(max-width: 1024px) {
    .f-website-ede-text {
        padding-top:0!important
    }
}

@media(max-width: 1024px) {
    .mw80 {
        max-width:70%!important
    }
}

@media(min-width: 1025px) {
    .blockchains-offset-desktop {
        padding-bottom:44vw
    }
}

@media(max-width: 1660px) {
    .last-icon-grid {
        display:none
    }
}

@media(min-width: 1661px) {
    .last-icon-grid {
        position:absolute;
        right: 0;
        max-width: 18vw
    }

    .last-icon-grid img {
        max-width: 100%
    }
}

@media(min-width: 1025px) {
    .sunmaid-top-offset {
        padding-top:62vw
    }
}

.team-box {
    position: relative
}

@media(min-width: 1025px) {
    .team-box.col-d-25 {
        padding-top:25%
    }
}

@media(max-width: 1280px) {
    .team-box.col-d-25 {
        padding-top:33.33%;
        width: 33.33%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .team-box.col-t-50 {
        padding-top:50%;
        width: 50%
    }
}

@media(max-width: 719px) {
    .team-box.col-m-100 {
        padding-top:100%;
        width: 100%
    }
}

@media(max-width: 719px) {
    .team-box.col-m-50 {
        padding-top:50%;
        width: 50%
    }
}

.team-box:hover .team-img-box {
    -webkit-filter: inherit;
    filter: inherit;
    cursor: none;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    background-color: transparent;
    transition: all .6s linear,-webkit-filter .6s linear
}

.team-box-inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden
}

@media(max-width: 1024px) {
    .team-box-inner {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.team-img-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    background-position: center;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: all .6s linear,-webkit-filter .6s linear;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center
}

.team-text-ballon-box {
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: 25px;
    color: #fff;
    padding: 0 32px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 11px;
    letter-spacing: .3px;
    height: 27px;
    line-height: 27px;
    opacity: 0
}

@media(max-width: 719px) {
    .team-text-ballon-box {
        left:10px;
        right: 10px
    }
}

.team-text-ballon-box:before {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 13.5px 12px .5px 0;
    border-color: transparent #fe5841 transparent transparent;
    content: '';
    position: relative;
    top: -12px;
    float: right;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg)
}

.team-text-ballon-box .team-text-ballon {
    width: 600px;
    margin: auto
}

.team-text-ballon-box .team-text-ballon .team-text-ballon-inner {
    display: inline-block;
    white-space: nowrap
}

.team-text-box {
    padding: 2.08vw;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.team-text-box p {
    padding-bottom: 0!important
}

@media(min-width: 720px) and (max-width:1024px) {
    .team-text-box {
        padding:40px
    }
}

@media(max-width: 719px) {
    .team-text-box {
        padding:15px
    }
}

@media(max-width: 719px) {
    .team-text-box .text {
        display:none
    }
}

@media(min-width: 1025px) {
    body.bg .team-text-box {
        padding:2.6vw
    }
}

@media(max-width: 719px) {
    .inner-blog-section {
        padding-top:30px
    }
}

.title-team {
    font-size: 2.4vw;
    padding-bottom: 25px
}

@media(min-width: 720px) and (max-width:1024px) {
    .title-team {
        font-size:30px;
        padding-bottom: 0
    }
}

@media(max-width: 719px) {
    .title-team {
        font-size:20px;
        padding-bottom: 0
    }
}

@media(min-width: 1920px) {
    .title-team {
        font-size:46px
    }
}

.title-team strong {
    color: #ff5b46
}

.title-team strong strong {
    color: #272727
}

.title-team strong strong .splitByLinesChars {
    color: #ff5b46
}

@media(max-width: 1024px) {
    .section-team.section-team-inner-page .content-offset {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

@media(max-width: 1024px) {
    .section-team.section-team-inner-page .text-col {
        -webkit-box-align:center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%
    }
}

@media(max-width: 1024px) {
    .section-team.section-team-inner-page .section-wrap {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }
}

.team-text-ballon-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    background: #ff5842;
    border-radius: 100px
}

.team-text-ballon-wrap:before {
    content: '';
    width: 0;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 70px 40px #ff5842;
    box-shadow: 0 0 70px 40px #ff5842;
    z-index: 2
}

.team-text-ballon-wrap:after {
    content: '';
    width: 0;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 70px 40px #ff5842;
    box-shadow: 0 0 70px 40px #ff5842;
    z-index: 2
}

@media(max-width: 1660px) {
    .map-outer-container {
        width:70%
    }
}

@media(max-width: 1440px) {
    .map-outer-container {
        width:65%
    }
}

@media(max-width: 719px) {
    .map-outer-container {
        width:100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .map-outer-container {
        width:50%
    }
}

.contact-content {
    background: #111;
    padding: 90px 0;
    color: #fff;
    overflow: hidden;
    position: relative
}

@media(max-width: 1660px) {
    .contact-content {
        width:30%
    }
}

@media(max-width: 1440px) {
    .contact-content {
        width:35%
    }
}

@media(max-width: 719px) {
    .contact-content {
        width:100%;
        padding: 30px 0;
        padding-left: 30px;
        padding-right: 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .contact-content {
        width:50%;
        padding-left: 30px;
        padding-right: 30px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.contact-content .content-info-box {
    padding-right: 2.6vw
}

.contact-content .title {
    padding-bottom: 15px
}

.contact-content .t1 {
    opacity: .3;
    color: #fff;
    font-size: 12px;
    line-height: 2;
    max-width: 85%;
    display: inherit;
    letter-spacing: 1px
}

.contact-content .t2 {
    padding: 38px 0;
    font-size: 18px;
    padding-left: 39px;
    letter-spacing: 1px;
    background-repeat: no-repeat;
    background-position: 0 center;
    position: relative
}

.contact-content .t2 a {
    -webkit-transition: 1s color cubic-bezier(.19,1,.22,1);
    -o-transition: 1s color cubic-bezier(.19,1,.22,1);
    transition: 1s color cubic-bezier(.19,1,.22,1)
}

.contact-content .t2 a:hover {
    color: #fb5642
}

.contact-content .t2:hover .phone-icon {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: rotatePhone;
    animation-name: rotatePhone;
    -webkit-animation-timing-function: cubic-bezier(0,0,.2,1);
    animation-timing-function: cubic-bezier(0,0,.2,1)
}

.contact-content .t2 .phone-icon {
    display: inline-block;
    position: relative;
    margin-right: 6px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.contact-content .t2 .phone-icon .red-circle {
    width: 32px;
    height: 32px;
    background-color: #fb5642;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%)
}

.contact-content .t2 .phone-icon .phone {
    background-image: url(../images/icons/phone-icon.png);
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    content: '';
    background-position: center;
    background-size: auto;
    width: 32px;
    height: 32px;
    display: inline-block
}

.contact-content .t2 i {
    font-size: 12px;
    font-style: normal
}

.contact-content .t3 {
    opacity: .3;
    color: #fff;
    font-size: 14px;
    line-height: 2;
    max-width: 85%;
    display: inherit;
    letter-spacing: 1px;
    display: inline-block;
    position: relative
}

.contact-content .t3 a:after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    -webkit-transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s -webkit-transform cubic-bezier(.19,1,.22,1);
    -o-transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),1s -webkit-transform cubic-bezier(.19,1,.22,1);
    transition: 1s transform cubic-bezier(.19,1,.22,1),.6s -webkit-transform cubic-bezier(.19,1,.22,1);
    -webkit-transition: 1s transform cubic-bezier(.19,1,.22,1);
    -ms-transform-origin: center left;
    transform-origin: center left;
    -webkit-transform-origin: center left;
    width: 100%;
    height: 1px;
    background-color: #fff;
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform: scaleX(1)
}

.contact-content .t3 a:hover:after {
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -ms-transform-origin: center right;
    transform-origin: center right;
    -webkit-transform-origin: center right
}

@media(max-width: 719px) {
    .contact-content .t3 {
        font-size:12px
    }
}

.contact-content .content-info-box a {
    color: #fff
}

@media(max-width: 719px) {
    .contact-outer-box {
        padding-bottom:30px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .contact-outer-box {
        padding-bottom:50px!important
    }
}

@media(min-width: 1025px) {
    .contact-outer-box {
        padding-bottom:5.21vw!important
    }

    .contact-outer-box:last-child {
        padding-bottom: 0!important
    }
}

@-webkit-keyframes rotatePhone {
    0% {
        -webkit-transform: translateY(-50%) rotate(0);
        transform: translateY(-50%) rotate(0)
    }

    20% {
        -webkit-transform: translateY(-50%) rotate(-14deg);
        transform: translateY(-50%) rotate(-14deg)
    }

    60% {
        -webkit-transform: translateY(-50%) rotate(14deg);
        transform: translateY(-50%) rotate(14deg)
    }
}

@keyframes rotatePhone {
    0% {
        -webkit-transform: translateY(-50%) rotate(0);
        transform: translateY(-50%) rotate(0)
    }

    20% {
        -webkit-transform: translateY(-50%) rotate(-14deg);
        transform: translateY(-50%) rotate(-14deg)
    }

    60% {
        -webkit-transform: translateY(-50%) rotate(14deg);
        transform: translateY(-50%) rotate(14deg)
    }
}

.white-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 2
}

@media(max-width: 719px) {
    .contact-outer-box-2 .col-d-75 {
        -webkit-box-ordinal-group:3;
        -ms-flex-order: 2;
        order: 2
    }

    .contact-outer-box-2 .col-d-25 {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }
}

.contact-t .word9 {
    color: #fb5642
}

.t2 .phone-icon {
    display: inline-block;
    position: relative;
    margin-right: 6px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%)
}

.phone-icon .red-circle {
    width: 32px;
    height: 32px;
    background-color: #fb5642;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    -ms-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%)
}

.phone-icon .phone {
    background-image: url(../images/icons/phone-icon.png);
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    content: '';
    background-position: center;
    background-size: auto;
    width: 32px;
    height: 32px;
    display: inline-block
}

.t2 i {
    font-size: 12px;
    font-style: normal
}

@media(max-width: 719px) {
    body.bg .content-info-box .title.n {
        opacity:1;
        padding-bottom: 5px
    }
}

@media(max-width: 719px) {
    body.bg .content-info-box .t1 {
        opacity:.5!important
    }

    body.bg .content-info-box .t1 a {
        opacity: 1;
        line-height: 1.4;
        display: inline-block
    }
}

.news-thumb {
    text-decoration: none;
    background-size: cover;
    overflow: hidden;
    color: #282524;
    background-position: 100% center
}

@media(max-width: 1024px) {
    .news-thumb {
        background-position:100% center
    }
}

@media(max-width: 719px) {
    .news-thumb {
        margin:3.65vw 0 6.25vw
    }
}

.news-thumb.bckgImg:hover .bckgImg {
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

@media(max-width: 1024px) {
    .news-thumb.bckgImg .news-content {
        padding-left:25px;
        padding-right: 25px;
        padding-top: 25px;
        margin-top: 0
    }
}

.news-thumb .news-content,.news-thumb.news-content {
    z-index: 3;
    position: relative;
    margin: 3.65vw 0 6.25vw;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.news-thumb .news-content .title .important,.news-thumb.news-content .title .important {
    width: 23px;
    height: 23px;
    -webkit-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    -webkit-transition: -webkit-transform .4s cubic-bezier(.39,.58,.57,1);
    transition: -webkit-transform .4s cubic-bezier(.39,.58,.57,1);
    -o-transition: transform .4s cubic-bezier(.39,.58,.57,1);
    transition: transform .4s cubic-bezier(.39,.58,.57,1);
    transition: transform .4s cubic-bezier(.39,.58,.57,1),-webkit-transform .4s cubic-bezier(.39,.58,.57,1)
}

.news-thumb .news-content .title .important i,.news-thumb.news-content .title .important i {
    display: inline-block;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    font-style: normal
}

.news-thumb .news-content.anim .date .op_02,.news-thumb .news-content:hover .date .op_02,.news-thumb.news-content.anim .date .op_02,.news-thumb.news-content:hover .date .op_02 {
    opacity: 1;
    color: #fb5642
}

@media(min-width: 1025px) {
    .news-thumb .news-content.anim .title .important,.news-thumb .news-content:hover .title .important,.news-thumb.news-content.anim .title .important,.news-thumb.news-content:hover .title .important {
        -webkit-transform:rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg)
    }
}

.news-thumb .news-content .date .op_02,.news-thumb.news-content .date .op_02 {
    opacity: 1;
    color: #d4d3d3;
    -webkit-transition: 1s color cubic-bezier(.25,.46,.45,.94);
    -o-transition: 1s color cubic-bezier(.25,.46,.45,.94);
    transition: 1s color cubic-bezier(.25,.46,.45,.94)
}

@media(max-width: 1024px) {
    .news-thumb .news-content,.news-thumb.news-content {
        padding-left:0;
        padding-right: 0
    }
}

@media(max-width: 719px) {
    .news-thumb .news-content,.news-thumb.news-content {
        padding-left:25px;
        padding-right: 25px
    }
}

.news-thumb.important .title.b {
    position: relative;
    display: inline-block
}

.news-thumb.important .important {
    display: inline-block;
    color: #ff5842;
    font-size: 48px;
    font-weight: 700;
    vertical-align: 25px;
    position: absolute;
    right: -20px;
    top: 0
}

@media(max-width: 719px) {
    .news-thumb.important .important {
        vertical-align:9px;
        font-size: 32px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .news-thumb.important .important {
        font-size:48px
    }
}

@media(min-width: 1661px) {
    .news-thumb.important .important {
        vertical-align:25px
    }
}

.news-thumb .overlay {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    right: inherit;
    left: 0
}

@media(max-width: 1024px) {
    .news-thumb .overlay {
        width:100%
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .news-thumb .overlay {
        width:50%
    }
}

.news-thumb .overlay.grey {
    background-color: #231f1e;
    z-index: 2
}

.news-thumb .bckgImg {
    background-position: 100% 0;
    background-size: cover;
    -webkit-transition: 1.3s ease-out;
    -o-transition: 1.3s ease-out;
    transition: 1.3s ease-out;
    z-index: 2;
    position: relative
}

@media(max-width: 719px) {
    .news-thumb .bckgImg {
        min-height:400px
    }
}

.bckg-box {
    position: relative;
    z-index: 2
}

.bckg-box .bckg-i {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0
}

@media(max-width: 719px) {
    .anim-load-more .col.center {
        text-align:left
    }
}

.load-more {
    text-align: left
}

@media(max-width: 719px) {
    .load-more {
        padding-left:25px;
        padding-right: 25px
    }
}

.load-more .c_r {
    color: #ff5b46;
    font-size: 48px!important;
    line-height: 0;
    display: inline-block;
    vertical-align: middle;
    padding-right: 5px
}

.load-more i {
    font-style: italic!important;
    font-weight: 200!important;
    letter-spacing: 0;
    display: inline-block;
    vertical-align: 7px;
    line-height: 1;
    opacity: .5;
    font-size: 14px!important
}

@media(max-width: 1024px) {
    .article-date {
        text-align:left;
        padding-bottom: 25px
    }
}

.article-date .day {
    color: #dad8d8;
    font-size: 72px;
    font-weight: 700
}

.article-date .day.afterAnim {
    color: #ff5b46
}

.article-date .month {
    font-size: 10px;
    font-weight: 200;
    color: #000;
    letter-spacing: .5px
}

@media(orientation: portrait) {
    .article-date .month.text {
        padding-top:15px
    }
}

.article-img-box {
    padding: 5.21vw 0;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .article-img-box {
        padding-top:0
    }
}

body.bg .article-img-box {
    padding-top: 4.21vw
}

@media(max-width: 1024px) {
    body.bg .article-img-box {
        padding-top:0
    }
}

.highlighted-read-more-article .black-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    background: #000;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 18px;
    position: relative;
    margin-bottom: 4.17vw;
    margin-top: 15px
}

.highlighted-read-more-article .black-box:after {
    display: none
}

@media(max-width: 1024px) {
    .highlighted-read-more-article .black-box {
        font-size:14px
    }
}

@media(max-width: 719px) {
    .highlighted-read-more-article .black-box {
        padding:25px;
        display: block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-bottom: 30px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .highlighted-read-more-article .black-box .black-box-btn {
        top:50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

@media(min-width: 1025px) {
    .highlighted-read-more-article .black-box .black-box-btn {
        top:50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%)
    }
}

.highlighted-read-more-article .black-box-text {
    padding: 34px 160px 34px 34px;
    color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%
}

@media(max-width: 719px) {
    .highlighted-read-more-article .black-box-text {
        position:relative;
        right: inherit;
        padding: 0 0 25px
    }
}

.highlighted-read-more-article .black-box-btn {
    position: absolute;
    right: 35px
}

@media(max-width: 719px) {
    .highlighted-read-more-article .black-box-btn {
        position:relative;
        right: inherit
    }
}

.swiper-slide.popup-slide .responsive {
    min-width: 100%
}

@media(min-width: 720px) and (max-width:1024px) {
    .news-thumb.news-content {
        padding-right:30px
    }
}

@media(max-width: 719px) {
    .anim-related-articles .news-thumb.news-content {
        padding-left:0!important;
        padding-right: 0!important
    }
}

.article-box img {
    max-width: 100%
}

@media(max-width: 719px) {
    .article-box h1,.article-box h2,.article-box h3,.article-box h4,.article-box h5,.article-box h6 {
        margin-bottom:15px
    }
}

.draw-circle-svg {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 50%;
    -webkit-transform: translateX(0) scale(1);
    -ms-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1);
    margin-left: -30px;
    z-index: 1;
    opacity: 0
}

.draw-circle-svg circle {
    stroke-width: 6px;
    stroke: #fff;
    stroke-dasharray: 628.3185307179587;
    stroke-dashoffset: 0;
    -webkit-animation: dash 3s linear forwards;
    animation: dash 3s linear forwards
}

.scroll-video-progress {
    opacity: .5;
    -webkit-transition: opacity .4s linear;
    -o-transition: opacity .4s linear;
    transition: opacity .4s linear
}

.scroll-video-progress:hover {
    opacity: .8
}

.scroll-video-progress.active {
    opacity: 1
}

.draw-circle-svg-2 {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%)
}

.draw-circle-svg-2 circle {
    stroke: #ff5842;
    stroke-width: 11px;
    stroke-dasharray: 628.3185307179587;
    stroke-dashoffset: 628.3185307179587
}

.draw-circle-svg-3 {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 50%;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    margin-left: -30px;
    opacity: 0
}

.draw-circle-svg-3 image {
    display: none
}

.draw-circle-svg-3 circle {
    stroke-width: 6px;
    stroke: #fff;
    stroke-dasharray: 628.3185307179587;
    stroke-dashoffset: 0;
    -webkit-animation: dash 3s linear forwards;
    animation: dash 3s linear forwards
}

.draw-circle-svg-3.allowDrag {
    cursor: default!important;
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    opacity: 1;
    z-index: 2
}

.draw-circle-svg-3.allowDrag:hover circle {
    -webkit-transform: scale(1.1)!important;
    -ms-transform: scale(1.1)!important;
    transform: scale(1.1)!important;
    cursor: default!important
}

.draw-circle-svg-3.allowDrag.dragged circle {
    -webkit-transform: scale(1.15)!important;
    -ms-transform: scale(1.15)!important;
    transform: scale(1.15)!important
}

.draw-circle-svg-3.allowDrag circle {
    stroke: #ff5842;
    -webkit-transition: -webkit-transform .7s ease-in-out;
    transition: -webkit-transform .7s ease-in-out;
    -o-transition: transform .7s ease-in-out;
    transition: transform .7s ease-in-out;
    transition: transform .7s ease-in-out,-webkit-transform .7s ease-in-out;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    fill: #151515
}

.draw-circle-svg-3.allowDrag image {
    display: block
}

.draw-circle-svg-3.dragDirection {
    -webkit-transform: scale(1.4);
    -ms-transform: scale(1.4);
    transform: scale(1.4);
    opacity: 1;
    z-index: 1;
    cursor: default!important;
    -webkit-transition: all .4s ease-out;
    -o-transition: all .4s ease-out;
    transition: all .4s ease-out
}

.draw-circle-svg-3.dragDirection image {
    display: none
}

.draw-circle-svg-3.dragDirection circle {
    stroke-width: 10px;
    stroke-dasharray: 1,20;
    stroke: #ff5842;
    stroke-linecap: round;
    -webkit-animation: pulse 1.5s infinite linear;
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center
}

.dragDirection.scroll-video-progress.dragDirection {
    cursor: default!important
}

.dragDirection.scroll-video-progress .scroll-video-progress-dot {
    background: #131313;
    width: 12px;
    height: 12px;
    border: 1px solid rgba(254,91,70,.75)
}

@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }

    50% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        opacity: .6
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

@keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }

    50% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        opacity: .6
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
}

.scroll-line {
    transform: scaleY(0);
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0)
}

.scroll-line:after {
    content: '';
    width: inherit;
    height: 50%;
    background: #fff;
    position: absolute;
    -webkit-transform: translateY(0) scaleY(0);
    -ms-transform: translateY(0) scaleY(0);
    transform: translateY(0) scaleY(0);
    left: 0;
    z-index: 10;
    display: block
}

@-webkit-keyframes mymove {
    0% {
        -webkit-transform: translateY(-15px);
        opacity: 0
    }

    5% {
        -webkit-transform: translateY(-10px);
        opacity: .5
    }

    10% {
        -webkit-transform: translateY(0);
        opacity: .7
    }

    15% {
        -webkit-transform: translateY(5px);
        opacity: 1
    }

    30% {
        -webkit-transform: translateY(15px);
        opacity: .7
    }

    60% {
        -webkit-transform: translateY(20px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(20px);
        opacity: 0
    }
}

@keyframes mymove {
    0% {
        -webkit-transform: translateY(-15px);
        opacity: 0
    }

    5% {
        -webkit-transform: translateY(-10px);
        opacity: .5
    }

    10% {
        -webkit-transform: translateY(0);
        opacity: .7
    }

    15% {
        -webkit-transform: translateY(5px);
        opacity: 1
    }

    30% {
        -webkit-transform: translateY(15px);
        opacity: .7
    }

    60% {
        -webkit-transform: translateY(20px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(20px);
        opacity: 0
    }
}

.preloader {
    background: #fff;
    text-align: center;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 9000
}

@media(max-width: 1024px) {
    .preloader {
        display:none
    }
}

.preloader-box {
    position: absolute;
    width: 100%;
    height: 100%
}

#preloaderGif {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.preloader-gif img {
    max-width: 100%
}

.error-container {
    color: #000
}

.error-container .error-img img {
    max-width: 35%;
    margin: auto
}

.error-container .error-title.title.nm {
    font-weight: 700;
    padding-top: 5.99vw;
    padding-bottom: 20px
}

#awardDragSlider,#controllsSlider,#draggableArea,#hamburgerAnimation g,#menu,.about-us-tools,.anim-awards-txt,.anim-btn,.anim-fade,.anim-img,.anim-line,.anim-love,.anim-mix-box,.anim-mix-inner-box,.anim-serv-txt,.anim-split-inner-box,.anim-t,.anim-t-2,.anim-title,.anim-txt,.animFadeBckg,.animFadeBckg .bckg-overlay,.arrow-line,.arrow-triangle,.awards-logos,.awards-logos-box,.awards-slider-slider-years,.awards-years-slideÑ€-wrapper,.casestudies-col,.casestudy-gallery-item,.char,.circle-cursor--inner,.circle-cursor--outer,.copyright-box,.cursor,.cursor-in,.del-line,.drag-nums-row.nums-row-1,.drag-nums-row.nums-row-2,.drag-section-wrap,.get-in-touch-box,.header-logo,.hero-slider-bckg,.hero-slider-video,.home-slider,.home-slider-item-box,.homeSliderBtn,.homeSliderBtn circle,.img-box-blink-container img,.menu-link,.menu-link-box,.next-click-cursor,.next-cursor-arr,.parallax-drag-img,.prev-click-cursor,.prev-cursor-arr,.progress,.rellax,.rotateXYZ-img,.scroll_down,.scroll_up,.social-feed-slider-wrapper,.social-icon,.social-icons-box,.splitByLinesChars,.swiper-button-next,.swiper-button-prev,.word {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.popup-projects {
    background: rgba(255,255,255,.96);
    top: 0;
    z-index: 9999;
    width: 100%;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    height: 100%!important;
    min-height: 100%
}

@media(min-width: 1025px) {
    .popup-projects {
        position:fixed
    }
}

@media(max-width: 1024px) {
    .popup-projects {
        position:absolute;
        height: 100%!important
    }
}

.popup-projects.isOpen {
    overflow: auto;
    overflow-x: hidden
}

@media(max-width: 1024px) {
    .popup-projects.isOpen {
        top:0;
        bottom: 0;
        position: fixed;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        height: 100%
    }
}

.popup-projects-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.popup-projects-container-box {
    text-align: center;
    display: block
}

@media(max-width: 1024px) {
    .popup-projects-container-box {
        padding:50px
    }
}

@media(min-width: 1025px) {
    .popup-projects-container-box {
        margin:auto;
        max-width: 70vw;
        width: 90%
    }
}

@media(max-width: 1440px) {
    .popup-projects-container-box {
        max-width:80vw
    }
}

.popup-projects-wrap {
    display: inline-block;
    text-align: left
}

.project-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    color: #000;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.project-image {
    max-width: 53%;
    width: 35.31vw;
    height: 34.17vw
}

@media(min-width: 1025px) {
    .project-image {
        -webkit-box-shadow:10px 15px 50px 0 #d5d5d5;
        box-shadow: 10px 15px 50px 0 #d5d5d5
    }
}

.project-image img {
    max-width: 100%
}

@media(min-width: 1025px) {
    .project-image img {
        width:35.31vw;
        height: 34.17vw
    }
}

@media(max-width: 1024px) {
    .project-image {
        width:auto;
        height: auto;
        max-width: 100%;
        margin: auto
    }
}

.project-text-box {
    padding: 100px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 1025px) {
    .project-text-box {
        width:33vw;
        padding: 5vw;
        padding-right: 0
    }
}

@media(max-width: 1440px) {
    .project-text-box {
        width:40vw
    }
}

@media(max-width: 1024px) {
    .project-text-box {
        width:100%
    }
}

.project-text-box #popupText {
    padding-bottom: 25px;
    font-size: 15px;
    color: grey;
    max-width: 80%;
    font-weight: 300;
    line-height: 1.4
}

.project-text-box #popupText a,.project-text-box #popupText strong {
    color: #fe5b46;
    font-weight: 400
}

@media(max-width: 1024px) {
    .project-text-box #popupText {
        max-width:none
    }
}

@media(max-width: 1024px) {
    .project-text-box {
        padding-left:0;
        padding-right: 0;
        max-width: 100%;
        margin: auto;
        padding-top: 50px;
        padding-bottom: 50px
    }
}

@media(min-width: 1025px) {
    .close-btn {
        display:none
    }
}

@media(max-width: 1024px) {
    .close-btn {
        position:absolute;
        top: 0;
        right: 0;
        padding: 20px
    }

    .close-btn img {
        width: 20px;
        height: 20px
    }
}

.popupLink {
    cursor: pointer
}

@media(min-width: 1025px) {
    .new-patient-additional-offset {
        padding-top:3.65vw;
        padding-bottom: 0
    }
}

@media(min-width: 1920px) {
    .new-patient-additional-offset {
        padding-top:70px;
        padding-bottom: 0
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text.new-patient {
    max-width: 620px
}

@media(min-width: 1025px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text.new-patient {
        padding-right:3.65vw
    }
}

@media(min-width: 1920px) {
    .casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text.new-patient {
        padding-right:70px
    }
}

.casestudy-inner-page.casestudy-inner-page-abs-right-img .casestudy-box-text.new-patient .title {
    letter-spacing: .02em
}

.margin-right-0 {
    margin-right: 0
}

#pinContainer {
    width: 100%;
    overflow: hidden;
    position: relative
}

@media(max-width: 1024px) {
    #pinContainer .btn-box,#pinContainer .text,#pinContainer .title {
        float:left;
        text-align: left;
        width: 100%
    }

    #pinContainer .col-t-100 {
        width: 100%!important
    }

    #pinContainer .swiper-container {
        overflow: visible;
        width: 100%
    }
}

@media(min-width: 1025px) {
    #pinContainer {
        height:100vh
    }
}

.panel-inner-wrap-1-scrollable,.panel-inner-wrap-3-scrollable {
    position: relative;
    width: 100%
}

.panel-inner-wrap-2-scrollable {
    position: relative;
    width: 100%
}

.panel img,.panel-2 img,.panel-3 img,.panel-4 img {
    height: auto
}

.btn-box-panel img {
    height: auto
}

.healthcare-partners img {
    height: auto!important;
    width: auto
}

.healthcare-awards-img img {
    height: auto;
    width: auto
}

.panel,.panel-3 {
    height: 100%;
    width: 100%
}

@media(max-width: 1024px) {
    .panel,.panel-3 {
        height:auto
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .panel,.panel-3 {
        padding-left:0!important
    }
}

@media(min-width: 1025px) {
    .panel,.panel-3 {
        width:38.65vw;
        position: absolute;
        left: 0
    }
}

@media(min-width: 1920px) {
    .panel,.panel-3 {
        width:742px
    }
}

@media(min-width: 1025px) {
    .panel,.panel-3 {
        width:38.65vw
    }

    .panel-3.panel-right-2,.panel.panel-right-2 {
        left: 38.65vw
    }

    .panel-3.panel-right-3,.panel.panel-right-3 {
        left: 77.29vw
    }
}

@media(min-width: 1920px) {
    .panel,.panel-3 {
        width:742px
    }

    .panel-3.panel-right-2,.panel.panel-right-2 {
        left: 742px
    }

    .panel-3.panel-right-3,.panel.panel-right-3 {
        left: 1484px
    }
}

#pinContainer2 {
    width: 100%;
    overflow: hidden;
    position: relative
}

@media(max-width: 719px) {
    #pinContainer2 .section-offset {
        padding-left:25px!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    #pinContainer2 .section-offset {
        padding-left:50px!important
    }
}

@media(max-width: 1024px) {
    #pinContainer2 .col-t-100 {
        width:100%!important
    }

    #pinContainer2 .swiper-container {
        overflow: visible;
        width: 100%
    }
}

@media(max-width: 1024px) {
    #pinContainer2 .casestudies-grid-project .casestudies-col.col-d-60 {
        -webkit-box-ordinal-group:2!important;
        -ms-flex-order: 1!important;
        order: 1!important
    }
}

@media(min-width: 1025px) {
    #pinContainer2 {
        height:100vh
    }
}

@media(min-width: 1025px) {
    #pinContainer2 .section-offset {
        padding-right:5.21vw;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1920px) {
    #pinContainer2 .section-offset {
        padding-right:100px
    }
}

@media(max-width: 1024px) {
    #pinContainer3 .btn-box,#pinContainer3 .text,#pinContainer3 .title {
        float:left;
        text-align: left
    }

    #pinContainer3 .col-t-100 {
        width: 100%!important
    }

    #pinContainer3 .swiper-container {
        overflow: visible;
        width: 100%
    }
}

@media(min-width: 1025px) {
    #pinContainer3 {
        height:100vh
    }
}

.panel-2 {
    height: 100%;
    width: 100%
}

@media(max-width: 1024px) {
    .panel-2 {
        height:auto
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .panel-2 {
        padding-left:0!important
    }
}

@media(min-width: 1025px) {
    .panel-2 {
        width:38.65vw;
        position: absolute;
        right: 0
    }

    .panel-2.panel-right-2 {
        right: 38.65vw
    }

    .panel-2.panel-right-3 {
        right: 77.29vw
    }
}

@media(min-width: 1920px) {
    .panel-2 {
        width:742px
    }

    .panel-2.panel-right-2 {
        right: 742px
    }

    .panel-2.panel-right-3 {
        right: 1484px
    }
}

#pinMaster,#pinMaster3 {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(min-width: 1025px) {
    #pinMaster .section-wrap,#pinMaster3 .section-wrap {
        width:100%
    }
}

@media(min-width: 1025px) {
    #pinMaster .section-offset,#pinMaster3 .section-offset {
        padding-top:0;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%
    }
}

@media(min-width: 1025px) {
    #pinMaster .content-offset,#pinMaster3 .content-offset {
        padding-top:4.79vw;
        width: 100%
    }
}

@media(min-width: 1920px) {
    #pinMaster .content-offset,#pinMaster3 .content-offset {
        padding-top:92px
    }
}

@media(max-width: 719px) {
    .btn-box-panel-2 img {
        max-width:60%!important
    }
}

#pinMaster2 {
    position: relative;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media(max-width: 1024px) {
    #pinMaster2 .mobile-offset {
        padding-left:0!important
    }
}

@media(min-width: 1025px) {
    #pinMaster2 .section-wrap {
        width:100%
    }
}

@media(min-width: 1025px) {
    #pinMaster2 .section-offset {
        padding-top:0;
        padding-bottom: 0;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        width: 100%
    }
}

@media(min-width: 1025px) {
    #pinMaster2 .content-offset {
        padding-top:4.79vw;
        width: 100%
    }
}

@media(min-width: 1920px) {
    #pinMaster2 .content-offset {
        padding-top:92px
    }
}

.panel-inner-wrap {
    padding-left: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media(max-width: 1024px) {
    .panel-inner-wrap {
        overflow:visible
    }
}

.panel-inner-wrap:before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 30px;
    background: -webkit-gradient(linear,right top,left top,from(rgba(227,66,0,0)),to(#fff));
    background: -webkit-linear-gradient(right,rgba(227,66,0,0),#fff 100%);
    background: -o-linear-gradient(right,rgba(227,66,0,0),#fff 100%);
    background: linear-gradient(270deg,rgba(227,66,0,0),#fff 100%);
    content: "";
    z-index: 2
}

@media(max-width: 1024px) {
    .panel-inner-wrap:before {
        display:none
    }
}

@media(min-width: 1025px) {
    .panel-inner-wrap {
        min-height:38.65vw
    }
}

@media(max-width: 1440px) and (min-width:1024px) {
    .panel-inner-wrap {
        min-height:42.65vw
    }
}

@media(min-width: 1920px) {
    .panel-inner-wrap {
        min-height:742px
    }
}

@media(min-width: 1025px) {
    .btn-box-panel {
        padding-top:1.56vw;
        padding-right: 0
    }
}

@media(min-width: 1920px) {
    .btn-box-panel {
        padding-top:30px
    }
}

.no-padding-left {
    padding-left: 0
}

.no-padding-right {
    padding-right: 0
}

@media(min-width: 1025px) {
    .new-patient-2 {
        padding-left:3.65vw;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1920px) {
    .new-patient-2 {
        padding-left:70px
    }
}

.btn-box-panel-2 {
    padding-left: 0
}

.panel-inner-wrap-2 {
    padding-left: 0;
    padding-right: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden;
    position: relative
}

.panel-inner-wrap-2:before {
    display: none
}

.panel-inner-wrap-2:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 30px;
    background: -webkit-gradient(linear,left top,right top,from(rgba(227,66,0,0)),to(#fff));
    background: -webkit-linear-gradient(left,rgba(227,66,0,0),#fff 100%);
    background: -o-linear-gradient(left,rgba(227,66,0,0),#fff 100%);
    background: linear-gradient(-270deg,rgba(227,66,0,0),#fff 100%);
    content: "";
    z-index: 2
}

@media(max-width: 1024px) {
    .panel-inner-wrap-2:after {
        display:none
    }
}

@media(min-width: 1025px) {
    .casestudy-inner-page-panel-no-slider .section-offset {
        padding-top:0
    }

    .casestudy-inner-page-panel-no-slider .section-offset .content-offset {
        padding-bottom: 0
    }

    .casestudy-inner-page-panel-no-slider .section-offset .content-offset .panel-inner-wrap-2-scrollable {
        background-color: transparent
    }

    .casestudy-inner-page-panel-no-slider .section-offset .content-offset .panel-right-1 {
        padding: 0;
        width: auto;
        margin: auto;
        width: 97%;
        min-height: 0;
        position: relative
    }
}

.casestudy-inner-page-panel-no-slider .casestudies-col.col-d-60 {
    padding-right: 0;
    min-height: 0;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(min-width: 1025px) {
    .casestudy-inner-page-panel-no-slider .casestudies-col.col-d-60 {
        width:56%
    }
}

@media(max-width: 1024px) {
    .casestudy-inner-page-panel-no-slider .casestudies-col.col-d-60 {
        -webkit-box-ordinal-group:2!important;
        -ms-flex-order: 1!important;
        order: 1!important
    }
}

@media(min-width: 1025px) {
    .casestudy-inner-page-panel-no-slider .casestudies-col.col-d-40 {
        width:44%;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.icons-scrollable-section {
    background-color: #1e1e1e
}

@media(max-width: 719px) {
    .icons-scrollable-section {
        padding-top:25px
    }

    .icons-scrollable-section .op_0 {
        opacity: 1
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .icons-scrollable-section {
        padding-top:50px
    }

    .icons-scrollable-section .op_0 {
        opacity: 1
    }
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section {
        padding-top:4.01vw;
        padding-left: 4.79vw;
        padding-right: 4.79vw
    }
}

@media(min-width: 1920px) {
    .icons-scrollable-inner-section {
        padding-top:77px;
        padding-right: 92px;
        padding-left: 92px
    }
}

.icons-scrollable-inner-section .phase-1 {
    float: left;
    position: relative;
    overflow: visible
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-1 {
        width:35.42vw;
        margin-right: 20px
    }
}

@media(min-width: 1920px) {
    .icons-scrollable-inner-section .phase-1 {
        width:680px
    }
}

.icons-scrollable-inner-section .phase-2 {
    float: left;
    position: relative;
    overflow: visible
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-2 {
        width:53.13vw;
        margin-right: 20px
    }
}

@media(min-width: 1920px) {
    .icons-scrollable-inner-section .phase-2 {
        width:1020px
    }
}

.icons-scrollable-inner-section .phase-3 {
    float: left
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-3 {
        width:17.71vw
    }

    .icons-scrollable-inner-section .phase-3 .icon-6 {
        text-align: center
    }
}

@media(min-width: 1920px) {
    .icons-scrollable-inner-section .phase-3 {
        width:340px
    }
}

.phase-controller-title {
    padding-bottom: 23px;
    padding-top: 60px
}

@media(min-width: 1025px) {
    .phase-controller-title {
        padding-bottom:1.2vw;
        padding-top: 10px
    }
}

@media(min-width: 1441px) {
    .phase-controller-title {
        padding-top:3.13vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-title {
        padding-bottom:23px;
        padding-top: 60px
    }
}

@media(max-width: 1024px) {
    .phases-controller {
        overflow:visible
    }
}

.phases-controller .phase-controller-item:first-child {
    width: 260px
}

@media(min-width: 1025px) {
    .phases-controller .phase-controller-item:first-child {
        width:13.54vw
    }
}

@media(min-width: 1920px) {
    .phases-controller .phase-controller-item:first-child {
        width:260px
    }
}

.phases-controller .phase-controller-item:first-child .phase-line-1 {
    width: 128px
}

@media(min-width: 1025px) {
    .phases-controller .phase-controller-item:first-child .phase-line-1 {
        width:6.67vw
    }
}

@media(min-width: 1920px) {
    .phases-controller .phase-controller-item:first-child .phase-line-1 {
        max-width:128px
    }
}

.phases-controller .phase-controller-item:first-child .phase-controller-text-box {
    text-align: center;
    max-width: 214px
}

@media(max-width: 1024px) {
    .phases-controller .phase-controller-item:first-child .phase-controller-text-box {
        max-width:90%;
        margin: auto
    }
}

@media(min-width: 1025px) and (max-width:1440px) {
    .phases-controller .phase-controller-item:first-child .phase-controller-text-box {
        -webkit-transform:translateX(25%);
        -ms-transform: translateX(25%);
        transform: translateX(25%);
        max-width: 14.15vw
    }
}

@media(min-width: 1441px) {
    .phases-controller .phase-controller-item:first-child .phase-controller-text-box {
        -webkit-transform:translateX(40%);
        -ms-transform: translateX(40%);
        transform: translateX(40%);
        max-width: 11.15vw
    }
}

@media(min-width: 1661px) {
    .phases-controller .phase-controller-item:first-child .phase-controller-text-box {
        -webkit-transform:translateX(40%);
        -ms-transform: translateX(40%);
        transform: translateX(40%)
    }
}

@media(min-width: 1920px) {
    .phases-controller .phase-controller-item:first-child .phase-controller-text-box {
        max-width:214px
    }
}

.phase-controller-dot {
    height: 30px
}

@media(max-width: 1024px) {
    .phase-controller-dot {
        display:none!important
    }
}

.phase-dot {
    width: 130px;
    position: relative
}

@media(min-width: 1025px) {
    .phase-dot {
        width:6.77vw
    }
}

@media(min-width: 1920px) {
    .phase-dot {
        width:130px
    }
}

.phase-inner-dot {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    background-color: #f25b48;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.phase-inner-dot:before {
    content: "";
    display: block;
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.phase-controller-dot {
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 381px
}

.phases-box {
    overflow: visible
}

.phases-box img {
    height: auto
}

@media(max-width: 1024px) {
    .phases-box {
        overflow:visible;
        height: auto;
        overflow: auto;
        white-space: nowrap;
        width: auto;
        display: inline-block;
        float: none;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-top: 15px
    }

    .phases-box .swiper-slide {
        text-align: center;
        float: none;
        display: inline-block;
        padding-top: 10px;
        vertical-align: top
    }
}

@media(min-width: 1025px) {
    .phases-box {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: stretch;
        -ms-flex-pack: stretch;
        justify-content: stretch
    }
}

.phases-box img {
    margin: auto
}

@media(max-width: 1650px) {
    .phases-box img {
        max-width:60%
    }
}

.icons-scrollable-inner-section .phase-1 {
    overflow: visible;
    -ms-flex-item-align: stretch;
    align-self: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+);
    background-color: transparent;
    -webkit-clip-path: inset(-15px 0 15px 0);
    clip-path: inset(-15px 0 15px 0)
}

.icons-scrollable-inner-section .phase-1 .icon-1 {
    width: auto;
    position: relative;
    text-align: center
}

@media(max-width: 1024px) {
    .icons-scrollable-inner-section .phase-1 .icon-1 {
        background:red
    }

    .icons-scrollable-inner-section .phase-1 .icon-1:before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 33.33%;
        height: 100%;
        -webkit-clip-path: inset(-15px 0 15px 0);
        clip-path: inset(-15px 0 15px 0);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-1 .icon-1 {
        width:50%
    }
}

.icons-scrollable-inner-section .phase-1 .icon-2 {
    text-align: center;
    width: auto
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-1 .icon-2 {
        width:50%
    }
}

.icons-scrollable-inner-section.phase-2 {
    overflow: visible;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+);
    background-color: transparent;
    -webkit-clip-path: inset(-15px 0 15px 0);
    clip-path: inset(-15px 0 15px 0);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section.phase-2 {
        margin-right:20px
    }
}

.icons-scrollable-inner-section.phase-2 .icon-1,.icons-scrollable-inner-section.phase-2 .icon-2 {
    width: 50%;
    text-align: center
}

.icons-scrollable-inner-section .phase-3 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: visible
}

.icons-scrollable-inner-section .phase-2 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-clip-path: inset(-15px 0 15px 0);
    clip-path: inset(-15px 0 15px 0);
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
}

.icons-scrollable-inner-section .phase-2 .icon-3,.icons-scrollable-inner-section .phase-2 .icon-4,.icons-scrollable-inner-section .phase-2 .icon-5 {
    width: auto;
    text-align: center
}

@media(min-width: 1025px) {
    .icons-scrollable-inner-section .phase-2 .icon-3,.icons-scrollable-inner-section .phase-2 .icon-4,.icons-scrollable-inner-section .phase-2 .icon-5 {
        width:33.33%
    }
}

.phase-controller-item {
    float: left
}

@media(min-width: 1025px) {
    .phase-controller-item {
        width:17.71vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-item {
        width:340px
    }
}

@media(min-width: 1025px) {
    .phase-controller-item.before-last {
        width:18.75vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-item.before-last {
        width:360px
    }
}

@media(min-width: 1025px) {
    .phase-controller-item.before-last .phase-line-1 {
        width:12.5vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-item.before-last .phase-line-1 {
        width:240px
    }
}

@media(min-width: 1025px) and (max-width:1440px) {
    .phase-controller-item.before-last .phase-controller-text-box {
        -webkit-transform:translateX(65%);
        -ms-transform: translateX(65%);
        transform: translateX(65%)
    }
}

@media(min-width: 1441px) {
    .phase-controller-item.before-last .phase-controller-text-box {
        -webkit-transform:translateX(92%);
        -ms-transform: translateX(92%);
        transform: translateX(92%)
    }
}

@media(min-width: 1661px) {
    .phase-controller-item.before-last .phase-controller-text-box {
        -webkit-transform:translateX(92%);
        -ms-transform: translateX(92%);
        transform: translateX(92%)
    }
}

@media(min-width: 1025px) {
    .phase-controller-item.last .phase-dot {
        width:4.17vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-item.last .phase-dot {
        width:80px
    }
}

@media(min-width: 1025px) {
    .phase-controller-item.last .phase-inner-dot {
        left:3.39vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-item.last .phase-inner-dot {
        left:65px
    }
}

.phase-line-1 {
    float: left;
    background: #d9d9d9;
    height: 1px
}

@media(min-width: 1025px) {
    .phase-line-1 {
        width:10.94vw
    }
}

@media(min-width: 1920px) {
    .phase-line-1 {
        width:210px
    }
}

.phase-line-2 {
    float: left;
    background: red;
    height: 1px
}

@media(min-width: 1025px) {
    .phase-line-2 {
        width:10.94vw
    }
}

@media(min-width: 1920px) {
    .phase-line-2 {
        width:210px
    }
}

.phase-controller-text-box {
    text-align: center
}

@media(max-width: 1024px) {
    .phase-controller-text-box {
        max-width:80%;
        margin: auto
    }
}

@media(min-width: 1025px) and (max-width:1440px) {
    .phase-controller-text-box {
        max-width:14.15vw;
        -webkit-transform: translateX(53%);
        -ms-transform: translateX(53%);
        transform: translateX(53%)
    }
}

@media(min-width: 1441px) {
    .phase-controller-text-box {
        max-width:11.15vw;
        -webkit-transform: translateX(78%);
        -ms-transform: translateX(78%);
        transform: translateX(78%)
    }
}

@media(min-width: 1920px) {
    .phase-controller-text-box {
        max-width:214px
    }
}

@media(min-width: 1025px) {
    .phase-controller-description.text.nm {
        font-size:12px
    }
}

@media(min-width: 1441px) {
    .phase-controller-description.text.nm {
        font-size:.78vw
    }
}

@media(min-width: 1920px) {
    .phase-controller-description.text.nm {
        font-size:15px
    }
}

@media(min-width: 1025px) and (max-width:1440px) {
    .phase-controller-title {
        padding-top:25px!important;
        padding-bottom: 10px!important
    }
}

@media(max-width: 1024px) {
    .phase-controller-title {
        padding-top:0
    }
}

.icons-scrollable-inner-box .swiper-container {
    overflow: visible
}

@media(min-width: 720px) and (max-width:1024px) {
    .casestudy-box-text.new-patient-2 {
        padding-right:50px
    }

    .casestudy-box-text.new-patient-2 .title {
        padding-bottom: 3.65vw
    }
}

@media(max-width: 719px) {
    .casestudy-box-text.new-patient-2 .title {
        padding-bottom:25px
    }
}

.phase-title-text {
    display: inline-block;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
    position: absolute;
    top: -10px;
    left: 50%;
    margin: auto;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 100;
    background: #1e1e1e;
    padding-left: 15px;
    padding-right: 15px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

@media(max-width: 1024px) {
    .phase-title-text {
        top:7px;
        width: auto
    }

    .phase-title-text.v1 {
        height: 20px;
        left: 15.33%
    }

    .phase-title-text.v2 {
        height: 20px;
        left: 59.33%
    }
}

.phase-title-text .red {
    color: #f25b48
}

.icon-1 {
    position: relative
}

@media(max-width: 1024px) {
    .icon-1:before {
        content:"";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: inset(-15px 15px 15px 0);
        clip-path: inset(-15px 15px 15px 0);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

.icon-2 {
    position: relative
}

@media(max-width: 1024px) {
    .icon-2:before {
        content:"";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: inset(-15px 0 15px 15px);
        clip-path: inset(-15px 0 15px 15px);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

.icon-3 {
    position: relative
}

@media(max-width: 1024px) {
    .icon-3:before {
        content:"";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: inset(-15px 4px 15px 4px);
        clip-path: inset(-15px 4px 15px 4px);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

.icon-4 {
    position: relative
}

@media(max-width: 1024px) {
    .icon-4:before {
        content:"";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: inset(-15px 4px 15px 4px);
        clip-path: inset(-15px 4px 15px 4px);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

.icon-5 {
    position: relative
}

@media(max-width: 1024px) {
    .icon-5:before {
        content:"";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-clip-path: inset(-15px 0 45px 15px);
        clip-path: inset(-15px 0 45px 15px);
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J25vbmUnIHN0cm9rZT0nIzMzMycgc3Ryb2tlLXdpZHRoPSc0JyBzdHJva2UtZGFzaGFycmF5PScxNiwgMTQnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJy8+PC9zdmc+)
    }
}

@media(max-width: 719px) {
    .healthcare-service-item {
        padding-bottom:20px
    }
}

@media(max-width: 719px) {
    .healthcare-service-item .healthcare-service-item-img svg {
        max-height:80px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-service-item {
        padding-right:20px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 1025px) {
    .healthcare-service-item {
        padding-right:20px;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

.healthcare-service-items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(max-width: 719px) {
    .healthcare-service-items {
        padding-top:25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-service-items {
        padding-top:50px
    }
}

.healthcare-service-item-title {
    font-size: 24px;
    color: #000;
    padding-top: 40px;
    line-height: 29px
}

@media(max-width: 719px) {
    .healthcare-service-item-title {
        padding-top:20px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-service-item-title {
        padding-top:25px
    }
}

@media(min-width: 1025px) {
    .healthcare-service-item-title {
        padding-top:2.08vw;
        min-height: 56px
    }
}

@media(min-width: 1920px) {
    .healthcare-service-item-title {
        padding-top:40px
    }
}

.healthcare-service-item-text {
    color: #8b8b8b;
    font-size: 14px;
    line-height: 18px
}

.healthcare-service-item-text ul {
    padding: 0;
    margin: 0;
    padding-left: 17px;
    padding-top: 50px;
    color: #8b8b8b;
    font-size: 14px;
    line-height: 19px;
    padding-bottom: 100px
}

@media(max-width: 719px) {
    .healthcare-service-item-text ul {
        padding-top:25px;
        padding-bottom: 25px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-service-item-text ul {
        padding-bottom:50px;
        padding-top: 25px
    }
}

@media(min-width: 1025px) {
    .healthcare-service-item-text ul {
        padding-top:2.6vw;
        padding-bottom: 5.21vw
    }
}

@media(min-width: 1920px) {
    .healthcare-service-item-text ul {
        padding-top:50px;
        padding-bottom: 100px
    }
}

.rotating-line {
    -webkit-transform-origin: 46% 55%;
    -ms-transform-origin: 46% 55%;
    transform-origin: 46% 55%;
    -webkit-animation: rotate-center 10s cubic-bezier(.86,0,.07,1) 3s infinite both;
    animation: rotate-center 10s cubic-bezier(.86,0,.07,1) 3s infinite both
}

.rotating-line-arrow {
    -webkit-animation: translate-x-y-rotate 10s ease-out infinite both;
    animation: translate-x-y-rotate 10s ease-out infinite both
}

.rotating-line-square {
    -webkit-transform-origin: 46% 55%;
    -ms-transform-origin: 46% 55%;
    transform-origin: 46% 55%
}

.website-arrow-1 {
    -webkit-animation: x-15-min 6s ease-out 1s infinite both;
    animation: x-15-min 6s ease-out 1s infinite both
}

.website-arrow-2 {
    -webkit-animation: x-15 6s ease-out 1s infinite both;
    animation: x-15 6s ease-out 1s infinite both
}

.website-line {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: rotate-45 6s ease-out 1s infinite both;
    animation: rotate-45 6s ease-out 1s infinite both
}

.media-icon {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: media-rotate 10s cubic-bezier(0,.15,.53,1.05) 1s infinite both;
    animation: media-rotate 10s cubic-bezier(0,.15,.53,1.05) 1s infinite both
}

.red-plus-circle {
    -webkit-animation: media-go 10s cubic-bezier(.46,-.01,.49,1.03) 1s infinite both;
    animation: media-go 10s cubic-bezier(.46,-.01,.49,1.03) 1s infinite both
}

.patient-line-1,.patient-line-2 {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

.patient-person-circle {
    -webkit-animation: transform-x-line 6s ease-out 1s infinite both;
    animation: transform-x-line 6s ease-out 1s infinite both
}

.patient-circle {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

.healthcare-tablet {
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-animation: transform-x 6s ease-out 1s infinite both;
    animation: transform-x 6s ease-out 1s infinite both
}

.round-service {
    -webkit-animation: transform-xs 6s ease-out 1s infinite both;
    animation: transform-xs 6s ease-out 1s infinite both;
    -webkit-transform-origin: bottom;
    -ms-transform-origin: bottom;
    transform-origin: bottom
}

.healthcare-pen {
    -webkit-transform: translateX(10px) rotate(10deg);
    -ms-transform: translateX(10px) rotate(10deg);
    transform: translateX(10px) rotate(10deg);
    -webkit-transform-origin: bottom;
    -ms-transform-origin: bottom;
    transform-origin: bottom;
    -webkit-animation: transform-xs-rotate 6s ease-out 1s infinite both;
    animation: transform-xs-rotate 6s ease-out 1s infinite both
}

.healthcar-search {
    -webkit-animation: search-rotate 5s cubic-bezier(.45,.05,.55,.95) 1s infinite both;
    animation: search-rotate 5s cubic-bezier(.45,.05,.55,.95) 1s infinite both;
    -webkit-transform-origin: bottom;
    -ms-transform-origin: bottom;
    transform-origin: bottom
}

.paw-wave {
    -webkit-animation: paw-hi 2.5s ease-out 1s infinite both;
    animation: paw-hi 2.5s ease-out 1s infinite both;
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-transform-origin: 30% 80%;
    -ms-transform-origin: 30% 80%;
    transform-origin: 30% 80%
}

.hand-jump {
    -webkit-animation: hand 5s ease-out 1s infinite both;
    animation: hand 5s ease-out 1s infinite both
}

.hand-jump-obj {
    -webkit-animation: hand-obj 5s ease-out 1s infinite both;
    animation: hand-obj 5s ease-out 1s infinite both;
    -webkit-animation-delay: .2;
    animation-delay: .2
}

.hand-jump-h {
    -webkit-animation: hand-h 5s ease-out 1s infinite both;
    animation: hand-h 5s ease-out 1s infinite both;
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

.medical-tech {
    -webkit-animation: med-tech 5s ease-out 1s infinite both;
    animation: med-tech 5s ease-out 1s infinite both
}

.med-hat {
    -webkit-animation: medhat 5s ease-out 1s infinite both;
    animation: medhat 5s ease-out 1s infinite both;
    -webkit-transform-origin: 50% 10%;
    -ms-transform-origin: 50% 10%;
    transform-origin: 50% 10%
}

.or-1 {
    -webkit-animation: fill 10s ease-out 1s infinite both;
    animation: fill 10s ease-out 1s infinite both;
    -webkit-animation-delay: 0;
    animation-delay: 0
}

.or-2 {
    -webkit-animation: fill 7s ease-out 1s infinite both;
    animation: fill 7s ease-out 1s infinite both;
    -webkit-animation-delay: 1s;
    animation-delay: 1s
}

.or-5 {
    -webkit-animation: fill 10s ease-out 1s infinite both;
    animation: fill 10s ease-out 1s infinite both;
    -webkit-animation-delay: 2s;
    animation-delay: 2s
}

.or-6 {
    -webkit-animation: fill 10s ease-out 1s infinite both;
    animation: fill 10s ease-out 1s infinite both;
    -webkit-animation-delay: 4s;
    animation-delay: 4s
}

.ortopedic-svg {
    max-width: 90px
}

@-webkit-keyframes fill {
    25% {
        fill: #000
    }

    30% {
        fill: #f58476
    }

    50% {
        fill: #f58476
    }

    55% {
        fill: #000
    }

    70% {
        fill: #000
    }

    75% {
        fill: #f58476
    }

    95% {
        fill: #f58476
    }

    100% {
        fill: #000
    }
}

@keyframes fill {
    25% {
        fill: #000
    }

    30% {
        fill: #f58476
    }

    50% {
        fill: #f58476
    }

    55% {
        fill: #000
    }

    70% {
        fill: #000
    }

    75% {
        fill: #f58476
    }

    95% {
        fill: #f58476
    }

    100% {
        fill: #000
    }
}

@-webkit-keyframes medhat {
    40% {
        -webkit-transform: scale(1.4);
        transform: scale(1.4)
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    60% {
        -webkit-transform: scale(1.4);
        transform: scale(1.4)
    }

    70% {
        -webkit-transform: scale(1,1);
        transform: scale(1,1)
    }
}

@keyframes medhat {
    40% {
        -webkit-transform: scale(1.4);
        transform: scale(1.4)
    }

    50% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    60% {
        -webkit-transform: scale(1.4);
        transform: scale(1.4)
    }

    70% {
        -webkit-transform: scale(1,1);
        transform: scale(1,1)
    }
}

@-webkit-keyframes med-tech {
    0% {
        -webkit-transform: translate(30px,6px);
        transform: translate(30px,6px)
    }

    33% {
        -webkit-transform: translate(60px,6px);
        transform: translate(60px,6px)
    }

    66% {
        -webkit-transform: translate(60px,6px);
        transform: translate(60px,6px)
    }

    100% {
        -webkit-transform: translate(30px,6px);
        transform: translate(30px,6px)
    }
}

@keyframes med-tech {
    0% {
        -webkit-transform: translate(30px,6px);
        transform: translate(30px,6px)
    }

    33% {
        -webkit-transform: translate(60px,6px);
        transform: translate(60px,6px)
    }

    66% {
        -webkit-transform: translate(60px,6px);
        transform: translate(60px,6px)
    }

    100% {
        -webkit-transform: translate(30px,6px);
        transform: translate(30px,6px)
    }
}

@-webkit-keyframes hand-h {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    10% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    30% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    40% {
        -webkit-transform: translateY(-6px) scale(.92,.95);
        transform: translateY(-6px) scale(.92,.95)
    }

    50% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    60% {
        -webkit-transform: translateY(-6px) scale(.92,.95);
        transform: translateY(-6px) scale(.92,.95)
    }

    70% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    90% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes hand-h {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    10% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    30% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    40% {
        -webkit-transform: translateY(-6px) scale(.92,.95);
        transform: translateY(-6px) scale(.92,.95)
    }

    50% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    60% {
        -webkit-transform: translateY(-6px) scale(.92,.95);
        transform: translateY(-6px) scale(.92,.95)
    }

    70% {
        -webkit-transform: translateY(-6px) scale(1,1);
        transform: translateY(-6px) scale(1,1)
    }

    90% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes hand-obj {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    10% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    90% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes hand-obj {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    10% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    90% {
        -webkit-transform: translateY(-6px);
        transform: translateY(-6px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes hand {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    5% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px)
    }

    90% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes hand {
    0% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    5% {
        -webkit-transform: translateY(3px);
        transform: translateY(3px)
    }

    20% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px)
    }

    90% {
        -webkit-transform: translateY(-3px);
        transform: translateY(-3px)
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes paw-hi {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    10% {
        -webkit-transform: rotate(14deg);
        transform: rotate(14deg)
    }

    20% {
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg)
    }

    30% {
        -webkit-transform: rotate(14deg);
        transform: rotate(14deg)
    }

    40% {
        -webkit-transform: rotate(-4deg);
        transform: rotate(-4deg)
    }

    50% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg)
    }

    60% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes paw-hi {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    10% {
        -webkit-transform: rotate(14deg);
        transform: rotate(14deg)
    }

    20% {
        -webkit-transform: rotate(-8deg);
        transform: rotate(-8deg)
    }

    30% {
        -webkit-transform: rotate(14deg);
        transform: rotate(14deg)
    }

    40% {
        -webkit-transform: rotate(-4deg);
        transform: rotate(-4deg)
    }

    50% {
        -webkit-transform: rotate(10deg);
        transform: rotate(10deg)
    }

    60% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@-webkit-keyframes search-rotate {
    0% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1)
    }

    10% {
        -webkit-transform: scale(.93) rotate(0) translateX(0);
        transform: scale(.93) rotate(0) translateX(0)
    }

    40% {
        -webkit-transform: scale(.93) rotate(20deg) translateX(0);
        transform: scale(.93) rotate(20deg) translateX(0)
    }

    70% {
        -webkit-transform: scale(1) rotate(0) translateX(0);
        transform: scale(1) rotate(0) translateX(0)
    }

    100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1)
    }
}

@keyframes search-rotate {
    0% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1)
    }

    10% {
        -webkit-transform: scale(.93) rotate(0) translateX(0);
        transform: scale(.93) rotate(0) translateX(0)
    }

    40% {
        -webkit-transform: scale(.93) rotate(20deg) translateX(0);
        transform: scale(.93) rotate(20deg) translateX(0)
    }

    70% {
        -webkit-transform: scale(1) rotate(0) translateX(0);
        transform: scale(1) rotate(0) translateX(0)
    }

    100% {
        -webkit-transform: rotate(0) scale(1);
        transform: rotate(0) scale(1)
    }
}

@-webkit-keyframes transform-x-line {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    25% {
        -webkit-transform: translateX(15px);
        transform: translateX(15px)
    }

    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes transform-x-line {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    25% {
        -webkit-transform: translateX(15px);
        transform: translateX(15px)
    }

    50% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes transform-xs-rotate {
    0% {
        -webkit-transform: translateX(5px);
        transform: translateX(5px)
    }

    25% {
        -webkit-transform: translateX(15px) rotate(5deg);
        transform: translateX(15px) rotate(5deg)
    }

    75% {
        -webkit-transform: translateX(5px) rotate(0);
        transform: translateX(5px) rotate(0)
    }

    100% {
        -webkit-transform: translateX(5px);
        transform: translateX(5px)
    }
}

@keyframes transform-xs-rotate {
    0% {
        -webkit-transform: translateX(5px);
        transform: translateX(5px)
    }

    25% {
        -webkit-transform: translateX(15px) rotate(5deg);
        transform: translateX(15px) rotate(5deg)
    }

    75% {
        -webkit-transform: translateX(5px) rotate(0);
        transform: translateX(5px) rotate(0)
    }

    100% {
        -webkit-transform: translateX(5px);
        transform: translateX(5px)
    }
}

@-webkit-keyframes transform-xs {
    0% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }

    25% {
        -webkit-transform: translateX(0) translateY(5px) rotate(15deg);
        transform: translateX(0) translateY(5px) rotate(15deg)
    }

    75% {
        -webkit-transform: translateX(0) translateY(5px) rotate(-15deg);
        transform: translateX(0) translateY(5px) rotate(-15deg)
    }

    100% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }
}

@keyframes transform-xs {
    0% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }

    25% {
        -webkit-transform: translateX(0) translateY(5px) rotate(15deg);
        transform: translateX(0) translateY(5px) rotate(15deg)
    }

    75% {
        -webkit-transform: translateX(0) translateY(5px) rotate(-15deg);
        transform: translateX(0) translateY(5px) rotate(-15deg)
    }

    100% {
        -webkit-transform: translateY(5px);
        transform: translateY(5px)
    }
}

@-webkit-keyframes transform-x {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    30% {
        -webkit-transform: translateX(22px);
        transform: translateX(22px)
    }

    45% {
        -webkit-transform: translateX(22px);
        transform: translateX(22px)
    }

    75% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes transform-x {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    30% {
        -webkit-transform: translateX(22px);
        transform: translateX(22px)
    }

    45% {
        -webkit-transform: translateX(22px);
        transform: translateX(22px)
    }

    75% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes patient-scale {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8)
    }

    15% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    30% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2)
    }

    45% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }

    60% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    75% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    100% {
        -webkit-transform: scale(.8);
        transform: scale(.8)
    }
}

@keyframes patient-scale {
    0% {
        -webkit-transform: scale(.8);
        transform: scale(.8)
    }

    15% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    30% {
        -webkit-transform: scale(1.2);
        transform: scale(1.2)
    }

    45% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }

    60% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    75% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    100% {
        -webkit-transform: scale(.8);
        transform: scale(.8)
    }
}

@-webkit-keyframes media-go {
    0% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    15% {
        -webkit-transform: translateY(-45px) translateX(50px);
        transform: translateY(-45px) translateX(50px)
    }

    30% {
        -webkit-transform: translateY(-45px) translateX(50px);
        transform: translateY(-45px) translateX(50px)
    }

    45% {
        -webkit-transform: translateY(-30px) translateX(20px);
        transform: translateY(-30px) translateX(20px)
    }

    60% {
        -webkit-transform: translateY(-20px) translateX(20px);
        transform: translateY(-20px) translateX(20px)
    }

    75% {
        -webkit-transform: translateY(-10px) translateX(50px);
        transform: translateY(-10px) translateX(50px)
    }

    85% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@keyframes media-go {
    0% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    15% {
        -webkit-transform: translateY(-45px) translateX(50px);
        transform: translateY(-45px) translateX(50px)
    }

    30% {
        -webkit-transform: translateY(-45px) translateX(50px);
        transform: translateY(-45px) translateX(50px)
    }

    45% {
        -webkit-transform: translateY(-30px) translateX(20px);
        transform: translateY(-30px) translateX(20px)
    }

    60% {
        -webkit-transform: translateY(-20px) translateX(20px);
        transform: translateY(-20px) translateX(20px)
    }

    75% {
        -webkit-transform: translateY(-10px) translateX(50px);
        transform: translateY(-10px) translateX(50px)
    }

    85% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@-webkit-keyframes media-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    5% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    25% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    45% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    60% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    75% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes media-rotate {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    5% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    25% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    45% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    60% {
        -webkit-transform: rotate(-30deg);
        transform: rotate(-30deg)
    }

    75% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@-webkit-keyframes rotate-45 {
    15% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    30% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    60% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    85% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@keyframes rotate-45 {
    15% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    30% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    60% {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg)
    }

    85% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
}

@-webkit-keyframes x-15 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    15% {
        -webkit-transform: translateX(7px);
        transform: translateX(7px)
    }

    85% {
        -webkit-transform: translateX(7px);
        transform: translateX(7px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes x-15 {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    15% {
        -webkit-transform: translateX(7px);
        transform: translateX(7px)
    }

    85% {
        -webkit-transform: translateX(7px);
        transform: translateX(7px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes x-15-min {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    15% {
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px)
    }

    85% {
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@keyframes x-15-min {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    15% {
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px)
    }

    85% {
        -webkit-transform: translateX(-7px);
        transform: translateX(-7px)
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }
}

@-webkit-keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360WWdeg)
    }
}

@keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }

    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360WWdeg)
    }
}

@-webkit-keyframes translate-x-y-rotate {
    20% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    40% {
        -webkit-transform: translateY(10px) translateX(-10px);
        transform: translateY(10px) translateX(-10px)
    }

    60% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@keyframes translate-x-y-rotate {
    20% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    40% {
        -webkit-transform: translateY(10px) translateX(-10px);
        transform: translateY(10px) translateX(-10px)
    }

    60% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@-webkit-keyframes translate-x-y-abs-rotate {
    20% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    40% {
        -webkit-transform: translateY(-10px) translateX(10px);
        transform: translateY(-10px) translateX(10px)
    }

    60% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@keyframes translate-x-y-abs-rotate {
    20% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }

    40% {
        -webkit-transform: translateY(-10px) translateX(10px);
        transform: translateY(-10px) translateX(10px)
    }

    60% {
        -webkit-transform: translateY(0) translateX(0);
        transform: translateY(0) translateX(0)
    }
}

@media(min-width: 1025px) {
    .healthcare-service-box {
        padding-top:4.17vw
    }
}

@media(min-width: 1025px) {
    .healthcare-service-box {
        padding-top:80px
    }
}

@media(min-width: 1025px) {
    .heathcare-form-box .content-offset.pt {
        padding-top:2.6vw!important
    }
}

@media(min-width: 1920px) {
    .heathcare-form-box .content-offset.pt {
        padding-top:50px!important
    }
}

.heathcare-form-box .casestudies-huge-title.title.h {
    padding-bottom: 10px
}

@media(max-width: 719px) {
    .heathcare-form-box .casestudies-huge-title.title.h {
        font-size:38px;
        letter-spacing: 0;
        font-weight: 400
    }
}

@media(min-width: 1025px) {
    .healthacre-form-info-text {
        padding-top:1.56vw;
        padding-bottom: 5.21vw
    }
}

@media(min-width: 1920px) {
    .healthacre-form-info-text {
        padding-top:30px;
        padding-bottom: 100px
    }
}

.healthcare-form-field {
    width: 700px;
    overflow: hidden;
    padding-top: 15px
}

@media(max-width: 1024px) {
    .healthcare-form-field {
        width:100%
    }
}

.styled-field {
    position: relative;
    float: left;
    padding-top: 20px;
    padding-bottom: 20px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 0;
    padding-right: 40px
}

@media(max-width: 719px) {
    .styled-field {
        width:100%;
        padding-right: 0
    }
}

input:focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    outline: 0
}

.styled-input {
    width: 290px;
    height: 50px;
    border: 1px solid #acacac!important;
    border-radius: 50px;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s
}

@media(max-width: 719px) {
    .styled-input {
        width:100%
    }
}

.styled-field .label,.styled-field-2 .label {
    height: auto;
    font-size: 14px;
    color: #797676;
    padding-left: 5px;
    height: auto!important;
    display: inline-block;
    background: #fff;
    width: auto!important;
    padding-right: 5px;
    -webkit-transition: all .35s cubic-bezier(.54,.3,.4,1.02);
    -o-transition: all .35s cubic-bezier(.54,.3,.4,1.02);
    transition: all .35s cubic-bezier(.54,.3,.4,1.02)
}

.styled-field .styled-input,.styled-field-2 .styled-input {
    border: 0;
    background: 0 0;
    padding-left: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #797676;
    line-height: 17px
}

.styled-field .label::after,.styled-field .label::before,.styled-field-2 .label::after,.styled-field-2 .label::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 35px;
    width: 100%;
    height: 0;
    z-index: 10;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s
}

.styled-field .label::after,.styled-field-2 .label::after {
    width: 0
}

.c-custom-checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    color: #797676;
    padding-left: 30px;
    line-height: 14.5px;
    font-size: 12px;
    max-width: 600px
}

.c-custom-checkbox .svg {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 0;
    width: 16px;
    height: 16px;
    border: 0;
    background: #d9d9d9;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: 3px;
    left: 0
}

.c-custom-checkbox .svg svg {
    width: 12px
}

.c-custom-checkbox input[type=checkbox] {
    opacity: 0;
    width: 1em;
    height: 1em;
    position: absolute;
    left: .5em;
    top: .4em
}

.c-custom-checkbox .svg path {
    -webkit-transition: stroke-dashoffset .4s linear;
    -o-transition: stroke-dashoffset .4s linear;
    transition: stroke-dashoffset .4s linear
}

.c-custom-checkbox input[type=checkbox]:checked+.svg path {
    stroke-dashoffset: 0;
    stroke: currentColor
}

.c-custom-checkbox input[type=checkbox]+.svg path {
    stroke: #000
}

.c-custom-checkbox input[type=checkbox]:checked+label {
    text-decoration: line-through
}

.c-custom-checkbox input[type=checkbox]:focus+.svg {
    outline-offset: 4px
}

.c-custom-checkbox input[type=checkbox]:focus:not(:focus-visible)+svg {
    outline: 0
}

@media(min-width: 1025px) {
    .healthcare-faq .p-t-100 {
        padding-top:3.13vw
    }
}

@media(min-width: 1920px) {
    .healthcare-faq .p-t-100 {
        padding-top:60px
    }
}

.healthcare-faq .title-offset.p-t-100 {
    padding-top: 100px
}

.healthcare-faq .title.ls {
    padding-right: 0
}

@media(max-width: 719px) {
    .healthcare-faq .title.ls {
        font-size:30px
    }
}

.healthcare-faq .dd-box .dd-text .dd-text-box {
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: 0 0;
    max-width: 1000px
}

@media(max-width: 719px) {
    .healthcare-faq .dd-box .dd-text .dd-text-box {
        padding-right:10px;
        padding-left: 10px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-faq .dd-box .dd-text .dd-text-box {
        padding-left:10px;
        padding-right: 25px
    }
}

.healthcare-faq .dd-box.open .dd-title {
    background: 0 0;
    color: #000
}

.healthcare-faq .dd-box.open .dd-title:before {
    -webkit-transition: -webkit-transform .6s ease-out;
    transition: -webkit-transform .6s ease-out;
    -o-transition: transform .6s ease-out;
    transition: transform .6s ease-out;
    transition: transform .6s ease-out,-webkit-transform .6s ease-out;
    -webkit-transform: translateY(-50%) rotate(180deg) translateX(20px);
    -ms-transform: translateY(-50%) rotate(180deg) translateX(20px);
    transform: translateY(-50%) rotate(180deg) translateX(20px)
}

@media(max-width: 719px) {
    .healthcare-faq .dd-box.open .dd-title:before {
        -webkit-transform:translateY(-50%) rotate(180deg) translateX(0);
        -ms-transform: translateY(-50%) rotate(180deg) translateX(0);
        transform: translateY(-50%) rotate(180deg) translateX(0)
    }
}

.healthcare-faq .dd-box {
    margin: 0;
    border-bottom: 1px solid #000
}

@media(max-width: 1024px) {
    .healthcare-faq .dd-box {
        padding-bottom:10px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-faq .dd-box {
        padding-bottom:20px;
        padding-top: 10px
    }
}

@media(min-width: 1025px) {
    .healthcare-faq .dd-box {
        padding-bottom:1.67vw
    }
}

@media(min-width: 1920px) {
    .healthcare-faq .dd-box {
        padding-bottom:32px
    }
}

.healthcare-faq .dd-title {
    background: 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 0
}

@media(max-width: 1024px) {
    .healthcare-faq .dd-title {
        padding-bottom:0!important
    }

    .healthcare-faq .dd-title .dd-t-1 {
        padding-bottom: 0!important
    }
}

@media(max-width: 719px) {
    .healthcare-faq .dd-title .dd-t-1 {
        font-size:17px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-faq .dd-title {
        padding-right:60px
    }
}

@media(min-width: 1025px) {
    .healthcare-faq .dd-title {
        padding:1.67vw 0;
        padding-bottom: 0
    }
}

@media(min-width: 1920px) {
    .healthcare-faq .dd-title {
        padding:32px 0;
        padding-bottom: 0
    }
}

.healthcare-faq .dd-text p {
    padding-bottom: 0;
    padding-top: 25px
}

@media(max-width: 1024px) {
    .healthcare-faq .dd-text p {
        padding-bottom:0;
        padding-top: 10px
    }
}

.healthcare-faq .dd-title {
    padding-right: 65px;
    position: relative
}

@media(max-width: 1024px) {
    .healthcare-faq .dd-title {
        padding-top:10px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 25px
    }

    .healthcare-faq .dd-title .dd-t-1 {
        font-size: 18px
    }
}

.healthcare-faq .dd-title:before {
    content: "";
    display: block;
    width: 65px;
    position: absolute;
    right: 0;
    top: 50%;
    bottom: 0;
    background-image: url(../images/patient-experience/patient-experience.svg);
    background-repeat: no-repeat;
    -webkit-transform: translateY(-50%) translateX(-20px);
    -ms-transform: translateY(-50%) translateX(-20px);
    transform: translateY(-50%) translateX(-20px);
    -webkit-transition: -webkit-transform .45s ease-out;
    transition: -webkit-transform .45s ease-out;
    -o-transition: transform .45s ease-out;
    transition: transform .45s ease-out;
    transition: transform .45s ease-out,-webkit-transform .45s ease-out;
    height: 14px;
    width: 27px
}

@media(max-width: 719px) {
    .healthcare-faq .dd-title:before {
        -webkit-transform:translateY(-50%) translateX(0);
        -ms-transform: translateY(-50%) translateX(0);
        transform: translateY(-50%) translateX(0);
        height: 12px;
        width: 20px;
        background-size: contain
    }
}

@media(min-width: 1025px) {
    .healthcare-faq .dd-title .dd-t-1 {
        font-size:2.08vw;
        line-height: 1.2
    }
}

@media(min-width: 1920px) {
    .healthcare-faq .dd-title .dd-t-1 {
        font-size:40px
    }
}

.healthcare-form-checkbox {
    padding: 0 40px;
    padding-top: 5px;
    padding-bottom: 35px;
    padding-left: 2px;
    position: relative
}

.healthcare-form-checkbox .error-field {
    right: inherit;
    left: 0;
    top: inherit;
    bottom: 12px
}

.styled-field-2 {
    position: relative;
    float: left;
    padding: 20px;
    width: 100%;
    padding-left: 0;
    padding-right: 40px
}

@media(max-width: 719px) {
    .styled-field-2 {
        width:100%;
        padding-right: 0
    }
}

.styled-field-2 textarea {
    width: 620px;
    border: 1px solid #acacac!important;
    border-radius: 20px;
    padding: 20px 30px;
    -ms-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 160px
}

@media(max-width: 719px) {
    .styled-field-2 textarea {
        width:100%
    }
}

.styled-field .label,.styled-field-2 .label {
    -webkit-transform: translateX(30px) translateY(37px);
    -ms-transform: translateX(30px) translateY(37px);
    transform: translateX(30px) translateY(37px);
    width: 100%;
    height: 35px;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    -webkit-perspective: 1600;
    perspective: 1600;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none
}

.styled-field .styled-input:focus+label::before,.styled-field-2 .styled-input.filled+label::before,styled-field-2 .styled-input:focus+label::before .styled-field .styled-input.filled+label::before {
    opacity: 0
}

.styled-field .styled-input.filled+label::after,.styled-field .styled-input:focus+label::after,.styled-field-2 .styled-input:focus+label::after,styled-field-2 .styled-input.filled+label::after {
    width: 100%
}

.styled-field .styled-input:active+label,.styled-field .styled-input:focus+label,.styled-field .styled-input:not(:empty)+label,.styled-field label.up,.styled-field-2 .styled-input:active+label .styled-field .filled+label,.styled-field-2 .styled-input:focus+label,.styled-field-2 .styled-input:not(:empty)+label,.styled-field-2 label.up,styled-field-2 .filled+label {
    -webkit-transform: translateY(13px) translateX(30px);
    -ms-transform: translateY(13px) translateX(30px);
    transform: translateY(13px) translateX(30px);
    -webkit-transition: all .28s cubic-bezier(0,.23,.28,.72);
    -o-transition: all .28s cubic-bezier(0,.23,.28,.72);
    transition: all .28s cubic-bezier(0,.23,.28,.72)
}

.healthcare-form input:-webkit-autofill,.healthcare-form input:-webkit-autofill:focus,.healthcare-form input:-webkit-autofill:hover,.healthcare-form select:-webkit-autofill,.healthcare-form select:-webkit-autofill:focus,.healthcare-form select:-webkit-autofill:hover,.healthcare-form textarea:-webkit-autofill,.healthcare-form textarea:-webkit-autofill:focus,.healthcare-form textarea:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0 1000px #fff inset!important
}

@media(max-width: 1024px) {
    .healthcare-form {
        padding-top:25px;
        width: 100%
    }
}

.healthacre-form-info-text-pb {
    padding-bottom: 0!important
}

.styled-radio-btns {
    overflow: hidden
}

@media(min-width: 1025px) {
    .styled-radio-btns {
        padding-bottom:1.3vw
    }
}

@media(min-width: 1920px) {
    .styled-radio-btns {
        padding-bottom:25px
    }
}

.styled-radio-btn {
    width: 33.33%;
    float: left
}

@media(max-width: 719px) {
    .styled-radio-btn {
        width:50%
    }
}

.styled-radio-btn .icon-text {
    color: #7d7d7d;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px
}

@media(max-width: 719px) {
    .styled-radio-btn .icon-text {
        font-size:12px;
        line-height: 16px
    }
}

.styled-radio-btn .icon-box {
    width: 165px;
    min-height: 183px;
    text-align: center;
    border: 2px solid transparent;
    padding-top: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-transition: all .45s ease-out;
    -o-transition: all .45s ease-out;
    transition: all .45s ease-out;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 10px
}

@media(max-width: 719px) {
    .styled-radio-btn .icon-box {
        padding-top:10px;
        padding-left: 10px;
        padding-right: 10px;
        width: auto;
        -ms-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .styled-radio-btn .icon-box {
        padding-top:10px
    }
}

.styled-radio-btn .icon-box svg {
    width: 100%;
    -ms-flex-item-align: start;
    align-self: start
}

.styled-radio-btn .icon-box #e6axwGc2jKt1 {
    max-width: 85px
}

.styled-radio-btn .icon-box #e6axwGc2jKt1 path {
    will-change: transform
}

.styled-radio-btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(max-width: 719px) {
    .styled-radio-btns {
        padding-bottom:10px
    }
}

.styled-radio-btns label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-bottom: 15px
}

.styled-radio-btns label svg path {
    -webkit-transition: all .45s ease-out;
    -o-transition: all .45s ease-out;
    transition: all .45s ease-out
}

.styled-radio-btns label input {
    position: absolute;
    left: -9999px
}

.styled-radio-btns label input:checked+.healthcare-icon-text .icon-box {
    border-color: #f58476
}

.styled-radio-btns label input:checked+.healthcare-icon-text .icon-text {
    color: #000
}

.styled-radio-btns label input:checked+.healthcare-icon-text svg path {
    fill: #f58476
}

.styled-radio-btns label span {
    -webkit-transition: .25s ease;
    -o-transition: .25s ease;
    transition: .25s ease
}

.styled-field .error-field,.styled-field-2 .error-field {
    position: absolute;
    bottom: -4px;
    left: 35px;
    display: inline-block;
    top: inherit
}

.styled-field-2 .error-field {
    bottom: 2px;
    left: 35px
}

.styled-field.js-field-box.error .styled-input {
    border-color: #fe5b46!important
}

.styled-field.js-field-box.error label {
    color: #fe5b46;
    -webkit-transform: translateY(13px) translateX(30px);
    -ms-transform: translateY(13px) translateX(30px);
    transform: translateY(13px) translateX(30px)
}

@media(min-width: 720px) and (max-width:1024px) {
    .content-info-box {
        padding-right:20px
    }
}

@media(min-width: 1025px) {
    .healthcare-icons-title {
        padding-bottom:5.21vw!important
    }
}

@media(min-width: 1920px) {
    .healthcare-icons-title {
        padding-bottom:100px!important
    }
}

@media(max-width: 1024px) {
    .healtcare-title-awards {
        padding-top:25px;
        padding-bottom: 25px
    }
}

@media(min-width: 1025px) {
    .healtcare-title-awards {
        padding-top:2.08vw;
        padding-bottom: 1.56vw
    }
}

@media(min-width: 1920px) {
    .healtcare-title-awards {
        padding-top:40px;
        padding-bottom: 30px
    }
}

@media(max-width: 719px) {
    .healthcare-partners {
        padding-top:25px;
        text-align: center
    }
}

.healthcare-partners img {
    max-width: 50%
}

@media(max-width: 719px) {
    .healthcare-partners img {
        max-width:85%;
        padding-bottom: 25px;
        max-height: 50px
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-partners img {
        max-height:50px
    }
}

.healthcare-awards-line {
    width: 100%;
    float: left;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

@media(max-width: 719px) {
    .healthcare-awards-line {
        padding-top:25px;
        padding-bottom: 25px
    }

    .healthcare-awards-line .swiper-wrapper {
        height: auto!important
    }
}

@media(min-width: 720px) and (max-width:1024px) {
    .healthcare-awards-line {
        padding-top:50px;
        padding-bottom: 50px
    }
}

@media(min-width: 1025px) {
    .healthcare-awards-line {
        padding-top:5.21vw;
        padding-bottom: 5.21vw
    }
}

@media(min-width: 1920px) {
    .healthcare-awards-line {
        padding-top:100px;
        padding-bottom: 100px
    }
}

.healthcare-awards-line .healthcare-awards-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.healthcare-awards-line .healthcare-awards-item:first-child {
    padding-left: 0
}

.healthcare-awards-line .healthcare-awards-num {
    color: #ddd;
    font-size: 30px;
    display: inline-block;
    padding-right: 15px;
    width: auto
}

.healthcare-awards-line .healthcare-awards-img {
    -ms-flex-item-align: center;
    align-self: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: calc(70%)
}

@media(max-width: 719px) {
    .healthcare-awards-line .healthcare-awards-img {
        display:block;
        width: 100%
    }
}

.healthcare-awards-line .healthcare-awards-img img {
    max-width: 100%
}

@media(max-width: 719px) {
    .healthcare-awards-line .healthcare-awards-img img {
        max-width:80%
    }
}

.healthcare-pad-right-0 {
    padding-right: 0
}

.healthcare-recapchtabox {
    position: relative
}

.healthcare-recapchtabox .recaptcha-container {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    margin-left: 0
}

@media(max-width: 719px) {
    .healthcare-recapchtabox .recaptcha-container {
        -webkit-transform:scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
        margin-left: -26px
    }
}

.healthcare-recapchtabox {
    padding-bottom: 30px
}

.healthcare-recapchtabox .recaptcha-container {
    position: relative;
    padding-bottom: 30px
}

.healthcare-recapchtabox .error-field {
    position: absolute;
    bottom: 35px;
    left: 0;
    top: inherit
}

.heathcare-form-box .success-msg {
    display: none;
    font-size: 16px;
    color: #797676;
    padding-bottom: 30px;
    font-size: 20px
}

.logo-left {
    text-align: right
}

@media(max-width: 719px) {
    .logo-left {
        text-align:center
    }
}

.logo-center {
    text-align: center
}

.logo-right {
    text-align: left
}

@media(max-width: 719px) {
    .logo-right {
        text-align:center
    }
}

#js-form-fields {
    width: 100%;
    float: left;
    height: 43px
}

.flex-right {
    margin-left: auto
}

.btn-box-panel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 30px
}

.btn-box-panel img {
    max-width: 50%
}

@media(max-width: 719px) {
    .btn-box-panel {
        padding-top:0;
        display: block;
        padding-left: 0!important;
        padding-top: 0!important;
        padding-bottom: 0!important
    }

    .btn-box-panel img {
        max-width: 100%;
        padding-bottom: 25px
    }
}

.btn-box-panel-2 {
    padding-left: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-top: 30px
}

.btn-box-panel-2 img {
    max-width: 50%
}

@media(max-width: 719px) {
    .btn-box-panel-2 {
        display:-webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        padding-left: 0;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        text-align: left;
        -webkit-box-pack: left;
        -ms-flex-pack: left;
        justify-content: left;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: start;
        padding-left: 0!important;
        padding-top: 0!important;
        padding-bottom: 0!important
    }

    .btn-box-panel-2 .flex-left {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        width: 100%
    }

    .btn-box-panel-2 .flex-right {
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1;
        display: block;
        margin-left: 0;
        text-align: left
    }

    .btn-box-panel-2 img {
        max-width: 100%;
        padding-bottom: 25px
    }
}

.healthcare-hero-section .slider-title {
    font-weight: 400!important
}

.healthcare-hero-section video {
    -webkit-clip-path: inset(0 0 1px 0);
    clip-path: inset(0 0 1px 0)
}

@media(min-width: 1025px) {
    .healthcare-hero-section video {
        -webkit-transform:translateY(-50%) translateX(0) scale(1.01);
        -ms-transform: translateY(-50%) translateX(0) scale(1.01);
        transform: translateY(-50%) translateX(0) scale(1.01)
    }
}

.healthcare-hero-section .section-offset {
    background-color: transparent!important
}

@media(max-width: 1024px) {
    .healthcare-hero-section .healthcare-hero-text {
        opacity:1
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-section {
        max-height:none
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-section .home-slider-box-inner .section-offset.flexVertical {
        padding-top:100px;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: start
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-section .healthcare-hero-content {
        position:relative;
        z-index: 3
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-section .home-slider-bckg-img:before {
        content:"";
        background: rgba(235,231,230,.7);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-arrow {
        display:none
    }
}

@media(max-width: 1024px) {
    .healthcare-hero-section {
        height:auto;
        padding-top: 0!important
    }

    .healthcare-hero-section #hero-slider {
        overflow: hidden;
        min-height: 0;
        position: relative
    }

    .healthcare-hero-section #hero-slider .home-slider-item-box {
        height: auto;
        overflow: hidden;
        position: relative
    }

    .healthcare-hero-section #hero-slider .home-slider-item-box .section-wrap {
        position: relative;
        overflow: hidden
    }

    .healthcare-hero-section #hero-slider .home-slider-item-box .section-wrap .healthcare-hero-content {
        height: auto
    }
}

@media(max-width: 1024px) {
    .part-img-box-healthcare-service {
        opacity:0;
        visibility: hidden;
        display: none
    }
}
// draggable carousel starts here

//CAROUSEL SETTINGS
var $imagesCarousel = jQuery('.carouselOfImages').flickity({
    /* options, defaults listed */
  
    accessibility: false,
    /* enable keyboard navigation, pressing left & right keys */
  
    autoPlay: false,
    pauseAutoPlayOnHover: false,
    /* advances to the next cell
    if true, default is 3 seconds
    or set time between advances in milliseconds
    i.e. `autoPlay: 1000` will advance every 1 second */
  
    cellAlign: 'center',
    /* alignment of cells, 'center', 'left', or 'right'
    or a decimal 0-1, 0 is beginning (left) of container, 1 is end (right) */
  
    // cellSelector: '.topic-switcher__item',
    /* specify selector for cell elements */
  
    contain: false,
    /* will contain cells to container
    so no excess scroll at beginning or end
    has no effect if wrapAround is enabled */
  
    draggable: true,
    /* enables dragging & flickin
    freeScroll: false,
    enables content to be freely scrolled and flicked
    without aligning cells */
  
    friction: 0.2,
    /* smaller number = easier to flick farther */
  
    initialIndex: 0,
    /* zero-based index of the initial selected cell */
  
    lazyLoad: false,
    /* enable lazy-loading images
    set img data-flickity-lazyload="src.jpg"
    set to number to load images adjacent cells */
  
    percentPosition: true,
    /* sets positioning in percent values, rather than pixels
    Enable if items have percent widths
    Disable if items have pixel widths, like images */
  
    prevNextButtons: false,
    /* creates and enables buttons to click to previous & next cells */
  
    pageDots: false,
    /* create and enable page dots */
  
    resize: true,
    /* listens to window resize events to adjust size & positions */
  
    rightToLeft: false,
    /* enables right-to-left layout */
  
    setGallerySize: true,
    /* sets the height of gallery
    disable if gallery already has height set with CSS */
  
    watchCSS: false,
    /* watches the content of :after of the element
    activates if #element:after { content: 'flickity' }
    IE8 and Android 2.3 do not support watching :after
    set watch: 'fallbackOn' to enable for these browsers */
  
    wrapAround: true
      /* at end of cells, wraps-around to first for infinite scrolling */
  });
  
  function resizeCells() {
    var flkty = $imagesCarousel.data('flickity');
    var $current = flkty.selectedIndex;
    var $length = flkty.cells.length;
    var $imageNumLimit = 5;
    if ($length < $imageNumLimit) {
      $imagesCarousel.flickity('destroy');
    }
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedLeft2");
    jQuery('.carouselOfImages .carouselImage').removeClass("nextToSelectedRight2");
    jQuery('.carouselOfImages .carouselImage').eq($current - 1).addClass("nextToSelectedLeft");
    jQuery('.carouselOfImages .carouselImage').eq($current - 2).addClass("nextToSelectedLeft2");
    var $endCell;
    if ($current + 1 == $length) {
      $endCell = "0";
    } else {
      $endCell = $current + 1;
    }
    jQuery('.carouselOfImages .carouselImage').eq($endCell).addClass("nextToSelectedRight");
    if($endCell + 1 < $imageNumLimit){
      jQuery('.carouselOfImages .carouselImage').eq($endCell + 1).addClass("nextToSelectedRight2"); 
    } else {
      jQuery('.carouselOfImages .carouselImage').eq(0).addClass("nextToSelectedRight2");
    }
  }
  resizeCells();
  
  $imagesCarousel.on('scroll.flickity', function() {
    resizeCells();
  });
  
  
  //HOVER FUNCTIONS
  $('.carouselImage').bind("mouseover", function(){
    if (this.className === 'carouselImage nextToSelectedLeft') {
      $imagesCarousel.flickity('playLeftSlowPlayer');
    } else if (this.className === 'carouselImage nextToSelectedLeft2') {
      $imagesCarousel.flickity('playLeftFastPlayer');
    } else if (this.className === 'carouselImage nextToSelectedRight') {
      $imagesCarousel.flickity('playRightSlowPlayer');
    } else if (this.className === 'carouselImage nextToSelectedRight2') {
      $imagesCarousel.flickity('playRightFastPlayer');
    }
  });
  
  $('.carouselImage').bind("mouseout", function(){
    $imagesCarousel.flickity('pausePlayer');
  });


//   Draggable image slider starts from here


// Draggable image slider ends from here



// Services with timeline animation

