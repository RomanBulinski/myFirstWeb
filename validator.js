function validation()
{
    var form =  document.getElementById('info-form'),
        rules = { // 1
            'name' : /^[A-Z]{1}[a-z]{2,30}$/,
            'email': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
            'subject': /^[a-z\s]{2,180}$/i,
        };

    for (var elem in rules) 
    {
        if (form[elem])
        {
            if (!rules[elem].test(form[elem].value)) 
            {
                alert('The Box " ' + elem + ' " is incorrectly filled.');
                form[elem].style.background = 'grey';
                return false;
            }
            else
            {
                form[elem].style.background = '';
            }
        }
    }
    alert('Your email has been successfully sent!');
    return true;
}




