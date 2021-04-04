var __extends = (this && this.__extends) || (function () {
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };
  return function (d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var pxsim;
(function (pxsim) {
  var Key;
  (function (Key) {
      Key[Key["None"] = 0] = "None";
      Key[Key["Left"] = 1] = "Left";
      Key[Key["Up"] = 2] = "Up";
      Key[Key["Right"] = 3] = "Right";
      Key[Key["Down"] = 4] = "Down";
      Key[Key["A"] = 5] = "A";
      Key[Key["B"] = 6] = "B";
      Key[Key["Menu"] = 7] = "Menu";
      // Player 2 keys here too
      // system keys
      Key[Key["Screenshot"] = -1] = "Screenshot";
      Key[Key["Gif"] = -2] = "Gif";
      Key[Key["Reset"] = -3] = "Reset";
      Key[Key["TogglePause"] = -4] = "TogglePause";
  })(Key = pxsim.Key || (pxsim.Key = {}));
  function mapKey(which) {
      switch (which) {
          case 65: // A
          case 37: // Left arrow
              return Key.Left;
          case 87: // W
          case 38: // Up arrow
              return Key.Up;
          case 68: // D
          case 39: // right arrow
              return Key.Right;
          case 83: // S
          case 40: // down arrow
              return Key.Down;
          case 32: // Space
          case 81: // Q
          case 90: // Z
              return Key.A;
          case 13: // Enter
          case 88: // X
          case 69: // E
              return Key.B;
          // Player two (see the local-multiplayer package)
          case 74: // J
              return Key.Left + 7;
          case 73: // I
              return Key.Up + 7;
          case 76: // L
              return Key.Right + 7;
          case 75: // K
              return Key.Down + 7;
          case 85: // U
              return Key.A + 7;
          case 79: // O
              return Key.B + 7;
          // system keys
          // screenshot
          case 80: // P
              return Key.Screenshot;
          case 82: // R
              return Key.Gif;
          default: return Key.None;
      }
  }
  pxsim.mapKey = mapKey;
  function pauseAsync(ms) {
      return Promise.delay(ms);
  }
  pxsim.pauseAsync = pauseAsync;
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var game;
  (function (game) {
      function takeScreenshot() {
          var b = pxsim.board();
          b.tryScreenshot();
      }
      game.takeScreenshot = takeScreenshot;
  })(game = pxsim.game || (pxsim.game = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var control;
  (function (control) {
      function programList() {
          var m = pxsim.Array_.mk();
          m.push("flappy_duck");
          m.push("chase_the_pizza");
          m.push("happy_flower");
          for (var i = 0; i < 10; ++i) {
              m.push("game_" + i);
          }
          return m;
      }
      control.programList = programList;
      function runProgram(name) {
          // TODO
          console.log("run " + name);
      }
      control.runProgram = runProgram;
  })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var DAL;
(function (DAL) {
  DAL.DEVICE_PIN_EVENT_NONE = 0;
  DAL.DEVICE_PIN_EVENT_ON_EDGE = 1;
  DAL.DEVICE_PIN_EVENT_ON_PULSE = 2;
  DAL.DEVICE_PIN_EVENT_ON_TOUCH = 3;
  DAL.DEVICE_PIN_EVT_RISE = 2;
  DAL.DEVICE_PIN_EVT_FALL = 3;
  DAL.DEVICE_PIN_EVT_PULSE_HI = 4;
  DAL.DEVICE_PIN_EVT_PULSE_LO = 5;
  DAL.DEVICE_ID_IO_P0 = 100;
  DAL.ACCELEROMETER_IMU_DATA_VALID = 2, DAL.ACCELEROMETER_EVT_DATA_UPDATE = 1, DAL.ACCELEROMETER_EVT_NONE = 0, DAL.ACCELEROMETER_EVT_TILT_UP = 1, DAL.ACCELEROMETER_EVT_TILT_DOWN = 2, DAL.ACCELEROMETER_EVT_TILT_LEFT = 3, DAL.ACCELEROMETER_EVT_TILT_RIGHT = 4, DAL.ACCELEROMETER_EVT_FACE_UP = 5, DAL.ACCELEROMETER_EVT_FACE_DOWN = 6, DAL.ACCELEROMETER_EVT_FREEFALL = 7, DAL.ACCELEROMETER_EVT_3G = 8, DAL.ACCELEROMETER_EVT_6G = 9, DAL.ACCELEROMETER_EVT_8G = 10, DAL.ACCELEROMETER_EVT_SHAKE = 11, DAL.ACCELEROMETER_REST_TOLERANCE = 200, DAL.ACCELEROMETER_TILT_TOLERANCE = 200, DAL.ACCELEROMETER_FREEFALL_TOLERANCE = 400, DAL.ACCELEROMETER_SHAKE_TOLERANCE = 400, DAL.ACCELEROMETER_3G_TOLERANCE = 3072, DAL.ACCELEROMETER_6G_TOLERANCE = 6144, DAL.ACCELEROMETER_8G_TOLERANCE = 8192, DAL.ACCELEROMETER_GESTURE_DAMPING = 5, DAL.ACCELEROMETER_SHAKE_DAMPING = 10, DAL.ACCELEROMETER_SHAKE_RTX = 30, DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4, DAL.DEVICE_ID_GESTURE = 13, DAL.DEVICE_ID_ACCELEROMETER = 5, DAL.SENSOR_THRESHOLD_LOW = 1, DAL.SENSOR_THRESHOLD_HIGH = 2, DAL.LEVEL_THRESHOLD_LOW = 1, DAL.LEVEL_THRESHOLD_HIGH = 2, DAL.DEVICE_ID_THERMOMETER = 8, DAL.DEVICE_ID_LIGHT_SENSOR = 17, DAL.DEVICE_ID_RADIO = 9, DAL.DEVICE_RADIO_EVT_DATAGRAM = 1, DAL.DEVICE_ID_MICROPHONE = 3001;
})(DAL || (DAL = {}));
var pxsim;
(function (pxsim) {
  var PlayerNumber;
  (function (PlayerNumber) {
      PlayerNumber[PlayerNumber["One"] = 1] = "One";
      PlayerNumber[PlayerNumber["Two"] = 2] = "Two";
      PlayerNumber[PlayerNumber["Three"] = 3] = "Three";
      PlayerNumber[PlayerNumber["Four"] = 4] = "Four";
  })(PlayerNumber || (PlayerNumber = {}));
  var init = false;
  var connected = false;
  var all = {};
  var player = PlayerNumber.One;
  function initGamepad() {
      if (init)
          return;
      init = true;
      window.addEventListener("gamepadconnected", function (e) {
          if (connected)
              return;
          connected = true;
          setInterval(function () {
              onUpdate();
          }, 20);
      });
  }
  pxsim.initGamepad = initGamepad;
  function onUpdate() {
      var g = navigator.getGamepads();
      if (g) {
          for (var i = 0; i < g.length; i++) {
              var gamepad = g[i];
              if (gamepad && gamepad.buttons && gamepad.buttons.length) {
                  var ctrl = getState(gamepad);
                  updateState(ctrl, pxsim.Key.A, 0, gamepad);
                  updateState(ctrl, pxsim.Key.B, 1, gamepad);
                  updateState(ctrl, pxsim.Key.Menu, 9, gamepad);
                  updateState(ctrl, pxsim.Key.Up, 12, gamepad, 1, false);
                  updateState(ctrl, pxsim.Key.Down, 13, gamepad, 1, true);
                  updateState(ctrl, pxsim.Key.Left, 14, gamepad, 0, false);
                  updateState(ctrl, pxsim.Key.Right, 15, gamepad, 0, true);
              }
          }
      }
  }
  pxsim.onUpdate = onUpdate;
  function getState(gamepad) {
      if (all[gamepad.index])
          return all[gamepad.index];
      var newState = { state: {}, player: player };
      all[gamepad.index] = newState;
      player++;
      return newState;
  }
  function updateState(ctrl, key, buttonIndex, gamepad, axis, axisPositive) {
      var pressed = gamepad.buttons[buttonIndex].pressed;
      if (axis != undefined && gamepad.axes && gamepad.axes[axis]) {
          var value = gamepad.axes[axis];
          if (Math.abs(value) > 0.5) {
              pressed = pressed || (axisPositive === value > 0);
          }
      }
      var old = ctrl.state[key];
      if (old != pressed) {
          ctrl.state[key] = pressed;
          pxsim.board().handleKeyEvent(key + (7 * (ctrl.player - 1)), pressed);
      }
  }
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var forcedUpdateLoop;
  /**
   * This function gets called each time the program restarts
   */
  pxsim.initCurrentRuntime = function () {
      pxsim.runtime.board = new Board();
      pxsim.initGamepad();
      if (!forcedUpdateLoop) {
          forcedUpdateLoop = true;
          // this is used to force screen update if game loop is stuck or not set up properly
          //forcedUpdateLoop = setInterval(() => {
          //board().screenState.maybeForceUpdate()
          //}, 100)
          window.onfocus = function (e) {
              indicateFocus(true);
              return false;
          };
          window.onblur = function (e) {
              indicateFocus(false);
              return false;
          };
          window.onkeydown = function (e) {
              var b = board();
              if (b)
                  b.setKey((typeof e.which == "number") ? e.which : e.keyCode, true, e);
          };
          window.onkeyup = function (e) {
              var b = board();
              if (b)
                  b.setKey((typeof e.which == "number") ? e.which : e.keyCode, false, e);
          };
          window.oncontextmenu = function (e) {
              e.preventDefault();
              e.stopPropagation();
              return false;
          };
          window.onmouseover = function () {
              if (!document.hasFocus())
                  window.focus();
          };
          window.addEventListener("message", function (ev) {
              if (ev.data.button !== undefined) {
                  var key = void 0;
                  switch (ev.data.button) {
                      case 0:
                          key = pxsim.Key.A;
                          break;
                      case 1:
                          key = pxsim.Key.B;
                          break;
                      case 2:
                          key = pxsim.Key.Up;
                          break;
                      case 3:
                          key = pxsim.Key.Down;
                          break;
                      case 4:
                          key = pxsim.Key.Left;
                          break;
                      case 5:
                          key = pxsim.Key.Right;
                          break;
                      case 6:
                          key = pxsim.Key.Menu;
                          break;
                      case 7:
                          key = pxsim.Key.Reset;
                          break;
                  }
                  var b = board();
                  if (b)
                      b.setButton(key, ev.data.pressed);
              }
          });
      }
  };
  /**
   * Gets the current 'board', eg. program state.
   */
  function board() {
      return pxsim.runtime.board;
  }
  pxsim.board = board;
  /**
   * Represents the entire state of the executing program.
   * Do not store state anywhere else!
   */
  var Board = /** @class */ (function (_super) {
      __extends(Board, _super);
      function Board() {
          var _this = _super.call(this) || this;
          _this.startTime = Date.now();
          _this.isPaused = false;
          _this.lightState = {};
          _this.bus = new pxsim.EventBus(pxsim.runtime, _this);
          _this.screenState = new pxsim.ScreenState(null);
          _this.audioState = new pxsim.AudioState();
          _this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
          _this.microphoneState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_MICROPHONE, 0, 255, 50, 120);
          _this.controlMessageState = new pxsim.ControlMessageState(_this);
          // set all pin ids
          [{
                  prefix: "PIN_A",
                  id: 100,
                  count: 32
              }, {
                  prefix: "PIN_B",
                  id: 300,
                  count: 32
              }, {
                  prefix: "PIN_C",
                  id: 350,
                  count: 32
              }, {
                  prefix: "PIN_D",
                  id: 150,
                  count: 32
              }, {
                  prefix: "PIN_P",
                  id: 400,
                  count: 20
              }].forEach(function (pinp) {
              for (var i = 0; i < pinp.count; ++i) {
                  var id = pinp.id + i;
                  pxsim.setConfigKey(pinp.prefix + i, id);
                  if (pxsim.getConfig(id) == null)
                      pxsim.setConfig(id, id);
              }
          });
          // add pins from config
          var pins = pxsim.getAllConfigKeys()
              .filter(function (k) { return /^PIN_/.test(k); })
              .map(function (k) { return pxsim.getConfig(pxsim.getConfigKey(k)); })
              .filter(function (id) { return !!id; });
          _this.edgeConnectorState = new pxsim.EdgeConnectorState({
              pins: pins
          });
          _this.lightSensorState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_LIGHT_SENSOR);
          _this.thermometerState = new pxsim.AnalogSensorState(DAL.DEVICE_ID_THERMOMETER);
          _this.thermometerUnitState = pxsim.TemperatureUnit.Celsius;
          _this.radioState = new pxsim.RadioState(pxsim.runtime, _this, {
              ID_RADIO: DAL.DEVICE_ID_RADIO,
              RADIO_EVT_DATAGRAM: DAL.DEVICE_RADIO_EVT_DATAGRAM
          });
          var scale = (isEdge() || isIE()) ? 10 : 1;
          _this.gameplayer = new pxsim.visuals.GamePlayer(scale);
          throttleAnimation(function (cb) { return _this.screenState.onChange = cb; }, function () { return _this.gameplayer.draw(_this.screenState); });
          return _this;
      }
      Board.prototype.getDefaultPitchPin = function () {
          return undefined;
      };
      Board.prototype.setKey = function (which, isPressed, e) {
          var k = pxsim.mapKey(which);
          if (k) {
              this.setButton(k, isPressed);
              e.preventDefault();
              e.stopPropagation();
          }
      };
      Board.prototype.setButton = function (which, isPressed) {
          if (which)
              this.handleKeyEvent(which, isPressed);
      };
      Board.prototype.handleKeyEvent = function (key, isPressed) {
          // handle system keys
          switch (key) {
              case pxsim.Key.Reset:
                  if (!isPressed) {
                      this.gameplayer.dispose();
                      pxsim.Runtime.postMessage({
                          type: "simulator",
                          command: "restart"
                      });
                  }
                  return;
              case pxsim.Key.Screenshot:
                  if (!isPressed) {
                      pxsim.Runtime.postScreenshotAsync().done();
                  }
                  return;
              case pxsim.Key.Gif:
                  if (!isPressed)
                      pxsim.Runtime.requestToggleRecording();
                  break;
              case pxsim.Key.TogglePause:
                  if (!isPressed) {
                      // TODO: https://github.com/microsoft/pxt-arcade/issues/1580
                      // Add pause/resume screen to simulator when clicking (YouTube style)
                      this.isPaused = !this.isPaused;
                  }
                  break;
          }
          //this.lastKey = Date.now()
          this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, key);
          this.bus.queue(isPressed ? INTERNAL_KEY_DOWN : INTERNAL_KEY_UP, 0); // "any" key
          if (this.gameplayer)
              this.gameplayer.buttonChanged(key, isPressed);
      };
      Board.prototype.screenshotAsync = function () {
          var cvs = this.gameplayer.screen;
          var ctx = cvs.getContext("2d");
          var id = ctx.getImageData(0, 0, cvs.width, cvs.height);
          return Promise.resolve(id);
      };
      Board.prototype.tryScreenshot = function () {
          // ignore
      };
      Board.prototype.resize = function () {
      };
      Board.prototype.initAsync = function (msg) {
          this.runOptions = msg;
          this.stats = document.getElementById("debug-stats");
          this.stats.className = "stats no-select";
          this.id = msg.id;
          indicateFocus(document.hasFocus());
          this.accelerometerState.attachEvents(document.body);
          this.updateStats();
          return Promise.resolve();
      };
      Board.prototype.updateStats = function () {
          this.stats.textContent = this.screenState.stats || '';
          // screenshots are handled in the share dialog
      };
      Board.prototype.tryGetNeopixelState = function (pinId) {
          return this.lightState[pinId];
      };
      Board.prototype.neopixelState = function (pinId) {
          if (pinId === undefined)
              pinId = this.edgeConnectorState.pins[0].id;
          var state = this.lightState[pinId];
          if (!state)
              state = this.lightState[pinId] = new pxsim.CommonNeoPixelState();
          return state;
      };
      return Board;
  }(pxsim.BaseBoard));
  pxsim.Board = Board;
  function indicateFocus(hasFocus) {
      document.getElementById("root").setAttribute("class", hasFocus ? "" : "blur");
  }
  pxsim.indicateFocus = indicateFocus;
  function throttleAnimation(event, handler) {
      var requested = false;
      event(function () {
          if (!requested) {
              window.requestAnimationFrame(function () {
                  handler();
                  requested = false;
              });
          }
      });
  }
})(pxsim || (pxsim = {}));
// Copied verbatim from pxt-core
function hasNavigator() {
  return typeof navigator !== "undefined";
}
function isEdge() {
  return hasNavigator() && /Edge/i.test(navigator.userAgent);
}
function isIE() {
  return hasNavigator() && /Trident/i.test(navigator.userAgent);
}
//MacIntel on modern Macs
function isMac() {
  return hasNavigator() && /Mac/i.test(navigator.platform);
}
//Microsoft Edge and IE11 lie about being Chrome
function isChrome() {
  return !isEdge() && !isIE() && !!navigator && (/Chrome/i.test(navigator.userAgent) || /Chromium/i.test(navigator.userAgent));
}
(function (pxsim) {
  var pxtcore;
  (function (pxtcore) {
      function getButtonByPinCfg(key) {
          return { id: key };
      }
      pxtcore.getButtonByPinCfg = getButtonByPinCfg;
  })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var ButtonMethods;
  (function (ButtonMethods) {
      function id(button) {
          return (button).id;
      }
      ButtonMethods.id = id;
  })(ButtonMethods = pxsim.ButtonMethods || (pxsim.ButtonMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var SVG_WIDTH = 40;
      var GameButtons = /** @class */ (function () {
          // <div id="game-buttons-container" class="game-buttons">
          //     <div class="spacer" />
          //     <div class="action-button">
          //         <button class="share-mod-button">Share</button>
          //     </div>
          //     <svg xmlns="http://www.w3.org/2000/svg" class="game-button-svg" viewBox="0 0 40 40" width="200px" height="200px">
          //         <circle class="button-b" cx="13" cy="28" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
          //         <text class="label-b" x="13" y="28" textAnchor="middle" dy="2.5" fontSize="8">B</text>
          //         <circle class="button-a" cx="28" cy="11" r="9" fill="#333" stroke="#397382" strokeWidth="2.5" />
          //         <text class="label-a" x="28" y="11" textAnchor="middle" dy="2.5" fontSize="8">A</text>
          //     </svg>
          // </div>
          function GameButtons(container) {
              var _this = this;
              this.buttonPressCount = {};
              this.bindings = [];
              this.logEvents = function () {
                  if (Object.keys(_this.buttonPressCount).some(function (x) { return !!_this.buttonPressCount[x]; })) {
                      // tickEvent("shareExperiment.play.buttonPress", this.buttonPressCount);
                      Object.keys(_this.buttonPressCount).forEach(function (k) { return _this.buttonPressCount[k] = 0; });
                  }
              };
              this.cleanupInterval = function () {
                  clearInterval(_this.buttonPressInterval);
                  _this.buttonPressCount = {};
              };
              this.parent = container || document.getElementById("game-buttons-container");
              this.aButton = this.parent.getElementsByClassName("button-a").item(0);
              this.aLabel = this.parent.getElementsByClassName("label-a").item(0);
              this.bButton = this.parent.getElementsByClassName("button-b").item(0);
              ;
              this.bLabel = this.parent.getElementsByClassName("label-b").item(0);
              this.dragSurface = this.parent.getElementsByClassName("game-button-svg").item(0);
              this.bindEvents(this.dragSurface);
          }
          GameButtons.prototype.buttonChanged = function (button, isPressed) {
              switch (button) {
                  case visuals.SimulatorButton.A:
                      this.setButtonState(button, isPressed, true);
                      break;
                  case visuals.SimulatorButton.B:
                      this.setButtonState(button, isPressed, true);
                      break;
                  default:
                      break;
              }
          };
          GameButtons.prototype.dispose = function () {
              this.aButton = undefined;
              this.aLabel = undefined;
              this.bButton = undefined;
              this.bLabel = undefined;
              this.parent = undefined;
              this.dragSurface = undefined;
              this.cleanupInterval();
              this.bindings.forEach(function (b) {
                  var el = b[0], ev = b[1], cb = b[2];
                  el.removeEventListener(ev, cb);
              });
              this.bindings = [];
          };
          GameButtons.prototype.updateButtonGesture = function (x, y) {
              var bounds = this.dragSurface.getBoundingClientRect();
              var dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width));
              var dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height));
              var aDistance = Math.sqrt(Math.pow(dx - 30, 2) + Math.pow(dy - 15, 2));
              var bDistance = Math.sqrt(Math.pow(dx - 15, 2) + Math.pow(dy - 28, 2));
              this.setButtonState(visuals.SimulatorButton.A, aDistance < 8);
              this.setButtonState(visuals.SimulatorButton.B, bDistance < 8);
              pxsim.indicateFocus(true);
          };
          GameButtons.prototype.clearButtonPresses = function () {
              this.setButtonState(visuals.SimulatorButton.A, false);
              this.setButtonState(visuals.SimulatorButton.B, false);
          };
          GameButtons.prototype.setButtonState = function (button, pressed, quiet) {
              if (quiet === void 0) { quiet = false; }
              var isAButton = button === visuals.SimulatorButton.A;
              var circle = isAButton ? this.aButton : this.bButton;
              var label = isAButton ? this.aLabel : this.bLabel;
              if (circle && label) {
                  var pressedColor = "#249ca3";
                  circle.setAttribute("fill", pressed ? pressedColor : "#333");
                  label.setAttribute("fill", pressed ? "#333" : "");
              }
              if (!quiet) {
                  if (pressed) {
                      if (!this.buttonPressCount[visuals.SimulatorButton[button]])
                          this.buttonPressCount[visuals.SimulatorButton[button]] = 0;
                      this.buttonPressCount[visuals.SimulatorButton[button]] += 1;
                      visuals.pressButton(button);
                  }
                  else
                      visuals.releaseButton(button);
              }
          };
          GameButtons.prototype.bindEvents = function (surface) {
              if (!surface)
                  return;
              if (visuals.hasPointerEvents()) {
                  this.bindPointerEvents(surface);
              }
              else if (visuals.isTouchEnabled()) {
                  this.bindTouchEvents(surface);
              }
              else {
                  this.bindMouseEvents(surface);
              }
              this.buttonPressInterval = setInterval(this.logEvents, 5000);
          };
          GameButtons.prototype.bindPointerEvents = function (surface) {
              var _this = this;
              var inGesture = false;
              this.bindEvent(surface, "pointerup", function (ev) {
                  if (inGesture) {
                      _this.clearButtonPresses();
                  }
                  inGesture = false;
              });
              this.bindEvent(surface, "pointerdown", function (ev) {
                  _this.updateButtonGesture(ev.clientX, ev.clientY);
                  inGesture = true;
              });
              this.bindEvent(surface, "pointermove", function (ev) {
                  if (inGesture)
                      _this.updateButtonGesture(ev.clientX, ev.clientY);
              });
              this.bindEvent(surface, "pointerleave", function (ev) {
                  if (inGesture) {
                      _this.clearButtonPresses();
                  }
                  inGesture = false;
              });
          };
          GameButtons.prototype.bindMouseEvents = function (surface) {
              var _this = this;
              var inGesture = false;
              this.bindEvent(surface, "mouseup", function (ev) {
                  if (inGesture) {
                      _this.clearButtonPresses();
                  }
                  inGesture = false;
              });
              this.bindEvent(surface, "mousedown", function (ev) {
                  _this.updateButtonGesture(ev.clientX, ev.clientY);
                  inGesture = true;
              });
              this.bindEvent(surface, "mousemove", function (ev) {
                  if (inGesture)
                      _this.updateButtonGesture(ev.clientX, ev.clientY);
              });
              this.bindEvent(surface, "mouseleave", function (ev) {
                  if (inGesture) {
                      _this.clearButtonPresses();
                  }
                  inGesture = false;
              });
          };
          GameButtons.prototype.bindTouchEvents = function (surface) {
              var _this = this;
              var touchIdentifier;
              this.bindEvent(surface, "touchend", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.clearButtonPresses();
                          ev.preventDefault();
                      }
                  }
                  touchIdentifier = undefined;
              });
              this.bindEvent(surface, "touchstart", function (ev) {
                  touchIdentifier = ev.changedTouches[0].identifier;
                  _this.updateButtonGesture(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
              });
              this.bindEvent(surface, "touchmove", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.updateButtonGesture(touch.clientX, touch.clientY);
                          ev.preventDefault();
                      }
                  }
              });
              this.bindEvent(surface, "touchcancel", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.clearButtonPresses();
                      }
                  }
                  touchIdentifier = undefined;
              });
          };
          GameButtons.prototype.bindEvent = function (element, event, callback) {
              this.bindings.push([
                  element,
                  event,
                  callback
              ]);
              element.addEventListener(event, callback);
          };
          return GameButtons;
      }());
      visuals.GameButtons = GameButtons;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../simulator.ts" />
