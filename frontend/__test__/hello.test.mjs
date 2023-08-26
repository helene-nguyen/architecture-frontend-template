//~ Import module
import test from 'node:test'
import assert from 'node:assert/strict'

// First test
test('Return message saying hello', () => {
  const message = 'Hello'
  assert.equal(message, 'Hello', 'checking the greeting')
})