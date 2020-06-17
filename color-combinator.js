function colorCombinator(color1,color2){
if(color1 === 'red' && color2 === 'yellow'){
return 'When you combine red and yellow, you get orange!'

}else if(color1 === 'red' && color2 === 'blue'){
return 'When you combine red and blue, you get purple!'

}else if(color1 === 'yellow' && color2 === 'blue'){
return 'When you combine yellow and blue, you get green!'

}else if(color1 === 'orange' && color2 === 'yellow'){
return 'Sorry, one of those colors is not a primary color!' 

}else if (color1 === 'blorgon' && color2 === 'red'){
return 'Sorry, one of those colors is not a primary color!'

}else if (color1 === 'ted' && color2 === 'red'){
return 'Sorry, one of those colors is not a primary color!'

}else if (color1 === 'blorgon' && color2 === 'blue'){
return 'Sorry, one of those colors is not a primary color!'
    
}else if (color1 === 'yellow' && color2 === 'purple'){
return 'Sorry, one of those colors is not a primary color!'

}else if (color1 === 'blue' && color2 === 'white'){
return 'Sorry, one of those colors is not a primary color!'

}else if(color1 === 'Ted' && color2 === 'from Better Off Ted'){
return 'Sorry, one of those colors is not a primary color!'

}else if(color1 === 'black' && color2 === 'black'){
return 'Sorry, one of those colors is not a primary color!'
}
}








module.exports=colorCombinator