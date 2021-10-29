
/*File name- app.js
Author's Nmae - Chitra Hajra Roy
StudentID - 301148774
Web App Name - Bookstore Pages
28/10/2021
*/




console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}