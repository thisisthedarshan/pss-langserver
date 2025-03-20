/*
 * Copyright (C) 2025 Darshan(@thisisthedarshan)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { PSSNode } from "../definitions/dataTypes";


function isAValidPSSLangObject(ctx: any): boolean {
  if (ctx && typeof (ctx.name) === 'string'
    && typeof (ctx.comments) === 'string'
    && Array.isArray(ctx.usedOn)
    && Array.isArray(ctx.children)) {
    return true;
  }
  return false;
}

function isValidParams(ctx: any): boolean {
  if (ctx && typeof (ctx.paramName) === 'string') {
    return true;
  }
  return false;
}

function isValidInstanceNode(ctx: any): boolean {
  if (ctx && typeof (ctx.instanceName) === 'string'
    && typeof (ctx.instanceArrayCount) === 'number'
    && typeof (ctx.isRandom) === 'boolean'
    && typeof (ctx.isStaticConst) === 'boolean') {
    return true;
  }
  return false;
}


export { isAValidPSSLangObject, isValidParams };