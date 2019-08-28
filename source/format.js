function format(array, columns) {
    let rows = Math.ceil(array.length/columns);
    let matrix  = [rows];
    let column_width = new Array(columns).fill(0);
    for(let i = 0; i<rows; i++) {
        matrix[i] = [columns];
        for(let j = 0; j < columns && (i*columns+j)< array.length; j++){
            matrix[i][j] = array[i*columns+j].toString();
            if(matrix[i][j].length > column_width[j]){
                column_width[j] = matrix[i][j].length;
            }
        }
    }
    let output = "";
    for(let i = 0; i<rows; i++) {
        for(let j = 0; j < columns && j< matrix[i].length; j++){
            let space_count = column_width[j] - matrix[i][j].length + Math.sign(j);
            output += " ".repeat(space_count);
            output += matrix[i][j];
        }
        if (i < rows-1){
            output += '\n';
        }
    }
    return output;
}