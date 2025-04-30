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
import { generateUniqueId, updateASTNew, updateASTNewMeta } from "./parser/helpers";
import fs from 'fs-extra';
import { Worker } from 'worker_threads';

export function notify(conn: _Connection, message: string, err: boolean = false) {
  if (err) {
    conn.window.showErrorMessage(message);
  } else {
    conn.window.showInformationMessage(message);
  }
}

/**@deprecated */
export function buildASTForFiles(files: string[]): { [fileURI: string]: PSSLangObjects[] } {
  let pssAST: { [fileURI: string]: PSSLangObjects[] } = {};
  for (const file of files) {
    const content: string = fs.readFileSync(file, 'utf8');
    const fileURI: string = encodeURI("file://" + file);
    // updateAST(fileURI, content).then(vars => {
    //   globalAST = updateASTMeta(globalAST, vars);
    // });
    updateASTNew(fileURI, content).then(vars => {
      pssAST[fileURI] = vars;
    });
  }
  return pssAST;
}

/* This is the timeout for the worker */
const MINS = 5; // 5 minutes
const WORKER_TIMEOUT_MS = MINS * 60 * 1000;

export function spawnProcessor(content: string, uri: string, callback: (result: { result: PSSLangObjects[]; uri: string; }) => void): void {
  let id = generateUniqueId();
  const worker = new Worker(__dirname + '/parser/worker.js', {
    workerData: { content: content, uri: uri, id: id }
  });

  let timeout = setTimeout(() => {
    console.warn(`Worker Timed-out. De-spawning thread with id ${id}`);
    worker.terminate();
  }, WORKER_TIMEOUT_MS);

  worker.on('message', (result) => {
    clearTimeout(timeout);
    callback(result);
  });

  worker.on('error', (err) => {
    console.error('Worker Error - ', err);
  });

  worker.on('exit', (code) => {
    if (code != 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });

}