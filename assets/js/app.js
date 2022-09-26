/* Catch the button that makes event */
let button = document.getElementById( 'button' );
/* This button generate event */
button.addEventListener('click', () => {
    /* This conditional verifies whether boderStyle actually is solid and changes boder and
    else comes back to previous state */
    if( button.style.borderStyle != 'solid' ){
        button.style.border = 'red solid 2px';
    }else{
        button.style.border = 'none'
    }
}
)