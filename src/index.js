/**
 * Copyright (c) 2018-present, Marc Reuter.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const matches = (event, keys) => {
  const matchingKeys = Array.isArray(keys) ? keys : [keys];
  return matchingKeys.indexOf(event.key) !== -1;
};

const linkToKey = (
  keys: Array<string> | string,
  action: Function,
) => (event: KeyboardEvent, ...args: any) => {
  if (matches(event, keys)) action(...args);
};

export default linkToKey;
