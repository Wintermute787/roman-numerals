$(function(){
    var romanConvert = function(num) {
        var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        var symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
        numeral = '';
    
        for(var i =0; i < decimalValue.length; i++){
            
            while(num >= decimalValue[i]){
                numeral += symbol[i];
                num -= decimalValue[i];
            }
        }
        return numeral;
    }
    console.log(romanConvert(7));
});