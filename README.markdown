Modularity is a lightweight object-oriented JavaScript framework built on top of jQuery 
that allows to compose functionally rich web pages 
in an object-oriented and testable manner out of cleanly separated and reusable components. 


Some of modularities design principles are

<table>
  <tr>
    <th>modularity</th>
    <td>Web pages are broken up into functionally distinct sections. Each section is represented
      by a JavaScript object (module) that encapsulates the DOM nodes, event handlers, 
      helper methods, and data related to that section. 
      Modules provide high-level APIs and interact with each other through events.
    </td>
  </tr>
  <tr>
    <th>testability</th>
    <td>
      Modularity helps break down complexity and test as many aspects of a JavaScript code base 
      as possible.
    </td>
  </tr>
  <tr>
    <th>interoperability</th>
    <td>
      The JavaScript based on Modularity can be combined with any other JavaScript libraries and
      backend technologies like Ruby on Rails, Node.js, PHP, Java, .NET etc.
    </td>
  </tr>
  <tr>
    <th>general-purpose</th>
    <td>
      Modularity doesn't aim to facilitate a particular type of functionality through magic.
      It provides a general-purpose foundation for solid hand-written JavaScript code.
  </tr>
  <tr>
    <th>pragmatism</th>
    <td>
      Modularity combines useful patterns from Google's Closure Library 
      with the popular jQuery ecosystem and Google's sophisticated Closure compiler. 
    </td>
  </tr>
</table>


Widgets to encapsulate sections of pages.
A web page consists of different sections. The JavaScript for each section is encapsulated in 

Widgets communicate through events
- local events
- global events
