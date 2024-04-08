$(document).ready(() => {
    const tour = $("#tour");
    const adult = $("#adult");
    const child = $("#children");

    const adultNumber = $("#adult-number");
    const adultPrice = $("#adult-price");
    const adultTotal = $("#adult-total");

    const childNumber = $("#child-number");
    const childPrice = $("#child-price");
    const childTotal = $("#child-total");

    const total = $("#total");

    const tourPrice = [
        10000000,
        6000000,
        3000000,
        2000000,
        3500000,
        2500000
    ];

    const num = {
        adult: 0,
        child: 0,
        tour: 0
    }

    tour.change(e => {
        if(e.target.value == 0) {
            adultPrice.text("0");
            childPrice.text("0");
            num.tour = 0;
        } else {
            num.tour = e.target.value;
            updateDisplay();
        }
    });

    adult.change(e => {
        num.adult = e.target.value;
        updateDisplay();
    });

    child.change(e => {
        num.child = e.target.value;
        updateDisplay();
    });

    updateDisplay = (() => {
        adultNumber.text(num.adult);
        childNumber.text(num.child);

        adultPrice.text(tourPrice[num.tour - 1]);
        childPrice.text(tourPrice[num.tour - 1] / 2);

        adultTotal.text(num.adult * tourPrice[num.tour - 1]);
        childTotal.text(num.child * tourPrice[num.tour - 1] / 2);

        total.text((num.adult * tourPrice[num.tour - 1]) + (num.child * tourPrice[num.tour - 1] / 2));
    })
})