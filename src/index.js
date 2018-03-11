module.exports = function getZerosCount(number, base){
    var counter= [] , i, j;
    var basedNumb = base;
    var baseFactors = [];
    var newFactors = [];
    var zerosArray = [];

    for (i = 2; i <= Math.sqrt(basedNumb); i++){
        while (basedNumb % i == 0){
            baseFactors.push(i);
            basedNumb /=i;
        }
    }
    if (basedNumb!=1) baseFactors.push(basedNumb);

    for (i = 0, j=0; i<baseFactors.length; i++, j++){
        if (baseFactors[i]!=baseFactors[i-1]){
            newFactors.push(baseFactors[i]);
            counter.push(1);
        }
        else {
            j--;
            counter [j] ++;
        }
    }

    for (i = 0; i<newFactors.length; i++) {
        basedNumb = number;
        zerosArray.push(0);
        while (basedNumb > 0) {
            basedNumb = Math.floor(basedNumb / newFactors[i]);
            zerosArray[i] += basedNumb;
        }
        zerosArray[i] = Math.floor(zerosArray[i]/counter[i]);
    }

    zerosArray.sort((a,b)=>a-b);
    return zerosArray[0];
}