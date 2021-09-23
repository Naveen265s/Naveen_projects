// Challenge 03 - Passage Counter
// Create a function which calculates the time to read a text in seconds, 
// if it takes over 60 seconds to read a passage return the time to minutes.



// var time = time - hours * 3600;
// var seconds = time - minutes * 60;
// var minutes = Math.floor(time / 60);
// var hours = Math.floor(time / 3600);

// console.log(time);
// console.log(seconds);

function fmtMSS(s){   // accepts seconds as Number or String. Returns m:ss
    return( s -         // take value s and subtract (will try to convert String to Number)
            ( s %= 60 ) // the new value of s, now holding the remainder of s divided by 60 
                        // (will also try to convert String to Number)
          ) / 60 + (    // and divide the resulting Number by 60 
                        // (can never result in a fractional value = no need for rounding)
                        // to which we concatenate a String (converts the Number to String)
                        // who's reference is chosen by the conditional operator:
            9 < s       // if    seconds is larger than 9
            ? ':'       // then  we don't need to prepend a zero
            : ':0'      // else  we do need to prepend a zero
          ) + s ;       // and we add Number s to the string (converting it to String as well)
  }

  fmtMSS();
  console.log(fmtMSS(10000000));