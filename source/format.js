function format(array, columns) {
    if (array == undefined || columns == undefined || array.length < columns || columns < 1) {
        return '';
    }
    const rows = Math.ceil(array.length / columns);
    let matrix = new Array(rows);
    let column_width = new Array(columns).fill(0);
// заполнение матрицы
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array();
        for (let j = 0; j < columns && (i * columns + j) < array.length; j++) {
            matrix[i][j] = array[i * columns + j].toString();
            column_width[j] = Math.max(matrix[i][j].length, column_width[j]);
        }
    }
// форматирование матрицы для вывода
    matrix = matrix.map((row) => row.map((val, j) => ' '.repeat(column_width[j] - val.length) + val).join(' ')).join('\n');
    return matrix;
}