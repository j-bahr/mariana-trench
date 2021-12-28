/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package java.lang;

public class Thread implements Runnable {

  private Runnable target;

  public Thread(Runnable runnable) {
    this.target = runnable;
  }

  @Override
  public void run() {
    if (target != null) {
      target.run();
    }
  }

  public void start() {}
}
