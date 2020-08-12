module.exports = function yearsAgo(dt2, dt1) {

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));

}
{
    dt1 = new Date("June 13, 2014 08:11:00");
    dt2 = new Date("April 02, 2020 11:48:00");

}
{
    dt3 = new Date("July 13, 2014 10:11:00");
    dt4 = new Date("April 02, 2018 14:48:00");

}

{
    dt5 = new Date("january 13, 2010 10:11:00");
    dt6 = new Date("december 02, 2020 14:48:00");

}


