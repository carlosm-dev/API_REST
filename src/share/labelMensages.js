
const labels = Object.freeze({

    'name-is-not-empty'              : 'Name can not be empty.',
    'name-between-3-and-255'         : 'Name must be between 3 and 255 characters.',
    'password-weak'                  : 'The Passwor is too weak.',
    'email'                          : 'Invalid Email',
    'user-not-found'                 : 'User not found.',
    'invalid-user'                   : 'Invalid User.',
    'user-removed'                   : 'User has been removed.',
    'invalid-email-or-password'      : 'Invalid Email or Password!'

});

const getLabel = (value) =>{
    return labels[value] ?? 'Error retrieving message.'
}

module.exports =getLabel;