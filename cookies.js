// Based on w3schools functions

/**
 * Set a cookie with value
 * @param {*} cname cookie name
 * @param {*} cvalue cookie value
 * @param {*} exdays expiers in the amount of days
 * @return {void}
 */
function setCookie( cname, cvalue, exdays, cookieAllowed = false ) {
    if ( cookieAllowed || isCookieAllowed() ) {
        const date = new Date();
        date.setTime( date.getTime() + ( exdays * 24 * 60 * 60 * 1000 ) );
        const expires = "expires=" + date.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
}

/**
 * Gets cookie value
 * @param {*} cname
 * @return {string}
 */
function getCookie( cname ) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent( document.cookie );
    const ca = decodedCookie.split(";");
    for (let c of ca) {
        while ( c.charAt( 0 ) === " " ) {
            c = c.substring( 1 );
        }
        if ( c.indexOf( name ) === 0 ) {
            return c.substring( name.length, c.length );
        }
    }
    return "";
}

/**
 * Check if cookie is set
 * @param {*} cname
 * @return {boolean}
 */
function checkCookie( cname ) {
    const check = getCookie( cname );
    if ( check !== "" ) {
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if allowed to use cookies.
 */
function isCookieAllowed() {
    return checkCookie( 'cookie-allowed' );
}


function setCookieAllowed() {
    setCookie( 'cookie-allowed', true, 30, true );
    document.body.getElementsByClassName( 'cookie' )[ 0 ].style.display = 'none';
}
