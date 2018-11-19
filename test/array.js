var test = require('tape');
var stringify = require('../');

test('ordinary array treated as set and sorted', function (t) {
	t.plan(1);
	var obj = {a: [3, 2, 1]};
	t.equal(stringify(obj), '{"a":[1,2,3]}');
});

test('@list array treated as list and not sorted', function (t) {
	t.plan(1);
	var obj = {'@list': [3, 2, 1]};
	t.equal(stringify(obj), '{"@list":[3,2,1]}');
});

test('value of @list container treated as list and not sorted', function (t) {
	t.plan(1);
	var obj = {'@context':{a:{"@container": "@list"}}, a:[3, 2, 1]};
	t.equal(
	    stringify(obj),
	    '{"@context":{"a":{"@container":"@list"}},"a":[3,2,1]}');
});

test('recursive values of @list container not sorted', function (t) {
	t.plan(1);
	var obj = {'@context':{a:{"@container": "@list"}}, a:[[3,2,1],[6,5,4]]};
	t.equal(
	    stringify(obj),
	    '{"@context":{"a":{"@container":"@list"}},"a":[[3,2,1],[6,5,4]]}');
});
