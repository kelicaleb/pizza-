const form = document.querySelector("#coner");
form.addEventListener("submit", function(button){
    button.preventDefault();
    const jsform = new FormData(form);
    const small = 450;
    const medium = 750;
    const large = 1000;
    var calculate = jsform.get("number");
    var location = jsform.get("local");
    console.log(location);
    if (jsform.get("size") == 1 && jsform.get("number") > 0 && jsform.get("local")){
        const delivery = small * calculate + 500;
        Swal.fire({
            title: 'Your total amount plus delivery is ' + delivery,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'Delivery will take some few minutes!', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
    else if(jsform.get("size") == 1 && jsform.get("number") > 0){
        const price = small * calculate;
        Swal.fire({
            title: 'Your total amount plus delivery ' + price,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'It will be ready in a few minutes', 'success')
              Swal.fire('Saved!', 'It will be ready in a few minutes ', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }        
    else if(jsform.get("size") == 2 && jsform.get("number") > 0 && jsform.get("local")){
        const delivery = medium * calculate + 500;
        Swal.fire({
            title: 'Your total amount plus delivery ' + delivery,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'Delivery will take some few minutes!', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

    }
    else if(jsform.get("size") == 2 && jsform.get("number") > 0){
        const price = medium * calculate;
        Swal.fire({
            title: 'Your total amount is ' + price,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'It will be ready in a few minutes', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }        
    else if(jsform.get("size") == 3 && jsform.get("number") > 0 && jsform.get("local")){
        const delivery = large * calculate + 500;
        Swal.fire({
            title: 'Your total amount plus delivery is  ' + delivery,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'Delivery will take some few minutes!', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
    else if(jsform.get("size") == 3 && jsform.get("number") > 0){
        const price = large * calculate;
        Swal.fire({
            title: 'Your total amount is ' + price,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Saved!', 'It will be ready in a few minutes', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }        
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ensure all fields are filled !',
          })
    }


})

