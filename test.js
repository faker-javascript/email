import test from 'ava';
import email from './index.js';

test('email return type to be string', t => {
    t.is(typeof email(), 'string');
});

test('email with domain example.com contains domain example.com', t => {
    t.true(email({domain: 'example.com'}).includes('example.com'));
});
