                            //         ========================================
                            //         || Name   = Mehdi Ali                 ||
                            //         || RollNO = WM5318                    ||
                            //         || Email  = yarpamehdi2000@gmail.com  ||
                            //         ========================================


                            //   =====================================================
                            //                      Chapter 21-25
                            //   =====================================================




// 1. Write a program that takes two user inputs for first and
//    last name using prompt and merge them in a new variable
//    titled fullName. Greet the user using his fullName

// var firstname = prompt('enter first name')
// var lastname = prompt('Enter last name')
// var fullName = firstname + " " + lastname
// alert('Welcome ! ' + fullName)


// 2. Write a program to take a user input about his favorite
//    mobile phone model. Find and display the length of user
//    input in your browser


// var  favorite = prompt('Enter your favorite Mobile Phone Name')
// document.write('My favorite phone is ' + favorite +"<br>" )
// favorite = favorite.length
// document.write("length of string : " + favorite)  



// 3. Write a program to find the index of letter “n” in the word
//    “Pakistani” and display the result in your browser .

// var text = "pakistan"
// document.write("string : " + text + "<br>")
//     text = text.indexOf("n")
// document.write("index of n : " + text)



// 4. Write a program to find the last index of letter “l” in the
//    word “Hello World” and display the result in your browser.


// var text = "Hello World"
//     document.write("String : " + text + "<br>")
//     text = text.lastIndexOf("l")
//     document.write('Last Index Of "l" : ' + text)
    

// 5. Write a program to find the character at 3rd index in the
//    word “Pakistani” and display the result in your browser.

// var text = "Pakistani"
// document.write('String : ' + text + "<br>")
//     text = text.charAt(3)
//     document.write("character at index 3 : " + text)



// 6. Repeat Q1 using string concat() method.

// var firstname = prompt('enter first name')
// var lastname = prompt('enter last name')
// var sap =" "
// var fullName = firstname.concat(sap,lastname)
// alert(fullName)



// 7. Write a program to replace the “Hyder” to “Islam” in the
//    word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"
// document.write("city is : " +city + "<br>")
//     city= city.replace("Hyder","Islam")
//     document.write("After Replacement: " +city)


// 8. Write a program to replace all occurrences of “and” in the
//    string with “&” and display the result in your browser.
//    var message = “Ali and Sami are best friends. They play cricket and
//    football together.”;


// var message = "Ali and Sami are best friends. They play cricket an football together"
// document.write(message+"<br>")
//    message = message.replace(/and/g,"&")
//    document.write(message)


// 9. Write a program that converts a string “472” to a number
//    472. Display the values & types in your browser.


// var string = "472"
// document.write("value : "+string + "<br>"+"Type : " + typeof(string)+ "<br>")
//    string = Number(string)
//    document.write("value : "+string + "<br>"+"Type : " + typeof(string))


// 10. Write a program that takes user input. Convert and
//     show the input in capital letters.

// var user = prompt("Enter a character")
// document.write("User Input : " + user +"<br>" )
//     user = user.toUpperCase()
// document.write("Upper Case : " + user +"<br>" )


// 11. Write a program that takes user input. Convert and
//     show the input in title case.

//     var user = prompt("Enter a character")
// document.write("User Input : " + user +"<br>" )
//     user = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase()
// document.write("Upper Case : " + user +"<br>" )


// 12. Write a program that converts the variable num to
//     string.
//     var num = 35.36 ;
//     Remove the dot to display “3536” display in your browser.


// var num = 35.36
// document.write("Number: " + num+"<br>")
// num = num.toString()
// num = num.replace(".","")
// document.write("Result: " + num)   
 
 

// 13. Write a program to take user input and store username
//     in a variable. If the username contains any special symbol
//     among [@ . , !], prompt the user to enter a valid username.
//     For character codes of [@ .


// var input = prompt('User Name')
// if(input === "33" || input === "44" || input === "46" || input === "64"){
//     alert('Please Enter Valid Name')
// }
// else{
//     alert(input)
// }




// 14. You have an array
//     A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//     Write a program to enable “search by user input” in an
//     array. After searching, prompt the user whether the given
//     item is found in the list or not.
//     Note: Perform case insensitive search. Whether the user
//     enters cookie, Cookie, COOKIE or coOkIE, program
//     should inform about its availability. Example:


