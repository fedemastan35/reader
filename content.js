
deleteCover();

function deleteCover() {
    setTimeout(function(){ borrado() }, 1000);
}

function borrado(){
    if (document.URL.startsWith('https://www.lavanguardia.com')) {
        let removed = false;
        let laVanguardia = document.getElementsByClassName('modal show fade ev ev-open-modal-paywall-REQUIRE_LOGIN in');
        if (laVanguardia.length > 0) {
            laVanguardia[0].remove();
            removed = true;
        }

        laVanguardia = document.getElementsByClassName('modal show fade ev ev-open-modal-paywall-REQUIRE_LOGIN_WITH_ENTITLEMENT in');
        if (laVanguardia.length > 0) {
            console.log('2 remove');
            laVanguardia[0].remove();
            removed = true;
        }
        if (!removed) {
            deleteCover();
        }
    } else if (document.URL.startsWith('https://www.clarin.com')) {
        let removed = false;
        let clarin = document.getElementsByClassName('mfp-wrap modal-pase');
        console.log('1', clarin);
        if (clarin.length > 0) {
            clarin[0].remove();
            removed = true;
        }
        clarin = document.getElementsByClassName('mfp-wrap modal-pase mfp-ready');
        console.log('2', clarin);
        if (clarin.length > 0) {
            clarin[0].remove();
        }
        clarin = document.getElementsByClassName('mainPage lock');
        console.log('3', clarin);
        if (clarin.length > 0) {
            clarin[0].style = null;
        }
        clarin = document.getElementsByClassName('no-js');
        console.log('4', clarin);
        if (clarin.length > 0) {
            clarin[0].style = null;
        }
        if (!removed) {
            deleteCover();
        }
    }
}

