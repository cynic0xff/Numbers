var NRT = {
  Moxi: {
    //change these numbers to reflect changes in the HTML
    agents: 88000,
    offices: 3000,
    countries: 49,
    delay: 500,     //how long the before the numbers start rotating

    //Set to false when in production mode
    DEBUG: true
  }
};

window.numberMapOptions = {
  format: '(ddd,ddd)'
};

if(NRT.Moxi.DEBUG) {
    (function ()
    {
    var keys=Object.keys( window );
    for (var i in keys)
    {
        if (typeof window[keys[i]] != 'function')
        console.log(keys[i], window[keys[i]]);
    }
    })();
}