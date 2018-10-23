

function name_Is_Filled(){
    if( document.getElementById("email").value.length > 0 &&
        document.getElementById("subject_text").value.length > 0 ){
            document.getElementById("subject_button").disabled = false;
    }
    return true;
    
}

function email_Is_Filled(){
    if( document.getElementById("name").value.length > 0 &&
        document.getElementById("subject_text").value.length > 0 ){
            document.getElementById("subject_button").disabled = false;
    }
    return true;
    
}

function text_Is_Filled(){
    if( document.getElementById("name").value.length > 0 &&
        document.getElementById("email").value.length > 0 ){
            document.getElementById("subject_button").disabled = false;
    }
    return true;
    
}


function validation2()
{
    var form =  document.getElementById('form'),

    rules = { 
        'name' : /^[A-Z]{1}[a-z]{2,30}$/,
        'email': /^[a-z0-9\._%-]+@[a-z0-9\.-]+\.[a-z]{2,4}$/i,
        'subject': /^[a-z\s]{5,180}$/i,
    };

    for (var elem in rules) 
    {
        {
            if (!rules[elem].test(form[elem].value)) 
            {
                if( elem === 'name' )
                {  alert('Corecct form of name is : Xxxxx !!! ');}
                else if( elem === 'email' )
                {  alert('Corecct form of email is : xxx@xxx.xxx !!!');}
                else if( elem === 'subject' )
                {  alert('Subject should has at least 3 letters !!!');}

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



