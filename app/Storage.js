'use strict';

import Storage from 'react-native-storage';

global.Storage = new Storage({
  size: 1000,
  expires: null
});
