var box = document.getElementById('label');
var box_text = box.innerText;
var box_array = box_text.match(/\--.+\n/g);
console.log(box_text);
console.log(box_array);
writer_array = [box_array.length];
for(var i = 0; i < box_array.length; i++) {
    writer_array[i] = box_array[i].split('--')[1].split('\n')[0];
}
console.log(writer_array);
var writer = [];
for(var j = 0; j < writer_array.length; j++){
    if(writer.indexOf(writer_array[j]) == -1){
        writer.push(writer_array[j]);
    }
}
console.log(writer);