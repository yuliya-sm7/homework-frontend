'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('Я верю, что format работает правильно =)', function (assert) {
		const input = [ 3.3, 2, 1, 0, 4, 5, 6, -77, 1000 ];

		const expected2 =
			' 3.3 2 1   0\n' +
			'   4 5 6 -77\n' +
			'1000';

		const expected3 =
			'3.3   2    1\n' +
			'  0   4    5\n' +
			'  6 -77 1000';

		assert.strictEqual(format(input, 4), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('Отсутствуют параметры функции', function (assert) {
		assert.strictEqual(format(), '');
	});
	QUnit.test('Массив из одного элемента', function (assert) {
		assert.strictEqual(format([3], 1), '3');
	});
	QUnit.test('Пустой входной массив', function (assert) {
		assert.strictEqual(format([], 2), '');
	});
	QUnit.test('Отрицательное число столбцов', function (assert) {
		assert.strictEqual(format([3, 5, 7], -2), '');
	});
});
