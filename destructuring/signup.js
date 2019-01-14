const signup = ( { password, userName, birthday, email } ) => {
    // some code here
    console.log(password, userName, birthday, email);
};

const user = {
    userName: 'John',
    password: 12345,
    birthday: '12/03/1972',
    email   : 'e@ex.com'
};

signup(user);
