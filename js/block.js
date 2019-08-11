var num = 1;
var plus = 1;
const page = [
    '<iframe class="video" src="https://www.youtube.com/embed/_Tfa8A-QVWc?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/z7LWrJWm44M?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/4P6dR_QyYaY?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/yuox_T7Teqs?autoplay=1&mute=1&controls=0&disablekb=1" autoplsy;></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/1K5aBEVqWOw?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/8lgi00b00ys?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/fQhWgaDnyRI?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/UluqRMKw-Ug?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/jey3Z8GHloU?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>',
    '<iframe class="video" src="https://www.youtube.com/embed/v_sGkB-NG3w?autoplay=1&mute=1&controls=0&disablekb=1"></iframe>'
];

var str = ``;

    for(let i = 0; i < page.length; i++) {
     const url = page[i];
        str += `\<div class="container" id="container${plus++}">\
        <div class="row">\
            <div class="col-lg-12">\
                <div class="video${num++}">\
                ${url}\
                </div>\
            </div>\
        </div>\
    </div>\
    `;
    }

export {str};

