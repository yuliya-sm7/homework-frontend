function format(array = '', columns = 0) {
    if (array.length < columns || columns < 1) {
        return '';
    }
    const rows = Math.ceil(array.length / columns);
    const matrix = new Array(rows);
    const column_width = new Array(columns).fill(0);
    // заполнение матрицы
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array();
        for (let j = 0; j < columns && (i * columns + j) < array.length; j++) {
            matrix[i][j] = array[i * columns + j].toString();
            column_width[j] = Math.max(matrix[i][j].length, column_width[j]);
        }
    }
    // форматирование матрицы для вывода
    return matrix
        .map((row) => row
            .map((val, j) => ' '.repeat(column_width[j] - val.length) + val)
            .join(' '))
        .join('\n');
}