/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/* @flow */

import { CompilerDiagnostic, FatalError } from "../errors.js";
import type { Realm } from "../realm.js";

import type { ObjectValue } from "./index.js";
import invariant from "../invariant.js";

/**
 * An ObjectSetTemplate represents a set of multiple possible objects whose identity
 * is guaranteed to only exist in this set. It cannot be equal to any other concrete
 * ObjectValues in this sub-heap and objects within this set cannot exist in another
 * ObjectSetTemplate.
 *
 * This is useful to model the structure of return values from residual function
 * calls or loops that returns newly created objects.
 */
export default class ObjectSetTemplate {
  constructor(realm: Realm, template: ObjectValue, hashValue: number) {
    invariant(realm.useAbstractInterpretation);
    this.template = template;
    this.hashValue = hashValue;
  }

  template: ObjectValue;
  hashValue: number;

  mightBeFalse(): boolean {
    return false;
  }

  mightNotBeFalse(): boolean {
    return true;
  }
}
