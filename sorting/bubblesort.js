function swap(i, j, point, array) {
    if(j-i > 1) {
      let temp=array[j];
      array[j]= array[i];
      array[i]=temp;
    } else {
    let temp=array[j];
    array[j] = point;
    array[i] = temp;
    }
}
function bubbleSort(array) {
    if(array === []) {
        return [];
    } else{
        for(let i=0; i < array.length; i++) {
            let point = array[i];
            for(let j=i+1; j < array.length; j++) {
                if(point > array[j]) {
                    swap(i, j, point, array)
                } 
            }
        }
        return array;
    }
};
