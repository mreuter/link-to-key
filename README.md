# link-to-key

Simply link an action to a keypress.

## Contents

- [Contents](#contents)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [License and Copyright](#license-and-copyright)

## Installation

To install using npm:

```bash
npm install -P link-to-key
```

or using yarn:

```bash
yarn add link-to-key
```

## Usage
I use the library primarily with react and to add a keyboard handler for accessibility:

```javascript
// Create a clickable react component:
const Component = ({ onClick }) => (
  <div
    role="button"
    onClick={onClick}
  >
    Click me!
  </div>
);
```

Refactor it, to have better accessibility:

```javascript
import linkToKey from 'link-to-key';

// Make component focusable and call onClick when ENTER is pressed.
const Component = ({ onClick }) => {
  const onKeyPress = linkToKey('Enter', onClick);
  return (
    <div
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      Click me!
    </div>
  );
};
```

## Documentation

The library exports a single function as default. To use it just:

```javascript
import linkToKey from 'link-to-key';
```

### linkToKey

```javascript
const onKeyPress = linkToKey(key, action);
```

| Parameter | type | Description |
|--|-|-|
| key | string<br>or<br>Array&lt;string&gt; | The key that should trigger the action. It must be the same string that gets passed as key property of KeyboardEvent.<br>If an array is passed, the action trigger on any of these keys. |
| action | Function | The action that should be triggered. |
| | |
| Returns | Function | A function, that needs to be called with the event to check the key and trigger the action if appropriate. All excess parameters are passed to action. |


## License and Copyright
[MIT](./LICENSE) &copy; Marc Reuter
