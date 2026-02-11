(function(){
    'use strict';
    console.log('reading js')

    const myform = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');

    myform.addEventListener('submit', function(event){
        event.preventDefault();
        // alert('form submitted')
        const action = document.querySelector('#action').value;
        const shape = document.querySelector('#shape').value;
        const sauce = document.querySelector('#sauce').value;
        const cheese = document.querySelector('#cheese').value;
        const topping1 = document.querySelector('#topping1').value;
        const topping2 = document.querySelector('#topping2').value;
        const finisher = document.querySelector('#finisher').value;

        let myText;

        if(action == ''){
            myText = 'please provide an action';
            document.querySelector('#action').focus()
        }
        else if(shape == ''){
            myText = 'please provide a shape';
            document.querySelector('#shape').focus()
        }
        else if(sauce == ''){
            myText = 'please choose an option';
        }
        else if(cheese == ''){
            myText = 'please choose an option';
        }
        else if(topping1 == ''){
            myText = 'please choose an option';
        }
        else if(topping2 == ''){
            myText = 'please choose an option';
        }
        else if(finisher == ''){
            myText = 'please choose an option';
        }
        else {
            myText = `First we will start by ${action} out the pizza dough into a ${shape}. Next, you chose ${sauce} sauce so let's spread it out. Let’s sprinkle on a good amount of ${cheese} cheese to cover the sauce. You chose some interesting toppings! Let’s add ${topping1} and ${topping2} to the pizza. Now we can bake it until the cheese melts and the crust is crispy. We can finish it off with some ${finisher} and serve it. Yay!`};
        
        

        madlib.innerHTML = myText;
        document.querySelector('#action').value = '';
        document.querySelector('#shape').value = '';
        document.querySelector('#sauce').value = '';
        document.querySelector('#cheese').value = '';
        document.querySelector('#topping1').value = '';
        document.querySelector('#topping2').value = '';
        document.querySelector('#finisher').value = '';
    });
})();
