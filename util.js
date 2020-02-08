// replace this url with your personal API url
export const api = 'https://js401n14-todo-server.herokuapp.com';

export const dateFix = date => {
    let dateObj = new Date(date);
    console.log(dateObj);

    if (date === null) dateObj = new Date();
    console.log('call DateFix with', date);

    let day = ('0' + dateObj.getDate()).slice(-2);
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let year = dateObj.getFullYear();

    console.log('return DateFix with', year + '-' + month + '-' + day);

    return year + '-' + month + '-' + day;
};
