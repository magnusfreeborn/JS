function pic() {
    var bgm = ['https://magnusfreeborn.000webhostapp.com/1.gif','https://magnusfreeborn.000webhostapp.com/1.gif', 'https://magnusfreeborn.000webhostapp.com/3.gif'];

    $('.random_bg').css({
        'background-image' : 'url('+ bgm[Math.floor(Math.random() * bgm.length)] + ') repeat',
        'background-size' : 'contain'
    });
}

pic();
