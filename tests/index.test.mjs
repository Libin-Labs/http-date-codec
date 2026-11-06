import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('formats UTC date', () => {
  assert.equal(
    api.formatHttpDate(new Date('2025-01-01T00:00:00Z')),
    'Wed, 01 Jan 2025 00:00:00 GMT',
  );
});
test('parses canonical date', () => {
  assert.equal(
    api.parseHttpDate('Wed, 01 Jan 2025 00:00:00 GMT').toISOString(),
    '2025-01-01T00:00:00.000Z',
  );
});
test('normalizes milliseconds when formatting', () => {
  assert.equal(
    api.formatHttpDate(new Date('2025-01-01T00:00:00.999Z')),
    'Wed, 01 Jan 2025 00:00:00 GMT',
  );
});
test('rejects invalid date objects', () => {
  assert.throws(() => api.formatHttpDate(new Date(NaN)), TypeError);
});
test('rejects noncanonical formats', () => {
  assert.throws(() => api.parseHttpDate('2025-01-01'), RangeError);
});
test('rejects invalid input type', () => {
  assert.throws(() => api.parseHttpDate(4), TypeError);
});
