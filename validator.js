function validation()
{
    var form =  document.getElementById('info-form'),
        rules = { // 1
            'name' : /^[a-z]{2,30}$/i,
            'email': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
            'subject': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
           
        };

    for (var elem in rules) // 2
    {
        if (form[elem])
        {
            if (!rules[elem].test(form[elem].value)) // 3
            {
                alert('Box ' + elem + ' is not correct.');
                form[elem].style.background = 'yellow';
                return false;
            }
            else
            {
                form[elem].style.background = '';
            }
        }
    }
    alert('All boxes are infilled - can send!');
    return true;
}