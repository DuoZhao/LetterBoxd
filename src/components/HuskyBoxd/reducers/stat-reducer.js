const StatData = [
    {
        firstName: "Zhengyan", lastName: "Mr.",
        profilePicture: "../pictures/peaky_blinder.jpg", bannerPicture: "../pictures/stat_background.jpg",
        films: 51, hours: 27, directors: 15, countries: 30, statpicture: "../pictures/stat_bar.webp",
        stat_background2: "../pictures/stat_background2.jpg",
        stat_background3: "../pictures/stat_background3.jpg",
        films2019: 21, hours2019: 16, directors2019: 3, countries2019: 19,
        films2020: 18, hours2020: 5, directors2020: 8, countries2020: 11,
        films2021: 12, hours2021: 6, directors2021: 4, countries2021: 0,
    }]

const StatReducer = () => {
    return StatData;
}

export default StatReducer;

