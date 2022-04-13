# :zap: Javascript Dropdown Navigation

* A dropdown navigation menu that follows the mouse along each list item in the top. The size of the background of the dropdown adjusts to the size of the content menu. Tutorial from Wes Bos Javascript30 Youtube series.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/javascript-dropdown-navigation?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/javascript-dropdown-navigation?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/javascript-dropdown-navigation?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/javascript-dropdown-navigation?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Javascript Dropdown Navigation](#zap-javascript-dropdown-navigation)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses direct descendants, mouse events and event listeners. An ES6 function () uses this from parent function.

## :camera: Screenshots

![Example screenshot](./nav.png).

## :signal_strength: Technologies

* [Javascript ECMA-262 ECMAScript 2021](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open `index.html` in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* part of function `handleEnter()` to get dropdown and nav coords and use them in const coords

```javascript
const dropdown = this.querySelector('.dropdown'); //different dropdown under each list item
const dropdownCoords = dropdown.getBoundingClientRect(); //gets dimensions of dropdown rect
const navCoords = nav.getBoundingClientRect(); //in case header added etc that would push the whole menu position down

const coords = {
  height: dropdownCoords.height,
  width: dropdownCoords.width,
  top: dropdownCoords.top - navCoords.top,
  left: dropdownCoords.left - navCoords.left
};
```

## :cool: Features

* Uses the [`element.getBoundingClientRect()`](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp) method that returns the size of an element and its position relative to the viewport; properties left, top, right, bottom, x, y, width, height.

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Nothing

## :clap: Inspiration

* [Wes Bos Youtube Javascript30 tutorial 26](https://www.youtube.com/watch?v=GvuWJSXYQDU&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=26)

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
