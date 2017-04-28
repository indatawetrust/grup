### grup

[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/grup.svg)](https://travis-ci.org/indatawetrust/grup)

Grouping for string arrays

```js
const g = require('grup')

const lyrics = [
   "City's breaking down on a camel's back.",
   "They just have to go 'cause they don't know wack",
   "So all you fill the streets it's appealing to see",
   "You won't get out the county, 'cause you're bad and free",
   "You've got a new horizon it's ephemeral style.",
   "A melancholy town where we never smile.",
   "And all I wanna hear is the message beep.",
   "My dreams, they've got to kiss me 'cause I don't get sleep, no"]

console.log(g(lyrics, ["and", "you"]))

// log
{ you:
   [ 'So all you fill the streets it\'s appealing to see',
     'You won\'t get out the county, \'cause you\'re bad and free',
     'You\'ve got a new horizon it\'s ephemeral style.' ],
  and:
   [ 'You won\'t get out the county, \'cause you\'re bad and free',
     'And all I wanna hear is the message beep.' ] }
```
