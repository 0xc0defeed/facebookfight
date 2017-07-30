var token = "582566498799019|IOMZ1MkaciFtsC_qb1bxBprO-tc",
    fanCountNumber = 1000000,
    talkingAboutNumber = 60000,
    fanCountNumberIT = 200000,
    talkingAboutNumberIT = 14000,

    urlVona = 'https://graph.facebook.com/v2.10/247920204622?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token,
    urlOrban = 'https://graph.facebook.com/v2.10/298090296092?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token,

    urlJobbik = 'https://graph.facebook.com/v2.10/287770891404?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token,
    urlFidesz = 'https://graph.facebook.com/v2.10/9844779306?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token,

    urlJobbikIT = 'https://graph.facebook.com/v2.10/129382163754757?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token,
    urlFideszIT = 'https://graph.facebook.com/v2.10/71547793430?fields=name,about,fan_count,talking_about_count,picture.type(large)&access_token=' + token;

    setTimeout(function(){
    $.when(
        $.getJSON(urlVona),
        $.getJSON(urlOrban),
        $.getJSON(urlJobbik),
        $.getJSON(urlFidesz),
        $.getJSON(urlJobbikIT),
        $.getJSON(urlFideszIT)
    ).done(function (vona, orban, jobbik, fidesz, jobbikIT, fideszIT) {

        console.log(vona[0]);
        console.log(orban[0]);
        console.log(jobbik[0]);
        console.log(fidesz[0]);
        console.log(jobbikIT[0]);
        console.log(fideszIT[0]);

        fanCount(
            'bar1',
            vona[0].fan_count,
            Math.floor((vona[0].fan_count / fanCountNumber) * 100)
        );

        fanCount(
            'bar2',
            orban[0].fan_count,
            Math.floor((orban[0].fan_count / fanCountNumber) * 100)
        );

        talkingAboutCount(
            'bar3',
            vona[0].talking_about_count,
            Math.floor((vona[0].talking_about_count / talkingAboutNumber) * 100)
        );

        talkingAboutCount(
            'bar4',
            orban[0].talking_about_count,
            Math.floor((orban[0].talking_about_count / talkingAboutNumber) * 100)
        );

        fanCount(
            'bar5',
            jobbik[0].fan_count,
            Math.floor((jobbik[0].fan_count / fanCountNumber) * 100)
        );

        fanCount(
            'bar6',
            fidesz[0].fan_count,
            Math.floor((fidesz[0].fan_count / fanCountNumber) * 100)
        );

        talkingAboutCount(
            'bar7',
            jobbik[0].talking_about_count,
            Math.floor((vona[0].talking_about_count / talkingAboutNumber) * 100)
        );

        talkingAboutCount(
            'bar8',
            fidesz[0].talking_about_count,
            Math.floor((orban[0].talking_about_count / talkingAboutNumber) * 100)
        );

        fanCount(
            'bar9',
            jobbikIT[0].fan_count,
            Math.floor((jobbikIT[0].fan_count / fanCountNumberIT) * 100)
        );

        fanCount(
            'bar10',
            fideszIT[0].fan_count,
            Math.floor((fideszIT[0].fan_count / fanCountNumberIT) * 100)
        );

        talkingAboutCount(
            'bar11',
            jobbikIT[0].talking_about_count,
            Math.floor((jobbikIT[0].talking_about_count / talkingAboutNumberIT) * 100)
        );

        talkingAboutCount(
            'bar12',
            fideszIT[0].talking_about_count,
            Math.floor((fideszIT[0].talking_about_count / talkingAboutNumberIT) * 100)
        );

    });
}, 2000);

function fanCount(id,count,percent){

    $("."+id).next(".count").html("<span>" + numeral(count).format('0,0').replace(/,/g,' ') + "</span><br>ember kedveli");
    $("."+id+ " .bar-fill").animate({height: percent+'%'}, 1500);

}

function talkingAboutCount(id,count,percent){

    $("."+id).next(".count").html("<span>" + numeral(count).format('0,0').replace(/,/g,' ') + "</span><br>ember beszél róla");
    $("."+id+ " .bar-fill").animate({height: percent+'%'}, 1500);

}