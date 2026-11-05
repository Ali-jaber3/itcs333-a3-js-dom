// ITCS333 A3 starter — implement the to-do app per README.
// You may wrap everything in a DOMContentLoaded handler or an IIFE.
// Requirements: add / toggle-complete / delete / filter / counter,
// using event delegation on #todo-list.

// TODO: your code here


(function () {
  // the select elements
    // we use const becuse we not use agane 
    const form = document.getElementById("todo-form");   // find any id have "todo-from" and save in from 
    const input = document.getElementById("todo-input"); //find any id have "todo-input" and save in input 
    const error = document.getElementById("error-msg"); //find any id have "error-msgm" and save in error 
    const list = document.getElementById("todo-list");  // "todo-list -->list "
    const counter = document.getElementById("counter"); // counter--> counter


    const filterAll = document.getElementById("filter-all");        // filter-all --> filterAll
    const filterActive = document.getElementById("filter-active");  // filter-active --> filterActive
    const filterDone = document.getElementById("filter-done");      // filter-done --> filterDone

    let currentFilter = "all"; // we use let becase NO. will cange if use botton
    






}