var pxsim;
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var GamePlayer = /** @class */ (function () {
          function GamePlayer(scaleFactor) {
              if (scaleFactor === void 0) { scaleFactor = 1; }
              this.scaleFactor = scaleFactor;
              this.isDisposed = false;
              this.buttons = new visuals.GameButtons();
              this.joystick = new visuals.Joystick();
              this.screen = document.getElementById("game-screen");
              this.menu = document.getElementsByClassName("game-menu-button")[0];
              this.reset = document.getElementsByClassName("game-reset-button")[0];
              if (this.menu) {
                  this.menu.onclick = function () {
                      visuals.pressButton(visuals.SimulatorButton.Menu);
                      visuals.releaseButton(visuals.SimulatorButton.Menu);
                      pxsim.indicateFocus(true);
                  };
              }
              if (this.reset) {
                  this.reset.onclick = function () {
                      visuals.pressButton(visuals.SimulatorButton.Reset);
                      visuals.releaseButton(visuals.SimulatorButton.Reset);
                  };
              }
          }
          GamePlayer.prototype.buttonChanged = function (button, isPressed) {
              this.joystick.buttonChanged(button, isPressed);
              this.buttons.buttonChanged(button, isPressed);
          };
          GamePlayer.prototype.dispose = function () {
              this.buttons.dispose();
              this.joystick.dispose();
              this.screen = undefined;
              this.menu = undefined;
              this.reset = undefined;
              this.isDisposed = true;
          };
          GamePlayer.prototype.draw = function (state) {
              if (this.isDisposed)
                  return;
              var context = this.screen.getContext("2d");
              if (this.scaleFactor === 1) {
                  if (state.width !== this.screen.width || state.height !== this.screen.height) {
                      this.screen.width = state.width;
                      this.screen.height = state.height;
                      this.screen.className = "";
                  }
                  var img = context.getImageData(0, 0, state.width, state.height);
                  new Uint32Array(img.data.buffer).set(state.screen);
                  context.putImageData(img, 0, 0);
              }
              else {
                  if (this.paletteDidChange(state)) {
                      this.refreshPalette(state);
                  }
                  if (state.width !== (this.screen.width * this.scaleFactor) || state.height !== (this.screen.height * this.scaleFactor)) {
                      this.screen.width = state.width * this.scaleFactor;
                      this.screen.height = state.height * this.scaleFactor;
                      this.screen.className = "";
                  }
                  var mask = this.palette.length - 1;
                  for (var x = 0; x < state.width; x++) {
                      for (var y = 0; y < state.height; y++) {
                          context.fillStyle = this.palette[state.lastImage.data[x + y * state.width] & mask];
                          context.fillRect(x * this.scaleFactor, y * this.scaleFactor, this.scaleFactor, this.scaleFactor);
                      }
                  }
              }
          };
          GamePlayer.prototype.refreshPalette = function (state) {
              this.palette = [];
              for (var i = 0; i < state.palette.length; i++) {
                  var c = state.palette[i];
                  this.palette.push("rgb(" + (c & 0xff) + "," + ((c >> 8) & 0xff) + "," + ((c >> 16) & 0xff) + ")");
              }
          };
          GamePlayer.prototype.paletteDidChange = function (state) {
              if (!this.cachedPalette || this.cachedPalette.length != state.palette.length)
                  return true;
              for (var i = 0; i < this.cachedPalette.length; i++) {
                  if (this.cachedPalette[i] != state.palette[i])
                      return true;
              }
              return false;
          };
          return GamePlayer;
      }());
      visuals.GamePlayer = GamePlayer;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var SVG_WIDTH = 40;
      var HALF_WIDTH = SVG_WIDTH >> 1;
      var Joystick = /** @class */ (function () {
          // <div id="joystick-container" class="game-joystick">
          //     <div class="spacer" />
          //     <div class="action-button">
          //         <button class="share-mod-button">Mod</button>
          //     </div>
          //     <svg xmlns="http://www.w3.org/2000/svg" class="game-joystick-svg" viewBox="1 0 40 40" width="200px" height="200px">
          //         <circle class="joystick-background" cx="20" cy="20" r="16" fill="#397382" stroke="#397382" strokeWidth="2"/>
          //         <rect class="dpad-up" x="16" y="6" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
          //         <rect class="dpad-down" x="16" y="22" width="8" height="12" rx="2" fill="#cecece" stroke="none" strokeWidth="1" />
          //         <rect class="dpad-right" x="22" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
          //         <rect class="dpad-left" x="6" y="16" width="12" height="8" ry="2" fill="#cecece" stroke="none" strokeWidth="1" />
          //         <circle cx="20" cy="20" r="6" fill="#cecece" />
          //         <circle class="joystick-handle" cx="20" cy="20" r="6" fill="#333" stroke="#999" strokeWidth="2" />
          //     </svg>
          // </div>
          function Joystick(container) {
              var _this = this;
              this.handleX = SVG_WIDTH >> 1;
              this.handleY = SVG_WIDTH >> 1;
              this.joystickGestureCount = 0;
              this.bindings = [];
              this.logEvents = function () {
                  if (_this.joystickGestureCount > 0) {
                      // tickEvent("shareExperiment.play.joystickGestureUp", {"count": this.joystickGestureCount});
                      _this.joystickGestureCount = 0;
                  }
              };
              this.cleanupInterval = function () {
                  clearInterval(_this.joystickGestureInterval);
                  _this.joystickGestureCount = 0;
              };
              this.parent = container || document.getElementById("joystick-container");
              this.dPadUp = this.parent.getElementsByClassName("dpad-up").item(0);
              this.dPadDown = this.parent.getElementsByClassName("dpad-down").item(0);
              this.dPadLeft = this.parent.getElementsByClassName("dpad-left").item(0);
              this.dPadRight = this.parent.getElementsByClassName("dpad-right").item(0);
              this.joystickHandle = this.parent.getElementsByClassName("joystick-handle").item(0);
              this.dragSurface = this.parent.getElementsByClassName("game-joystick-svg").item(0);
              this.bindEvents(this.dragSurface);
          }
          Joystick.prototype.dispose = function () {
              this.dPadUp = undefined;
              this.dPadDown = undefined;
              this.dPadLeft = undefined;
              this.dPadRight = undefined;
              this.joystickHandle = undefined;
              this.parent = undefined;
              this.dragSurface = undefined;
              this.cleanupInterval();
              this.bindings.forEach(function (b) {
                  var el = b[0], ev = b[1], cb = b[2];
                  el.removeEventListener(ev, cb);
              });
              this.bindings = [];
          };
          Joystick.prototype.buttonChanged = function (button, isPressed) {
              switch (button) {
                  case visuals.SimulatorButton.Down:
                      this.updateDirection(this.dPadDown, isPressed);
                      break;
                  case visuals.SimulatorButton.Up:
                      this.updateDirection(this.dPadUp, isPressed);
                      break;
                  case visuals.SimulatorButton.Left:
                      this.updateDirection(this.dPadLeft, isPressed);
                      break;
                  case visuals.SimulatorButton.Right:
                      this.updateDirection(this.dPadRight, isPressed);
                      break;
                  default:
                      break;
              }
          };
          Joystick.prototype.updateDirection = function (button, isPressed) {
              if (button) {
                  button.setAttribute("fill", isPressed ? "#249ca3" : "#cecece");
              }
          };
          Joystick.prototype.bindEvents = function (surface) {
              if (!surface)
                  return;
              if (visuals.hasPointerEvents()) {
                  this.bindPointerEvents(surface);
              }
              else if (visuals.isTouchEnabled()) {
                  this.bindTouchEvents(surface);
              }
              else {
                  this.bindMouseEvents(surface);
              }
              this.joystickGestureInterval = setInterval(this.logEvents, 5000);
          };
          Joystick.prototype.bindPointerEvents = function (surface) {
              var _this = this;
              var inGesture = false;
              this.bindEvent(surface, "pointerup", function (ev) {
                  if (inGesture) {
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
                      _this.startAnimation();
                  }
                  inGesture = false;
              });
              this.bindEvent(surface, "pointerdown", function (ev) {
                  _this.updateJoystickDrag(ev.clientX, ev.clientY);
                  inGesture = true;
              });
              this.bindEvent(surface, "pointermove", function (ev) {
                  if (inGesture)
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
              });
              this.bindEvent(surface, "pointerleave", function (ev) {
                  if (inGesture) {
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
                      _this.startAnimation();
                  }
                  inGesture = false;
              });
          };
          Joystick.prototype.bindMouseEvents = function (surface) {
              var _this = this;
              var inGesture = false;
              this.bindEvent(surface, "mouseup", function (ev) {
                  if (inGesture) {
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
                      _this.startAnimation();
                  }
                  inGesture = false;
              });
              this.bindEvent(surface, "mousedown", function (ev) {
                  _this.updateJoystickDrag(ev.clientX, ev.clientY);
                  inGesture = true;
              });
              this.bindEvent(surface, "mousemove", function (ev) {
                  if (inGesture)
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
              });
              this.bindEvent(surface, "mouseleave", function (ev) {
                  if (inGesture) {
                      _this.updateJoystickDrag(ev.clientX, ev.clientY);
                      _this.startAnimation();
                  }
                  inGesture = false;
              });
          };
          Joystick.prototype.bindTouchEvents = function (surface) {
              var _this = this;
              var touchIdentifier;
              this.bindEvent(surface, "touchend", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.updateJoystickDrag(touch.clientX, touch.clientY);
                          _this.startAnimation();
                          ev.preventDefault();
                      }
                  }
                  touchIdentifier = undefined;
              });
              this.bindEvent(surface, "touchstart", function (ev) {
                  touchIdentifier = ev.changedTouches[0].identifier;
                  _this.updateJoystickDrag(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
              });
              this.bindEvent(surface, "touchmove", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.updateJoystickDrag(touch.clientX, touch.clientY);
                          ev.preventDefault();
                      }
                  }
              });
              this.bindEvent(surface, "touchcancel", function (ev) {
                  if (touchIdentifier) {
                      var touch = visuals.getTouch(ev, touchIdentifier);
                      if (touch) {
                          _this.updateJoystickDrag(touch.clientX, touch.clientY);
                          _this.startAnimation();
                      }
                  }
                  touchIdentifier = undefined;
              });
          };
          Joystick.prototype.updateJoystickDrag = function (x, y) {
              if (this.joystickHandle) {
                  pxsim.indicateFocus(true);
                  var bounds = this.dragSurface.getBoundingClientRect();
                  var dx = ((x - bounds.left) * (SVG_WIDTH / bounds.width)) - HALF_WIDTH;
                  var dy = ((y - bounds.top) * (SVG_WIDTH / bounds.height)) - HALF_WIDTH;
                  var angle = Math.atan2(dy, dx);
                  var distance = Math.min(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)), 10);
                  this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle));
              }
          };
          Joystick.prototype.startAnimation = function () {
              var _this = this;
              this.clearButtonPresses();
              if (this.joystickHandle) {
                  this.stopAnimation();
                  var animationFrame_1 = function () {
                      var distance = _this.getHandleDistance();
                      if (distance < 0.5) {
                          _this.setHandlePosition(HALF_WIDTH, HALF_WIDTH, true);
                          _this.stopAnimation();
                      }
                      else {
                          var angle = _this.getHandleAngle();
                          distance = Math.max(distance - 1, 0);
                          _this.setHandlePosition(HALF_WIDTH + distance * Math.cos(angle), HALF_WIDTH + distance * Math.sin(angle), true);
                          _this.joystickAnimation = requestAnimationFrame(animationFrame_1);
                      }
                  };
                  this.joystickAnimation = requestAnimationFrame(animationFrame_1);
              }
          };
          Joystick.prototype.stopAnimation = function () {
              if (this.joystickAnimation) {
                  cancelAnimationFrame(this.joystickAnimation);
                  this.joystickAnimation = undefined;
                  this.joystickGestureCount += 1;
              }
          };
          /**
           *
           * @param x The x location in SVG coordinates
           * @param y The y location in SVG coordinates
           */
          Joystick.prototype.setHandlePosition = function (x, y, animation) {
              if (animation === void 0) { animation = false; }
              if (this.joystickHandle) {
                  this.joystickHandle.setAttribute("cx", "" + x);
                  this.joystickHandle.setAttribute("cy", "" + y);
                  this.handleX = x;
                  this.handleY = y;
                  if (!animation) {
                      if (this.getHandleDistance() < 5) {
                          this.clearButtonPresses();
                      }
                      else {
                          var angle = this.getHandleAngle();
                          var octet = (5 + Math.floor((angle / (Math.PI / 4)) - 0.5)) % 8;
                          if (octet === this.lastOctet)
                              return;
                          this.lastOctet = octet;
                          var left = false;
                          var right = false;
                          var up = false;
                          var down = false;
                          switch (octet) {
                              case 0:
                                  left = true;
                                  break;
                              case 1:
                                  left = true;
                                  up = true;
                                  break;
                              case 2:
                                  up = true;
                                  break;
                              case 3:
                                  up = true;
                                  right = true;
                                  break;
                              case 4:
                                  right = true;
                                  break;
                              case 5:
                                  right = true;
                                  down = true;
                                  break;
                              case 6:
                                  down = true;
                                  break;
                              case 7:
                                  left = true;
                                  down = true;
                                  break;
                          }
                          if (down)
                              visuals.pressButton(visuals.SimulatorButton.Down);
                          else
                              visuals.releaseButton(visuals.SimulatorButton.Down);
                          if (up)
                              visuals.pressButton(visuals.SimulatorButton.Up);
                          else
                              visuals.releaseButton(visuals.SimulatorButton.Up);
                          if (left)
                              visuals.pressButton(visuals.SimulatorButton.Left);
                          else
                              visuals.releaseButton(visuals.SimulatorButton.Left);
                          if (right)
                              visuals.pressButton(visuals.SimulatorButton.Right);
                          else
                              visuals.releaseButton(visuals.SimulatorButton.Right);
                      }
                  }
              }
          };
          Joystick.prototype.getHandleAngle = function () {
              return Math.atan2(this.handleY - HALF_WIDTH, this.handleX - HALF_WIDTH);
              ;
          };
          Joystick.prototype.getHandleDistance = function () {
              return Math.sqrt(Math.pow(this.handleX - HALF_WIDTH, 2) + Math.pow(this.handleY - HALF_WIDTH, 2));
          };
          Joystick.prototype.clearButtonPresses = function () {
              visuals.releaseButton(visuals.SimulatorButton.Down);
              visuals.releaseButton(visuals.SimulatorButton.Up);
              visuals.releaseButton(visuals.SimulatorButton.Left);
              visuals.releaseButton(visuals.SimulatorButton.Right);
              this.lastOctet = undefined;
          };
          Joystick.prototype.bindEvent = function (element, event, callback) {
              this.bindings.push([
                  element,
                  event,
                  callback
              ]);
              element.addEventListener(event, callback);
          };
          return Joystick;
      }());
      visuals.Joystick = Joystick;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var SimulatorButton;
      (function (SimulatorButton) {
          SimulatorButton[SimulatorButton["Left"] = 1] = "Left";
          SimulatorButton[SimulatorButton["Up"] = 2] = "Up";
          SimulatorButton[SimulatorButton["Right"] = 3] = "Right";
          SimulatorButton[SimulatorButton["Down"] = 4] = "Down";
          SimulatorButton[SimulatorButton["A"] = 5] = "A";
          SimulatorButton[SimulatorButton["B"] = 6] = "B";
          SimulatorButton[SimulatorButton["Menu"] = 7] = "Menu";
          // system keys
          SimulatorButton[SimulatorButton["Reset"] = -3] = "Reset";
          SimulatorButton[SimulatorButton["TogglePause"] = -4] = "TogglePause";
      })(SimulatorButton = visuals.SimulatorButton || (visuals.SimulatorButton = {}));
      function pressButton(button) {
          pxsim.board().handleKeyEvent(button, true);
      }
      visuals.pressButton = pressButton;
      function releaseButton(button) {
          pxsim.board().handleKeyEvent(button, false);
      }
      visuals.releaseButton = releaseButton;
      function hasPointerEvents() {
          return typeof window != "undefined" && !!window.PointerEvent;
      }
      visuals.hasPointerEvents = hasPointerEvents;
      function isTouchEnabled() {
          return typeof window !== "undefined" &&
              ('ontouchstart' in window // works on most browsers
                  || (navigator && navigator.maxTouchPoints > 0)); // works on IE10/11 and Surface);
      }
      visuals.isTouchEnabled = isTouchEnabled;
      function getTouch(ev, identifier) {
          for (var i = 0; i < ev.changedTouches.length; i++) {
              if (ev.changedTouches[i].identifier === identifier) {
                  return ev.changedTouches[i];
              }
          }
          return undefined;
      }
      visuals.getTouch = getTouch;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var encoders;
  (function (encoders) {
      var ROT_EV_CHANGED = 0x2233;
      function createRotaryEncoder(pinA, pinB) {
          return new RotaryEncoder(pinA, pinB, 0);
      }
      encoders.createRotaryEncoder = createRotaryEncoder;
      var RotaryEncoder = /** @class */ (function () {
          function RotaryEncoder(pinA, pinB, position) {
              this.pinA = pinA;
              this.pinB = pinB;
              this.position = position;
          }
          Object.defineProperty(RotaryEncoder.prototype, "id", {
              get: function () {
                  return this.pinA.id;
              },
              enumerable: false,
              configurable: true
          });
          RotaryEncoder.prototype.onChanged = function (handler) {
              pxsim.control.internalOnEvent(this.id, ROT_EV_CHANGED, handler);
          };
          return RotaryEncoder;
      }());
      encoders.RotaryEncoder = RotaryEncoder;
  })(encoders = pxsim.encoders || (pxsim.encoders = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var RotaryEncoderMethods;
  (function (RotaryEncoderMethods) {
      function onChanged(encoder, handler) {
          encoder.onChanged(handler);
      }
      RotaryEncoderMethods.onChanged = onChanged;
      function position(encoder) {
          return encoder.position;
      }
      RotaryEncoderMethods.position = position;
  })(RotaryEncoderMethods = pxsim.RotaryEncoderMethods || (pxsim.RotaryEncoderMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var RefImage = /** @class */ (function (_super) {
      __extends(RefImage, _super);
      function RefImage(w, h, bpp) {
          var _this = _super.call(this) || this;
          _this.isStatic = true;
          _this.data = new Uint8Array(w * h);
          _this._width = w;
          _this._height = h;
          _this._bpp = bpp;
          return _this;
      }
      RefImage.prototype.scan = function (mark) { };
      RefImage.prototype.gcKey = function () { return "Image"; };
      RefImage.prototype.gcSize = function () { return 4 + (this.data.length + 3 >> 3); };
      RefImage.prototype.gcIsStatic = function () { return this.isStatic; };
      RefImage.prototype.pix = function (x, y) {
          return (x | 0) + (y | 0) * this._width;
      };
      RefImage.prototype.inRange = function (x, y) {
          return 0 <= (x | 0) && (x | 0) < this._width &&
              0 <= (y | 0) && (y | 0) < this._height;
      };
      RefImage.prototype.color = function (c) {
          return c & 0xff;
      };
      RefImage.prototype.clamp = function (x, y) {
          x |= 0;
          y |= 0;
          if (x < 0)
              x = 0;
          else if (x >= this._width)
              x = this._width - 1;
          if (y < 0)
              y = 0;
          else if (y >= this._height)
              y = this._height - 1;
          return [x, y];
      };
      RefImage.prototype.makeWritable = function () {
          this.isStatic = false;
      };
      RefImage.prototype.toDebugString = function () {
          return this._width + "x" + this._height;
      };
      return RefImage;
  }(pxsim.RefObject));
  pxsim.RefImage = RefImage;
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var ImageMethods;
  (function (ImageMethods) {
      function XX(x) { return (x << 16) >> 16; }
      function YY(x) { return x >> 16; }
      function width(img) { return img._width; }
      ImageMethods.width = width;
      function height(img) { return img._height; }
      ImageMethods.height = height;
      function isMono(img) { return img._bpp == 1; }
      ImageMethods.isMono = isMono;
      function isStatic(img) { return img.gcIsStatic(); }
      ImageMethods.isStatic = isStatic;
      function setPixel(img, x, y, c) {
          img.makeWritable();
          if (img.inRange(x, y))
              img.data[img.pix(x, y)] = img.color(c);
      }
      ImageMethods.setPixel = setPixel;
      function getPixel(img, x, y) {
          if (img.inRange(x, y))
              return img.data[img.pix(x, y)];
          return 0;
      }
      ImageMethods.getPixel = getPixel;
      function fill(img, c) {
          img.makeWritable();
          img.data.fill(img.color(c));
      }
      ImageMethods.fill = fill;
      function fillRect(img, x, y, w, h, c) {
          var _a;
          img.makeWritable();
          var _b = img.clamp(x + w - 1, y + h - 1), x2 = _b[0], y2 = _b[1];
          _a = img.clamp(x, y), x = _a[0], y = _a[1];
          var p = img.pix(x, y);
          w = x2 - x + 1;
          h = y2 - y + 1;
          var d = img._width - w;
          c = img.color(c);
          while (h-- > 0) {
              for (var i = 0; i < w; ++i)
                  img.data[p++] = c;
              p += d;
          }
      }
      ImageMethods.fillRect = fillRect;
      function _fillRect(img, xy, wh, c) {
          fillRect(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
      }
      ImageMethods._fillRect = _fillRect;
      function mapRect(img, x, y, w, h, c) {
          var _a;
          if (c.data.length < 16)
              return;
          img.makeWritable();
          var _b = img.clamp(x + w - 1, y + h - 1), x2 = _b[0], y2 = _b[1];
          _a = img.clamp(x, y), x = _a[0], y = _a[1];
          var p = img.pix(x, y);
          w = x2 - x + 1;
          h = y2 - y + 1;
          var d = img._width - w;
          while (h-- > 0) {
              for (var i = 0; i < w; ++i) {
                  img.data[p] = c.data[img.data[p]];
                  p++;
              }
              p += d;
          }
      }
      ImageMethods.mapRect = mapRect;
      function _mapRect(img, xy, wh, c) {
          mapRect(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
      }
      ImageMethods._mapRect = _mapRect;
      function equals(img, other) {
          if (!other || img._bpp != other._bpp || img._width != other._width || img._height != other._height) {
              return false;
          }
          var imgData = img.data;
          var otherData = other.data;
          var len = imgData.length;
          for (var i = 0; i < len; i++) {
              if (imgData[i] != otherData[i]) {
                  return false;
              }
          }
          return true;
      }
      ImageMethods.equals = equals;
      function getRows(img, x, dst) {
          x |= 0;
          if (!img.inRange(x, 0))
              return;
          var dp = 0;
          var len = Math.min(dst.data.length, (img._width - x) * img._height);
          var sp = x;
          var hh = 0;
          while (len--) {
              if (hh++ >= img._height) {
                  hh = 0;
                  sp = ++x;
              }
              dst.data[dp++] = img.data[sp];
              sp += img._width;
          }
      }
      ImageMethods.getRows = getRows;
      function setRows(img, x, src) {
          x |= 0;
          if (!img.inRange(x, 0))
              return;
          var sp = 0;
          var len = Math.min(src.data.length, (img._width - x) * img._height);
          var dp = x;
          var hh = 0;
          while (len--) {
              if (hh++ >= img._height) {
                  hh = 0;
                  dp = ++x;
              }
              img.data[dp] = src.data[sp++];
              dp += img._width;
          }
      }
      ImageMethods.setRows = setRows;
      function clone(img) {
          var r = new pxsim.RefImage(img._width, img._height, img._bpp);
          r.data.set(img.data);
          return r;
      }
      ImageMethods.clone = clone;
      function flipX(img) {
          img.makeWritable();
          var w = img._width;
          var h = img._height;
          for (var i = 0; i < h; ++i) {
              img.data.subarray(i * w, (i + 1) * w).reverse();
          }
      }
      ImageMethods.flipX = flipX;
      function flipY(img) {
          img.makeWritable();
          var w = img._width;
          var h = img._height;
          var d = img.data;
          for (var i = 0; i < w; ++i) {
              var top_1 = i;
              var bot = i + (h - 1) * w;
              while (top_1 < bot) {
                  var c = d[top_1];
                  d[top_1] = d[bot];
                  d[bot] = c;
                  top_1 += w;
                  bot -= w;
              }
          }
      }
      ImageMethods.flipY = flipY;
      function transposed(img) {
          var w = img._width;
          var h = img._height;
          var d = img.data;
          var r = new pxsim.RefImage(h, w, img._bpp);
          var n = r.data;
          var src = 0;
          for (var i = 0; i < h; ++i) {
              var dst = i;
              for (var j = 0; j < w; ++j) {
                  n[dst] = d[src++];
                  dst += w;
              }
          }
          return r;
      }
      ImageMethods.transposed = transposed;
      function copyFrom(img, from) {
          if (img._width != from._width || img._height != from._height ||
              img._bpp != from._bpp)
              return;
          img.data.set(from.data);
      }
      ImageMethods.copyFrom = copyFrom;
      function scroll(img, dx, dy) {
          img.makeWritable();
          dx |= 0;
          dy |= 0;
          if (dx != 0) {
              var img2 = clone(img);
              img.data.fill(0);
              drawTransparentImage(img, img2, dx, dy);
          }
          else if (dy < 0) {
              dy = -dy;
              if (dy < img._height)
                  img.data.copyWithin(0, dy * img._width);
              else
                  dy = img._height;
              img.data.fill(0, (img._height - dy) * img._width);
          }
          else if (dy > 0) {
              if (dy < img._height)
                  img.data.copyWithin(dy * img._width, 0);
              else
                  dy = img._height;
              img.data.fill(0, 0, dy * img._width);
          }
          // TODO implement dx
      }
      ImageMethods.scroll = scroll;
      function replace(img, from, to) {
          to &= 0xf;
          var d = img.data;
          for (var i = 0; i < d.length; ++i)
              if (d[i] == from)
                  d[i] = to;
      }
      ImageMethods.replace = replace;
      function doubledX(img) {
          var w = img._width;
          var h = img._height;
          var d = img.data;
          var r = new pxsim.RefImage(w * 2, h, img._bpp);
          var n = r.data;
          var dst = 0;
          for (var src = 0; src < d.length; ++src) {
              var c = d[src];
              n[dst++] = c;
              n[dst++] = c;
          }
          return r;
      }
      ImageMethods.doubledX = doubledX;
      function doubledY(img) {
          var w = img._width;
          var h = img._height;
          var d = img.data;
          var r = new pxsim.RefImage(w, h * 2, img._bpp);
          var n = r.data;
          var src = 0;
          var dst0 = 0;
          var dst1 = w;
          for (var i = 0; i < h; ++i) {
              for (var j = 0; j < w; ++j) {
                  var c = d[src++];
                  n[dst0++] = c;
                  n[dst1++] = c;
              }
              dst0 += w;
              dst1 += w;
          }
          return r;
      }
      ImageMethods.doubledY = doubledY;
      function doubled(img) {
          return doubledX(doubledY(img));
      }
      ImageMethods.doubled = doubled;
      function drawImageCore(img, from, x, y, clear, check) {
          x |= 0;
          y |= 0;
          var w = from._width;
          var h = from._height;
          var sh = img._height;
          var sw = img._width;
          if (x + w <= 0)
              return false;
          if (x >= sw)
              return false;
          if (y + h <= 0)
              return false;
          if (y >= sh)
              return false;
          if (clear)
              fillRect(img, x, y, from._width, from._height, 0);
          else if (!check)
              img.makeWritable();
          var len = x < 0 ? Math.min(sw, w + x) : Math.min(sw - x, w);
          var fdata = from.data;
          var tdata = img.data;
          for (var p = 0; h--; y++, p += w) {
              if (0 <= y && y < sh) {
                  var dst = y * sw;
                  var src = p;
                  if (x < 0)
                      src += -x;
                  else
                      dst += x;
                  for (var i = 0; i < len; ++i) {
                      var v = fdata[src++];
                      if (v) {
                          if (check) {
                              if (tdata[dst])
                                  return true;
                          }
                          else {
                              tdata[dst] = v;
                          }
                      }
                      dst++;
                  }
              }
          }
          return false;
      }
      function drawImage(img, from, x, y) {
          drawImageCore(img, from, x, y, true, false);
      }
      ImageMethods.drawImage = drawImage;
      function drawTransparentImage(img, from, x, y) {
          drawImageCore(img, from, x, y, false, false);
      }
      ImageMethods.drawTransparentImage = drawTransparentImage;
      function overlapsWith(img, other, x, y) {
          return drawImageCore(img, other, x, y, false, true);
      }
      ImageMethods.overlapsWith = overlapsWith;
      function drawLineLow(img, x0, y0, x1, y1, c) {
          var dx = x1 - x0;
          var dy = y1 - y0;
          var yi = img._width;
          if (dy < 0) {
              yi = -yi;
              dy = -dy;
          }
          var D = 2 * dy - dx;
          dx <<= 1;
          dy <<= 1;
          c = img.color(c);
          var ptr = img.pix(x0, y0);
          for (var x = x0; x <= x1; ++x) {
              img.data[ptr] = c;
              if (D > 0) {
                  ptr += yi;
                  D -= dx;
              }
              D += dy;
              ptr++;
          }
      }
      function drawLineHigh(img, x0, y0, x1, y1, c) {
          var dx = x1 - x0;
          var dy = y1 - y0;
          var xi = 1;
          if (dx < 0) {
              xi = -1;
              dx = -dx;
          }
          var D = 2 * dx - dy;
          dx <<= 1;
          dy <<= 1;
          c = img.color(c);
          var ptr = img.pix(x0, y0);
          for (var y = y0; y <= y1; ++y) {
              img.data[ptr] = c;
              if (D > 0) {
                  ptr += xi;
                  D -= dy;
              }
              D += dx;
              ptr += img._width;
          }
      }
      function _drawLine(img, xy, wh, c) {
          drawLine(img, XX(xy), YY(xy), XX(wh), YY(wh), c);
      }
      ImageMethods._drawLine = _drawLine;
      function drawLine(img, x0, y0, x1, y1, c) {
          x0 |= 0;
          y0 |= 0;
          x1 |= 0;
          y1 |= 0;
          if (x1 < x0) {
              drawLine(img, x1, y1, x0, y0, c);
              return;
          }
          var w = x1 - x0;
          var h = y1 - y0;
          if (h == 0) {
              if (w == 0)
                  setPixel(img, x0, y0, c);
              else
                  fillRect(img, x0, y0, w + 1, 1, c);
              return;
          }
          if (w == 0) {
              if (h > 0)
                  fillRect(img, x0, y0, 1, h + 1, c);
              else
                  fillRect(img, x0, y1, 1, -h + 1, c);
              return;
          }
          if (x1 < 0 || x0 >= img._width)
              return;
          if (x0 < 0) {
              y0 -= (h * x0 / w) | 0;
              x0 = 0;
          }
          if (x1 >= img._width) {
              var d = (img._width - 1) - x1;
              y1 += (h * d / w) | 0;
              x1 = img._width - 1;
          }
          if (y0 < y1) {
              if (y0 >= img._height || y1 < 0)
                  return;
              if (y0 < 0) {
                  x0 -= (w * y0 / h) | 0;
                  y0 = 0;
              }
              if (y1 >= img._height) {
                  var d = (img._height - 1) - y1;
                  x1 += (w * d / h) | 0;
                  y1 = img._height;
              }
          }
          else {
              if (y1 >= img._height || y0 < 0)
                  return;
              if (y1 < 0) {
                  x1 -= (w * y1 / h) | 0;
                  y1 = 0;
              }
              if (y0 >= img._height) {
                  var d = (img._height - 1) - y0;
                  x0 += (w * d / h) | 0;
                  y0 = img._height;
              }
          }
          img.makeWritable();
          if (h < 0) {
              h = -h;
              if (h < w)
                  drawLineLow(img, x0, y0, x1, y1, c);
              else
                  drawLineHigh(img, x1, y1, x0, y0, c);
          }
          else {
              if (h < w)
                  drawLineLow(img, x0, y0, x1, y1, c);
              else
                  drawLineHigh(img, x0, y0, x1, y1, c);
          }
      }
      ImageMethods.drawLine = drawLine;
      function drawIcon(img, icon, x, y, color) {
          var img2 = icon.data;
          if (!pxsim.image.isValidImage(icon))
              return;
          if (img2[1] != 1)
              return; // only mono
          var w = pxsim.image.bufW(img2);
          var h = pxsim.image.bufH(img2);
          var byteH = pxsim.image.byteHeight(h, 1);
          x |= 0;
          y |= 0;
          var sh = img._height;
          var sw = img._width;
          if (x + w <= 0)
              return;
          if (x >= sw)
              return;
          if (y + h <= 0)
              return;
          if (y >= sh)
              return;
          img.makeWritable();
          var p = 8;
          color = img.color(color);
          var screen = img.data;
          for (var i = 0; i < w; ++i) {
              var xxx = x + i;
              if (0 <= xxx && xxx < sw) {
                  var dst = xxx + y * sw;
                  var src = p;
                  var yy = y;
                  var end = Math.min(sh, h + y);
                  if (y < 0) {
                      src += ((-y) >> 3);
                      yy += ((-y) >> 3) * 8;
                  }
                  var mask = 0x01;
                  var v = img2[src++];
                  while (yy < end) {
                      if (yy >= 0 && (v & mask)) {
                          screen[dst] = color;
                      }
                      mask <<= 1;
                      if (mask == 0x100) {
                          mask = 0x01;
                          v = img2[src++];
                      }
                      dst += sw;
                      yy++;
                  }
              }
              p += byteH;
          }
      }
      ImageMethods.drawIcon = drawIcon;
      function _drawIcon(img, icon, xy, color) {
          drawIcon(img, icon, XX(xy), YY(xy), color);
      }
      ImageMethods._drawIcon = _drawIcon;
      function fillCircle(img, cx, cy, r, c) {
          var x = r - 1;
          var y = 0;
          var dx = 1;
          var dy = 1;
          var err = dx - (r << 1);
          while (x >= y) {
              fillRect(img, cx + x, cy - y, 1, 1 + (y << 1), c);
              fillRect(img, cx + y, cy - x, 1, 1 + (x << 1), c);
              fillRect(img, cx - x, cy - y, 1, 1 + (y << 1), c);
              fillRect(img, cx - y, cy - x, 1, 1 + (x << 1), c);
              if (err <= 0) {
                  y++;
                  err += dy;
                  dy += 2;
              }
              if (err > 0) {
                  x--;
                  dx += 2;
                  err += dx - (r << 1);
              }
          }
      }
      ImageMethods.fillCircle = fillCircle;
      function _fillCircle(img, cxy, r, c) {
          fillCircle(img, XX(cxy), YY(cxy), r, c);
      }
      ImageMethods._fillCircle = _fillCircle;
      function _blitRow(img, xy, from, xh) {
          blitRow(img, XX(xy), YY(xy), from, XX(xh), YY(xh));
      }
      ImageMethods._blitRow = _blitRow;
      function blitRow(img, x, y, from, fromX, fromH) {
          x |= 0;
          y |= 0;
          fromX |= 0;
          fromH |= 0;
          if (!img.inRange(x, 0) || !img.inRange(fromX, 0) || fromH <= 0)
              return;
          var fy = 0;
          var stepFY = ((from._width << 16) / fromH) | 0;
          var endY = y + fromH;
          if (endY > img._height)
              endY = img._height;
          if (y < 0) {
              fy += -y * stepFY;
              y = 0;
          }
          while (y < endY) {
              img.data[img.pix(x, y)] = from.data[from.pix(fromX, fy >> 16)];
              y++;
              fy += stepFY;
          }
      }
      ImageMethods.blitRow = blitRow;
  })(ImageMethods = pxsim.ImageMethods || (pxsim.ImageMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var image;
  (function (image) {
      function byteHeight(h, bpp) {
          if (bpp == 1)
              return h * bpp + 7 >> 3;
          else
              return ((h * bpp + 31) >> 5) << 2;
      }
      image.byteHeight = byteHeight;
      function isLegacyImage(buf) {
          if (!buf || buf.data.length < 5)
              return false;
          if (buf.data[0] != 0xe1 && buf.data[0] != 0xe4)
              return false;
          var bpp = buf.data[0] & 0xf;
          var sz = buf.data[1] * byteHeight(buf.data[2], bpp);
          if (4 + sz != buf.data.length)
              return false;
          return true;
      }
      function bufW(data) {
          return data[2] | (data[3] << 8);
      }
      image.bufW = bufW;
      function bufH(data) {
          return data[4] | (data[5] << 8);
      }
      image.bufH = bufH;
      function isValidImage(buf) {
          if (!buf || buf.data.length < 5)
              return false;
          if (buf.data[0] != 0x87)
              return false;
          if (buf.data[1] != 1 && buf.data[1] != 4)
              return false;
          var bpp = buf.data[1];
          var sz = bufW(buf.data) * byteHeight(bufH(buf.data), bpp);
          if (8 + sz != buf.data.length)
              return false;
          return true;
      }
      image.isValidImage = isValidImage;
      function create(w, h) {
          return new pxsim.RefImage(w, h, pxsim.getScreenState().bpp());
      }
      image.create = create;
      function ofBuffer(buf) {
          var src = buf.data;
          var srcP = 4;
          var w = 0, h = 0, bpp = 0;
          if (isLegacyImage(buf)) {
              w = src[1];
              h = src[2];
              bpp = src[0] & 0xf;
              // console.log("using legacy image")
          }
          else if (isValidImage(buf)) {
              srcP = 8;
              w = bufW(src);
              h = bufH(src);
              bpp = src[1];
          }
          if (w == 0 || h == 0)
              return null;
          var r = new pxsim.RefImage(w, h, bpp);
          var dst = r.data;
          r.isStatic = buf.isStatic;
          if (bpp == 1) {
              for (var i = 0; i < w; ++i) {
                  var dstP = i;
                  var mask = 0x01;
                  var v = src[srcP++];
                  for (var j = 0; j < h; ++j) {
                      if (mask == 0x100) {
                          mask = 0x01;
                          v = src[srcP++];
                      }
                      if (v & mask)
                          dst[dstP] = 1;
                      dstP += w;
                      mask <<= 1;
                  }
              }
          }
          else if (bpp == 4) {
              for (var i = 0; i < w; ++i) {
                  var dstP = i;
                  for (var j = 0; j < h >> 1; ++j) {
                      var v = src[srcP++];
                      dst[dstP] = v & 0xf;
                      dstP += w;
                      dst[dstP] = v >> 4;
                      dstP += w;
                  }
                  if (h & 1)
                      dst[dstP] = src[srcP++] & 0xf;
                  srcP = (srcP + 3) & ~3;
              }
          }
          return r;
      }
      image.ofBuffer = ofBuffer;
      function toBuffer(img) {
          var col = byteHeight(img._height, img._bpp);
          var sz = 8 + img._width * col;
          var r = new Uint8Array(sz);
          r[0] = 0x87;
          r[1] = img._bpp;
          r[2] = img._width & 0xff;
          r[3] = img._width >> 8;
          r[4] = img._height & 0xff;
          r[5] = img._height >> 8;
          var dstP = 8;
          var w = img._width;
          var h = img._height;
          var data = img.data;
          for (var i = 0; i < w; ++i) {
              if (img._bpp == 4) {
                  var p = i;
                  for (var j = 0; j < h; j += 2) {
                      r[dstP++] = ((data[p + w] & 0xf) << 4) | ((data[p] || 0) & 0xf);
                      p += 2 * w;
                  }
                  dstP = (dstP + 3) & ~3;
              }
              else if (img._bpp == 1) {
                  var mask = 0x01;
                  var p = i;
                  for (var j = 0; j < h; j++) {
                      if (data[p])
                          r[dstP] |= mask;
                      mask <<= 1;
                      p += w;
                      if (mask == 0x100) {
                          mask = 0x01;
                          dstP++;
                      }
                  }
                  if (mask != 0x01)
                      dstP++;
              }
          }
          return new pxsim.RefBuffer(r);
      }
      image.toBuffer = toBuffer;
      function doubledIcon(buf) {
          var img = ofBuffer(buf);
          if (!img)
              return null;
          img = pxsim.ImageMethods.doubled(img);
          return toBuffer(img);
      }
      image.doubledIcon = doubledIcon;
  })(image = pxsim.image || (pxsim.image = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var pxtcore;
  (function (pxtcore) {
      function updateScreen(img) {
          var state = pxsim.getScreenState();
          if (state)
              state.showImage(img);
      }
      pxtcore.updateScreen = updateScreen;
      function updateStats(s) {
          var state = pxsim.getScreenState();
          if (state)
              state.updateStats(s);
      }
      pxtcore.updateStats = updateStats;
      function setPalette(b) {
          var state = pxsim.getScreenState();
          if (state)
              state.setPalette(b);
      }
      pxtcore.setPalette = setPalette;
      function setupScreenStatusBar(barHeight) {
          var state = pxsim.getScreenState();
          if (state)
              state.setupScreenStatusBar(barHeight);
      }
      pxtcore.setupScreenStatusBar = setupScreenStatusBar;
      function updateScreenStatusBar(img) {
          var state = pxsim.getScreenState();
          if (state)
              state.updateScreenStatusBar(img);
      }
      pxtcore.updateScreenStatusBar = updateScreenStatusBar;
      function setScreenBrightness(b) {
          // I guess we could at least turn the screen off, when b==0,
          // otherwise, it probably doesn't make much sense to do anything.
          var state = pxsim.getScreenState();
          if (state)
              state.setScreenBrightness(b);
      }
      pxtcore.setScreenBrightness = setScreenBrightness;
  })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function htmlColorToUint32(hexColor) {
      var ca = new Uint8ClampedArray(4);
      var ui = new Uint32Array(ca.buffer);
      var v = parseInt(hexColor.replace(/#/, ""), 16);
      ca[0] = (v >> 16) & 0xff;
      ca[1] = (v >> 8) & 0xff;
      ca[2] = (v >> 0) & 0xff;
      ca[3] = 0xff; // alpha
      // convert to uint32 using target endian
      return new Uint32Array(ca.buffer)[0];
  }
  var ScreenState = /** @class */ (function () {
      function ScreenState(paletteSrc, w, h) {
          if (w === void 0) { w = 0; }
          if (h === void 0) { h = 0; }
          this.width = 0;
          this.height = 0;
          this.lastImageFlushTime = 0;
          this.changed = true;
          this.brightness = 255;
          this.onChange = function () { };
          if (!paletteSrc)
              paletteSrc = ["#000000", "#ffffff"];
          this.palette = new Uint32Array(paletteSrc.length);
          for (var i = 0; i < this.palette.length; ++i) {
              this.palette[i] = htmlColorToUint32(paletteSrc[i]);
          }
          if (w) {
              this.width = w;
              this.height = h;
              this.screen = new Uint32Array(this.width * this.height);
              this.screen.fill(this.palette[0]);
          }
      }
      ScreenState.prototype.setScreenBrightness = function (b) {
          this.brightness = b | 0;
      };
      ScreenState.prototype.setPalette = function (buf) {
          var ca = new Uint8ClampedArray(4);
          var rd = new Uint32Array(ca.buffer);
          var src = buf.data;
          if (48 != src.length)
              pxsim.pxtrt.panic(911 /* PANIC_SCREEN_ERROR */);
          this.palette = new Uint32Array((src.length / 3) | 0);
          for (var i = 0; i < this.palette.length; ++i) {
              var p = i * 3;
              ca[0] = src[p + 0];
              ca[1] = src[p + 1];
              ca[2] = src[p + 2];
              ca[3] = 0xff; // alpha
              // convert to uint32 using target endian
              this.palette[i] = rd[0];
          }
      };
      ScreenState.prototype.bpp = function () {
          return this.palette.length > 2 ? 4 : 1;
      };
      ScreenState.prototype.didChange = function () {
          var res = this.changed;
          this.changed = false;
          return res;
      };
      ScreenState.prototype.maybeForceUpdate = function () {
          if (Date.now() - this.lastImageFlushTime > 200) {
              this.showImage(null);
          }
      };
      ScreenState.prototype.showImage = function (img) {
          pxsim.runtime.startPerfCounter(0);
          if (!img)
              img = this.lastImage;
          if (!img)
              return;
          if (this.width == 0) {
              this.width = img._width;
              this.height = img._height;
              this.screen = new Uint32Array(this.width * this.height);
          }
          this.lastImageFlushTime = Date.now();
          this.lastImage = img;
          this.changed = true;
          var src = img.data;
          var dst = this.screen;
          if (this.width != img._width || this.height != img._height || src.length != dst.length)
              pxsim.U.userError("wrong size");
          var p = this.palette;
          var mask = p.length - 1;
          for (var i = 0; i < src.length; ++i) {
              dst[i] = p[src[i] & mask];
          }
          this.onChange();
          pxsim.runtime.stopPerfCounter(0);
      };
      ScreenState.prototype.updateStats = function (stats) {
          this.stats = stats;
          var b = pxsim.board();
          if (b && b.updateStats) {
              b.updateStats();
          }
      };
      ScreenState.prototype.bindToSvgImage = function (lcd) {
          var _this = this;
          var screenCanvas = document.createElement("canvas");
          screenCanvas.width = this.width;
          screenCanvas.height = this.height;
          var ctx = screenCanvas.getContext("2d");
          ctx.imageSmoothingEnabled = false;
          var imgdata = ctx.getImageData(0, 0, this.width, this.height);
          var arr = new Uint32Array(imgdata.data.buffer);
          var flush = function () {
              requested = false;
              ctx.putImageData(imgdata, 0, 0);
              lcd.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", screenCanvas.toDataURL());
          };
          var requested = false;
          this.onChange = function () {
              arr.set(_this.screen);
              // paint rect
              pxsim.runtime.queueDisplayUpdate();
              if (!requested) {
                  requested = true;
                  window.requestAnimationFrame(flush);
              }
          };
      };
      ScreenState.prototype.setupScreenStatusBar = function (barHeight) {
          // TODO
      };
      ScreenState.prototype.updateScreenStatusBar = function (img) {
          // TODO
      };
      return ScreenState;
  }());
  pxsim.ScreenState = ScreenState;
  function getScreenState() {
      return pxsim.board().screenState;
  }
  pxsim.getScreenState = getScreenState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var SCREEN_PART_WIDTH = 158.439;
      var SCREEN_PART_HEIGHT = 146.803;
      var SCREEN_PART = "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" id=\"svg8\" width=\"158.439\" height=\"146.803\" viewBox=\"0 0 158.439 146.803\">\n  <g id=\"layer1\" transform=\"translate(-18.95 -27.866)\">\n    <path id=\"rect4487\" fill=\"#00f\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.306\" d=\"M19.603 28.519h157.133v145.497H19.603z\"/>\n    <image id=\"thescreen\" width=\"136.673\" height=\"109.33\" x=\"26.118\" y=\"61.528\" fill=\"#c8beb7\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".427\"/>\n    <path id=\"GND\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M23.177 31.031h11.864v11.864H23.177z\"/>\n    <path id=\"VCC\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M37.119 31.031h11.864v11.864H37.119z\"/>\n    <path id=\"DISPLAY_DC\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M65.004 31.031h11.864v11.864H65.004z\"/>\n    <path id=\"DISPLAY_CS\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M78.947 31.031h11.864v11.864H78.947z\"/>\n    <path id=\"DISPLAY_MOSI\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M92.889 31.031h11.864v11.864H92.889z\"/>\n    <path id=\"DISPLAY_SCK\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M106.831 31.031h11.864v11.864h-11.864z\"/>\n    <path id=\"DISPLAY_MISO\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M120.774 31.031h11.864v11.864h-11.864z\"/>\n    <text id=\"text4619\" x=\"45.309\" y=\"-27.057\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617\" x=\"45.309\" y=\"-27.057\">Gnd</tspan>\n    </text>\n    <text id=\"text4619-4\" x=\"45.51\" y=\"-41.166\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3\" x=\"45.51\" y=\"-41.166\">VCC</tspan>\n    </text>\n    <text id=\"text4619-4-9\" x=\"45.17\" y=\"-69.274\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1\" x=\"45.17\" y=\"-69.274\">D/C</tspan>\n    </text>\n    <text id=\"text4619-4-9-2\" x=\"45.225\" y=\"-83.064\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1-5\" x=\"45.225\" y=\"-83.064\">CS</tspan>\n    </text>\n    <text id=\"text4619-4-9-8\" x=\"45.364\" y=\"-97.03\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1-9\" x=\"45.364\" y=\"-97.03\">MOSI</tspan>\n    </text>\n    <text id=\"text4619-4-9-3\" x=\"45.163\" y=\"-110.996\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1-7\" x=\"45.163\" y=\"-110.996\">SCK</tspan>\n    </text>\n    <text id=\"text4619-4-9-0\" x=\"46.078\" y=\"-138.962\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1-72\" x=\"46.078\" y=\"-138.962\">BL</tspan>\n    </text>\n    <path id=\"DISPLAY_RST\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M51.062 31.031h11.864v11.864H51.062z\"/>\n    <text id=\"text4619-4-94\" x=\"44.972\" y=\"-55.132\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-6\" x=\"44.972\" y=\"-55.132\">RST</tspan>\n    </text>\n    <path id=\"DISPLAY_BL\" fill=\"#d4d4d4\" stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3.139\" d=\"M134.638 31.031h11.864v11.864h-11.864z\"/>\n    <text id=\"text4619-4-9-0-6\" x=\"45.403\" y=\"-124.163\" fill=\"#fff\" stroke-width=\".226\" font-family=\"consolas\" font-size=\"6.63\" font-weight=\"400\" letter-spacing=\"0\" style=\"line-height:1.25;-inkscape-font-specification:consolas\" transform=\"rotate(90)\" word-spacing=\"0\">\n      <tspan id=\"tspan4617-3-1-72-8\" x=\"45.403\" y=\"-124.163\">MISO</tspan>\n    </text>\n  </g>\n</svg>\n  ";
      function mkScreenPart(xy) {
          if (xy === void 0) { xy = [0, 0]; }
          var x = xy[0], y = xy[1];
          var l = x;
          var t = y;
          var w = SCREEN_PART_WIDTH;
          var h = SCREEN_PART_HEIGHT;
          var img = pxsim.svg.elt("image");
          pxsim.svg.hydrate(img, {
              class: "sim-screen", x: l, y: t, width: w, height: h,
              href: pxsim.svg.toDataUri(SCREEN_PART)
          });
          return { el: img, x: l, y: t, w: w, h: h };
      }
      visuals.mkScreenPart = mkScreenPart;
      var ScreenView = /** @class */ (function () {
          function ScreenView() {
          }
          ScreenView.prototype.init = function (bus, state, svgEl, otherParams) {
              this.bus = bus;
              this.state = state;
              this.overElement = undefined;
              this.defs = [];
              this.lastLocation = [0, 0];
              var partSvg = pxsim.svg.parseString(SCREEN_PART);
              this.canvas = partSvg.getElementById('thescreen');
              this.element = pxsim.svg.elt("g");
              this.element.appendChild(partSvg.firstElementChild);
              this.state.bindToSvgImage(this.canvas);
          };
          ScreenView.prototype.moveToCoord = function (xy) {
              var x = xy[0], y = xy[1];
              var loc = [x, y];
              this.lastLocation = loc;
              this.updateLoc();
          };
          ScreenView.prototype.updateLoc = function () {
              var _a = this.lastLocation, x = _a[0], y = _a[1];
              visuals.translateEl(this.element, [x, y]);
          };
          ScreenView.prototype.updateState = function () { };
          ScreenView.prototype.updateTheme = function () { };
          return ScreenView;
      }());
      visuals.ScreenView = ScreenView;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var AudioState = /** @class */ (function () {
      function AudioState() {
          this.outputDestination_ = 0;
          this.volume = 100;
          this.playing = false;
      }
      AudioState.prototype.startPlaying = function () {
          this.playing = true;
      };
      AudioState.prototype.stopPlaying = function () {
          this.playing = false;
      };
      AudioState.prototype.isPlaying = function () {
          return this.playing;
      };
      return AudioState;
  }());
  pxsim.AudioState = AudioState;
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var music;
  (function (music) {
      function noteFrequency(note) {
          return note;
      }
      music.noteFrequency = noteFrequency;
      function setOutput(mode) {
          var audioState = pxsim.getAudioState();
          audioState.outputDestination_ = mode;
      }
      music.setOutput = setOutput;
      function setVolume(volume) {
          var audioState = pxsim.getAudioState();
          audioState.volume = Math.max(0, 1024, volume * 4);
      }
      music.setVolume = setVolume;
      function setPitchPin(pin) {
          var audioState = pxsim.getAudioState();
          audioState.pitchPin_ = pin;
      }
      music.setPitchPin = setPitchPin;
      function setTone(buffer) {
          // TODO: implement set tone in the audio context
      }
      music.setTone = setTone;
      function enableAmp(enabled) {
          // TODO
      }
      music.enableAmp = enableAmp;
      function playTone(frequency, ms) {
          var b = pxsim.board();
          if (!b)
              return;
          var audioState = pxsim.getAudioState();
          var currentOutput = audioState.outputDestination_;
          audioState.startPlaying();
          pxsim.runtime.queueDisplayUpdate();
          pxsim.AudioContextManager.tone(frequency, 1);
          var cb = pxsim.getResume();
          if (ms <= 0)
              cb();
          else {
              pxsim.runtime.schedule(function () {
                  pxsim.AudioContextManager.stop();
                  audioState.stopPlaying();
                  pxsim.runtime.queueDisplayUpdate();
                  cb();
              }, ms);
          }
      }
      music.playTone = playTone;
      function getPitchPin() {
          var audioState = pxsim.getAudioState();
          if (!audioState.pitchPin_) {
              audioState.pitchPin_ = pxsim.board().getDefaultPitchPin();
          }
          return audioState.pitchPin_;
      }
  })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function getAudioState() {
      return pxsim.board().audioState;
  }
  pxsim.getAudioState = getAudioState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var music;
  (function (music) {
      function playInstructions(b) {
          return pxsim.AudioContextManager.playInstructionsAsync(b);
      }
      music.playInstructions = playInstructions;
      function queuePlayInstructions(when, b) {
          pxsim.AudioContextManager.queuePlayInstructions(when, b);
      }
      music.queuePlayInstructions = queuePlayInstructions;
      function stopPlaying() {
          pxsim.AudioContextManager.muteAllChannels();
      }
      music.stopPlaying = stopPlaying;
      function forceOutput(mode) { }
      music.forceOutput = forceOutput;
  })(music = pxsim.music || (pxsim.music = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var settings;
  (function (settings) {
      var currSize = 0;
      var MAX_SIZE = 16 * 1024;
      function encodeKey(key) {
          return "S/" + key;
      }
      function allKeys() {
          var pref = encodeKey("");
          var st = pxsim.board().storedState;
          return Object.keys(st).filter(function (k) { return k.slice(0, pref.length) == pref; });
      }
      function userKeys() {
          return allKeys().filter(function (s) { return s[2] != "#"; });
      }
      function computeSize() {
          var sz = 0;
          var storage = pxsim.board().storedState;
          for (var _i = 0, _a = allKeys(); _i < _a.length; _i++) {
              var k = _a[_i];
              sz += k.length + storage[k].length;
          }
          currSize = sz;
      }
      function _set(key, buf) {
          key = encodeKey(key);
          var storage = pxsim.board().storedState;
          var prev = storage[key];
          var val = btoa(pxsim.U.uint8ArrayToString(buf.data));
          var newSize = prev == null
              ? currSize + key.length + val.length
              : currSize + val.length - prev.length;
          if (newSize > MAX_SIZE)
              return -1;
          pxsim.board().setStoredState(key, val);
          currSize = newSize;
          return 0;
      }
      settings._set = _set;
      function _remove(key) {
          key = encodeKey(key);
          var storage = pxsim.board().storedState;
          if (storage[key] == null)
              return -1;
          currSize -= key.length + storage[key].length;
          pxsim.board().setStoredState(key, null);
          return 0;
      }
      settings._remove = _remove;
      function _exists(key) {
          return _get(key) != undefined;
      }
      settings._exists = _exists;
      function _get(key) {
          key = encodeKey(key);
          var storage = pxsim.board().storedState;
          var val = storage[key];
          if (val == null)
              return undefined;
          return new pxsim.RefBuffer(pxsim.U.stringToUint8Array(atob(val)));
      }
      settings._get = _get;
      function _userClean() {
          for (var _i = 0, _a = userKeys(); _i < _a.length; _i++) {
              var k = _a[_i];
              pxsim.board().setStoredState(k, null);
          }
          computeSize();
          // if system keys take more than 25% of space, delete everything
          if (currSize > MAX_SIZE / 4) {
              for (var _b = 0, _c = allKeys(); _b < _c.length; _b++) {
                  var k = _c[_b];
                  pxsim.board().setStoredState(k, null);
              }
              computeSize();
          }
      }
      settings._userClean = _userClean;
      function _list(prefix) {
          var r = new pxsim.RefCollection();
          var emptyPref = encodeKey("");
          for (var _i = 0, _a = prefix[0] == "#" ? allKeys() : userKeys(); _i < _a.length; _i++) {
              var k = _a[_i];
              var n = k.slice(emptyPref.length);
              if (n.slice(0, prefix.length) != prefix)
                  continue;
              r.push(n);
          }
          return r;
      }
      settings._list = _list;
  })(settings = pxsim.settings || (pxsim.settings = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var input;
  (function (input) {
      function onGesture(gesture, handler) {
          var b = pxsim.accelerometer();
          b.accelerometer.activate();
          if (gesture == DAL.ACCELEROMETER_EVT_SHAKE && !b.useShake) {
              b.useShake = true;
              pxsim.runtime.queueDisplayUpdate();
          }
          pxsim.pxtcore.registerWithDal(DAL.DEVICE_ID_GESTURE, gesture, handler);
      }
      input.onGesture = onGesture;
      function rotation(kind) {
          var b = pxsim.accelerometer();
          var acc = b.accelerometer;
          acc.activate();
          var x = acc.getX(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          var y = acc.getY(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          var z = acc.getZ(pxsim.MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          var roll = Math.atan2(y, z);
          var pitch = Math.atan(-x / (y * Math.sin(roll) + z * Math.cos(roll)));
          var r = 0;
          switch (kind) {
              case 0:
                  r = pitch;
                  break;
              case 1:
                  r = roll;
                  break;
          }
          return Math.floor(r / Math.PI * 180);
      }
      input.rotation = rotation;
      function setAccelerometerRange(range) {
          var b = pxsim.accelerometer();
          b.accelerometer.setSampleRange(range);
      }
      input.setAccelerometerRange = setAccelerometerRange;
      function acceleration(dimension) {
          var b = pxsim.accelerometer();
          var acc = b.accelerometer;
          acc.activate();
          switch (dimension) {
              case 0: return acc.getX();
              case 1: return acc.getY();
              case 2: return acc.getZ();
              default: return Math.floor(Math.sqrt(acc.instantaneousAccelerationSquared()));
          }
      }
      input.acceleration = acceleration;
  })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  /**
    * Co-ordinate systems that can be used.
    * RAW: Unaltered data. Data will be returned directly from the accelerometer.
    *
    * SIMPLE_CARTESIAN: Data will be returned based on an easy to understand alignment, consistent with the cartesian system taught in schools.
    * When held upright, facing the user:
    *
    *                            /
    *    +--------------------+ z
    *    |                    |
    *    |       .....        |
    *    | *     .....      * |
    * ^  |       .....        |
    * |  |                    |
    * y  +--------------------+  x-->
    *
    *
    * NORTH_EAST_DOWN: Data will be returned based on the industry convention of the North East Down (NED) system.
    * When held upright, facing the user:
    *
    *                            z
    *    +--------------------+ /
    *    |                    |
    *    |       .....        |
    *    | *     .....      * |
    * ^  |       .....        |
    * |  |                    |
    * x  +--------------------+  y-->
    *
    */
  var MicroBitCoordinateSystem;
  (function (MicroBitCoordinateSystem) {
      MicroBitCoordinateSystem[MicroBitCoordinateSystem["RAW"] = 0] = "RAW";
      MicroBitCoordinateSystem[MicroBitCoordinateSystem["SIMPLE_CARTESIAN"] = 1] = "SIMPLE_CARTESIAN";
      MicroBitCoordinateSystem[MicroBitCoordinateSystem["NORTH_EAST_DOWN"] = 2] = "NORTH_EAST_DOWN";
  })(MicroBitCoordinateSystem = pxsim.MicroBitCoordinateSystem || (pxsim.MicroBitCoordinateSystem = {}));
  var Accelerometer = /** @class */ (function () {
      function Accelerometer(runtime) {
          this.runtime = runtime;
          this.sigma = 0; // the number of ticks that the instantaneous gesture has been stable.
          this.lastGesture = 0; // the last, stable gesture recorded.
          this.currentGesture = 0; // the instantaneous, unfiltered gesture detected.
          this.sample = { x: 0, y: 0, z: -1023 };
          this.shake = { x: false, y: false, z: false, count: 0, shaken: 0, timer: 0 }; // State information needed to detect shake events.
          this.isActive = false;
          this.sampleRange = 2;
          this.id = DAL.DEVICE_ID_ACCELEROMETER;
      }
      Accelerometer.prototype.setSampleRange = function (range) {
          this.activate();
          this.sampleRange = Math.max(1, Math.min(8, range));
      };
      Accelerometer.prototype.activate = function () {
          if (!this.isActive) {
              this.isActive = true;
              this.runtime.queueDisplayUpdate();
          }
      };
      /**
       * Reads the acceleration data from the accelerometer, and stores it in our buffer.
       * This is called by the tick() member function, if the interrupt is set!
       */
      Accelerometer.prototype.update = function (x, y, z) {
          // read MSB values...
          this.sample.x = Math.floor(x);
          this.sample.y = Math.floor(y);
          this.sample.z = Math.floor(z);
          // Update gesture tracking
          this.updateGesture();
          // Indicate that a new sample is available
          pxsim.board().bus.queue(this.id, DAL.ACCELEROMETER_EVT_DATA_UPDATE);
      };
      Accelerometer.prototype.instantaneousAccelerationSquared = function () {
          // Use pythagoras theorem to determine the combined force acting on the device.
          return this.sample.x * this.sample.x + this.sample.y * this.sample.y + this.sample.z * this.sample.z;
      };
      /**
       * Service function. Determines the best guess posture of the device based on instantaneous data.
       * This makes no use of historic data (except for shake), and forms this input to the filter implemented in updateGesture().
       *
       * @return A best guess of the current posture of the device, based on instantaneous data.
       */
      Accelerometer.prototype.instantaneousPosture = function () {
          var force = this.instantaneousAccelerationSquared();
          var shakeDetected = false;
          // Test for shake events.
          // We detect a shake by measuring zero crossings in each axis. In other words, if we see a strong acceleration to the left followed by
          // a string acceleration to the right, then we can infer a shake. Similarly, we can do this for each acxis (left/right, up/down, in/out).
          //
          // If we see enough zero crossings in succession (MICROBIT_ACCELEROMETER_SHAKE_COUNT_THRESHOLD), then we decide that the device
          // has been shaken.
          if ((this.getX() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.x) || (this.getX() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.x)) {
              shakeDetected = true;
              this.shake.x = !this.shake.x;
          }
          if ((this.getY() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.y) || (this.getY() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.y)) {
              shakeDetected = true;
              this.shake.y = !this.shake.y;
          }
          if ((this.getZ() < -DAL.ACCELEROMETER_SHAKE_TOLERANCE && this.shake.z) || (this.getZ() > DAL.ACCELEROMETER_SHAKE_TOLERANCE && !this.shake.z)) {
              shakeDetected = true;
              this.shake.z = !this.shake.z;
          }
          if (shakeDetected && this.shake.count < DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD && ++this.shake.count == DAL.ACCELEROMETER_SHAKE_COUNT_THRESHOLD)
              this.shake.shaken = 1;
          if (++this.shake.timer >= DAL.ACCELEROMETER_SHAKE_DAMPING) {
              this.shake.timer = 0;
              if (this.shake.count > 0) {
                  if (--this.shake.count == 0)
                      this.shake.shaken = 0;
              }
          }
          if (this.shake.shaken)
              return DAL.ACCELEROMETER_EVT_SHAKE;
          var sq = function (n) { return n * n; };
          if (force < sq(DAL.ACCELEROMETER_FREEFALL_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_FREEFALL;
          if (force > sq(DAL.ACCELEROMETER_3G_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_3G;
          if (force > sq(DAL.ACCELEROMETER_6G_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_6G;
          if (force > sq(DAL.ACCELEROMETER_8G_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_8G;
          // Determine our posture.
          if (this.getX() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_TILT_LEFT;
          if (this.getX() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_TILT_RIGHT;
          if (this.getY() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_TILT_UP;
          if (this.getY() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_TILT_DOWN;
          if (this.getZ() < (-1000 + DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_FACE_UP;
          if (this.getZ() > (1000 - DAL.ACCELEROMETER_TILT_TOLERANCE))
              return DAL.ACCELEROMETER_EVT_FACE_DOWN;
          return 0;
      };
      Accelerometer.prototype.updateGesture = function () {
          // Determine what it looks like we're doing based on the latest sample...
          var g = this.instantaneousPosture();
          // Perform some low pass filtering to reduce jitter from any detected effects
          if (g == this.currentGesture) {
              if (this.sigma < DAL.ACCELEROMETER_GESTURE_DAMPING)
                  this.sigma++;
          }
          else {
              this.currentGesture = g;
              this.sigma = 0;
          }
          // If we've reached threshold, update our record and raise the relevant event...
          if (this.currentGesture != this.lastGesture && this.sigma >= DAL.ACCELEROMETER_GESTURE_DAMPING) {
              this.lastGesture = this.currentGesture;
              pxsim.board().bus.queue(DAL.DEVICE_ID_GESTURE, this.lastGesture);
          }
      };
      /**
        * Reads the X axis value of the latest update from the accelerometer.
        * @param system The coordinate system to use. By default, a simple cartesian system is provided.
        * @return The force measured in the X axis, in milli-g.
        *
        * Example:
        * @code
        * uBit.accelerometer.getX();
        * uBit.accelerometer.getX(RAW);
        * @endcode
        */
      Accelerometer.prototype.getX = function (system) {
          if (system === void 0) { system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN; }
          this.activate();
          var val;
          switch (system) {
              case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                  val = -this.sample.x;
              case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                  val = this.sample.y;
              //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN.RAW:
              default:
                  val = this.sample.x;
          }
          return pxsim.board().invertAccelerometerXAxis ? val * -1 : val;
      };
      /**
        * Reads the Y axis value of the latest update from the accelerometer.
        * @param system The coordinate system to use. By default, a simple cartesian system is provided.
        * @return The force measured in the Y axis, in milli-g.
        *
        * Example:
        * @code
        * uBit.accelerometer.getY();
        * uBit.accelerometer.getY(RAW);
        * @endcode
        */
      Accelerometer.prototype.getY = function (system) {
          if (system === void 0) { system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN; }
          this.activate();
          var val;
          switch (system) {
              case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
                  val = -this.sample.y;
              case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                  val = -this.sample.x;
              //case RAW:
              default:
                  val = this.sample.y;
          }
          return pxsim.board().invertAccelerometerYAxis ? val * -1 : val;
      };
      /**
        * Reads the Z axis value of the latest update from the accelerometer.
        * @param system The coordinate system to use. By default, a simple cartesian system is provided.
        * @return The force measured in the Z axis, in milli-g.
        *
        * Example:
        * @code
        * uBit.accelerometer.getZ();
        * uBit.accelerometer.getZ(RAW);
        * @endcode
        */
      Accelerometer.prototype.getZ = function (system) {
          if (system === void 0) { system = MicroBitCoordinateSystem.SIMPLE_CARTESIAN; }
          this.activate();
          var val;
          switch (system) {
              case MicroBitCoordinateSystem.NORTH_EAST_DOWN:
                  val = -this.sample.z;
              //case MicroBitCoordinateSystem.SIMPLE_CARTESIAN:
              //case MicroBitCoordinateSystem.RAW:
              default:
                  val = this.sample.z;
          }
          return pxsim.board().invertAccelerometerZAxis ? val * -1 : val;
      };
      /**
        * Provides a rotation compensated pitch of the device, based on the latest update from the accelerometer.
        * @return The pitch of the device, in degrees.
        *
        * Example:
        * @code
        * uBit.accelerometer.getPitch();
        * @endcode
        */
      Accelerometer.prototype.getPitch = function () {
          this.activate();
          return Math.floor((360 * this.getPitchRadians()) / (2 * Math.PI));
      };
      Accelerometer.prototype.getPitchRadians = function () {
          this.recalculatePitchRoll();
          return this.pitch;
      };
      /**
        * Provides a rotation compensated roll of the device, based on the latest update from the accelerometer.
        * @return The roll of the device, in degrees.
        *
        * Example:
        * @code
        * uBit.accelerometer.getRoll();
        * @endcode
        */
      Accelerometer.prototype.getRoll = function () {
          this.activate();
          return Math.floor((360 * this.getRollRadians()) / (2 * Math.PI));
      };
      Accelerometer.prototype.getRollRadians = function () {
          this.recalculatePitchRoll();
          return this.roll;
      };
      /**
       * Recalculate roll and pitch values for the current sample.
       * We only do this at most once per sample, as the necessary trigonemteric functions are rather
       * heavyweight for a CPU without a floating point unit...
       */
      Accelerometer.prototype.recalculatePitchRoll = function () {
          var x = this.getX(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          var y = this.getY(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          var z = this.getZ(MicroBitCoordinateSystem.NORTH_EAST_DOWN);
          this.roll = Math.atan2(y, z);
          this.pitch = Math.atan(-x / (y * Math.sin(this.roll) + z * Math.cos(this.roll)));
      };
      return Accelerometer;
  }());
  pxsim.Accelerometer = Accelerometer;
  var AccelerometerState = /** @class */ (function () {
      function AccelerometerState(runtime) {
          this.useShake = false;
          this.tiltDecayer = 0;
          this.accelerometer = new Accelerometer(runtime);
      }
      AccelerometerState.prototype.attachEvents = function (element) {
          var _this = this;
          this.element = element;
          this.tiltDecayer = 0;
          this.element.addEventListener(pxsim.pointerEvents.move, function (ev) {
              if (!_this.accelerometer.isActive)
                  return;
              if (_this.tiltDecayer) {
                  clearInterval(_this.tiltDecayer);
                  _this.tiltDecayer = 0;
              }
              var bbox = element.getBoundingClientRect();
              var ax = (ev.clientX - bbox.width / 2) / (bbox.width / 3);
              var ay = (ev.clientY - bbox.height / 2) / (bbox.height / 3);
              var x = -Math.max(-1023, Math.min(1023, Math.floor(ax * 1023)));
              var y = Math.max(-1023, Math.min(1023, Math.floor(ay * 1023)));
              var z2 = 1023 * 1023 - x * x - y * y;
              var z = Math.floor((z2 > 0 ? -1 : 1) * Math.sqrt(Math.abs(z2)));
              _this.accelerometer.update(-x, y, z);
              _this.updateTilt();
          }, false);
          this.element.addEventListener(pxsim.pointerEvents.leave, function (ev) {
              if (!_this.accelerometer.isActive)
                  return;
              if (!_this.tiltDecayer) {
                  _this.tiltDecayer = setInterval(function () {
                      var accx = _this.accelerometer.getX();
                      accx = Math.floor(Math.abs(accx) * 0.85) * (accx > 0 ? 1 : -1);
                      var accy = _this.accelerometer.getY();
                      accy = Math.floor(Math.abs(accy) * 0.85) * (accy > 0 ? 1 : -1);
                      var accz = -Math.sqrt(Math.max(0, 1023 * 1023 - accx * accx - accy * accy));
                      if (Math.abs(accx) <= 24 && Math.abs(accy) <= 24) {
                          clearInterval(_this.tiltDecayer);
                          _this.tiltDecayer = 0;
                          accx = 0;
                          accy = 0;
                          accz = -1023;
                      }
                      _this.accelerometer.update(accx, accy, accz);
                      _this.updateTilt();
                  }, 50);
              }
          }, false);
      };
      AccelerometerState.prototype.updateTilt = function () {
          if (!this.accelerometer.isActive || !this.element)
              return;
          var x = this.accelerometer.getX();
          var y = this.accelerometer.getY();
          var af = 8 / 1023;
          var s = 1 - Math.min(0.1, Math.pow(Math.max(Math.abs(x), Math.abs(y)) / 1023, 2) / 35);
          this.element.style.transform = "perspective(30em) rotateX(" + y * af + "deg) rotateY(" + x * af + "deg) scale(" + s + ", " + s + ")";
          this.element.style.perspectiveOrigin = "50% 50% 50%";
          this.element.style.perspective = "30em";
      };
      return AccelerometerState;
  }());
  pxsim.AccelerometerState = AccelerometerState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function accelerometer() {
      return pxsim.board().accelerometerState;
  }
  pxsim.accelerometer = accelerometer;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var input;
  (function (input) {
      function lightLevel() {
          var b = pxsim.lightSensorState();
          b.setUsed();
          return b.getLevel();
      }
      input.lightLevel = lightLevel;
      function onLightConditionChanged(condition, body) {
          var b = pxsim.lightSensorState();
          b.setUsed();
          pxsim.pxtcore.registerWithDal(b.id, condition, body);
      }
      input.onLightConditionChanged = onLightConditionChanged;
      function setLightThreshold(condition, value) {
          var b = pxsim.lightSensorState();
          b.setUsed();
          switch (condition) {
              case DAL.SENSOR_THRESHOLD_LOW:
                  b.setLowThreshold(value);
                  break;
              case DAL.SENSOR_THRESHOLD_HIGH:
                  b.setHighThreshold(value);
                  break;
          }
      }
      input.setLightThreshold = setLightThreshold;
  })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function lightSensorState() {
      return pxsim.board().lightSensorState;
  }
  pxsim.lightSensorState = lightSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function thermometerState() {
      return pxsim.board().thermometerState;
  }
  pxsim.thermometerState = thermometerState;
  function setThermometerUnit(unit) {
      pxsim.board().thermometerUnitState = unit;
  }
  pxsim.setThermometerUnit = setThermometerUnit;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var TemperatureUnit;
  (function (TemperatureUnit) {
      TemperatureUnit[TemperatureUnit["Celsius"] = 0] = "Celsius";
      TemperatureUnit[TemperatureUnit["Fahrenheit"] = 1] = "Fahrenheit";
  })(TemperatureUnit = pxsim.TemperatureUnit || (pxsim.TemperatureUnit = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var input;
  (function (input) {
      function temperature(unit) {
          var b = pxsim.thermometerState();
          b.setUsed();
          pxsim.setThermometerUnit(unit);
          var deg = b.getLevel();
          return unit == pxsim.TemperatureUnit.Celsius ? deg
              : ((deg * 18) / 10 + 32) >> 0;
      }
      input.temperature = temperature;
      function onTemperatureConditionChanged(condition, temperature, unit, body) {
          var b = pxsim.thermometerState();
          b.setUsed();
          pxsim.setThermometerUnit(unit);
          var t = unit == pxsim.TemperatureUnit.Celsius
              ? temperature
              : (((temperature - 32) * 10) / 18 >> 0);
          if (condition === DAL.LEVEL_THRESHOLD_HIGH) {
              b.setHighThreshold(t);
          }
          else {
              b.setLowThreshold(t);
          }
          pxsim.pxtcore.registerWithDal(b.id, condition, body);
      }
      input.onTemperatureConditionChanged = onTemperatureConditionChanged;
  })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var radio;
  (function (radio) {
      function raiseEvent(id, eventid) {
          var state = pxsim.getRadioState();
          state.raiseEvent(id, eventid);
      }
      radio.raiseEvent = raiseEvent;
      function setGroup(id) {
          var state = pxsim.getRadioState();
          state.setGroup(id);
      }
      radio.setGroup = setGroup;
      function setTransmitPower(power) {
          var state = pxsim.getRadioState();
          state.setTransmitPower(power);
      }
      radio.setTransmitPower = setTransmitPower;
      function setFrequencyBand(band) {
          var state = pxsim.getRadioState();
          state.setFrequencyBand(band);
      }
      radio.setFrequencyBand = setFrequencyBand;
      function sendRawPacket(buf) {
          var cb = pxsim.getResume();
          var state = pxsim.getRadioState();
          state.datagram.send({
              type: 0,
              groupId: state.groupId,
              bufferData: buf.data
          });
          setTimeout(cb, 1);
      }
      radio.sendRawPacket = sendRawPacket;
      function readRawPacket() {
          var state = pxsim.getRadioState();
          var packet = state.datagram.recv();
          var buf = packet.payload.bufferData;
          var n = buf.length;
          if (!n)
              return undefined;
          var rbuf = pxsim.BufferMethods.createBuffer(n + 4);
          for (var i = 0; i < buf.length; ++i)
              rbuf.data[i] = buf[i];
          // append RSSI
          pxsim.BufferMethods.setNumber(rbuf, pxsim.BufferMethods.NumberFormat.Int32LE, n, packet.rssi);
          return rbuf;
      }
      radio.readRawPacket = readRawPacket;
      function onDataReceived(handler) {
          var state = pxsim.getRadioState();
          state.datagram.onReceived(handler);
      }
      radio.onDataReceived = onDataReceived;
  })(radio = pxsim.radio || (pxsim.radio = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function getRadioState() {
      return pxsim.board().radioState;
  }
  pxsim.getRadioState = getRadioState;
  var RadioDatagram = /** @class */ (function () {
      function RadioDatagram(runtime, dal) {
          this.runtime = runtime;
          this.dal = dal;
          this.datagram = [];
          this.lastReceived = RadioDatagram.defaultPacket();
          this._rssi = undefined; // not set yet
      }
      Object.defineProperty(RadioDatagram.prototype, "rssi", {
          get: function () {
              return this._rssi;
          },
          set: function (value) {
              this._rssi = value | 0;
          },
          enumerable: false,
          configurable: true
      });
      RadioDatagram.prototype.queue = function (packet) {
          if (this.datagram.length < 4)
              this.datagram.push(packet);
          pxsim.runtime.board.bus.queue(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM);
      };
      RadioDatagram.prototype.send = function (payload) {
          var state = getRadioState();
          pxsim.Runtime.postMessage({
              type: "radiopacket",
              broadcast: true,
              rssi: this._rssi || -75,
              serial: state.transmitSerialNumber ? pxsim.control.deviceSerialNumber() : 0,
              time: new Date().getTime(),
              payload: payload
          });
      };
      RadioDatagram.prototype.recv = function () {
          var r = this.datagram.shift();
          if (!r)
              r = RadioDatagram.defaultPacket();
          return this.lastReceived = r;
      };
      RadioDatagram.prototype.onReceived = function (handler) {
          pxsim.pxtcore.registerWithDal(this.dal.ID_RADIO, this.dal.RADIO_EVT_DATAGRAM, handler);
          this.recv();
      };
      RadioDatagram.defaultPacket = function () {
          return {
              rssi: -1,
              serial: 0,
              time: 0,
              payload: { type: -1, groupId: 0, bufferData: new Uint8Array(0) }
          };
      };
      return RadioDatagram;
  }());
  pxsim.RadioDatagram = RadioDatagram;
  var RadioState = /** @class */ (function () {
      function RadioState(runtime, board, dal) {
          this.runtime = runtime;
          this.board = board;
          this.power = 0;
          this.transmitSerialNumber = false;
          this.datagram = new RadioDatagram(runtime, dal);
          this.power = 6; // default value
          this.groupId = 0;
          this.band = 7; // https://github.com/lancaster-university/microbit-dal/blob/master/inc/core/MicroBitConfig.h#L320
          this.board.addMessageListener(this.handleMessage.bind(this));
      }
      RadioState.prototype.handleMessage = function (msg) {
          if (msg.type == "radiopacket") {
              var packet = msg;
              this.receivePacket(packet);
          }
      };
      RadioState.prototype.setGroup = function (id) {
          this.groupId = id & 0xff; // byte only
      };
      RadioState.prototype.setTransmitPower = function (power) {
          power = power | 0;
          this.power = Math.max(0, Math.min(7, power));
      };
      RadioState.prototype.setTransmitSerialNumber = function (sn) {
          this.transmitSerialNumber = !!sn;
      };
      RadioState.prototype.setFrequencyBand = function (band) {
          band = band | 0;
          if (band < 0 || band > 83)
              return;
          this.band = band;
      };
      RadioState.prototype.raiseEvent = function (id, eventid) {
          pxsim.Runtime.postMessage({
              type: "eventbus",
              broadcast: true,
              id: id,
              eventid: eventid,
              power: this.power,
              group: this.groupId
          });
      };
      RadioState.prototype.receivePacket = function (packet) {
          if (this.groupId == packet.payload.groupId)
              this.datagram.queue(packet);
      };
      return RadioState;
  }());
  pxsim.RadioState = RadioState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var input;
  (function (input) {
      function soundLevel() {
          var b = pxsim.microphoneState();
          if (!b)
              return 0;
          b.setUsed();
          return b.getLevel();
      }
      input.soundLevel = soundLevel;
      function onLoudSound(body) {
          var b = pxsim.microphoneState();
          if (!b)
              return;
          b.setUsed();
          pxsim.pxtcore.registerWithDal(b.id, DAL.LEVEL_THRESHOLD_HIGH, body);
      }
      input.onLoudSound = onLoudSound;
      function setLoudSoundThreshold(value) {
          var b = pxsim.microphoneState();
          if (!b)
              return;
          b.setUsed();
          b.setHighThreshold(value);
      }
      input.setLoudSoundThreshold = setLoudSoundThreshold;
  })(input = pxsim.input || (pxsim.input = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  function microphoneState() {
      return pxsim.board().microphoneState;
  }
  pxsim.microphoneState = microphoneState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var keyboard;
  (function (keyboard) {
      var events = [
          "press",
          "up",
          "down"
      ];
      function __flush() {
          console.log("kb: flush");
      }
      keyboard.__flush = __flush;
      function __type(s) {
          console.log("kb: type " + s);
      }
      keyboard.__type = __type;
      function __key(c, event) {
          console.log("kb: key " + c + " " + events[event]);
      }
      keyboard.__key = __key;
      function __mediaKey(key, event) {
          console.log("kb: media " + key + " " + events[event]);
      }
      keyboard.__mediaKey = __mediaKey;
      function __functionKey(key, event) {
          console.log("kb: function " + key + " " + events[event]);
      }
      keyboard.__functionKey = __functionKey;
      function __modifierKey(key, event) {
          console.log("kb: modifier " + key + " " + events[event]);
      }
      keyboard.__modifierKey = __modifierKey;
  })(keyboard = pxsim.keyboard || (pxsim.keyboard = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var mouse;
  (function (mouse) {
      function setButton(button, down) {
      }
      mouse.setButton = setButton;
      function move(x, y) {
      }
      mouse.move = move;
      function turnWheel(w) {
      }
      mouse.turnWheel = turnWheel;
  })(mouse = pxsim.mouse || (pxsim.mouse = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var pxtcore;
  (function (pxtcore) {
      function getPin(id) {
          var b = pxsim.board();
          if (b && b.edgeConnectorState)
              return b.edgeConnectorState.getPin(id);
          return undefined;
      }
      pxtcore.getPin = getPin;
      function lookupPinCfg(key) {
          return getPinCfg(key);
      }
      pxtcore.lookupPinCfg = lookupPinCfg;
      function getPinCfg(key) {
          return getPin(pxtcore.getConfig(key, -1));
      }
      pxtcore.getPinCfg = getPinCfg;
  })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var pxtcore;
  (function (pxtcore) {
      // TODO: add in support for mode, as in CODAL
      function registerWithDal(id, evid, handler, mode) {
          if (mode === void 0) { mode = 0; }
          pxsim.board().bus.listen(id, evid, handler);
      }
      pxtcore.registerWithDal = registerWithDal;
      function deepSleep() {
          // TODO?
          console.log("deep sleep requested");
      }
      pxtcore.deepSleep = deepSleep;
  })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var BufferMethods;
  (function (BufferMethods) {
      function fnv1(data) {
          var h = 0x811c9dc5;
          for (var i = 0; i < data.length; ++i) {
              h = Math.imul(h, 0x1000193) ^ data[i];
          }
          return h;
      }
      function hash(buf, bits) {
          bits |= 0;
          if (bits < 1)
              return 0;
          var h = fnv1(buf.data);
          if (bits >= 32)
              return h >>> 0;
          else
              return ((h ^ (h >>> bits)) & ((1 << bits) - 1)) >>> 0;
      }
      BufferMethods.hash = hash;
  })(BufferMethods = pxsim.BufferMethods || (pxsim.BufferMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var control;
  (function (control) {
      control.runInParallel = pxsim.thread.runInBackground;
      control.delay = pxsim.thread.pause;
      function reset() {
          pxsim.Runtime.postMessage({
              type: "simulator",
              command: "restart",
              controlReset: true
          });
          var cb = pxsim.getResume();
      }
      control.reset = reset;
      function waitMicros(micros) {
          pxsim.thread.pause(micros / 1000); // it prempts not much we can do here.
      }
      control.waitMicros = waitMicros;
      function deviceName() {
          var b = pxsim.board();
          return b && b.id
              ? b.id.slice(0, 4)
              : "abcd";
      }
      control.deviceName = deviceName;
      function _ramSize() {
          return 32 * 1024 * 1024;
      }
      control._ramSize = _ramSize;
      function deviceSerialNumber() {
          var b = pxsim.board();
          if (!b)
              return 42;
          var n = 0;
          if (b.id) {
              n = parseInt(b.id.slice(1));
              if (isNaN(n)) {
                  n = 0;
                  for (var i = 0; i < b.id.length; ++i) {
                      n = ((n << 5) - n) + b.id.charCodeAt(i);
                      n |= 0;
                  }
                  n = Math.abs(n);
              }
          }
          if (!n)
              n = 42;
          return n;
      }
      control.deviceSerialNumber = deviceSerialNumber;
      function deviceLongSerialNumber() {
          var b = control.createBuffer(8);
          pxsim.BufferMethods.setNumber(b, pxsim.BufferMethods.NumberFormat.UInt32LE, 0, deviceSerialNumber());
          return b;
      }
      control.deviceLongSerialNumber = deviceLongSerialNumber;
      function deviceDalVersion() {
          return "sim";
      }
      control.deviceDalVersion = deviceDalVersion;
      function internalOnEvent(id, evid, handler) {
          pxsim.pxtcore.registerWithDal(id, evid, handler);
      }
      control.internalOnEvent = internalOnEvent;
      function waitForEvent(id, evid) {
          var cb = pxsim.getResume();
          pxsim.board().bus.wait(id, evid, cb);
      }
      control.waitForEvent = waitForEvent;
      function allocateNotifyEvent() {
          var b = pxsim.board();
          return b.bus.nextNotifyEvent++;
      }
      control.allocateNotifyEvent = allocateNotifyEvent;
      function raiseEvent(id, evid, mode) {
          // TODO mode?
          pxsim.board().bus.queue(id, evid);
      }
      control.raiseEvent = raiseEvent;
      function millis() {
          return pxsim.runtime.runningTime();
      }
      control.millis = millis;
      function micros() {
          return pxsim.runtime.runningTimeUs() & 0x3fffffff;
      }
      control.micros = micros;
      function delayMicroseconds(us) {
          control.delay(us / 0.001);
      }
      control.delayMicroseconds = delayMicroseconds;
      function createBuffer(size) {
          return pxsim.BufferMethods.createBuffer(size);
      }
      control.createBuffer = createBuffer;
      function dmesg(msg) {
          console.log("DMESG: " + msg);
      }
      control.dmesg = dmesg;
      function setDebugFlags(flags) {
          console.log("debug flags: " + flags);
      }
      control.setDebugFlags = setDebugFlags;
      function heapSnapshot() {
          console.log(pxsim.runtime.traceObjects());
      }
      control.heapSnapshot = heapSnapshot;
      function toStr(v) {
          if (v instanceof pxsim.RefRecord) {
              return v.vtable.name + "@" + v.id;
          }
          if (v instanceof pxsim.RefCollection) {
              var r = "[";
              for (var _i = 0, _a = v.toArray(); _i < _a.length; _i++) {
                  var e = _a[_i];
                  if (r.length > 200) {
                      r += "...";
                      break;
                  }
                  r += toStr(e) + ", ";
              }
              r += "]";
              return r;
          }
          if (typeof v == "function") {
              return (v + "").slice(0, 60) + "...";
          }
          return v + "";
      }
      function dmesgPtr(msg, ptr) {
          console.log("DMESG: " + msg + " " + toStr(ptr));
      }
      control.dmesgPtr = dmesgPtr;
      function dmesgValue(ptr) {
          console.log("DMESG: " + toStr(ptr));
      }
      control.dmesgValue = dmesgValue;
      function gc() { }
      control.gc = gc;
      function profilingEnabled() {
          return !!pxsim.runtime.perfCounters;
      }
      control.profilingEnabled = profilingEnabled;
      function __log(priority, str) {
          var prefix = "";
          switch (priority) {
              case 0:
                  prefix = "d>";
                  break;
              case 1:
                  prefix = "l>";
                  break;
              case 2:
                  prefix = "w>";
                  break;
              case 3:
                  prefix = "e>";
                  break;
          }
          console.log(prefix + str);
          pxsim.runtime.board.writeSerial(str);
      }
      control.__log = __log;
      function heapDump() {
          // TODO something better
      }
      control.heapDump = heapDump;
      function isUSBInitialized() {
          return false;
      }
      control.isUSBInitialized = isUSBInitialized;
  })(control = pxsim.control || (pxsim.control = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var pxtcore;
  (function (pxtcore) {
      // general purpose message sending mechanism
      function sendMessage(channel, message, parentOnly) {
          if (!channel)
              return;
          pxsim.Runtime.postMessage({
              type: "messagepacket",
              broadcast: !parentOnly,
              channel: channel,
              data: message && message.data
          });
      }
      pxtcore.sendMessage = sendMessage;
      function peekMessageChannel() {
          var state = pxsim.getControlMessageState();
          var msg = state && state.peek();
          return msg && msg.channel;
      }
      pxtcore.peekMessageChannel = peekMessageChannel;
      function readMessageData() {
          var state = pxsim.getControlMessageState();
          var msg = state && state.read();
          return msg && new pxsim.RefBuffer(msg.data);
      }
      pxtcore.readMessageData = readMessageData;
  })(pxtcore = pxsim.pxtcore || (pxsim.pxtcore = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  // keep in sync with ts
  pxsim.CONTROL_MESSAGE_EVT_ID = 2999;
  pxsim.CONTROL_MESSAGE_RECEIVED = 1;
  var ControlMessageState = /** @class */ (function () {
      function ControlMessageState(board) {
          var _this = this;
          this.board = board;
          this.messages = [];
          this.enabled = false;
          this.board.addMessageListener(function (msg) { return _this.messageHandler(msg); });
      }
      ControlMessageState.prototype.messageHandler = function (msg) {
          if (msg.type == "messagepacket") {
              var packet = msg;
              this.enqueue(packet);
          }
      };
      ControlMessageState.prototype.enqueue = function (message) {
          this.messages.push(message);
          this.board.bus.queue(pxsim.CONTROL_MESSAGE_EVT_ID, pxsim.CONTROL_MESSAGE_RECEIVED);
      };
      ControlMessageState.prototype.peek = function () {
          return this.messages[0];
      };
      ControlMessageState.prototype.read = function () {
          return this.messages.shift();
      };
      return ControlMessageState;
  }());
  pxsim.ControlMessageState = ControlMessageState;
  function getControlMessageState() {
      return pxsim.board().controlMessageState;
  }
  pxsim.getControlMessageState = getControlMessageState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var loops;
  (function (loops) {
      loops.pause = pxsim.thread.pause;
      loops.forever = pxsim.thread.forever;
  })(loops = pxsim.loops || (pxsim.loops = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var PinFlags;
  (function (PinFlags) {
      PinFlags[PinFlags["Unused"] = 0] = "Unused";
      PinFlags[PinFlags["Digital"] = 1] = "Digital";
      PinFlags[PinFlags["Analog"] = 2] = "Analog";
      PinFlags[PinFlags["Input"] = 4] = "Input";
      PinFlags[PinFlags["Output"] = 8] = "Output";
      PinFlags[PinFlags["Touch"] = 16] = "Touch";
  })(PinFlags = pxsim.PinFlags || (pxsim.PinFlags = {}));
  var Pin = /** @class */ (function () {
      function Pin(id) {
          this.id = id;
          this.touched = false;
          this.value = 0;
          this.period = 0;
          this.servoAngle = 0;
          this.mode = PinFlags.Unused;
          this.pitch = false;
          this.pull = 0; // PullDown
          this.eventMode = 0;
          this.used = false;
      }
      Pin.prototype.setValue = function (value) {
          // value set from the simulator
          var old = this.value;
          this.value = value;
          var b = pxsim.board();
          if (b && this.eventMode == DAL.DEVICE_PIN_EVENT_ON_EDGE && old != this.value)
              b.bus.queue(this.id, this.value > 0 ? DAL.DEVICE_PIN_EVT_RISE : DAL.DEVICE_PIN_EVT_FALL);
      };
      Pin.prototype.digitalReadPin = function () {
          this.mode = PinFlags.Digital | PinFlags.Input;
          return this.value > 100 ? 1 : 0;
      };
      Pin.prototype.digitalWritePin = function (value) {
          var b = pxsim.board();
          this.mode = PinFlags.Digital | PinFlags.Output;
          var v = this.value;
          this.value = value > 0 ? 1023 : 0;
          pxsim.runtime.queueDisplayUpdate();
      };
      Pin.prototype.setPull = function (pull) {
          this.pull = pull;
          switch (pull) {
              case 2 /*PinPullMode.PullDown*/:
                  this.value = 0;
                  break;
              case 1 /*PinPullMode.PullUp*/:
                  this.value = 1023;
                  break;
              default:
                  this.value = pxsim.Math_.randomRange(0, 1023);
                  break;
          }
      };
      Pin.prototype.analogReadPin = function () {
          this.mode = PinFlags.Analog | PinFlags.Input;
          return this.value || 0;
      };
      Pin.prototype.analogWritePin = function (value) {
          var b = pxsim.board();
          this.mode = PinFlags.Analog | PinFlags.Output;
          var v = this.value;
          this.value = Math.max(0, Math.min(1023, value));
          pxsim.runtime.queueDisplayUpdate();
      };
      Pin.prototype.analogSetPeriod = function (micros) {
          this.mode = PinFlags.Analog | PinFlags.Output;
          this.period = micros;
          pxsim.runtime.queueDisplayUpdate();
      };
      Pin.prototype.servoWritePin = function (value) {
          this.analogSetPeriod(20000);
          this.servoAngle = Math.max(0, Math.min(180, value));
          pxsim.runtime.queueDisplayUpdate();
      };
      Pin.prototype.servoSetContinuous = function (continuous) {
          this.servoContinuous = continuous;
      };
      Pin.prototype.servoSetPulse = function (pinId, micros) {
          // TODO
      };
      Pin.prototype.isTouched = function () {
          this.mode = PinFlags.Touch | PinFlags.Analog | PinFlags.Input;
          return this.touched;
      };
      Pin.prototype.onEvent = function (ev, handler) {
          var b = pxsim.board();
          switch (ev) {
              case DAL.DEVICE_PIN_EVT_PULSE_HI:
              case DAL.DEVICE_PIN_EVT_PULSE_LO:
                  this.eventMode = DAL.DEVICE_PIN_EVENT_ON_PULSE;
                  break;
              case DAL.DEVICE_PIN_EVT_RISE:
              case DAL.DEVICE_PIN_EVT_FALL:
                  this.eventMode = DAL.DEVICE_PIN_EVENT_ON_EDGE;
                  break;
              default:
                  return;
          }
          b.bus.listen(this.id, ev, handler);
      };
      return Pin;
  }());
  pxsim.Pin = Pin;
  var SerialDevice = /** @class */ (function () {
      function SerialDevice(tx, rx, id) {
          this.tx = tx;
          this.rx = rx;
          this.id = id;
          this.baudRate = 115200;
          this.setRxBufferSize(64);
          this.setTxBufferSize(64);
      }
      SerialDevice.prototype.setTxBufferSize = function (size) {
          this.txBuffer = pxsim.control.createBuffer(size);
      };
      SerialDevice.prototype.setRxBufferSize = function (size) {
          this.rxBuffer = pxsim.control.createBuffer(size);
      };
      SerialDevice.prototype.read = function () {
          return -1;
      };
      SerialDevice.prototype.readBuffer = function () {
          var buf = pxsim.control.createBuffer(0);
          return buf;
      };
      SerialDevice.prototype.writeBuffer = function (buffer) {
      };
      SerialDevice.prototype.setBaudRate = function (rate) {
          this.baudRate = rate;
      };
      SerialDevice.prototype.redirect = function (tx, rx, rate) {
          this.tx = tx;
          this.rx = rx;
          this.baudRate = rate;
      };
      SerialDevice.prototype.onEvent = function (event, handler) {
          pxsim.control.internalOnEvent(this.id, event, handler);
      };
      SerialDevice.prototype.onDelimiterReceived = function (delimiter, handler) {
          // TODO
      };
      return SerialDevice;
  }());
  pxsim.SerialDevice = SerialDevice;
  var SPI = /** @class */ (function () {
      function SPI(mosi, miso, sck) {
          this.mosi = mosi;
          this.miso = miso;
          this.sck = sck;
          this.frequency = 250000;
          this.mode = 0;
      }
      SPI.prototype.write = function (value) {
          return 0;
      };
      SPI.prototype.transfer = function (command, response) {
      };
      SPI.prototype.setFrequency = function (frequency) {
          this.frequency = frequency;
      };
      SPI.prototype.setMode = function (mode) {
          this.mode = mode;
      };
      return SPI;
  }());
  pxsim.SPI = SPI;
  var I2C = /** @class */ (function () {
      function I2C(sda, scl) {
          this.sda = sda;
          this.scl = scl;
      }
      I2C.prototype.readBuffer = function (address, size, repeat) {
          return pxsim.control.createBuffer(0);
      };
      I2C.prototype.writeBuffer = function (address, buf, repeat) {
          return 0;
      };
      return I2C;
  }());
  pxsim.I2C = I2C;
  var EdgeConnectorState = /** @class */ (function () {
      function EdgeConnectorState(props) {
          this.props = props;
          this._i2cs = [];
          this._spis = [];
          this._serials = [];
          this.pins = props.pins.map(function (id) { return id != undefined ? new Pin(id) : null; });
      }
      EdgeConnectorState.prototype.getPin = function (id) {
          return this.pins.filter(function (p) { return p && p.id == id; })[0] || null;
      };
      EdgeConnectorState.prototype.createI2C = function (sda, scl) {
          var ser = this._i2cs.filter(function (s) { return s.sda == sda && s.scl == scl; })[0];
          if (!ser)
              this._i2cs.push(ser = new I2C(sda, scl));
          return ser;
      };
      EdgeConnectorState.prototype.createSPI = function (mosi, miso, sck) {
          var ser = this._spis.filter(function (s) { return s.mosi == mosi && s.miso == miso && s.sck == sck; })[0];
          if (!ser)
              this._spis.push(ser = new SPI(mosi, miso, sck));
          return ser;
      };
      EdgeConnectorState.prototype.createSerialDevice = function (tx, rx, id) {
          var ser = this._serials.filter(function (s) { return s.tx == tx && s.rx == rx; })[0];
          if (!ser)
              this._serials.push(ser = new SerialDevice(tx, rx, id));
          return ser;
      };
      return EdgeConnectorState;
  }());
  pxsim.EdgeConnectorState = EdgeConnectorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var ThresholdState;
  (function (ThresholdState) {
      ThresholdState[ThresholdState["High"] = 0] = "High";
      ThresholdState[ThresholdState["Low"] = 1] = "Low";
      ThresholdState[ThresholdState["Normal"] = 2] = "Normal";
  })(ThresholdState || (ThresholdState = {}));
  var AnalogSensorState = /** @class */ (function () {
      function AnalogSensorState(id, min, max, lowThreshold, highThreshold) {
          if (min === void 0) { min = 0; }
          if (max === void 0) { max = 255; }
          if (lowThreshold === void 0) { lowThreshold = 64; }
          if (highThreshold === void 0) { highThreshold = 192; }
          this.id = id;
          this.min = min;
          this.max = max;
          this.lowThreshold = lowThreshold;
          this.highThreshold = highThreshold;
          this.sensorUsed = false;
          this.state = ThresholdState.Normal;
          this.level = Math.ceil((max - min) / 2);
      }
      AnalogSensorState.prototype.setUsed = function () {
          if (!this.sensorUsed) {
              this.sensorUsed = true;
              pxsim.runtime.queueDisplayUpdate();
          }
      };
      AnalogSensorState.prototype.setLevel = function (level) {
          this.level = this.clampValue(level);
          if (this.level >= this.highThreshold) {
              this.setState(ThresholdState.High);
          }
          else if (this.level <= this.lowThreshold) {
              this.setState(ThresholdState.Low);
          }
          else {
              this.setState(ThresholdState.Normal);
          }
      };
      AnalogSensorState.prototype.getLevel = function () {
          return this.level;
      };
      AnalogSensorState.prototype.setLowThreshold = function (value) {
          this.lowThreshold = this.clampValue(value);
          this.highThreshold = Math.max(this.lowThreshold + 1, this.highThreshold);
      };
      AnalogSensorState.prototype.setHighThreshold = function (value) {
          this.highThreshold = this.clampValue(value);
          this.lowThreshold = Math.min(this.highThreshold - 1, this.lowThreshold);
      };
      AnalogSensorState.prototype.clampValue = function (value) {
          if (value < this.min) {
              return this.min;
          }
          else if (value > this.max) {
              return this.max;
          }
          return value;
      };
      AnalogSensorState.prototype.setState = function (state) {
          if (this.state === state) {
              return;
          }
          this.state = state;
          switch (state) {
              case ThresholdState.High:
                  pxsim.board().bus.queue(this.id, DAL.SENSOR_THRESHOLD_HIGH);
                  break;
              case ThresholdState.Low:
                  pxsim.board().bus.queue(this.id, DAL.SENSOR_THRESHOLD_LOW);
                  break;
              case ThresholdState.Normal:
                  break;
          }
      };
      return AnalogSensorState;
  }());
  pxsim.AnalogSensorState = AnalogSensorState;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var pins;
  (function (pins) {
      var CommonPin = /** @class */ (function (_super) {
          __extends(CommonPin, _super);
          function CommonPin() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return CommonPin;
      }(pxsim.Pin));
      pins.CommonPin = CommonPin;
      var DigitalInOutPin = /** @class */ (function (_super) {
          __extends(DigitalInOutPin, _super);
          function DigitalInOutPin() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return DigitalInOutPin;
      }(CommonPin));
      pins.DigitalInOutPin = DigitalInOutPin;
      var AnalogInOutPin = /** @class */ (function (_super) {
          __extends(AnalogInOutPin, _super);
          function AnalogInOutPin() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return AnalogInOutPin;
      }(CommonPin));
      pins.AnalogInOutPin = AnalogInOutPin;
      var PwmOnlyPin = /** @class */ (function (_super) {
          __extends(PwmOnlyPin, _super);
          function PwmOnlyPin() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return PwmOnlyPin;
      }(CommonPin));
      pins.PwmOnlyPin = PwmOnlyPin;
      var PwmPin = /** @class */ (function (_super) {
          __extends(PwmPin, _super);
          function PwmPin() {
              return _super !== null && _super.apply(this, arguments) || this;
          }
          return PwmPin;
      }(CommonPin));
      pins.PwmPin = PwmPin;
      function markUsed(pin) {
          if (pin && !pin.used) {
              pin.used = true;
              pxsim.runtime.queueDisplayUpdate();
          }
      }
      pins.markUsed = markUsed;
  })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var DigitalInOutPinMethods;
  (function (DigitalInOutPinMethods) {
      function digitalRead(name) {
          pxsim.pins.markUsed(name);
          return name.digitalReadPin();
      }
      DigitalInOutPinMethods.digitalRead = digitalRead;
      /**
      * Set a pin or connector value to either 0 or 1.
      * @param value value to set on the pin, 1 eg,0
      */
      function digitalWrite(name, value) {
          pxsim.pins.markUsed(name);
          name.digitalWritePin(value);
      }
      DigitalInOutPinMethods.digitalWrite = digitalWrite;
      /**
      * Configures this pin to a digital input, and generates events where the timestamp is the duration
      * that this pin was either ``high`` or ``low``.
      */
      function onPulsed(name, high, body) {
          pxsim.pins.markUsed(name);
          onEvent(name, high ? DAL.DEVICE_PIN_EVT_PULSE_HI : DAL.DEVICE_PIN_EVT_PULSE_LO, body);
      }
      DigitalInOutPinMethods.onPulsed = onPulsed;
      function onEvent(name, ev, body) {
          pxsim.pins.markUsed(name);
          name.onEvent(ev, body);
      }
      DigitalInOutPinMethods.onEvent = onEvent;
      /**
      * Returns the duration of a pulse in microseconds
      * @param value the value of the pulse (default high)
      * @param maximum duration in micro-seconds
      */
      function pulseIn(name, high, maxDuration) {
          if (maxDuration === void 0) { maxDuration = 2000000; }
          pxsim.pins.markUsed(name);
          var pulse = high ? DAL.DEVICE_PIN_EVT_PULSE_HI : DAL.DEVICE_PIN_EVT_PULSE_LO;
          // Always return default value, can't simulate
          return 500;
      }
      DigitalInOutPinMethods.pulseIn = pulseIn;
      /**
      * Configures the pull of this pin.
      * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
      */
      function setPull(name, pull) {
          pxsim.pins.markUsed(name);
          name.setPull(pull);
      }
      DigitalInOutPinMethods.setPull = setPull;
      /**
       * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
       * @param name pin used to detect the touch
       */
      function isPressed(name) {
          pxsim.pins.markUsed(name);
          return name.isTouched();
      }
      DigitalInOutPinMethods.isPressed = isPressed;
  })(DigitalInOutPinMethods = pxsim.DigitalInOutPinMethods || (pxsim.DigitalInOutPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var AnalogInPinMethods;
  (function (AnalogInPinMethods) {
      /**
       * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
       */
      function analogRead(name) {
          pxsim.pins.markUsed(name);
          return name.analogReadPin();
      }
      AnalogInPinMethods.analogRead = analogRead;
  })(AnalogInPinMethods = pxsim.AnalogInPinMethods || (pxsim.AnalogInPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var AnalogOutPinMethods;
  (function (AnalogOutPinMethods) {
      /**
   * Set the connector value as analog. Value must be comprised between 0 and 1023.
   * @param value value to write to the pin between ``0`` and ``1023``. eg:1023,0
   */
      function analogWrite(name, value) {
          pxsim.pins.markUsed(name);
          name.analogWritePin(value);
      }
      AnalogOutPinMethods.analogWrite = analogWrite;
  })(AnalogOutPinMethods = pxsim.AnalogOutPinMethods || (pxsim.AnalogOutPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var PwmOnlyPinMethods;
  (function (PwmOnlyPinMethods) {
      function analogSetPeriod(name, micros) {
          pxsim.pins.markUsed(name);
          name.analogSetPeriod(micros);
      }
      PwmOnlyPinMethods.analogSetPeriod = analogSetPeriod;
      function servoWrite(name, value) {
          pxsim.pins.markUsed(name);
          name.servoWritePin(value);
      }
      PwmOnlyPinMethods.servoWrite = servoWrite;
      function servoSetContinuous(name, continuous) {
          pxsim.pins.markUsed(name);
          name.servoSetContinuous(continuous);
      }
      PwmOnlyPinMethods.servoSetContinuous = servoSetContinuous;
      function servoSetPulse(name, micros) {
          pxsim.pins.markUsed(name);
          name.servoSetPulse(name.id, micros);
      }
      PwmOnlyPinMethods.servoSetPulse = servoSetPulse;
  })(PwmOnlyPinMethods = pxsim.PwmOnlyPinMethods || (pxsim.PwmOnlyPinMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var pins;
  (function (pins) {
      function pinByCfg(key) {
          var pin = pxsim.pxtcore.getPinCfg(key);
          pins.markUsed(pin);
          return pin;
      }
      pins.pinByCfg = pinByCfg;
      function pulseDuration() {
          // bus last event timestamp
          return 500;
      }
      pins.pulseDuration = pulseDuration;
      function createBuffer(sz) {
          return pxsim.BufferMethods.createBuffer(sz);
      }
      pins.createBuffer = createBuffer;
      function createI2C(sda, scl) {
          var b = pxsim.board();
          pins.markUsed(sda);
          pins.markUsed(scl);
          return b && b.edgeConnectorState && b.edgeConnectorState.createI2C(sda, scl);
      }
      pins.createI2C = createI2C;
      function createSPI(mosi, miso, sck) {
          var b = pxsim.board();
          pins.markUsed(mosi);
          pins.markUsed(miso);
          pins.markUsed(sck);
          return b && b.edgeConnectorState && b.edgeConnectorState.createSPI(mosi, miso, sck);
      }
      pins.createSPI = createSPI;
  })(pins = pxsim.pins || (pxsim.pins = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var I2CMethods;
  (function (I2CMethods) {
      function readBuffer(i2c, address, size, repeat) {
          return pxsim.control.createBuffer(0);
      }
      I2CMethods.readBuffer = readBuffer;
      function writeBuffer(i2c, address, buf, repeat) {
          return 0;
      }
      I2CMethods.writeBuffer = writeBuffer;
  })(I2CMethods = pxsim.I2CMethods || (pxsim.I2CMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var SPIMethods;
  (function (SPIMethods) {
      function write(device, value) {
          return device.write(value);
      }
      SPIMethods.write = write;
      function transfer(device, command, response) {
          device.transfer(command, response);
      }
      SPIMethods.transfer = transfer;
      function setFrequency(device, frequency) {
          device.setFrequency(frequency);
      }
      SPIMethods.setFrequency = setFrequency;
      function setMode(device, mode) {
          device.setMode(mode);
      }
      SPIMethods.setMode = setMode;
  })(SPIMethods = pxsim.SPIMethods || (pxsim.SPIMethods = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var configStorage;
  (function (configStorage) {
      function setBuffer(key, value) {
          // TODO
      }
      configStorage.setBuffer = setBuffer;
      function getBuffer(key) {
          // TODO
          return undefined;
      }
      configStorage.getBuffer = getBuffer;
      function removeItem(key) {
          // TODO
      }
      configStorage.removeItem = removeItem;
      function clear() {
          // TODO
      }
      configStorage.clear = clear;
  })(configStorage = pxsim.configStorage || (pxsim.configStorage = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var SerialDeviceMethods;
  (function (SerialDeviceMethods) {
      function setTxBufferSize(device, size) {
          device.setTxBufferSize(size);
      }
      SerialDeviceMethods.setTxBufferSize = setTxBufferSize;
      function setRxBufferSize(device, size) {
          device.setRxBufferSize(size);
      }
      SerialDeviceMethods.setRxBufferSize = setRxBufferSize;
      function read(device) {
          return device.read();
      }
      SerialDeviceMethods.read = read;
      function readBuffer(device) {
          return device.readBuffer();
      }
      SerialDeviceMethods.readBuffer = readBuffer;
      function writeBuffer(device, buffer) {
          device.writeBuffer(buffer);
      }
      SerialDeviceMethods.writeBuffer = writeBuffer;
      function setBaudRate(device, rate) {
          device.setBaudRate(rate);
      }
      SerialDeviceMethods.setBaudRate = setBaudRate;
      function redirect(device, tx, rx, rate) {
          device.redirect(tx, rx, rate);
      }
      SerialDeviceMethods.redirect = redirect;
      function onEvent(device, event, handler) {
          device.onEvent(event, handler);
      }
      SerialDeviceMethods.onEvent = onEvent;
      function onDelimiterReceived(device, delimiter, handler) {
          device.onDelimiterReceived(delimiter, handler);
      }
      SerialDeviceMethods.onDelimiterReceived = onDelimiterReceived;
  })(SerialDeviceMethods = pxsim.SerialDeviceMethods || (pxsim.SerialDeviceMethods = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var serial;
  (function (serial) {
      function internalCreateSerialDevice(tx, rx, id) {
          var b = pxsim.board();
          return b && b.edgeConnectorState ? b.edgeConnectorState.createSerialDevice(tx, rx, id) : new pxsim.SerialDevice(tx, rx, id);
      }
      serial.internalCreateSerialDevice = internalCreateSerialDevice;
  })(serial = pxsim.serial || (pxsim.serial = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
  var NeoPixelMode;
  (function (NeoPixelMode) {
      NeoPixelMode[NeoPixelMode["RGB"] = 1] = "RGB";
      NeoPixelMode[NeoPixelMode["RGBW"] = 2] = "RGBW";
      NeoPixelMode[NeoPixelMode["RGB_RGB"] = 3] = "RGB_RGB";
      NeoPixelMode[NeoPixelMode["DotStar"] = 4] = "DotStar";
  })(NeoPixelMode = pxsim.NeoPixelMode || (pxsim.NeoPixelMode = {}));
  var CommonNeoPixelState = /** @class */ (function () {
      function CommonNeoPixelState() {
          this.mode = NeoPixelMode.RGB; // GRB
          this.width = 1;
      }
      Object.defineProperty(CommonNeoPixelState.prototype, "length", {
          get: function () {
              return this.buffer ? (this.buffer.length / this.stride) | 0 : 0;
          },
          enumerable: false,
          configurable: true
      });
      Object.defineProperty(CommonNeoPixelState.prototype, "stride", {
          get: function () {
              return this.mode == NeoPixelMode.RGBW || this.mode == NeoPixelMode.DotStar ? 4 : 3;
          },
          enumerable: false,
          configurable: true
      });
      CommonNeoPixelState.prototype.pixelColor = function (pixel) {
          var offset = pixel * this.stride;
          // RBG
          switch (this.mode) {
              case NeoPixelMode.RGBW:
                  return [this.buffer[offset + 1], this.buffer[offset], this.buffer[offset + 2], this.buffer[offset + 3]];
              case NeoPixelMode.RGB_RGB:
                  return [this.buffer[offset], this.buffer[offset + 1], this.buffer[offset + 2]];
              case NeoPixelMode.DotStar:
                  return [this.buffer[offset + 3], this.buffer[offset + 2], this.buffer[offset + 1]];
              default:
                  return [this.buffer[offset + 1], this.buffer[offset + 0], this.buffer[offset + 2]];
          }
      };
      return CommonNeoPixelState;
  }());
  pxsim.CommonNeoPixelState = CommonNeoPixelState;
  function neopixelState(pinId) {
      return pxsim.board().neopixelState(pinId);
  }
  pxsim.neopixelState = neopixelState;
  function sendBufferAsm(buffer, pin) {
      var b = pxsim.board();
      if (!b)
          return;
      var p = b.edgeConnectorState.getPin(pin);
      if (!p)
          return;
      var lp = neopixelState(p.id);
      if (!lp)
          return;
      var mode = lp.mode;
      pxsim.light.sendBuffer(p, undefined, mode, buffer);
  }
  pxsim.sendBufferAsm = sendBufferAsm;
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var light;
  (function (light) {
      // Currently only modifies the builtin pixels
      function sendBuffer(pin, clk, mode, b) {
          var state = pxsim.neopixelState(pin.id);
          if (!state)
              return;
          state.mode = mode & 0xff;
          state.buffer = b.data;
          pxsim.runtime.queueDisplayUpdate();
      }
      light.sendBuffer = sendBuffer;
  })(light = pxsim.light || (pxsim.light = {}));
})(pxsim || (pxsim = {}));
(function (pxsim) {
  var visuals;
  (function (visuals) {
      var PIXEL_SPACING = visuals.PIN_DIST * 2.5; // 3
      var PIXEL_RADIUS = visuals.PIN_DIST;
      var CANVAS_WIDTH = 1.2 * visuals.PIN_DIST;
      var CANVAS_HEIGHT = 12 * visuals.PIN_DIST;
      var CANVAS_VIEW_PADDING = visuals.PIN_DIST * 4;
      var CANVAS_LEFT = 1.4 * visuals.PIN_DIST;
      var CANVAS_TOP = visuals.PIN_DIST;
      // For the instructions parts list
      function mkNeoPixelPart(xy) {
          if (xy === void 0) { xy = [0, 0]; }
          var NP_PART_XOFF = -13.5;
          var NP_PART_YOFF = -11;
          var NP_PART_WIDTH = 87.5;
          var NP_PART_HEIGHT = 190;
          var NEOPIXEL_PART_IMG = "<svg viewBox=\"-5 -1 53 112\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:bx=\"https://boxy-svg.com\">\n  <rect x=\"2.5\" width=\"38\" height=\"100\" style=\"fill: rgb(68, 68, 68);\"/>\n  <rect x=\"11.748\" y=\"3.2\" width=\"1.391\" height=\"2.553\" style=\"fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);\"/>\n  <rect x=\"20.75\" y=\"3.2\" width=\"1.391\" height=\"2.553\" style=\"fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);\"/>\n  <rect x=\"29.75\" y=\"3.2\" width=\"1.391\" height=\"2.553\" style=\"fill: none; stroke-linejoin: round; stroke-width: 3; stroke: rgb(165, 103, 52);\"/>\n  <g>\n    <rect x=\"9\" y=\"16.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"22.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"28.563\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"11.607\" y=\"14.833\" width=\"19.787\" height=\"18.697\" style=\"fill: rgb(0, 0, 0);\"/>\n    <ellipse style=\"fill: rgb(216, 216, 216);\" cx=\"21.5\" cy=\"24.181\" rx=\"7\" ry=\"7\"/>\n  </g>\n  <path d=\"M -7.25 -103.2 L -2.5 -100.003 L -12 -100.003 L -7.25 -103.2 Z\" style=\"fill: rgb(68, 68, 68);\" transform=\"matrix(-1, 0, 0, -1, 0, 0)\" bx:shape=\"triangle -12 -103.2 9.5 3.197 0.5 0 1@ad6f5cac\"/>\n  <path d=\"M -16.75 -103.197 L -12 -100 L -21.5 -100 L -16.75 -103.197 Z\" style=\"fill: rgb(68, 68, 68);\" transform=\"matrix(-1, 0, 0, -1, 0, 0)\" bx:shape=\"triangle -21.5 -103.197 9.5 3.197 0.5 0 1@07d73149\"/>\n  <path d=\"M -26.25 -103.2 L -21.5 -100.003 L -31 -100.003 L -26.25 -103.2 Z\" style=\"fill: rgb(68, 68, 68);\" transform=\"matrix(-1, 0, 0, -1, 0, 0)\" bx:shape=\"triangle -31 -103.2 9.5 3.197 0.5 0 1@54403e2d\"/>\n  <path d=\"M -35.75 -103.197 L -31 -100 L -40.5 -100 L -35.75 -103.197 Z\" style=\"fill: rgb(68, 68, 68);\" transform=\"matrix(-1, 0, 0, -1, 0, 0)\" bx:shape=\"triangle -40.5 -103.197 9.5 3.197 0.5 0 1@21c9b772\"/>\n  <g transform=\"matrix(1, 0, 0, 1, 0.000002, 29.999994)\">\n    <rect x=\"9\" y=\"16.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"22.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"28.563\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"11.607\" y=\"14.833\" width=\"19.787\" height=\"18.697\" style=\"fill: rgb(0, 0, 0);\"/>\n    <ellipse style=\"fill: rgb(216, 216, 216);\" cx=\"21.5\" cy=\"24.181\" rx=\"7\" ry=\"7\"/>\n  </g>\n  <g transform=\"matrix(1, 0, 0, 1, 0.000005, 59.999992)\">\n    <rect x=\"9\" y=\"16.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"22.562\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"9\" y=\"28.563\" width=\"25\" height=\"3.238\" style=\"fill: rgb(216, 216, 216);\"/>\n    <rect x=\"11.607\" y=\"14.833\" width=\"19.787\" height=\"18.697\" style=\"fill: rgb(0, 0, 0);\"/>\n    <ellipse style=\"fill: rgb(216, 216, 216);\" cx=\"21.5\" cy=\"24.181\" rx=\"7\" ry=\"7\"/>\n  </g>\n</svg>";
          var x = xy[0], y = xy[1];
          var l = x + NP_PART_XOFF;
          var t = y + NP_PART_YOFF;
          var w = NP_PART_WIDTH;
          var h = NP_PART_HEIGHT;
          var img = pxsim.svg.elt("image");
          pxsim.svg.hydrate(img, {
              class: "sim-neopixel-strip", x: l, y: t, width: w, height: h,
              href: pxsim.svg.toDataUri(NEOPIXEL_PART_IMG)
          });
          return { el: img, x: l, y: t, w: w, h: h };
      }
      visuals.mkNeoPixelPart = mkNeoPixelPart;
      var NeoPixel = /** @class */ (function () {
          function NeoPixel(xy, width) {
              if (xy === void 0) { xy = [0, 0]; }
              if (width === void 0) { width = 1; }
              var el = pxsim.svg.elt("rect");
              var r = PIXEL_RADIUS;
              var cx = xy[0], cy = xy[1];
              var y = cy - r;
              if (width <= 1)
                  pxsim.svg.hydrate(el, { x: "-50%", y: y, width: "100%", height: r * 2, class: "sim-neopixel" });
              else {
                  var x = cx - r;
                  pxsim.svg.hydrate(el, { x: x, y: y, width: r * 2, height: r * 2, class: "sim-neopixel" });
              }
              this.el = el;
              this.cy = cy;
          }
          NeoPixel.prototype.setRgb = function (rgb) {
              var hsl = visuals.rgbToHsl(rgb);
              var h = hsl[0], s = hsl[1], l = hsl[2];
              // at least 70% luminosity
              l = Math.max(l, 60);
              var fill = "hsl(" + h + ", " + s + "%, " + l + "%)";
              this.el.setAttribute("fill", fill);
          };
          return NeoPixel;
      }());
      visuals.NeoPixel = NeoPixel;
      var NeoPixelCanvas = /** @class */ (function () {
          function NeoPixelCanvas(pin, cols) {
              if (cols === void 0) { cols = 1; }
              this.cols = cols;
              this.pixels = [];
              var el = pxsim.svg.elt("svg");
              pxsim.svg.hydrate(el, {
                  "class": "sim-neopixel-canvas",
                  "x": "0px",
                  "y": "0px",
                  "width": CANVAS_WIDTH + "px",
                  "height": CANVAS_HEIGHT + "px",
              });
              this.canvas = el;
              this.background = pxsim.svg.child(el, "rect", { class: "sim-neopixel-background hidden" });
              this.updateViewBox(-CANVAS_WIDTH / 2, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          }
          NeoPixelCanvas.prototype.updateViewBox = function (x, y, w, h) {
              this.viewBox = [x, y, w, h];
              pxsim.svg.hydrate(this.canvas, { "viewBox": x + " " + y + " " + w + " " + h });
              pxsim.svg.hydrate(this.background, { "x": x, "y": y, "width": w, "height": h });
          };
          NeoPixelCanvas.prototype.update = function (colors) {
              if (!colors || colors.length <= 0)
                  return;
              if (this.pixels.length == 0 && this.cols > 1) {
                  // first time, so redo width of canvas
                  var rows = Math.ceil(colors.length / this.cols);
                  var rt = CANVAS_HEIGHT / rows;
                  var width = this.cols * rt;
                  this.canvas.setAttributeNS(null, "width", width + "px");
                  this.updateViewBox(0, 0, width, CANVAS_HEIGHT);
              }
              for (var i = 0; i < colors.length; i++) {
                  var pixel = this.pixels[i];
                  if (!pixel) {
                      var cxy = [0, CANVAS_VIEW_PADDING + i * PIXEL_SPACING];
                      if (this.cols > 1) {
                          var row = Math.floor(i / this.cols);
                          var col = i - row * this.cols;
                          cxy = [(col + 1) * PIXEL_SPACING, (row + 1) * PIXEL_SPACING];
                      }
                      pixel = this.pixels[i] = new NeoPixel(cxy, this.cols);
                      pxsim.svg.hydrate(pixel.el, { title: "offset: " + i });
                      this.canvas.appendChild(pixel.el);
                  }
                  pixel.setRgb(colors[i]);
              }
              //show the canvas if it's hidden
              pxsim.U.removeClass(this.background, "hidden");
              // resize
              var _a = [this.pixels[0], this.pixels[this.pixels.length - 1]], first = _a[0], last = _a[1];
              var yDiff = last.cy - first.cy;
              var newH = yDiff + CANVAS_VIEW_PADDING * 2;
              var _b = this.viewBox, oldX = _b[0], oldY = _b[1], oldW = _b[2], oldH = _b[3];
              if (newH > oldH) {
                  var scalar = newH / oldH;
                  var newW = oldW * scalar;
                  if (this.cols > 1) {
                      // different computation for matrix
                      var rows = Math.ceil(colors.length / this.cols);
                      newH = PIXEL_SPACING * (rows + 1);
                      newW = PIXEL_SPACING * (this.cols + 1);
                      this.updateViewBox(0, oldY, newW, newH);
                  }
                  else
                      this.updateViewBox(-newW / 2, oldY, newW, newH);
              }
          };
          NeoPixelCanvas.prototype.setLoc = function (xy) {
              var x = xy[0], y = xy[1];
              pxsim.svg.hydrate(this.canvas, { x: x, y: y });
          };
          return NeoPixelCanvas;
      }());
      visuals.NeoPixelCanvas = NeoPixelCanvas;
      ;
      var NeoPixelView = /** @class */ (function () {
          function NeoPixelView(parsePinString) {
              this.parsePinString = parsePinString;
              this.style = "\n            .sim-neopixel-canvas {\n            }\n            .sim-neopixel-canvas-parent:hover {\n                transform-origin: center;\n                transform: scale(4) translateY(-220px);\n                -moz-transform: scale(4) translateY(-220px);\n            }\n            .sim-neopixel-canvas .hidden {\n                visibility:hidden;\n            }\n            .sim-neopixel-background {\n                fill: rgba(255,255,255,0.9);\n            }\n            .sim-neopixel-strip {\n            }\n        ";
          }
          NeoPixelView.prototype.init = function (bus, state, svgEl, otherParams) {
              this.stripGroup = pxsim.svg.elt("g");
              this.element = this.stripGroup;
              this.pin = this.parsePinString(otherParams["dataPin"] || otherParams["pin"])
                  || this.parsePinString("pins.NEOPIXEL")
                  || this.parsePinString("pins.MOSI");
              this.lastLocation = [0, 0];
              this.state = state(this.pin);
              var part = mkNeoPixelPart();
              this.part = part;
              this.stripGroup.appendChild(part.el);
              this.overElement = null;
              this.makeCanvas();
          };
          NeoPixelView.prototype.makeCanvas = function () {
              var canvas = new NeoPixelCanvas(this.pin.id, this.state.width);
              if (this.overElement) {
                  this.overElement.removeChild(this.canvas.canvas);
                  this.overElement.appendChild(canvas.canvas);
              }
              else {
                  var canvasG = pxsim.svg.elt("g", { class: "sim-neopixel-canvas-parent" });
                  canvasG.appendChild(canvas.canvas);
                  this.overElement = canvasG;
              }
              this.canvas = canvas;
              this.updateStripLoc();
          };
          NeoPixelView.prototype.moveToCoord = function (xy) {
              var x = xy[0], y = xy[1];
              var loc = [x, y];
              this.lastLocation = loc;
              this.updateStripLoc();
          };
          NeoPixelView.prototype.updateStripLoc = function () {
              var _a = this.lastLocation, x = _a[0], y = _a[1];
              pxsim.U.assert(typeof x === "number" && typeof y === "number", "invalid x,y for NeoPixel strip");
              this.canvas.setLoc([x + CANVAS_LEFT, y + CANVAS_TOP]);
              pxsim.svg.hydrate(this.part.el, { transform: "translate(" + x + " " + y + ")" }); //TODO: update part's l,h, etc.
          };
          NeoPixelView.prototype.updateState = function () {
              if (this.state.width != this.canvas.cols) {
                  this.makeCanvas();
              }
              var colors = [];
              for (var i = 0; i < this.state.length; i++) {
                  colors.push(this.state.pixelColor(i));
              }
              this.canvas.update(colors);
          };
          NeoPixelView.prototype.updateTheme = function () { };
          return NeoPixelView;
      }());
      visuals.NeoPixelView = NeoPixelView;
  })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var KEY_UP = 2048;
var KEY_DOWN = 2049;
var INTERNAL_KEY_UP = 2050;
var INTERNAL_KEY_DOWN = 2051;
var SYSTEM_KEY_UP = 2052;
var SYSTEM_KEY_DOWN = 2053;
var KEY_REPEAT = 2054;
var SYSTEM_KEY_REPEAT = 2055;
