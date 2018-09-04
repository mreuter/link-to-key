/**
 * Copyright (c) 2018-present, Marc Reuter.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import linkToKey from './index';

it('should trigger action only if correct key is pressed', () => {
  const action = jest.fn();
  const linkedAction = linkToKey('Enter', action);
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'Enter' });
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'A' });
  expect(action).toHaveBeenCalledTimes(1);
});

it('should trigger action if one of multiple correct keys is pressed', () => {
  const action = jest.fn();
  const linkedAction = linkToKey(['Enter', 'Space'], action);
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'Enter' });
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'A' });
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'Space' });
  expect(action).toHaveBeenCalledTimes(2);
});

it('should pass excess parameters to action', () => {
  const action = jest.fn();
  const linkedAction = linkToKey('Enter', action);
  // $FlowFixMe - no real keyboard event passed in tests
  linkedAction({ key: 'Enter' }, 'MyParam', true);
  expect(action).toHaveBeenCalledWith('MyParam', true);
});
