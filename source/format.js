function format(array, columns) {
    let rows = Math.ceil(array.length/columns);
    let matrix  = [rows];
    let column_width = new Array(columns).fill(0);
    for(let i = 0; i<rows; i++) {  // заполнение матрицы
        matrix[i] = [columns];
        for(let j = 0; j < columns && (i*columns+j)< array.length; j++){
            matrix[i][j] = array[i*columns+j].toString();
            column_width[j] = Math.max(matrix[i][j].length, column_width[j]);
        }
    }
    for(let i = 0; i<rows; i++) {  // форматирование матрицы для вывода
        matrix[i] = matrix[i].map((val, j) => ' '.repeat(column_width[j] - val.length) + val);
        matrix[i] = matrix[i].join(' ');
    }
    return matrix.join('\n');
}