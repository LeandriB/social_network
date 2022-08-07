const createDate = date => {
    let dateString = date.toString();

    // get last number of the date string
    const lastNum = dateString.charAt(dateString.length - 1);

    if (lastNum === '1' && dateString !== '11') {
        dateString = `${dateString}st`;
        } else if (lastNum === '2' && dateString !== '12') {
        dateString = `${dateString}nd`;
        } else if (lastNum === '3' && dateString !== '13') {
        dateString = `${dateString}rd`;
        } else {
        dateString = `${dateString}th`;
    }

    return dateString;
};

  // function to format a timestamp this accepts the 
  // timestamp and an object as optional parameters
    module.exports = (
        timestamp,
        { monthLength = 'short', date = true } = {}
    ) => {
    let months;

    if (monthLength === 'short') {
            months = {
                0: 'Jan',
                1: 'Feb',
                2: 'Mar',
                3: 'Apr',
                4: 'May',
                5: 'Jun',
                6: 'Jul',
                7: 'Aug',
                8: 'Sep',
                9: 'Oct',
                10: 'Nov',
                11: 'Dec'
            };
        } else {
            months = {
                0: 'January',
                1: 'February',
                2: 'March',
                3: 'April',
                4: 'May',
                5: 'June',
                6: 'July',
                7: 'August',
                8: 'September',
                9: 'October',
                10: 'November',
                11: 'December'
            };
        }
    
        const dateObject = new Date(timestamp);
        const monthFormatted = months[dateObject.getMonth()];
    
        let dayOfMonth;
    
        if (date) {
            dayOfMonth = createDate(dateObject.getDate());
        } else {
            dayOfMonth = dateObject.getDate();
        }
    
        const year = dateObject.getFullYear();
    
        let hour;
        // check if 24-hr time
        if (dateObject.getHours > 12) {
            hour = Math.floor(dateObject.getHours() / 2);
        } else {
            hour = dateObject.getHours();
        }
        // if hour is 0, change it to 12
        if (hour === 0) {
            hour = 12;
        }
    
        const minutes = dateObject.getMinutes();
    
        // set if `am` or `pm`
        let timeOfDay;
    
        if (dateObject.getHours() >= 12) {
            timeOfDay = 'pm';
        } else {
            timeOfDay = 'am';
        }
    
        const timestamp = `${monthFormatted} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${timeOfDay}`;
    
    return timestamp;
};