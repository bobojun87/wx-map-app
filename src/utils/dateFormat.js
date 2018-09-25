const format = (value) => {
    return value >= 10 ? value : '0' + value
}

const dateFormat = {
    // js时间输出格式化
    dateToString: (dateString, type) => {
        let date = dateString
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let second = date.getSeconds()
        let result
        switch (type) {
            case 0: // 01-05
                result = `${format(month)}-${format(day)}`
                break
            case 1: // 11:12
                result = `${format(hours)}:${format(minutes)}`
                break
            case 2: // 2015-01-05
                result = `${year}-${format(month)}-${format(day)}`
                break
            case 3: // 2015-01-05 11:12
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`
                break
            case 4: // 2015-01-05 11:12:06
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
                break
            case 5: // 2015-01
                result = `${year}-${format(month)}`
                break
        }
        return result;
    },

    // 时间截输出格式
    timestampToString: (time, type) => {
        let date = new Date(time * 1000)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let second = date.getSeconds()

        let result = "";
        switch (type) {
            case 0: // 01-05
                result = `${format(month)}-${format(day)}`
                break
            case 1: // 11:12
                result = `${format(hours)}:${format(minutes)}`
                break
            case 2: // 2015-01-05
                result = `${year}-${format(month)}-${format(day)}`
                break
            case 3: // 2015-01-05 11:12
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}`
                break
            case 4: // 2015-01-05 11:12:06
                result = `${year}-${format(month)}-${format(day)}  ${format(hours)}:${format(minutes)}:${format(second)}`
                break
        }
        return result;
    },
    // 获取星期字符串 n表示getDay()对应的数字
    getWeekStr(n) {
        let weekName = ''
        switch (n) {
            case 1:
                weekName = '星期一'
                break;
            case 2:
                weekName = '星期二'
                break;
            case 3:
                weekName = '星期三'
                break;
            case 4:
                weekName = '星期四'
                break;
            case 5:
                weekName = '星期五'
                break;
            case 6:
                weekName = '星期六'
                break;
            case 0:
                weekName = '星期日'
                break;
        }
        return weekName
    },
    // 输入的时间格式为 yyyy-MM-dd
    StringToDate_01: (dateString) => {
        // alert(dateString)
        if (dateString) {
            let date = new Date(dateString.replace(/-/, "/"))
                //			let date = new Date(dateString) 
            return date;
        }
    },

    // 输入的时间格式为yyyy-MM-dd hh:mm:ss
    StringToDate_02: (dateString) => {
        if (dateString) {
            let date = new Date(dateString);
            return date;
        }
    },

    // 当时间转时间截 new Date()
    DateToTimestamp: (value) => {
        let timestamp = Date.parse(value) / 1000;
        return timestamp;
    },

    /** 
     * 传递任意日期字符串，获得相对当前周的起止日期 
     * 
     **/
    getWeekStartAndEndStr: function(dateStr) {
        //起止日期数组   
        let startStop = new Array();
        //一天的毫秒数   
        let millisecond = 1000 * 60 * 60 * 24;
        //获取当前时间   
        let currentDate = new Date(dateStr);
        //返回date是一周中的某一天
        let week = currentDate.getDay();
        //减去的天数   
        let minusDay = week != 0 ? week - 1 : 6;
        //获得当前周的第一天   
        let currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
        //获得当前周的最后一天
        let currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
        //添加至数组   
        startStop.push(this.dateToString(currentWeekFirstDay, 2));
        startStop.push(this.dateToString(currentWeekLastDay, 2));
        return startStop;
    },
    /** 
     * 获得相对当前周AddWeekCount个周的起止日期 
     * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
     * 
     **/
    getWeekStartAndEnd: function(AddWeekCount) {
        //起止日期数组   
        let startStop = new Array();
        //一天的毫秒数   
        let millisecond = 1000 * 60 * 60 * 24;
        //获取当前时间   
        let currentDate = new Date();
        //相对于当前日期AddWeekCount个周的日期
        currentDate = new Date(currentDate.getTime() + (millisecond * 7 * AddWeekCount));
        //返回date是一周中的某一天
        let week = currentDate.getDay();
        //返回date是一个月中的某一天   
        let month = currentDate.getDate();
        //减去的天数   
        let minusDay = week != 0 ? week - 1 : 6;
        //获得当前周的第一天   
        let currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
        //获得当前周的最后一天
        let currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
        //添加至数组   
        startStop.push(this.dateToString(currentWeekFirstDay, 2));
        startStop.push(this.dateToString(currentWeekLastDay, 2));
        return startStop;
    },
    /** 
     * 获得相对当前周AddWeekCount个周的七天日期
     * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
     * 
     **/
    getWeekAllDate: function(AddWeekCount) {
        //起止日期数组   
        let weekDay = new Array();
        //一天的毫秒数   
        let millisecond = 1000 * 60 * 60 * 24;
        //获取当前时间   
        let currentDate = new Date();
        //相对于当前日期AddWeekCount个周的日期
        currentDate = new Date(currentDate.getTime() + (millisecond * 7 * AddWeekCount));
        //返回date是一周中的某一天
        let week = currentDate.getDay();
        //减去的天数   
        let minusDay = week != 0 ? week - 1 : 6;
        //获得当前周的第一天   
        let currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
        for (let i = 0; i < 7; i++) {
            // 获取每一天
            let currentWeekDay = new Date(currentWeekFirstDay.getTime() + (millisecond * i));
            weekDay.push(this.dateToString(currentWeekDay, 2));
        }
        return weekDay;
    },
    /** 
     *  传递日期字符串，获取一周的七天日期
     *  
     **/
    getWeekAllDateStr: function(dateStr) {
        //起止日期数组   
        let weekDay = new Array();
        //一天的毫秒数   
        let millisecond = 1000 * 60 * 60 * 24;
        //获取当前时间   
        let currentDate = new Date(dateStr);
        //返回date是一周中的某一天
        let week = currentDate.getDay();
        //减去的天数   
        let minusDay = week != 0 ? week - 1 : 6;
        //获得当前周的第一天   
        let currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
        for (let i = 0; i < 7; i++) {
            // 获取每一天
            let currentWeekDay = new Date(currentWeekFirstDay.getTime() + (millisecond * i));
            weekDay.push(this.dateToString(currentWeekDay, 2));
        }
        return weekDay;
    },
    /** 
     * 获得相对当前周AddWeekCount个周的起止日期 
     * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
     * 
     **/
    getNextWeekEndDay: function(AddWeekCount) {
        //一天的毫秒数   
        let millisecond = 1000 * 60 * 60 * 24;
        //获取当前时间   
        let currentDate = new Date();
        //相对于当前日期AddWeekCount个周的日期
        currentDate = new Date(currentDate.getTime() + (millisecond * 7 * AddWeekCount));
        //返回date是一周中的某一天
        let week = currentDate.getDay();
        //返回date是一个月中的某一天   
        let month = currentDate.getDate();
        //减去的天数   
        let minusDay = week != 0 ? week - 1 : 6;
        //获得当前周的第一天   
        let currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
        //获得当前周的最后一天
        let currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));

        return currentWeekLastDay;
    },
    /** 
     * 获得相对当月AddMonthCount个月的起止日期 
     * AddMonthCount为0 代表当月 为-1代表上一个月  为1代表下一个月 以此类推
     * 
     ***/
    getMonthStartAndEnd: function(AddMonthCount) {

        //起止日期数组   
        let startStop = new Array();
        //获取当前时间   
        let currentDate = new Date();
        let month = currentDate.getMonth() + AddMonthCount;
        if (month < 0) {
            let n = parseInt((-month) / 12);
            month += n * 12;
            currentDate.setFullYear(currentDate.getFullYear() - n);
        }
        currentDate = new Date(currentDate.setMonth(month));
        //获得当前月份0-11   
        let currentMonth = currentDate.getMonth();
        //获得当前年份4位年   
        let currentYear = currentDate.getFullYear();
        //获得上一个月的第一天   
        let currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
        //获得上一月的最后一天   
        let currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0);
        //添加至数组   
        startStop.push(this.dateToString(currentMonthFirstDay, 2));
        startStop.push(this.dateToString(currentMonthLastDay, 2));
        //返回   
        return startStop;
    },
    /** 
     *传递任意日期
     * 
     ***/
    getRandomMonthStartAndEnd: function(date) {
        //起止日期数组   
        let startStop = new Array();
        //获取当前时间   
        let currentDate = new Date(date);
        let month = currentDate.getMonth();
        if (month < 0) {
            let n = parseInt((-month) / 12);
            month += n * 12;
            currentDate.setFullYear(currentDate.getFullYear() - n);
        }
        currentDate = new Date(currentDate.setMonth(month));
        //获得当前月份0-11   
        let currentMonth = currentDate.getMonth();
        //获得当前年份4位年   
        let currentYear = currentDate.getFullYear();
        //获得上一个月的第一天   
        let currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
        //获得上一月的最后一天   
        let currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0);
        //添加至数组   
        startStop.push(this.dateToString(currentMonthFirstDay, 2));
        startStop.push(this.dateToString(currentMonthLastDay, 2));

        //返回   
        return startStop;
    }

}



export default dateFormat;