// var A = ['cake','apple pie','cookie','chips','patties'];
// var search = prompt('enter thing name')
//     search = search.toLowerCase()
// for(var i=0;i<A.length;i++){
    
//     if(A[i]===search){
//         alert(search + " is availble  in our bakery")
//         break
//     }
//     else{
//         alert(search + " is not availble in our bakery")
//         break
//     }
// }


// 15. Write a program to take password as an input from
//     user. The password must qualify these requirements:
//     a. It should contain alphabets and numbers
//     b. It should not start with a number
//     c. It must at least 6 characters long
//     If the password does not meet above requirements,
//     prompt the user to enter a valid password.
//     For character codes of a-z, A-Z & 0-9, refer to ASCII
//     table at the end of this document.


// 16. Write a program to convert the following string to an
//     array using string split method.
//     var university = “University of Karachi”;
//     Display the elements of array in your browser.


// var text = "University of Karachi"
//      document.write(text+"<br>")
//      text = text.split("")
//      for(var i=0;i<text.length;i++){
//        document.write(text[i]+"<br>")
//      }



// 17. Write a program to display the last character of a user
//     input.

// var text = prompt("Enter text")
// document.write("User Input : " +text +"<br>")
// last = text.charAt(text.length-1)
// document.write("last character of input : "  + last)

// 18. You have a string “The quick brown fox jumps over the
//     lazy dog”. Write a program to count number of
//     occurrences of word “the” in given string.



                            //   =====================================================
                            //                      Chapter 26-30
                            //   =====================================================





// 1. Write a program that takes a positive integer from user &
//    display the following in your browser.
//    a. number
//    b. round off value of the number
//    c. floor value of the number
//    d. ceil value of the number
                            
// var num = 3.45214
// document.write('Number : ' + num +"<br>")
//     num = Math.round(num)
// document.write('Round of value : ' + num +"<br>")
// num = Math.floor(num)
// document.write('floor value :' + num +"<br>")
// num1 = Math.ceil(-.0001)
// document.write('ceil Value :' + num1 +"<br>")



// 2. Write a program that takes a negative floating point
//    number from user & display the following in your browser.
//    a. number
//    b. round off value of the number
//    c. floor value of the number
//    d. ceil value of the number


// var num = parseFloat(prompt('Enter decimal number'))
// document.write("Number : " + num + "<br>")
// num1 = Math.round(num)
// document.write("Round off value : " + num1 + "<br>")
// num2 = Math.floor(num)
// document.write("Floor value : " + num2 + "<br>")
// num3 = Math.ceil(num)
// document.write("Ceil value : " + num3 + "<br>")


// 3. Write a program that displays the absolute value of a
//    number.
//    E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var a = -4.5
//     a1 = Math.abs(a)
//     document.write('the absulote value of ' + a +" is "+a1)


// 4. Write a program that simulates a dice using random()
//    method of JS Math class. Display the value of dice in your
//    browser.:

// var round = Math.random()*6
//    round = Math.round(round)
// document.write('Random dice value : ' + round)




// 5. Write a program that simulates a coin toss using random()
//    method of JS Math class. Display the value of coin in your
//    browser

// var toss = Math.random()*2
//     toss = Math.ceil(toss)
//     document.write(toss + "<br>")
//     if(toss === 2){
//         document.write('Random coin Value : Head')
//     }
//     else{
//         document.write('Random coin Value : Tails')
//     }

// 6. Write a program that shows a random number between 1
//    and 100 in your browser.

// var  num = Math.random()*100
//      num = Math.ceil(num)
// document.write('Random number between 1 to 100 : ' +num)



// 8. Write a program that stores a random secret number from
//    1 to 10 in a variable. Ask the user to input a number
//    between 1 and 10. If the user input equals the secret
//    number, congratulate the user.

// var a = Math.random()*10
//     a = Math.ceil(a)
//     alert(a)
// var b = prompt('Enter a number between 1 to 10')
// if (b === a ){
//     alert('congratulate you are winer')
// }
// else{
//     alert("try agian")
// }




                            //   =====================================================
                            //                      Chapter 31-34
                            //   =====================================================
