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

import { _Connection } from "vscode-languageserver/node";
import { PSSLangObjects } from "./definitions/dataStructures";
import { updateASTNew, updateASTNewMeta } from "./parser/helpers";
import fs from 'fs-extra';

export function notify(conn: _Connection, message: string, err: boolean = false) {
  if (err) {
    conn.window.showErrorMessage(message);
  } else {
    conn.window.showInformationMessage(message);
  }
}

export function buildASTForFiles(files: string[]): PSSLangObjects[] {
  let pssAST: PSSLangObjects[] = [];
  for (const file of files) {
    const content: string = fs.readFileSync(file, 'utf8');
    const fileURI: string = encodeURI("file://" + file);
    // updateAST(fileURI, content).then(vars => {
    //   globalAST = updateASTMeta(globalAST, vars);
    // });
    updateASTNew(fileURI, content).then(vars => {
      pssAST = updateASTNewMeta(pssAST, vars);
    });
  }
  return pssAST;
}